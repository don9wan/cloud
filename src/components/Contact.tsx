import { Mail, Calendar, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { contactData } from "../data/contact";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Contact() {
  // Initialize scroll trigger for animations
  useScrollTrigger();
  
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container-custom">
        <div className="contact-content">
          <div className="scroll-trigger">
            <h2 className="contact-title">
              함께 혁신적인 제품을<br />
              <span className="text-gradient">만들어보세요</span>
            </h2>
            <p className="contact-subtitle">
              {contactData.message}
            </p>

            <div className="contact-buttons scroll-trigger stagger-1">
              <a
                href={`mailto:${contactData.email}`}
                className="btn btn-primary"
              >
                <Mail className="w-5 h-5" style={{ marginRight: '0.75rem' }} />
                이메일 보내기
              </a>
              <a
                href={contactData.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost glass"
              >
                <Calendar className="w-5 h-5" style={{ marginRight: '0.75rem' }} />
                미팅 예약하기
              </a>
            </div>            {/* Social Links */}
            <div className="social-links scroll-trigger stagger-2">
              {Object.entries(contactData.social).map(([platform, url]) => {
                const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link glass"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
