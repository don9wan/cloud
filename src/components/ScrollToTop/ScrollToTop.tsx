import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './scroll-to-top.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치를 감지 (throttling으로 성능 최적화)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const toggleVisibility = () => {
      // requestAnimationFrame을 사용해 부드러운 애니메이션 보장
      requestAnimationFrame(() => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const throttledToggleVisibility = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(toggleVisibility, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledToggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledToggleVisibility);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // 최상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="맨 위로 스크롤"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
