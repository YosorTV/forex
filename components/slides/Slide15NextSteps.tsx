import SlideLayout from "../SlideLayout";
import { ArrowDown } from "lucide-react";

export default function Slide15NextSteps() {
  return (
    <SlideLayout
      title="Следующие шаги"
      subtitle="Начнём работу"
    >
      <div className="space-y-3 sm:space-y-4 stagger-children">
        <div className="bg-gradient-to-r from-navy to-accentBlue text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
          <div className="text-2xl sm:text-3xl font-bold bg-white/20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl flex-shrink-0">1</div>
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1">Обсуждение требований</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Встречи для уточнения требований, согласования неясностей и определения критериев успеха
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown size={24} className="text-navy flex-shrink-0" />
        </div>

        <div className="bg-gradient-to-r from-accentBlue to-accentTeal text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
          <div className="text-2xl sm:text-3xl font-bold bg-white/20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl flex-shrink-0">2</div>
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1">Фиксация объёма и команды</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Утверждаем список задач базовой версии, подтверждаем коммерческие условия
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown size={24} className="text-accentBlue flex-shrink-0" />
        </div>

        <div className="bg-gradient-to-r from-navy to-accentBlue text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
          <div className="text-2xl sm:text-3xl font-bold bg-white/20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl flex-shrink-0">3</div>
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1">Старт первого спринта</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Первое планирование, распределение задач, настройка инфраструктуры
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown size={24} className="text-navy flex-shrink-0" />
        </div>

        <div className="bg-gradient-to-r from-accentBlue to-accentTeal text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
          <div className="text-2xl sm:text-3xl font-bold bg-white/20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl flex-shrink-0">4</div>
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1">Первая демонстрация — неделя 2</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Показываем работающую основу: налаженные процессы, запущена инфраструктура и реализован первый элемент базового функционала
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-navy to-accentBlue text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center">
        <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
          Готовы начать?
        </p>
        <p className="text-base sm:text-lg">
          Утверждаем обсуждение → Согласовываем показатели → Начинаем работу
        </p>
      </div>
    </SlideLayout>
  );
}
