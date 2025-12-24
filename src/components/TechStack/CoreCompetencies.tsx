import { BriefcaseBusiness, CodeXml, MonitorSmartphone, MessagesSquare } from "lucide-react";
import { skillsData } from "../../data/skills";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const iconMap = {
  "briefcase-business": BriefcaseBusiness,
  "code-xml": CodeXml,
  "monitor-smart-phone": MonitorSmartphone,
  "messages-square": MessagesSquare,
};

// Map colors to CSS classes
const colorClassMap: Record<string, string> = {
  'blue-500': 'strategy',
  'green-500': 'analytics',
  'yellow-500': 'collaboration',
  'red-500': 'growth',
};

export default function CoreCompetencies() {
  // Initialize scroll trigger for animations
  useScrollTrigger();
  
  return (
    <section id="skills" className="section-padding competencies-section">
      <div className="container-custom">
        <div className="scroll-trigger">
          <h2 className="competencies-title">
            핵심 역량
          </h2>
          <p className="competencies-subtitle">
            데이터 기반 의사결정과 사용자 중심 사고로 제품의 성공을 이끕니다
          </p>
        </div>

        <div className="competencies-grid">
          {skillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            const iconClass = colorClassMap[skill.color] || 'strategy';
            return (
              <div
                key={skill.title}
                className={`competency-card scroll-trigger stagger-${(index % 4) + 1}`}
              >
                <div className={`competency-icon ${iconClass}`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="competency-title">
                  {skill.title}
                </h3>
                <ul className="competency-list">
                  {skill.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
