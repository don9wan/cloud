import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactData } from "@/data/contact";

export default function Footer() {
  const socialIcons = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
  };

  const quickLinks = [
    { href: "#intro", label: "소개" },
    { href: "#projects", label: "프로젝트" },
    { href: "#articles", label: "아티클" },
    { href: "#contact", label: "연락" },
  ];

  const resources = [
    { href: "/resume.pdf", label: "이력서" },
    { href: "#projects", label: "포트폴리오" },
    { href: "#", label: "추천서" },
    { href: "#articles", label: "블로그" },
  ];

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-gradient font-display mb-4 block">
              김도현
            </a>
            <p className="text-dark-muted dark:text-dark-muted mb-6 max-w-md">
              혁신적인 제품으로 사용자의 삶을 더 나은 방향으로 변화시키는 프로덕트 매니저입니다.
            </p>
            <div className="flex space-x-4">
              {Object.entries(contactData.social).map(([platform, url]) => {
                const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                if (!IconComponent) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-muted dark:text-dark-muted hover:text-white dark:hover:text-white transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
              <a
                href={`mailto:${contactData.email}`}
                className="text-dark-muted dark:text-dark-muted hover:text-white dark:hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white dark:text-white font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark-muted dark:text-dark-muted hover:text-white dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white dark:text-white font-semibold mb-4">리소스</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <a
                    href={resource.href}
                    className="text-dark-muted dark:text-dark-muted hover:text-white dark:hover:text-white transition-colors duration-200"
                    {...(resource.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-muted dark:text-dark-muted text-sm">
            © 2024 김도현. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-dark-muted dark:text-dark-muted hover:text-white dark:hover:text-white text-sm transition-colors duration-200"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-dark-muted dark:text-dark-muted hover:text-white dark:hover:text-white text-sm transition-colors duration-200"
            >
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
