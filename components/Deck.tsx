"use client";

import React, { useState, useEffect, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import NavigationBar from "./NavigationBar";
import { slides } from "./slides";

const ALLOWED_EMAIL = "jon.doe@forex.com";
const ALLOWED_PASSWORD = "forex111";
const ACCESS_STORAGE_KEY = "presentation-authenticated";

export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");
  const [hoveredCubeIndex, setHoveredCubeIndex] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const totalSlides = slides.length;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides && index !== currentSlide) {
      setFadeClass("opacity-0");
      setTimeout(() => {
        setCurrentSlide(index);
        setFadeClass("opacity-100");
      }, 150);
    }
  }, [currentSlide, totalSlides]);

  const goToPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);
  const goToNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);

  useEffect(() => {
    const savedAccess = window.sessionStorage.getItem(ACCESS_STORAGE_KEY);
    if (savedAccess === "true") {
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, goToPrev, goToNext, isAuthenticated]);

  // Плавний скрол вгору після кожної зміни слайду
  useEffect(() => {
    if (!isAuthenticated) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSlide, isAuthenticated]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    if (normalizedEmail === ALLOWED_EMAIL && password === ALLOWED_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError("");
      window.sessionStorage.setItem(ACCESS_STORAGE_KEY, "true");
      return;
    }

    setAuthError("Невірний логін або пароль");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-card p-8">
          <h1 className="text-2xl font-bold text-navy mb-2">Вхід до презентації</h1>
          <p className="text-textMuted mb-6">
            Введіть логін і пароль, щоб переглянути слайди.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-1">
                Логін (email)
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="jon.doe@forex.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accentBlue"
                autoComplete="username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-textPrimary mb-1">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="******"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accentBlue"
                autoComplete="current-password"
                required
              />
            </div>

            {authError && (
              <p className="text-sm text-red-600">{authError}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-navy to-accentBlue text-white font-semibold py-2.5 hover:opacity-95 transition-opacity"
            >
              Увійти
            </button>
          </form>
        </div>
      </div>
    );
  }

  const CurrentSlideComponent = slides[currentSlide].component;
  const currentPhase = slides[currentSlide].phase;

  return (
    <div
      className="relative isolate overflow-hidden w-full min-h-screen bg-[#f8fafc]"
      onMouseLeave={() => setHoveredCubeIndex(null)}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 z-0 size-full mask-[radial-gradient(120%_120%_at_top_right,white,transparent)] stroke-slate-300/60"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="deck-grid-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
          <radialGradient id="deck-right-glow" cx="100%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
            <stop offset="45%" stopColor="#93C5FD" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
          </linearGradient>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible">
          <path
            d="M-200 0h201v201h-201Z"
            strokeWidth={0}
            onMouseEnter={() => setHoveredCubeIndex(0)}
            onMouseLeave={() => setHoveredCubeIndex(null)}
            className={`transition-all duration-300 ease-out ${hoveredCubeIndex === 0 ? "fill-indigo-500/30" : "fill-indigo-400/15"}`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M600 0h201v201h-201Z"
            strokeWidth={0}
            onMouseEnter={() => setHoveredCubeIndex(1)}
            onMouseLeave={() => setHoveredCubeIndex(null)}
            className={`transition-all duration-300 ease-out ${hoveredCubeIndex === 1 ? "fill-indigo-500/30" : "fill-indigo-400/15"}`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M-400 600h201v201h-201Z"
            strokeWidth={0}
            onMouseEnter={() => setHoveredCubeIndex(2)}
            onMouseLeave={() => setHoveredCubeIndex(null)}
            className={`transition-all duration-300 ease-out ${hoveredCubeIndex === 2 ? "fill-indigo-500/30" : "fill-indigo-400/15"}`}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M200 800h201v201h-201Z"
            strokeWidth={0}
            onMouseEnter={() => setHoveredCubeIndex(3)}
            onMouseLeave={() => setHoveredCubeIndex(null)}
            className={`transition-all duration-300 ease-out ${hoveredCubeIndex === 3 ? "fill-indigo-500/30" : "fill-indigo-400/15"}`}
            style={{ pointerEvents: "all" }}
          />
        </svg>
        <rect fill="url(#deck-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
          className="opacity-80"
        />
        <rect
          fill="url(#deck-right-glow)"
          width="100%"
          height="100%"
          strokeWidth={0}
          className="opacity-85"
        />
      </svg>
      <div className="relative z-10">
        <ProgressBar current={currentSlide} total={totalSlides} />
      </div>
      
      <div className={`relative z-10 transition-opacity duration-200 ${fadeClass}`}>
        <CurrentSlideComponent />
      </div>

      {/* Invisible hitbox layer for cube hover detection */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className="pointer-events-auto absolute cursor-pointer"
          style={{ left: "calc(50% - 200px)", top: "-1px", width: "201px", height: "201px" }}
          onMouseEnter={() => setHoveredCubeIndex(0)}
          onMouseLeave={() => setHoveredCubeIndex(null)}
        />
        <div
          className="pointer-events-auto absolute cursor-pointer"
          style={{ left: "calc(50% + 600px)", top: "-1px", width: "201px", height: "201px" }}
          onMouseEnter={() => setHoveredCubeIndex(1)}
          onMouseLeave={() => setHoveredCubeIndex(null)}
        />
        <div
          className="pointer-events-auto absolute cursor-pointer"
          style={{ left: "calc(50% - 400px)", top: "599px", width: "201px", height: "201px" }}
          onMouseEnter={() => setHoveredCubeIndex(2)}
          onMouseLeave={() => setHoveredCubeIndex(null)}
        />
        <div
          className="pointer-events-auto absolute cursor-pointer"
          style={{ left: "calc(50% + 200px)", top: "799px", width: "201px", height: "201px" }}
          onMouseEnter={() => setHoveredCubeIndex(3)}
          onMouseLeave={() => setHoveredCubeIndex(null)}
        />
      </div>

      <NavigationBar
        current={currentSlide}
        total={totalSlides}
        onPrev={goToPrev}
        onNext={goToNext}
        phase={currentPhase}
      />
    </div>
  );
}
