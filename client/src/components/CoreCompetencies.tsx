import { Target, BarChart3, Users, TrendingUp } from "lucide-react";
import { skillsData } from "@/data/skills";

const iconMap = {
  target: Target,
  "bar-chart-3": BarChart3,
  users: Users,
  "trending-up": TrendingUp,
};

export default function CoreCompetencies() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6 font-display">
            핵심 역량
          </h2>
          <p className="text-xl text-dark-muted dark:text-dark-muted max-w-3xl mx-auto">
            데이터 기반 의사결정과 사용자 중심 사고로 제품의 성공을 이끕니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <div
                key={skill.title}
                className={`glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 scroll-trigger ${
                  index > 0 ? `stagger-${index}` : ""
                }`}
              >
                <div className={`w-16 h-16 bg-${skill.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white dark:text-white mb-4">
                  {skill.title}
                </h3>
                <ul className="space-y-2 text-dark-muted dark:text-dark-muted">
                  {skill.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
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
