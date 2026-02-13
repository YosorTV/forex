import React from "react";
import SlideLayout from "../SlideLayout";
import { Building, Building2, Tags } from "lucide-react";

export default function SlidePhase3BrandOffice() {
  return (
    <SlideLayout
      title="Этап 3: Бренды и Офисы"
      subtitle="Многобрендовая структура с гибким управлением"
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Building className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Управление брендами</h3>
            <p className="text-textPrimary">
              Создавайте и управляйте несколькими брендами внутри одной системы. Каждый бренд — отдельный изолированный бизнес
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Building2 className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Офисы внутри брендов</h3>
            <p className="text-textPrimary">
              Каждый бренд может иметь несколько офисов. Офисы работают независимо, но видны руководству бренда
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Tags className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Гибкие статусы лидов</h3>
            <p className="text-textPrimary mb-3">
              Создавайте свои статусы для офисов: &ldquo;Новый&rdquo;, &ldquo;Депозит&rdquo;, &ldquo;Мигрированный&rdquo; — что угодно для вашего процесса
            </p>
            <p className="text-sm text-textMuted">
              Системные статусы защищены от удаления, пользовательские можно изменять в любой момент
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-base text-textPrimary">
            <strong className="text-navy">Зачем это важно:</strong> Позволяет управлять несколькими торговыми марками и офисами из одного места с полным контролем
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
