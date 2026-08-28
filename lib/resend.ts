import { Resend } from "resend";

// Lazy initialization: RESEND_API_KEY is only required when a message is
// actually sent, so builds and page-data collection must not fail when the
// variable is absent (it is set in the deployment environment).
let client: Resend | null = null;

export function getResendClient(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    client = new Resend(apiKey);
  }
  return client;
}
