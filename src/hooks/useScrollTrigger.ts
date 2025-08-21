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
          
          // Special handling for timeline container
          if (entry.target.classList.contains("timeline-container")) {
            const timelineLine = entry.target.querySelector(".timeline-line");
            if (timelineLine) {
              // Add animate class after a short delay for better visual effect
              setTimeout(() => {
                timelineLine.classList.add("animate");
              }, 200);
            }
          }
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
      if (window.scrollY > 80) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
        navbar.style.backdropFilter = "blur(20px)";
      } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
        navbar.style.backdropFilter = "blur(20px)";
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
