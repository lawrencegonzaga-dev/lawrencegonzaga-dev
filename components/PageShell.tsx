import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RevealObserver from "@/components/RevealObserver";

// Shared visual shell so every route gets the same background, navigation,
// width constraints, contact footer, and reveal behavior.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main id="main" className="subpage-main">
        {children}
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
