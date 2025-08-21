import { educationData } from "../data/education";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import "../styles/education.css";

export default function Education() {
  // Initialize scroll trigger for animations
  useScrollTrigger();
  
  return (
    <section id="education" className="section-padding education-section">
      <div className="container-custom">
        <div className="scroll-trigger">
          <h2 className="education-title">
            교육
          </h2>
          <p className="education-subtitle">
            IT 서비스 관리에 필요한 다양한 분야에 대한 지식을 체득해 왔습니다.
          </p>
        </div>

        <div className="education-timeline-container scroll-trigger">
          {/* Timeline Line */}
          <div className="education-timeline-line"></div>

          {/* Timeline Items */}
          <div className="education-timeline-items">
            {educationData.map((education, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={education.school} className={`education-timeline-item ${isEven ? 'even' : 'odd'} scroll-trigger stagger-${(index % 3) + 1}`}>
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