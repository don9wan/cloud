import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, Download, Mail } from "lucide-react";
import { useTheme } from "@/hooks/useTheme.tsx";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { href: "#intro", label: "소개" },
    { href: "#skills", label: "역량" },
    { href: "#stack", label: "스택" },
    { href: "#experience", label: "경력" },
    { href: "#projects", label: "프로젝트" },
    { href: "#articles", label: "아티클" },
    { href: "#contact", label: "연락" },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gradient font-display">
              김도현
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-dark-muted dark:text-dark-muted hover:text-white dark:hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="glass hover:bg-white/10 transition-colors duration-200"
              aria-label="테마 전환"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="glass hover:bg-white/10 transition-colors duration-200"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  이력서
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary-700 transition-all duration-200"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  연락하기
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-white/5">
            <div className="px-2 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-dark-text dark:text-dark-text hover:text-white dark:hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start glass hover:bg-white/10"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    이력서 다운로드
                  </a>
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary-700"
                  asChild
                >
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    연락하기
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
