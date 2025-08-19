import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container-custom">
        <div className="scroll-trigger" style={{ marginBottom: '5rem' }}>
          <h2 className="projects-title">
            주요 프로젝트
          </h2>
          <p className="projects-subtitle">
            사용자 중심의 제품 개발과 비즈니스 임팩트를 창출한 프로젝트들입니다
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.slice(0, 6).map((project, index) => (
            <article
              key={project.slug}
              className={`project-card glass scroll-trigger stagger-${(index % 3) + 1}`}
            >
              <img
                src={project.cover}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
