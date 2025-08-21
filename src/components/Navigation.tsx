import { useState } from "react";
import { Moon, Sun, Menu, Download, Mail } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

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
    { href: "#education", label: "교육 및 실적" },
    { href: "#contact", label: "연락" },
  ];

  return (
    <nav id="navbar" className="navbar">
      <div className="container-custom">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="#">
              don9wan
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA and Theme Toggle */}
          <div className="navbar-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="테마 전환"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <div className="hidden lg:flex navbar-actions">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Download className="w-4 h-4" style={{ marginRight: '0.5rem' }} />
                이력서
              </a>
              <a href="#contact" className="btn btn-primary">
                <Mail className="w-4 h-4" style={{ marginRight: '0.5rem' }} />
                연락하기
              </a>
            </div>

            <button
              className="navbar-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-list">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Download className="w-4 h-4" style={{ marginRight: '0.5rem' }} />
                이력서 다운로드
              </a>
              <a href="#contact" className="btn btn-primary">
                <Mail className="w-4 h-4" style={{ marginRight: '0.5rem' }} />
                연락하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
