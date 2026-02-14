"use client";

import { useMemo, useState } from "react";
import SlideLayout from "../SlideLayout";
import {
  Anchor,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Gem,
  Ship,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProjectCard = {
  title: string;
  url: string;
  icon: LucideIcon;
  iconGradient: string;
  dotColor: string;
  bullets: string[];
};

const projects: ProjectCard[] = [
  {
    title: "Beacon52 — Морские операции",
    url: "https://www.beacon52.com/",
    icon: Ship,
    iconGradient: "from-navy to-accentBlue",
    dotColor: "bg-accentBlue",
    bullets: [
      "Управление портовыми операциями в реальном времени",
      "Автоматическая проверка счетов и предотвращение переплат",
      "Аналитика и показатели по портам и рейсам",
      "Интеграция с системами учёта и комплаенса",
    ],
  },
  {
    title: "Bunker Suite — Торговая платформа",
    url: "https://www.bunkersuite.com/",
    icon: TrendingUp,
    iconGradient: "from-darkGreen to-accentTeal",
    dotColor: "bg-accentTeal",
    bullets: [
      "Единая система для коммерции, финансов и операций",
      "Контроль доступа и управление правами пользователей",
      "Полная история всех сделок для аудита",
      "Электронный документооборот с защитой от подделок",
    ],
  },
  {
    title: "Ship.Link — цифровой фрахтовый брокер",
    url: "https://ship.link/",
    icon: Anchor,
    iconGradient: "from-sky-600 to-accentBlue",
    dotColor: "bg-sky-600",
    bullets: [
      "Онлайн-маркетплейс для фрахта коммерческих судов",
      "Цифровые запросы, переговоры и согласование условий вместо офлайн-цепочек",
      "Фокус на прозрачности и ускорении заключения чартерных сделок",
      "Подход к глобальному рынку морской логистики через единую платформу",
    ],
  },
  {
    title: "Lenovo Studio AI — GenAI для маркетинга",
    url: "https://techtoday.lenovo.com/ua/en/solutions/media/27976",
    icon: Sparkles,
    iconGradient: "from-indigo-600 to-accentBlue",
    dotColor: "bg-indigo-500",
    bullets: [
      "Генерация маркетинговых текстов, презентаций и коммерческих материалов по простому запросу",
      "Сокращение цикла подготовки контента: часы вместо недель",
      "Снижение затрат на запуск кампаний и новых продуктов",
      "Персонализация на внутренних данных для более релевантных материалов",
    ],
  },
  {
    title: "Lovebanus — Marbella events & bookings",
    url: "https://lovebanus.com/",
    icon: Calendar,
    iconGradient: "from-amber-600 to-orange-500",
    dotColor: "bg-amber-500",
    bullets: [
      "Онлайн-платформа и туроператор: бронирование отдыха и развлечений в Puerto Banús и Марбелье (Costa del Sol)",
      "Полный пакет для групповых поездок: hen/stag parties, корпоративы, отдых с друзьями",
      "Бронирование вечеринок, клубов, баров, чартер яхт, аренда вилл и организация мероприятий",
      "Консьерж-сервис: трансферы, туры и планирование развлечений; более 10 лет на рынке",
    ],
  },
  {
    title: "KUSH jewelry — ювелирный бренд и магазин",
    url: "https://www.instagram.com/kush.jewelry/",
    icon: Gem,
    iconGradient: "from-rose-700 to-amber-600",
    dotColor: "bg-rose-500",
    bullets: [
      "Эксклюзивные украшения ручной работы: серьги, кольца, браслеты; акцент на индивидуальный стиль и современный дизайн",
      "Изделия из золота и серебра, минимализм и смелые формы; позиционирование как произведения искусства",
      "Украинский бренд, Киев (Shchekavytska St, 30/39); доставка и онлайн-продажи",
      "Активное присутствие в Instagram с примерами коллекций и вдохновляющим контентом",
    ],
  },
];

export default function Slide03Credibility() {
  const cardsPerPage = 2;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const activePage = Math.min(page, totalPages - 1);

  const visibleProjects = useMemo(() => {
    const startIndex = activePage * cardsPerPage;
    return projects.slice(startIndex, startIndex + cardsPerPage);
  }, [activePage, cardsPerPage]);

  const isFirstPage = activePage === 0;
  const isLastPage = activePage >= totalPages - 1;

  const goPrev = () => {
    if (!isFirstPage) {
      setPage((prev) => prev - 1);
    }
  };

  const goNext = () => {
    if (!isLastPage) {
      setPage((prev) => Math.min(prev + 1, totalPages - 1));
    }
  };

  const headerControls = (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={goPrev}
        disabled={isFirstPage}
        aria-label="Предыдущие проекты"
        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
          isFirstPage
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-navy hover:bg-gray-100 cursor-pointer"
        }`}
      >
        <ChevronLeft size={16} />
      </button>
      <span className="text-xs sm:text-sm text-textMuted font-medium min-w-10 text-center">
        {activePage + 1}/{totalPages}
      </span>
      <button
        type="button"
        onClick={goNext}
        disabled={isLastPage}
        aria-label="Следующие проекты"
        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
          isLastPage
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-navy hover:bg-gray-100 cursor-pointer"
        }`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );

  return (
    <SlideLayout
      title="Наш опыт работы"
      subtitle="Реальные системы, которые работают прямо сейчас"
      headerActions={headerControls}
    >
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
          {visibleProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${project.iconGradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-navy leading-tight">
                        {project.title}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Открыть сайт ${project.title}`}
                        className="text-textMuted hover:text-accentBlue transition-colors mt-0.5"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm sm:text-base text-textPrimary">
                  {project.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className={`w-2 h-2 rounded-full ${project.dotColor}`} />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
