import type { Metadata } from "next";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageShell from "@/components/PageShell";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | Lawrence Gonzaga",
  description: contact.intro,
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="contact-page">
        <p className="eyebrow">Contact</p>
        <h1 className="contact-title">{contact.cta}</h1>
        <div className="contact-grid">
          <aside className="contact-info" data-reveal>
            <p className="contact-intro">{contact.intro}</p>

            <a className="contact-row" href={`mailto:${contact.email}`}>
              <Mail size={17} aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
            <a
              className="contact-row"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} aria-hidden="true" />
              <span>github.com/lawrencegonzaga-dev</span>
              <ArrowUpRight size={14} aria-hidden="true" className="row-arrow" />
            </a>
            <a
              className="contact-row"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} aria-hidden="true" />
              <span>linkedin.com/in/lawrence-gonzaga</span>
              <ArrowUpRight size={14} aria-hidden="true" className="row-arrow" />
            </a>
            {contact.cv && (
              <a className="contact-row" href={contact.cv} download>
                <Download size={17} aria-hidden="true" />
                <span>{contact.buttonText.cv}</span>
              </a>
            )}
          </aside>

          <div className="contact-form-card" data-reveal>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
