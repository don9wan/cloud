import { useState, useEffect } from "react";
import { techStackData } from "../../data/skills";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
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

// Map colors to CSS classes
const colorClassMap: Record<string, string> = {
  'blue-500': 'analytics',
  'green-500': 'design',
  'yellow-500': 'project',
  'red-500': 'development',
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Initialize scroll trigger for animations
  useScrollTrigger();

  // Re-trigger animations when category changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const newItems = document.querySelectorAll('.techstack-item.scroll-trigger');
      newItems.forEach((item) => {
        // Check if item is in viewport
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }, 50); // Small delay to ensure DOM is updated
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

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
    <section id="stack" className="section-padding techstack-section">
      <div className="container-custom">
        <div className="scroll-trigger">
          <h2 className="techstack-title">
            기술 스택
          </h2>
          <p className="techstack-subtitle">
            다양한 도구와 플랫폼을 활용하여 효율적인 제품 관리를 합니다
          </p>
        </div>

        {/* Category Tabs */}
        <div className="techstack-categories scroll-trigger">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`techstack-category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="techstack-grid">
          {filteredItems.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            const iconClass = colorClassMap[item.color] || 'analytics';
            return (
              <div
                key={`${activeCategory}-${item.category}-${item.name}-${index}`}
                className={`techstack-item scroll-trigger stagger-${(index % 4) + 1}`}
              >
                <div className={`techstack-icon ${iconClass}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="techstack-name">
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
