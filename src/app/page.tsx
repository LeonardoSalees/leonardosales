import CaseStudy from "@/components-transiction/CaseStudy";
import CTA from "@/components-transiction/CTA";
import Hero from "@/components-transiction/Hero";
import Offer from "@/components-transiction/Offer";
import Problem from "@/components-transiction/Problem";
import Solution from "@/components-transiction/Solution";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col">
        <Hero />
        <Problem />
        <Solution />
        <CaseStudy />
        <Offer />
        <CTA />
      </main>
    </div>
  );
}
