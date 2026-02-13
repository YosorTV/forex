import SlideLayout from "../SlideLayout";
import { Heart, Target, TrendingUp, Users } from "lucide-react";

export default function Slide16Appendix() {
  return (
    <SlideLayout
      title="Почему мы хотим работать с вами"
      subtitle="Наша мотивация и видение этого проекта"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/60 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accentBlue/10 flex items-center justify-center mb-4">
              <Heart className="text-accentBlue" size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Увлечены финансовыми системами</h3>
            <p className="text-textPrimary">
              Мы любим создавать системы, где правильная архитектура и безопасность критичны. Forex — это вызов, который нас вдохновляет
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/60 rounded-xl p-6 hover:border-green-300 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-darkGreen/10 flex items-center justify-center mb-4">
              <Target className="text-darkGreen" size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Понимаем ваши цели</h3>
            <p className="text-textPrimary">
              Мы знаем, что значит запускать регулируемый бизнес. Нам важен ваш успех, потому что качественный продукт — это наша репутация
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/60 rounded-xl p-6 hover:border-purple-300 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Видим возможность роста</h3>
            <p className="text-textPrimary">
              Forex CRM — это платформа с потенциалом масштабирования. Мы хотим быть частью вашего долгосрочного успеха и расти вместе
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200/60 rounded-xl p-6 hover:border-teal-300 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
              <Users className="text-teal" size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Ценим партнёрство</h3>
            <p className="text-textPrimary">
              Это не просто проект для нас. Мы хотим построить долгосрочное сотрудничество, основанное на доверии и взаимном уважении
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-navy/5 via-accentBlue/5 to-darkGreen/5 border-2 border-navy/20 rounded-xl p-6 text-center">
          <p className="text-xl font-semibold text-navy mb-3">
            Мы не просто разработчики — мы ваши партнёры в успехе
          </p>
          <p className="text-base text-textPrimary">
            Ваш успех в Forex напрямую связан с качеством нашей работы, поэтому мы вкладываем всё наше мастерство и опыт в этот проект
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}