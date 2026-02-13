import SlideLayout from "../SlideLayout";
import { Calendar, ClipboardList, MessageSquare, Target, RotateCw, Eye } from "lucide-react";

export default function Slide11HowWeWork() {
  return (
    <SlideLayout
      title="Как мы работаем"
      subtitle="Прозрачность на каждом шаге"
    >
      <div className="space-y-5">
        <div className="bg-gradient-to-r from-navy to-accentBlue text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
            <Calendar className="text-white" size={24} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Работаем двухнедельными циклами</h3>
          <p className="text-blue-100 text-base sm:text-lg">
            Понятный ритм, измеримый прогресс каждые две недели
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base stagger-children">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <ClipboardList className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-navy text-lg mb-2">Планирование</h4>
            <p className="text-textPrimary">
              Команда берёт задачи с чёткими критериями готовности
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <MessageSquare className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-navy text-lg mb-2">Ежедневные встречи</h4>
            <p className="text-textPrimary">
              Быстрая синхронизация: прогресс, проблемы, план на день
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Target className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-navy text-lg mb-2">Демонстрация результата</h4>
            <p className="text-textPrimary">
              Показываем работающую систему — видите прогресс каждые две недели
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <RotateCw className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-navy text-lg mb-2">Обзор итогов</h4>
            <p className="text-textPrimary">
              Что получилось хорошо, что можно улучшить
            </p>
          </div>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Eye className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-lg text-navy">Ваш доступ</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span>Видите доску с задачами: что в плане, что в работе, что готово</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span>Получаете письменный отчёт каждый месяц: прогресс, риски, нужные решения</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
              </div>
              <span>Прямой канал связи для вопросов в любое время</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
