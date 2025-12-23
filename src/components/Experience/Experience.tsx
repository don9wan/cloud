import { Lightbulb, CodeXml, ShipWheel, BriefcaseBusiness } from "lucide-react";
import { experienceData } from "../../data/experience";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const iconMap = {
  lightBulb: Lightbulb,
  codeXml: CodeXml,
  shipWheel: ShipWheel,
  briefcaseBusiness: BriefcaseBusiness,
};

// Map colors to CSS classes
const colorClassMap: Record<string, string> = {
  'blue-500': 'startup',
  'green-500': 'corporate',
  'yellow-500': 'product',
};

export default function Experience() {
  // Initialize scroll trigger for animations
  useScrollTrigger();
  
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container-custom">
        <div className="scroll-trigger">
          <h2 className="experience-title">
            걸어온 길
          </h2>
          <p className="experience-subtitle">
            다양한 스타트업과 기업에서의 경험을 통해 성장해왔습니다
          </p>
        </div>

        <div className="timeline-container scroll-trigger">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Timeline Items */}
          <div className="timeline-items">
            {experienceData.map((experience, index) => {
              const IconComponent = iconMap[experience.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              const iconClass = colorClassMap[experience.color] || 'startup';
              
              return (
                <div key={experience.company} className={`timeline-item ${isEven ? 'even' : 'odd'} scroll-trigger stagger-${(index % 3) + 1}`}>
                  <div className={`timeline-icon ${iconClass}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`timeline-content-${isEven ? 'left' : 'right'}`}>
                    <div className="timeline-card">
                      <div className="experience-period">
                        {experience.period}
                      </div>
                      <h3 className="experience-role">
                        {experience.role}
                      </h3>
                      <div className="experience-company">
                        {experience.company} · {experience.type}
                      </div>
                      <p className="experience-summary">
                        {experience.summary}
                      </p>
                      <ul className="experience-impacts">
                        {experience.impacts.map((impact) => (
                          <li key={impact}>{impact}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
