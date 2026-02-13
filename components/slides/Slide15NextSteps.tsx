import SlideLayout from "../SlideLayout";
import { ArrowDown } from "lucide-react";

export default function Slide15NextSteps() {
  return (
    <SlideLayout
      title="Следующие шаги"
      subtitle="Начнём работу"
    >
      <div className="space-y-4 stagger-children">
        <div className="bg-gradient-to-r from-navy to-accentBlue text-white rounded-2xl p-5 flex items-center gap-4">
          <div className="text-3xl font-bold bg-white/20 w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0">1</div>
          <div>
            <h3 className="text-xl font-bold mb-1">Обсуждение требований</h3>
            <p className="text-blue-100 text-base">
              Встречи для уточнения требований, согласования неясностей и определения критериев успеха
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown size={28} className="text-navy" />
        </div>

        <div className="bg-gradient-to-r from-accentBlue to-accentTeal text-white rounded-2xl p-5 flex items-center gap-4">
          <div className="text-3xl font-bold bg-white/20 w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0">2</div>
          <div>
            <h3 className="text-xl font-bold mb-1">Фиксация объёма и команды</h3>
            <p className="text-blue-100 text-base">
              Утверждаем список задач базовой версии, подтверждаем коммерческие условия
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown size={28} className="text-accentBlue" />
        </div>

        <div className="bg-gradient-to-r from-navy to-accentBlue text-white rounded-2xl p-5 flex items-center gap-4">
          <div className="text-3xl font-bold bg-white/20 w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0">3</div>
          <div>
            <h3 className="text-xl font-bold mb-1">Старт первого спринта</h3>
            <p className="text-blue-100 text-base">
              Первое планирование, распределение задач, настройка инфраструктуры
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown size={28} className="text-navy" />
        </div>

        <div className="bg-gradient-to-r from-accentBlue to-accentTeal text-white rounded-2xl p-5 flex items-center gap-4">
          <div className="text-3xl font-bold bg-white/20 w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0">4</div>
          <div>
            <h3 className="text-xl font-bold mb-1">Первая демонстрация — неделя 2</h3>
            <p className="text-blue-100 text-base">
              Показываем работающую основу: налаженные процессы, запущена инфраструктура и реализован первый элемент базового функционала
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-navy to-accentBlue text-white p-6 rounded-2xl text-center">
        <p className="text-2xl font-bold mb-2">
          Готовы начать?
        </p>
        <p className="text-lg">
          Утверждаем обсуждение → Согласовываем показатели → Начинаем работу
        </p>
      </div>
    </SlideLayout>
  );
}
