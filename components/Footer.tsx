import Link from "next/link";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { contact } from "@/data/contact";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2>
          Let&apos;s build <span className="accent">something.</span>
        </h2>
        <p className="msg">{contact.intro}</p>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`} className="btn btn-primary">
            <Mail size={15} aria-hidden="true" />
            {contact.buttonText.email}
          </a>
          <a
            href={contact.github}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={15} aria-hidden="true" /> {contact.buttonText.github}
          </a>
          <a
            href={contact.linkedin}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={15} aria-hidden="true" /> {contact.buttonText.linkedin}
          </a>
          <Link href="/contact" className="btn btn-ghost">
            <Send size={15} aria-hidden="true" /> {contact.buttonText.form}
          </Link>
          {contact.cv && (
            <a href={contact.cv} className="btn btn-ghost" download>
              <Download size={15} aria-hidden="true" />
              {contact.buttonText.cv}
            </a>
          )}
        </div>
        <div className="foot-bottom">
          <span>{contact.copyright}</span>
          <span>{contact.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
