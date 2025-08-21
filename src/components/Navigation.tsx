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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 64; // 4rem = 64px
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

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
              <a 
                key={item.href} 
                href={item.href} 
                className="nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA and Theme Toggle */}
          <div className="navbar-actions">
            {/* 테마 토글 버튼 임시 비활성화 - 다크모드 고정 */}
            {/* 
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="테마 전환"
              style={{ display: 'none' }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            */}

            <div className="hidden lg:flex navbar-actions">
              <button
                onClick={() => alert('이력서 준비 중입니다.')}
                className="btn btn-ghost"
              >
                <Download className="w-4 h-4" style={{ marginRight: '0.5rem' }} />
                이력서
              </button>
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
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
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => alert('이력서 준비 중입니다.')}
                className="btn btn-ghost"
              >
                <Download className="w-4 h-4" style={{ marginRight: '0.5rem' }} />
                이력서 다운로드
              </button>
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
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
