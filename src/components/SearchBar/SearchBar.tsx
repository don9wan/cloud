import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

export default function SearchBar() {
  // Initialize scroll trigger for animations
  useScrollTrigger();
  
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "무엇을 도와드릴까요?",
    "어떤 프로젝트를 찾고 계신가요?",
    "궁금한 기술스택이 있나요?",
    "제품 관리에 대해 문의하세요",
    "함께 혁신적인 제품을 만들어보세요"
  ];

  useEffect(() => {
    const currentWord = texts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, texts]);

  return (
    <section className="search-section">
      <div className="container-custom">
        <div className="search-bar">
          <div className="search-container scroll-trigger">
            <Search className="w-6 h-6 text-muted" />
            <input
              type="text"
              placeholder={currentText + (charIndex === currentText.length && !isDeleting ? "|" : "")}
              className="search-input"
              readOnly
            />
            <div className="search-shortcuts">
              <kbd className="search-kbd">⌘</kbd>
              <kbd className="search-kbd">K</kbd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
