import { useEffect, useState } from "react";
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
  const [isDesktop, setIsDesktop] = useState(false);
  
  useScrollTrigger();

  useEffect(() => {
    // 화면 크기 체크 함수
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // 초기 체크
    checkScreenSize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', checkScreenSize);

    // Initialize GSAP ScrollTrigger
    if (typeof window !== 'undefined' && (window as any).gsap) {
      (window as any).gsap.registerPlugin((window as any).ScrollTrigger);
    }

    // 클린업
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
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
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
