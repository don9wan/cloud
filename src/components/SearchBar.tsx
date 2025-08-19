import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="search-section">
      <div className="container-custom">
        <div className="search-bar">
          <div className="search-container scroll-trigger">
            <Search className="w-6 h-6 text-muted" />
            <input
              type="text"
              placeholder="무엇을 도와드릴까요?"
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
