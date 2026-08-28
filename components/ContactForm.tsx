"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import {
  EMAIL_MAX,
  MESSAGE_MAX,
  NAME_MAX,
  normalizeContactInput,
  validateContactInput,
  type FieldErrors,
} from "@/lib/contact-validation";

type Status = "idle" | "success" | "error";

const FIELD_ORDER = ["name", "email", "message"] as const;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const input = normalizeContactInput(Object.fromEntries(new FormData(form)));

    const errors = validateContactInput(input);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      const firstInvalid = FIELD_ORDER.find((field) => errors[field]);
      if (firstInvalid) {
        form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      }
      return;
    }

    setSubmitting(true);
    setStatus("idle");

    try {
      // `company` is a honeypot: hidden from humans, filled by bots.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, company: "" }),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  const errorProps = (field: keyof FieldErrors) => ({
    "aria-invalid": fieldErrors[field] ? true : undefined,
    "aria-describedby": fieldErrors[field] ? `${field}-error` : undefined,
  });

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label className="field-label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={NAME_MAX}
          placeholder="Your name"
          className="input"
          {...errorProps("name")}
        />
        {fieldErrors.name && (
          <p id="name-error" className="form-error">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label className="field-label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={EMAIL_MAX}
          placeholder="you@example.com"
          className="input"
          {...errorProps("email")}
        />
        {fieldErrors.email && (
          <p id="email-error" className="form-error">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label className="field-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={MESSAGE_MAX}
          placeholder="What would you like to build?"
          className="input"
          {...errorProps("message")}
        />
        {fieldErrors.message && (
          <p id="message-error" className="form-error">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Honeypot field — hidden from users and assistive tech. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button type="submit" disabled={submitting} className="btn btn-primary btn-submit">
        {submitting ? "Sending…" : "Send Message"}
        <Send size={14} aria-hidden="true" />
      </button>

      <output aria-live="polite" className="form-status">
        {status === "success" && (
          <span className="ok">
            Message sent — I&apos;ll get back to you soon. Thanks!
          </span>
        )}
        {status === "error" && (
          <span className="err">
            The message could not be sent right now. Please try again, or email me
            directly.
          </span>
        )}
      </output>
    </form>
  );
}
