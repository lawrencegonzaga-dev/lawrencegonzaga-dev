import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkProcess from "@/components/WorkProcess";
import Learning from "@/components/Learning";
import Outside from "@/components/Outside";
import Footer from "@/components/Footer";

export default function Home(){
  return (
    <>
      <Background/>
      <Navbar/>
      <Hero/>
      <About/>
      <Journey/>
      <Skills/>
      <Projects/>
      <WorkProcess/>
      <Learning/>
      <Outside/>
      <Footer/>
    </>
  )
}