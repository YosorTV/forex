import SlideLayout from "../SlideLayout";
import { Users, DollarSign, CheckCircle } from "lucide-react";

export default function Slide14Commercial() {
  return (
    <SlideLayout
      title="Коммерческая модель"
      subtitle="За что вы платите"
    >
      <div className="space-y-6 stagger-children">
        <div className="bg-gradient-to-r from-navy to-accentBlue text-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Состав команды (5 человек)</h3>
          </div>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-blue-100">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span>1 Руководитель проекта (требования, приоритеты, общение с вами)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span>2 Бекенд-разработчика (бизнес-логика, база данных, безопасность)</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span>2 Фронтенд-разработчика (интерфейс, удобство, дизайн)</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-6 hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
              <DollarSign className="text-accentTeal" size={20} />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-navy">Стоимость команды в месяц</h3>
          </div>
          <p className="text-lg sm:text-xl text-textPrimary mb-2 sm:mb-3">
            <strong>USD 25,000 / месяц</strong>
          </p>
          <p className="text-textPrimary">
            Фиксированная месячная ставка покрывает всю команду. Инфраструктура оплачивается отдельно (детальный счёт каждый месяц).
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy">Что вы получаете</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-textPrimary">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span><strong>Предсказуемость:</strong> спринты, демонстрации, отчёты, контроль изменений</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span><strong>Экспертиза в безопасности:</strong> стандарты Forex, готовность к аудиту</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span><strong>Прозрачность:</strong> видите доску задач, систематические показы, никаких сюрпризов</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span><strong>Качество кода:</strong> поддерживаемый, документированный, проверяемый</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 text-center">
          <p className="text-sm sm:text-base text-navy">
            Условия оплаты, график счетов и другие детали фиксируются в договоре
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
