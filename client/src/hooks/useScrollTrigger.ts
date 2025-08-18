import { useEffect } from "react";

export function useScrollTrigger() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Observe all scroll trigger elements
    const scrollTriggers = document.querySelectorAll(".scroll-trigger");
    scrollTriggers.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      scrollTriggers.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(11, 18, 32, 0.95)";
        navbar.style.backdropFilter = "blur(20px)";
      } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
        navbar.style.backdropFilter = "blur(16px)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll spy for navigation
    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-link");
      
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-white", "dark:text-white");
        link.classList.add("text-dark-muted", "dark:text-dark-muted");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.remove("text-dark-muted", "dark:text-dark-muted");
          link.classList.add("text-white", "dark:text-white");
        }
      });
    };

    window.addEventListener("scroll", updateActiveNavLink);
    return () => window.removeEventListener("scroll", updateActiveNavLink);
  }, []);
}
