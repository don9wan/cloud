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
    "무엇이 당신에게 가장 큰 문제인가요?",
    "관련해서 가장 최근에 발생한 문제에 대해 알려주세요",
    "또 다른 것은 어떤 것을 시도해 보셨나요?",
    "지금은 그 문제를 해결하기 위해 어떻게 하시나요?",
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
