import React from "react";

interface SlideLayoutProps {
  title: React.ReactNode;
  subtitle?: string;
  headerActions?: React.ReactNode;
  children: React.ReactNode;
}

export default function SlideLayout({ title, subtitle, headerActions, children }: SlideLayoutProps) {
  return (
    <div className="min-h-dvh flex items-center justify-center px-3 sm:px-6 py-8 sm:py-12 md:py-16 pb-[120px]">
      <div className="max-w-5xl w-full relative rounded-xl sm:rounded-2xl border border-slate-300/70 bg-slate-100/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.12)] p-5 sm:p-8 md:p-12 animate-fade-in-up">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-navy via-accentBlue to-darkGreen bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-3 leading-tight text-pretty">
            {title}
          </h1>
          {(subtitle || headerActions) && (
            <div className="flex items-start sm:items-center justify-between gap-3">
              {subtitle ? (
                <p className="text-base sm:text-lg md:text-xl text-textMuted">{subtitle}</p>
              ) : (
                <div />
              )}
              {headerActions && <div className="shrink-0">{headerActions}</div>}
            </div>
          )}
        </div>
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
