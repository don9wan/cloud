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
    { id: "ai", label: "AI" },
  ];

  const filteredItems = activeCategory === "all" 
    ? techStackData 
    : techStackData.filter(item => item.category === activeCategory);

  // For the marquee, we'll use all items
  const marqueeItems = [...techStackData, ...techStackData]; // Duplicate for seamless loop

  return (
    <section id="stack" className="section-padding techstack-section">
      <div className="container-custom">
        <div className="scroll-trigger">
          <h2 className="techstack-title">
            기술 스택
          </h2>
          <p className="techstack-subtitle">
            프로젝트 목표 달성을 위해 자유롭게 활용해 온 기술 스택입니다. 최적의 솔루션을 실행하기 위해서라면 언제, 무엇이든 추가될 수 있습니다.
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="techstack-marquee-container scroll-trigger stagger-1">
          <div className="techstack-marquee">
            {marqueeItems.map((item, index) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <div key={`marquee-${index}`} className="marquee-item glass">
                  <IconComponent className="marquee-icon" />
                  <span className="marquee-text">{item.name.replace('\n', ' ')}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="techstack-categories scroll-trigger stagger-2">
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
                {/* <div className="techstack-proficiency">
                  <div className="proficiency-bar-container">
                    <div 
                      className={`proficiency-bar-fill ${iconClass}`}
                      style={{ width: `${item.proficiency}%` }}
                    />
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
