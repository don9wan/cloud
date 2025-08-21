import { GraduationCap, BookOpen } from "lucide-react";
import { educationData } from "../data/education";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import "../styles/education.css";

const iconMap = {
  briefcase: GraduationCap,
  laptop: BookOpen,
};

// Map colors to CSS classes
const colorClassMap: Record<string, string> = {
  'primary': 'university',
  'accent-cyan': 'highschool',
};

export default function Education() {
  // Initialize scroll trigger for animations
  useScrollTrigger();
  
  return (
    <section id="education" className="section-padding education-section">
      <div className="container-custom">
        <div className="scroll-trigger">
          <h2 className="education-title">
            교육 및 어학
          </h2>
          <p className="education-subtitle">
            다양한 분야의 학습을 통해 융합적 사고를 기르고 있습니다
          </p>
        </div>

        <div className="education-timeline-container scroll-trigger">
          {/* Timeline Line */}
          <div className="education-timeline-line"></div>

          {/* Timeline Items */}
          <div className="education-timeline-items">
            {educationData.map((education, index) => {
              const IconComponent = iconMap[education.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              const iconClass = colorClassMap[education.color] || 'university';
              
              return (
                <div key={education.school} className={`education-timeline-item ${isEven ? 'even' : 'odd'} scroll-trigger stagger-${(index % 3) + 1}`}>
                  <div className={`education-timeline-icon ${iconClass}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`education-timeline-content ${isEven ? 'education-timeline-content-left' : 'education-timeline-content-right'}`}>
                    <div className="education-timeline-card">
                      <div className="education-period">
                        {education.period}
                      </div>
                      <h3 className="education-degree">
                        {education.degree}
                      </h3>
                      <div className="education-school">
                        {education.school} · {education.type}
                      </div>
                      <p className="education-summary">
                        {education.summary}
                      </p>
                      <ul className="education-courses">
                        {education.courses.map((course) => (
                          <li key={course}>{course}</li>
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