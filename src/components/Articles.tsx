import { ArrowRight } from "lucide-react";
import { articlesData } from "../data/articles";

export default function Articles() {
  return (
    <section id="articles" className="section-padding articles-section">
      <div className="container-custom">
        <div className="scroll-trigger">
          <h2 className="articles-title">
            최근 아티클
          </h2>
          <p className="articles-subtitle">
            제품 관리와 사용자 경험에 대한 인사이트를 공유합니다
          </p>
        </div>

        <div className="articles-grid">
          {articlesData.map((article, index) => (
            <article
              key={article.slug}
              className={`article-card glass scroll-trigger stagger-${(index % 3) + 1}`}
            >
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-category">
                    {article.category}
                  </span>
                  <span className="article-date">
                    {article.date}
                  </span>
                </div>
                <h3 className="article-title">
                  <a href={`/articles/${article.slug}`}>{article.title}</a>
                </h3>
                <p className="article-description">
                  {article.summary}
                </p>
                <div className="article-footer">
                  <div className="article-tags">
                    {article.tags.map((tag) => (
                      <span key={tag} className="article-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/articles/${article.slug}`}
                    className="article-link"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="articles-more scroll-trigger">
          <a href="/articles" className="articles-more-btn">
            모든 아티클 보기
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
