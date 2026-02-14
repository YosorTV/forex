
interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = ((current + 1) / total) * 100;
  
  // Phase boundaries (slide indices): 6=overview, 7-13=phases 1-7
  const phaseMarkers = [5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-2 w-full bg-white/35 backdrop-blur-xl shadow-nav sm:h-1.5">
      <div className="relative h-full w-full bg-slate-200/40 sm:bg-slate-200/50">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-navy to-accentBlue transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
        {/* Phase markers */}
        {phaseMarkers.map((slideIndex) => {
          const markerPosition = ((slideIndex + 1) / total) * 100;
          return (
            <div
              key={slideIndex}
              className="absolute top-0 w-0.5 h-full bg-white/70"
              style={{ left: `${markerPosition}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}
