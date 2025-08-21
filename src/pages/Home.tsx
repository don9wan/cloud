import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CoreCompetencies from "@/components/CoreCompetencies";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import Education from "../components/Education";
import Awards from "../components/Awards";

export default function Home() {
  useScrollTrigger();

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    if (typeof window !== 'undefined' && (window as any).gsap) {
      (window as any).gsap.registerPlugin((window as any).ScrollTrigger);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <Hero />
        <SearchBar />
        <CoreCompetencies />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
