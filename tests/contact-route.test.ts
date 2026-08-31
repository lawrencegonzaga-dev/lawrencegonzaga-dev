import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendEmail } = vi.hoisted(() => ({
  sendEmail: vi.fn(),
}));

vi.mock("@/data/contact", () => ({
  contact: { email: "owner@example.com" },
}));

vi.mock("@/lib/contact-validation", async () => import("../lib/contact-validation"));

vi.mock("@/lib/resend", () => ({
  getResendClient: () => ({
    emails: { send: sendEmail },
  }),
}));

import { POST } from "../app/api/contact/route";

function contactRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    sendEmail.mockReset();
    sendEmail.mockResolvedValue({ data: { id: "email-id" }, error: null });
  });

  it("rejects an invalid visitor email before sending", async () => {
    const response = await POST(
      contactRequest({
        name: "Ada Lovelace",
        email: "john@",
        message: "I would like to discuss a project.",
      }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      success: false,
      errors: { email: "Please enter a valid email address." },
    });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("uses the normalized visitor email as Reply-To", async () => {
    const response = await POST(
      contactRequest({
        name: "Ada Lovelace",
        email: "  ada@example.com  ",
        message: "I would like to discuss a project.",
      }),
    );

    expect(response.status).toBe(200);
    expect(sendEmail).toHaveBeenCalledOnce();
    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({ replyTo: "ada@example.com" }),
    );
  });
});
