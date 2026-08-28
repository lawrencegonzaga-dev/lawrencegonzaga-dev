import { describe, expect, it } from "vitest";
import {
  escapeHtml,
  normalizeContactInput,
  validateContactInput,
} from "../lib/contact-validation";

describe("normalizeContactInput", () => {
  it("trims string fields and coerces non-strings to empty strings", () => {
    const input = normalizeContactInput({
      name: "  Ada  ",
      email: " ada@example.com ",
      message: " hello there ",
      extra: 42,
    });
    expect(input).toEqual({
      name: "Ada",
      email: "ada@example.com",
      message: "hello there",
    });
  });

  it("returns empty strings for missing or non-string fields", () => {
    expect(normalizeContactInput(null)).toEqual({
      name: "",
      email: "",
      message: "",
    });
    expect(normalizeContactInput({ name: 5 })).toEqual({
      name: "",
      email: "",
      message: "",
    });
  });
});

describe("validateContactInput", () => {
  const valid = {
    name: "Ada Lovelace",
    email: "ada@example.com",
    message: "I would like to discuss a project with you.",
  };

  it("accepts a valid submission", () => {
    expect(validateContactInput(valid)).toEqual({});
  });

  it("rejects a name that is too short", () => {
    expect(validateContactInput({ ...valid, name: "A" }).name).toBeDefined();
    expect(validateContactInput({ ...valid, name: "" }).name).toBeDefined();
  });

  it("rejects invalid emails", () => {
    expect(validateContactInput({ ...valid, email: "not-an-email" }).email).toBeDefined();
    expect(validateContactInput({ ...valid, email: "a@b" }).email).toBeDefined();
  });

  it("rejects messages shorter than the minimum", () => {
    expect(validateContactInput({ ...valid, message: "hi" }).message).toBeDefined();
  });

  it("rejects values over the length limits", () => {
    const longName = "x".repeat(101);
    const longMessage = "x".repeat(5001);
    const errors = validateContactInput({
      name: longName,
      email: valid.email,
      message: longMessage,
    });
    expect(errors.name).toBeDefined();
    expect(errors.message).toBeDefined();
  });
});

describe("escapeHtml", () => {
  it("escapes HTML-significant characters", () => {
    expect(escapeHtml('<script>alert("x")</script>')).toBe(
      "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;",
    );
  });

  it("escapes ampersands and single quotes", () => {
    expect(escapeHtml("Tom & Jerry's")).toBe("Tom &amp; Jerry&#39;s");
  });

  it("leaves plain text unchanged", () => {
    expect(escapeHtml("plain text 123")).toBe("plain text 123");
  });
});
