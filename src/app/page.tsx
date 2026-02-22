import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-cyan/30">
      <main className="flex flex-col">
        <Hero />
        <Marquee />
        <About />
        <Projects/>
        <Formation />
        <Marquee />
        <Contact />
      </main>
    </div>
  );
}