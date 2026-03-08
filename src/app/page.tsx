import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import MoneyRain from "@/components/MoneyRain";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MoneyRain/>
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