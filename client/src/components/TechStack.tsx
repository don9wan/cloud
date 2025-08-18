import { useState } from "react";
import { Button } from "@/components/ui/button";
import { techStackData } from "@/data/skills";
import { 
  BarChart, 
  Activity, 
  PieChart, 
  Figma, 
  Palette, 
  Trello, 
  Calendar, 
  KanbanSquare, 
  Github, 
  Terminal, 
  Code, 
  Database 
} from "lucide-react";

const iconMap = {
  "bar-chart": BarChart,
  activity: Activity,
  "pie-chart": PieChart,
  figma: Figma,
  palette: Palette,
  trello: Trello,
  calendar: Calendar,
  "kanban-square": KanbanSquare,
  github: Github,
  terminal: Terminal,
  code: Code,
  database: Database,
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "전체" },
    { id: "analytics", label: "분석 도구" },
    { id: "design", label: "디자인" },
    { id: "project", label: "프로젝트 관리" },
    { id: "development", label: "개발 도구" },
  ];

  const filteredItems = activeCategory === "all" 
    ? techStackData 
    : techStackData.filter(item => item.category === activeCategory);

  return (
    <section id="stack" className="section-padding bg-dark-panel dark:bg-dark-panel">
      <div className="container-custom">
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6 font-display">
            기술 스택
          </h2>
          <p className="text-xl text-dark-muted dark:text-dark-muted max-w-3xl mx-auto">
            다양한 도구와 플랫폼을 활용하여 효율적인 제품 관리를 합니다
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-trigger">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className={`
                px-6 py-3 rounded-full glass hover:bg-white/10 transition-all duration-200 font-medium
                ${activeCategory === category.id 
                  ? "bg-primary text-white hover:bg-primary-700" 
                  : ""
                }
              `}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {filteredItems.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.name}
                className={`glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center scroll-trigger ${
                  index > 0 && index % 4 !== 0 ? `stagger-${(index % 4)}` : ""
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-3 bg-${item.color} rounded-xl flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-white dark:text-white">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
