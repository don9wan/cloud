import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Github, ArrowRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { projectsData } from "../../data/projects";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Initialize scroll trigger for animations
  useScrollTrigger();

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    setImageLoaded(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setCurrentSlide(0);
    document.body.style.overflow = "";
  }, []);

  const nextSlide = useCallback(() => {
    if (selectedProject?.images) {
      setImageLoaded(false);
      setCurrentSlide((prev) => (prev + 1) % selectedProject.images.length);
    }
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (selectedProject?.images) {
      setImageLoaded(false);
      setCurrentSlide((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  }, [selectedProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, closeModal, nextSlide, prevSlide]);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container-custom">
        <div className="scroll-trigger" style={{ marginBottom: '5rem' }}>
          <h2 className="projects-title">
            주요 프로젝트
          </h2>
          <p className="projects-subtitle">
            이론과 실무를 넘나들며 밀도 있게 실행해온 프로젝트들입니다.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.slice(0, 6).map((project, index) => (
            <article
              key={project.slug}
              className={`project-card glass scroll-trigger stagger-${(index % 3) + 1}`}
              onClick={() => project.images && openModal(project)}
              style={{ cursor: project.images ? "pointer" : "default" }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="project-image"
                />
                {project.images && (
                  <div className="project-image-overlay">
                    <span className="project-view-label">
                      <Eye size={15} />
                      자세히 보기
                    </span>
                  </div>
                )}
              </div>
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

      {/* Image Slide Modal */}
      {selectedProject?.images && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Modal Title */}
            <h3 className="modal-title">{selectedProject.title}</h3>

            {/* Slider */}
            <div className="modal-slider">
              <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
                <ChevronLeft size={28} />
              </button>

              <div className="slider-image-wrapper">
                {!imageLoaded && (
                  <div className="slider-skeleton">
                    <div className="slider-skeleton-shimmer" />
                  </div>
                )}
                <img
                  src={selectedProject.images[currentSlide]}
                  alt={`${selectedProject.title} - ${currentSlide + 1}`}
                  className={`slider-image ${imageLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="slider-dots">
              {selectedProject.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${idx === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
