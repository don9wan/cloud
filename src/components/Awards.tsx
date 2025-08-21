import { Trophy, Award, Star, Rocket } from "lucide-react";
import { awardsData } from "../data/awards";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import "../styles/awards.css";

const iconMap = {
  trophy: Trophy,
  award: Award,
  star: Star,
  rocket: Rocket,
  briefcase: Award,
};

// Map colors to CSS classes  
const colorClassMap: Record<string, string> = {
  'primary': 'institution',
  'accent-cyan': 'institution',
  'accent-amber': 'government',
};

export default function Awards() {
  // Initialize scroll trigger for animations
  useScrollTrigger();
  
  return (
    <section id="awards" className="section-padding awards-section">
      <div className="container-custom">
        <div className="scroll-trigger">
          <h2 className="awards-title">
            수상실적
          </h2>
          <p className="awards-subtitle">
            창의적 아이디어와 실행력으로 다양한 분야에서 인정받았습니다
          </p>
        </div>

        <div className="awards-grid">
          {awardsData.map((award, index) => {
            const IconComponent = iconMap[award.icon as keyof typeof iconMap];
            const iconClass = colorClassMap[award.color] || 'government';
            
            return (
              <article
                key={award.title}
                className={`award-card glass scroll-trigger stagger-${(index % 3) + 1}`}
              >
                <div className="award-badge">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="award-content">
                  <div className="award-meta">
                    <span className="award-type">
                      {award.type}
                    </span>
                    <span className="award-period">
                      {award.period}
                    </span>
                  </div>
                  <div className={`award-icon-container ${iconClass}`}>
                    <IconComponent className={`award-icon ${iconClass}`} />
                  </div>
                  <h3 className="award-title">
                    {award.title}
                  </h3>
                  <div className="award-organization">
                    {award.organization}
                  </div>
                  <p className="award-summary">
                    {award.summary}
                  </p>
                  <div className="award-description">
                    {award.description}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}