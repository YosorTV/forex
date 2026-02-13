import React from "react";
import SlideLayout from "../SlideLayout";
import { Shield, Database, BarChart3, Lightbulb } from "lucide-react";

export default function Slide16Appendix() {
  return (
    <SlideLayout
      title="Приложение: Из чего складываются расходы"
      subtitle="Основные статьи инфраструктурных затрат"
    >
      <div className="space-y-5 stagger-children">
        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Shield className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy">Защита и безопасность</h3>
          </div>
          <p className="text-textPrimary mb-2 text-base">
            <strong>~$330/месяц базовая стоимость</strong> (премиум-уровень нужен для защиты от атак)
          </p>
          <p className="text-textMuted text-sm">
            Использование зависит от объёма трафика, правил защиты и хранения логов. Премиум выбран для безопасности, необходимой в Forex.
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Database className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy">База данных</h3>
          </div>
          <p className="text-textPrimary mb-2 text-base">
            <strong>Зависит от объёма данных и производительности</strong>
          </p>
          <p className="text-textMuted text-sm">
            Оценка для базовой версии; реальная стоимость подтверждается после запуска на основе фактических запросов и роста данных. Журнал действий добавляет отдельные расходы.
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <BarChart3 className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy">Мониторинг и логи</h3>
          </div>
          <p className="text-textPrimary mb-2 text-base">
            <strong>Отслеживание работы системы и хранение истории</strong>
          </p>
          <p className="text-textMuted text-sm">
            Расходы зависят от объёма логов и срока хранения. Готовность к аудиту требует более длительного хранения, что увеличивает стоимость.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="text-accentBlue" size={20} />
          </div>
          <div>
            <p className="text-base text-textPrimary mb-2">
              <strong>Важно:</strong> Это основные статьи расходов. Полная детализация предоставляется каждый месяц.
            </p>
            <p className="text-sm text-textMuted">
              Во время разработки мы находим возможности оптимизации инфраструктуры для снижения расходов без ущерба безопасности и соответствию требованиям.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="inline-block bg-gradient-to-r from-navy to-accentBlue text-white px-8 py-4 rounded-2xl shadow-card">
          <p className="text-xl font-bold">🎉 Спасибо за внимание!</p>
          <p className="text-sm mt-2">Готовы ответить на ваши вопросы</p>
        </div>
      </div>
    </SlideLayout>
  );
}
