import { useState, useEffect } from "react";
import { techStackData } from "../../data/skills";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import * as ReactIcons from "react-icons/si";
import * as DevIcons from "react-icons/di";
import { IconType } from "react-icons";
import "./techstack.css";

// Get icon component from React Icons
const getIconComponent = (iconName: string): IconType => {
  // Try Simple Icons first (Si prefix)
  const SimpleIcon = (ReactIcons as any)[iconName];
  if (SimpleIcon) return SimpleIcon;
  
  // Try DevIcons (Di prefix)
  const DevIcon = (DevIcons as any)[iconName];
  if (DevIcon) return DevIcon;
  
  // Fallback to a generic icon
  return ReactIcons.SiCodersrank;
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
    { id: "development", label: "SW 개발" },
    { id: "design", label: "UX/UI 디자인" },
    { id: "analytics", label: "데이터 분석·시각화" },
    { id: "project", label: "프로젝트 관리" },
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
            const IconComponent = getIconComponent(item.icon);
            const iconClass = colorClassMap[item.color] || 'analytics';
            return (
              <div
                key={`${activeCategory}-${item.category}-${item.name}-${index}`}
                className={`techstack-item scroll-trigger stagger-${(index % 4) + 1}`}
              >
                <div className="techstack-name">
                  {item.name}
                </div>
                {/* Progress Bar */}
                <div className="techstack-proficiency">
                  <div className="proficiency-bar-container">
                    <div 
                      className={`proficiency-bar-fill ${iconClass}`}
                      style={{ width: `${item.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
