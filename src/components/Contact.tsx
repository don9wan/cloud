import { Mail, Calendar, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactData } from "@/data/contact";

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-panel dark:bg-dark-panel">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-trigger">
            <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-white mb-8 font-display">
              함께 혁신적인 제품을<br />
              <span className="text-gradient">만들어보세요</span>
            </h2>
            <p className="text-xl text-dark-muted dark:text-dark-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              {contactData.message}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center scroll-trigger stagger-1">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary-700 transition-all duration-300 hover:scale-105 font-semibold text-lg"
                asChild
              >
                <a href={`mailto:${contactData.email}`}>
                  <Mail className="mr-3 w-5 h-5" />
                  이메일 보내기
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="glass hover:bg-white/10 transition-all duration-300 hover:scale-105 font-semibold text-lg"
                asChild
              >
                <a href={contactData.calendar} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-3 w-5 h-5" />
                  미팅 예약하기
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-12 scroll-trigger stagger-2">
              {Object.entries(contactData.social).map(([platform, url]) => {
                const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
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
