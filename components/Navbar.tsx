import Link from "next/link";

export default function Navbar(){
  return (
    <nav>
      <div className="wrap">
        <Link href="/" className="nav-logo">lawrence.gonzaga</Link>
        <div className="nav-links">
          <Link href="#about">about</Link>
          <Link href="#journey">journey</Link>
          <Link href="#skills">skills</Link>
          <Link href="#projects">projects</Link>
          <Link href="#work">process</Link>
          <Link href="#contact">contact</Link>
        </div>
      </div>
    </nav>
  )
}