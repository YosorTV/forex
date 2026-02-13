import React from "react";
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 sm:py-4 px-4 sm:px-6 z-40 shadow-nav">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
            isFirst
              ? "text-gray-400 cursor-not-allowed"
              : "text-navy hover:bg-gray-100"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <div className="text-center">
          <div className="text-textMuted font-medium text-sm sm:text-base">
            <span className="hidden sm:inline">Слайд </span>{current + 1} <span className="hidden sm:inline">из </span>{total}
          </div>
          {phase && (
            <div className="text-xs text-accentBlue font-medium mt-1">
              {phase}
            </div>
          )}
        </div>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
            isLast
              ? "text-gray-400 cursor-not-allowed"
              : "text-navy hover:bg-gray-100"
          }`}
          aria-label="Next slide"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
