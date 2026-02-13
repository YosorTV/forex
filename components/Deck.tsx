"use client";

import React, { useState, useEffect, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import NavigationBar from "./NavigationBar";
import SpeakerNotes from "./SpeakerNotes";
import { slides } from "./slides";

const ALLOWED_EMAIL = "jon.doe@forex.com";
const ALLOWED_PASSWORD = "forex111";
const ACCESS_STORAGE_KEY = "presentation-authenticated";

export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");
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
  const currentNotes = slides[currentSlide].speakerNotes;
  const currentPhase = slides[currentSlide].phase;

  return (
    <div className="relative w-full min-h-screen bg-gradient-subtle">
      <ProgressBar current={currentSlide} total={totalSlides} />
      
      <div className={`transition-opacity duration-200 ${fadeClass}`}>
        <CurrentSlideComponent />
      </div>

      <NavigationBar
        current={currentSlide}
        total={totalSlides}
        onPrev={goToPrev}
        onNext={goToNext}
        phase={currentPhase}
      />

      <SpeakerNotes notes={currentNotes} />
    </div>
  );
}
