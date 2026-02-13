import SlideLayout from "../SlideLayout";
import { Cloud, Shield, TrendingUp, CheckCircle, Lock } from "lucide-react";

export default function Slide09Azure() {
  return (
    <SlideLayout
      title="Наш выбор — облако Microsoft Azure"
      subtitle="Деловые причины, без технических терминов"
    >
      <div className="space-y-4 stagger-children">
        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <Cloud className="text-accentBlue" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Всё в одном месте</h3>
          <p className="text-textPrimary">
            Пользователи, хранилище, вычисления, мониторинг — всё работает вместе. Меньше ошибок при настройке
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <CheckCircle className="text-accentBlue" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Автоматический контроль</h3>
          <p className="text-textPrimary">
            Правила и стандарты применяются автоматически. Не нужно вручную проверять соответствие требованиям
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <Shield className="text-accentBlue" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Готово для проверок</h3>
          <p className="text-textPrimary">
            Все действия записываются автоматически. Регуляторы получают чёткие ответы на вопросы &ldquo;кто и что менял&rdquo;
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <Lock className="text-accentBlue" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Надежная инфраструктура</h3>
          <p className="text-textPrimary">
            Глобальная платформа с международными сертификатами безопасности и гарантией доступности. Это обеспечивает стабильную работу и защииту данных
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <TrendingUp className="text-accentBlue" size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Гибкий рост</h3>
          <p className="text-textPrimary">
            Начинаем с малого, растём по мере необходимости. Платите только за то, что используете
          </p>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 bg-gradient-to-r from-navy to-accentBlue text-white px-4 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-center">
        <p className="text-base sm:text-lg font-semibold">Microsoft Azure — проверенное решение для финансовых систем</p>
      </div>
    </SlideLayout>
  );
}
