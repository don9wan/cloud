import { awardsData } from "../data/awards";
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
            교육 및 대외실적
          </h2>
          <p className="education-subtitle">
            IT 서비스 관리에 필요한 다양한 분야에 대한 지식을 체득하고, 실적을 쌓아왔습니다.
          </p>
        </div>

        <div className="education-timeline-container scroll-trigger">
          {/* Timeline Line */}
          <div className="education-timeline-line"></div>

          {/* Timeline Items */}
          <div className="education-timeline-items">
            {educationData.map((education, index) => {
              return (
                <div key={education.school} className={`education-timeline-item education-item scroll-trigger stagger-${(index % 3) + 1}`}>
                  <div className="education-timeline-content">
                    <div className="education-timeline-card education-card">
                      <div className="education-period">
                        {education.period}
                      </div>
                      <h3 className="education-degree">
                        {education.degree}
                      </h3>
                      <div className="education-school">
                        {education.school} · {education.type}
                      </div>
                      {education.courses && (
                        <ul className="education-courses">
                          {education.courses.map((course) => (
                            <li key={course}>{course}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Awards Section */}
          <div className="awards-timeline-items">
            {awardsData.map((award, index) => {
              return (
                <div key={award.title} className={`awards-timeline-item scroll-trigger stagger-${(index % 3) + 1}`}>
                  <div className="awards-timeline-content">
                    <div className="awards-timeline-card">
                      <h3 className="awards-title">
                        {award.title}
                      </h3>
                      <div className="awards-publisher">
                        {award.period} · {award.publisher} · {award.awards}
                      </div>
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