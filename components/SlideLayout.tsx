import React from "react";

interface SlideLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SlideLayout({ title, subtitle, children }: SlideLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-card p-8 sm:p-12 animate-fade-in-up">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-navy via-accentBlue to-darkGreen bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight md:leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-textMuted">{subtitle}</p>
          )}
        </div>
        <div className="space-y-4 sm:space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
