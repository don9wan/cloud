import { useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import CoreCompetencies from "../components/CoreCompetencies";
import TechStack from "../components/TechStack/TechStack";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import Education from "../components/Education/Education";
import Opening from "../components/Opening/Opening";

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
        <Opening />
        <Hero />
        <SearchBar />
        <CoreCompetencies />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
