import { ArrowRight, Download } from "lucide-react";
import { profileData } from "../data/profile";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export default function Hero() {
  // Initialize scroll trigger for animations
  useScrollTrigger();
  
  return (
    <section
      id="intro"
      className="hero-section section-padding"
    >
      <div className="container-custom">
        <div className="hero-grid">
          {/* Hero Content */}
          <div className="hero-content">
            <div className="hero-text-container scroll-trigger">
              {/* @TODO(): 소개 - 헤드라인 */}
              <h1 className="hero-title">
                더 적은 시간으로<br />
                <span className="sparkle-text">더 나은 선택</span>을<br />
                할 수 있는 제품을.
              </h1>
              <p className="hero-subtitle">
                {profileData.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons scroll-trigger stagger-1">
              {profileData.ctas.map((cta, index) => (
                <a
                  key={index}
                  href={cta.href}
                  className={`btn ${index === 0 ? "btn-primary" : "btn-ghost"}`}
                >
                  {cta.label}
                  {index === 0 ? (
                    <ArrowRight className="btn-icon" />
                  ) : (
                    <Download className="btn-icon" />
                  )}
                </a>
              ))}
            </div>

            {/* Tags */}
            <div className="hero-tags scroll-trigger stagger-2">
              {profileData.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag glass"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Media */}
          <div className="hero-media scroll-trigger stagger-3">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200"
                alt="Professional workspace with modern setup"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
