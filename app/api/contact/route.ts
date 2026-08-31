import { contact } from "@/data/contact";
import {
  escapeHtml,
  normalizeContactInput,
  validateContactInput,
} from "@/lib/contact-validation";
import { getResendClient } from "@/lib/resend";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: the hidden "company" field is never filled by humans.
  // Bots that fill it get a success response and the message is discarded.
  const honeypot =
    body && typeof body === "object" && "company" in body
      ? (body as Record<string, unknown>).company
      : null;
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return Response.json({ success: true });
  }

  const input = normalizeContactInput(body);
  const errors = validateContactInput(input);
  if (Object.keys(errors).length > 0) {
    return Response.json(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        errors,
      },
      { status: 400 },
    );
  }

  // Escape user-controlled values before embedding them in the HTML body.
  const safeName = escapeHtml(input.name);
  const safeEmail = escapeHtml(input.email);
  const safeMessage = escapeHtml(input.message).replace(/\n/g, "<br />");

  try {
    await getResendClient().emails.send({
      // Override with CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL env vars when
      // the Resend domain is verified.
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? contact.email,
      replyTo: input.email,
      subject: `Portfolio message from ${input.name}`,
      text: `${input.name} <${input.email}> wrote:\n\n${input.message}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });
  } catch (error) {
    // Log details server-side only; never expose Resend errors to clients.
    console.error("Contact email failed:", error);
    return Response.json(
      {
        success: false,
        message:
          "The message could not be sent right now. Please try again later or email me directly.",
      },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}
