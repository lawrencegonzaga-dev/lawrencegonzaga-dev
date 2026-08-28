import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import WorkProcess from "@/components/WorkProcess";
import Outside from "@/components/Outside";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

// Recruiter flow: what was built → with what → proof of work → who → contact.
export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <About />
        <WorkProcess />
        <Outside />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
