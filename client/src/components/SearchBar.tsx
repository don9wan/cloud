import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-6 scroll-trigger">
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-dark-muted dark:text-dark-muted" />
              <input
                type="text"
                placeholder="무엇을 도와드릴까요?"
                className="flex-1 bg-transparent text-lg outline-none placeholder-dark-muted dark:placeholder-dark-muted"
                readOnly
              />
              <div className="flex space-x-2">
                <kbd className="px-2 py-1 text-xs rounded bg-white/10 border border-white/20">
                  ⌘
                </kbd>
                <kbd className="px-2 py-1 text-xs rounded bg-white/10 border border-white/20">
                  K
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
