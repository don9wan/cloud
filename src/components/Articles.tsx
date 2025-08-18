import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articlesData } from "@/data/articles";

export default function Articles() {
  return (
    <section id="articles" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6 font-display">
            최근 아티클
          </h2>
          <p className="text-xl text-dark-muted dark:text-dark-muted max-w-3xl mx-auto">
            제품 관리와 사용자 경험에 대한 인사이트를 공유합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article, index) => (
            <article
              key={article.slug}
              className={`glass rounded-3xl overflow-hidden hover:bg-white/5 transition-all duration-300 hover:scale-105 scroll-trigger ${
                index > 0 && index % 3 !== 0 ? `stagger-${(index % 3)}` : ""
              }`}
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-dark-muted dark:text-dark-muted text-xs">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white dark:text-white mb-3 hover:text-primary transition-colors duration-200">
                  <a href={`/articles/${article.slug}`}>{article.title}</a>
                </h3>
                <p className="text-dark-muted dark:text-dark-muted mb-6 text-sm leading-relaxed">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/articles/${article.slug}`}
                    className="text-primary hover:text-primary-400 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 scroll-trigger">
          <Button
            variant="ghost"
            size="lg"
            className="glass hover:bg-white/10 transition-all duration-300 hover:scale-105 font-semibold"
          >
            모든 아티클 보기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
