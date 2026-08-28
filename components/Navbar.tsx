import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/#projects", label: "projects" },
  { href: "/#skills", label: "skills" },
  { href: "/#experience", label: "experience" },
  { href: "/#about", label: "about" },
  { href: "/#contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <div className="wrap">
        <Link href="/" className="nav-logo">
          lawrence.gonzaga
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
