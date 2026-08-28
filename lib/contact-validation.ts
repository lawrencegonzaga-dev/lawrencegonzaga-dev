// Shared contact-form rules: the client uses these for inline feedback and
// the API route re-validates authoritatively — never trust the client.

export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const NAME_MIN = 2;
export const NAME_MAX = 100;
export const EMAIL_MAX = 254;
export const MESSAGE_MIN = 10;
export const MESSAGE_MAX = 5000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Coerce unknown JSON body fields into trimmed strings.
export function normalizeContactInput(raw: unknown): ContactInput {
  const record = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  return {
    name: typeof record.name === "string" ? record.name.trim() : "",
    email: typeof record.email === "string" ? record.email.trim() : "",
    message: typeof record.message === "string" ? record.message.trim() : "",
  };
}

export function validateContactInput(input: ContactInput): FieldErrors {
  const errors: FieldErrors = {};

  if (input.name.length < NAME_MIN) {
    errors.name = `Please enter your name (at least ${NAME_MIN} characters).`;
  } else if (input.name.length > NAME_MAX) {
    errors.name = `Name must be ${NAME_MAX} characters or fewer.`;
  }

  if (input.email.length === 0) {
    errors.email = "Please enter your email address.";
  } else if (input.email.length > EMAIL_MAX || !EMAIL_PATTERN.test(input.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (input.message.length < MESSAGE_MIN) {
    errors.message = `Message must be at least ${MESSAGE_MIN} characters.`;
  } else if (input.message.length > MESSAGE_MAX) {
    errors.message = `Message must be ${MESSAGE_MAX} characters or fewer.`;
  }

  return errors;
}

// Escape user-controlled text before embedding it in the HTML email body.
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
