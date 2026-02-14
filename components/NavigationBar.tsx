import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationBarProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  phase?: string;
}

export default function NavigationBar({ current, total, onPrev, onNext, phase }: NavigationBarProps) {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/45 bg-white/35 backdrop-blur-xl shadow-nav px-2 py-2">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
            isFirst
              ? "text-gray-400 cursor-not-allowed bg-white/20"
              : "text-navy cursor-pointer bg-white/45 hover:bg-white/70"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="min-w-20 rounded-full bg-white/45 px-4 py-2 text-center text-textMuted font-semibold text-sm sm:text-base">
          {current + 1} из {total}
          {phase && <span className="sr-only">{phase}</span>}
        </div>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
            isLast
              ? "text-gray-400 cursor-not-allowed bg-white/20"
              : "text-navy cursor-pointer bg-white/45 hover:bg-white/70"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
