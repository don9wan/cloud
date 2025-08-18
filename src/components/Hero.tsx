import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center pt-16 section-padding"
    >
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Content */}
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-6 scroll-trigger">
              <h1 className="hero-text font-display font-black tracking-tight text-white dark:text-white">
                {profileData.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index === 1 && <span className="text-gradient"> 창조하는</span>}
                    {index < profileData.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-xl lg:text-2xl text-dark-muted dark:text-dark-muted leading-relaxed max-w-2xl">
                {profileData.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 scroll-trigger stagger-1">
              {profileData.ctas.map((cta, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={index === 0 ? "default" : "ghost"}
                  className={`
                    inline-flex items-center justify-center px-8 py-4 rounded-full 
                    transition-all duration-300 hover:scale-105 font-semibold text-lg
                    ${index === 0 
                      ? "bg-primary text-white hover:bg-primary-700" 
                      : "glass hover:bg-white/10"
                    }
                  `}
                  asChild
                >
                  <a href={cta.href}>
                    {cta.label}
                    {index === 0 ? (
                      <ArrowRight className="ml-2 w-5 h-5" />
                    ) : (
                      <Download className="ml-2 w-5 h-5" />
                    )}
                  </a>
                </Button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 scroll-trigger stagger-2">
              {profileData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full glass text-sm font-medium shimmer-highlight"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Media */}
          <div className="lg:justify-self-end scroll-trigger stagger-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200"
                alt="Professional workspace with modern setup"
                className="rounded-3xl shadow-2xl w-full h-auto max-w-lg mx-auto shimmer-highlight"
              />


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
