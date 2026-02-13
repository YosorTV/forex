import React from "react";
import SlideLayout from "../SlideLayout";
import { DollarSign, Lock, FileCheck, Shield } from "lucide-react";

export default function Slide05WhyForex() {
  return (
    <SlideLayout
      title="Почему Forex особенный"
      subtitle="Здесь нельзя ошибаться с безопасностью"
    >
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
            <Shield className="text-white" size={24} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Высокие ставки</h3>
        </div>
        <p className="text-amber-50 text-base sm:text-lg">
          Вы работаете с деньгами клиентов, контролируете доступ к средствам, и регуляторы проверяют каждый шаг
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <DollarSign className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Движение денег</strong>
          <p className="text-textPrimary">
            Каждое пополнение, вывод и перевод должны отслеживаться, утверждаться и проверяться
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <Lock className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Ошибка = риск</strong>
          <p className="text-textPrimary">
            Неправильный доступ к счёту = нарушение правил и возможное мошенничество
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <FileCheck className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Готовность к проверкам</strong>
          <p className="text-textPrimary">
            Регуляторы требуют полную историю: кто, что, когда и почему делал
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <Shield className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Требования лицензии</strong>
          <p className="text-textPrimary">
            Forex-лицензия требует контроля, разделения обязанностей и надзора
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-navy to-accentBlue text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center">
        <p className="text-base sm:text-lg md:text-xl font-semibold">
          Безопасность, журнал действий и контроль доступа — с первого дня, а не потом
        </p>
      </div>
    </SlideLayout>
  );
}
