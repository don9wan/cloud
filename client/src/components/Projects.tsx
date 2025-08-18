import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "전체" },
    { id: "mobile", label: "모바일 앱" },
    { id: "web", label: "웹 플랫폼" },
    { id: "saas", label: "SaaS 도구" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-dark-panel dark:bg-dark-panel">
      <div className="container-custom">
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6 font-display">
            주요 프로젝트
          </h2>
          <p className="text-xl text-dark-muted dark:text-dark-muted max-w-3xl mx-auto">
            사용자 중심의 제품 개발과 비즈니스 임팩트를 창출한 프로젝트들입니다
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-trigger">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant="ghost"
              className={`
                px-6 py-3 rounded-full glass hover:bg-white/10 transition-all duration-200 font-medium
                ${activeFilter === filter.id 
                  ? "bg-primary text-white hover:bg-primary-700" 
                  : ""
                }
              `}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.slug}
              className={`glass rounded-3xl overflow-hidden hover:bg-white/5 transition-all duration-300 hover:scale-105 scroll-trigger ${
                index > 0 && index % 3 !== 0 ? `stagger-${(index % 3)}` : ""
              }`}
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-muted dark:text-dark-muted mb-6 text-sm leading-relaxed">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        className="text-primary hover:text-primary-400 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="text-primary hover:text-primary-400 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="text-accent-cyan text-sm font-medium">
                    {project.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 scroll-trigger">
          <Button
            variant="ghost"
            size="lg"
            className="glass hover:bg-white/10 transition-all duration-300 hover:scale-105 font-semibold"
          >
            더 많은 프로젝트 보기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
