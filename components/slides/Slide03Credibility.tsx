import SlideLayout from "../SlideLayout";
import { Ship, TrendingUp } from "lucide-react";

export default function Slide03Credibility() {
  return (
    <SlideLayout
      title="Наш опыт работы"
      subtitle="Реальные системы, которые работают прямо сейчас"
    >
      <div className="space-y-6 stagger-children">
        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-6 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-navy to-accentBlue rounded-xl flex items-center justify-center">
              <Ship className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-navy">Beacon52 — Морские операции</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-textPrimary">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span>Управление портовыми операциями в реальном времени</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span>Автоматическая проверка счетов и предотвращение переплат</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span>Аналитика и показатели по портам и рейсам</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span>Интеграция с системами учёта и комплаенса</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-6 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-darkGreen to-accentTeal rounded-xl flex items-center justify-center">
              <TrendingUp className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-navy">Bunker Suite — Торговая платформа</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-textPrimary">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentTeal"></div>
              </div>
              <span>Единая система для коммерции, финансов и операций</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentTeal"></div>
              </div>
              <span>Контроль доступа и управление правами пользователей</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentTeal"></div>
              </div>
              <span>Полная история всех сделок для аудита</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentTeal"></div>
              </div>
              <span>Электронный документооборот с защитой от подделок</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10 text-center mt-6 stagger-children items-center">


          <div className="text-center">
            <div className="text-2xl font-bold text-navy">Аудит</div>
            <div className="text-sm text-textMuted">безопасность и контроль</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-navy">Масштабирование</div>
            <div className="text-sm text-textMuted">архитектура под рост нагрузки</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-navy">24/7</div>
            <div className="text-sm text-textMuted">надёжность и поддержка</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
