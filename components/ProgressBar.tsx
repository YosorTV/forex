import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = ((current + 1) / total) * 100;
  
  // Phase boundaries (slide indices): 6=overview, 7-13=phases 1-7
  const phaseMarkers = [5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-navy to-accentBlue transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      />
      {/* Phase markers */}
      {phaseMarkers.map((slideIndex) => {
        const markerPosition = ((slideIndex + 1) / total) * 100;
        return (
          <div
            key={slideIndex}
            className="absolute top-0 w-0.5 h-full bg-white/60"
            style={{ left: `${markerPosition}%` }}
          />
        );
      })}
    </div>
  );
}
