import { Briefcase, Laptop, Rocket } from "lucide-react";
import { experienceData } from "@/data/experience";

const iconMap = {
  briefcase: Briefcase,
  laptop: Laptop,
  rocket: Rocket,
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6 font-display">
            경력사항
          </h2>
          <p className="text-xl text-dark-muted dark:text-dark-muted max-w-3xl mx-auto">
            다양한 스타트업과 기업에서의 경험을 통해 성장해왔습니다
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent-cyan transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => {
              const IconComponent = iconMap[experience.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              
              return (
                <div key={experience.company} className="relative flex items-center scroll-trigger">
                  <div className={`flex-shrink-0 w-16 h-16 bg-${experience.color} rounded-full flex items-center justify-center z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`ml-8 md:ml-0 ${isEven ? "md:w-5/12 md:pr-8" : "md:w-5/12 md:ml-auto md:pl-8"}`}>
                    <div className="glass rounded-3xl p-8">
                      <div className="text-accent-cyan text-sm font-medium mb-2">
                        {experience.period}
                      </div>
                      <h3 className="text-xl font-bold text-white dark:text-white mb-2">
                        {experience.role}
                      </h3>
                      <div className="text-primary font-medium mb-4">
                        {experience.company} · {experience.type}
                      </div>
                      <p className="text-dark-muted dark:text-dark-muted mb-4">
                        {experience.summary}
                      </p>
                      <ul className="space-y-2 text-sm text-dark-muted dark:text-dark-muted">
                        {experience.impacts.map((impact) => (
                          <li key={impact}>• {impact}</li>
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
