import SlideLayout from "../SlideLayout";
import { Eye, Calendar, FileText, DollarSign, Shield } from "lucide-react";

export default function Slide02Transparency() {
  return (
    <SlideLayout
      title="Никаких сюрпризов"
      subtitle="Вы видите всё на каждом этапе"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base stagger-children">
        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <Eye className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Видите прогресс</strong>
          <p className="text-textPrimary">
            Каждая задача отображается на доске с понятным статусом. Вы всегда знаете, кто над чем работает
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <Calendar className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Еженедельные показы</strong>
          <p className="text-textPrimary">
            Каждую неделю показываем работающую систему. Без неожиданностей в конце проекта
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <FileText className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Регулярные отчёты</strong>
          <p className="text-textPrimary">
            Еженедельный отчёт о прогрессе, рисках и следующих шагах. Всё понятно и прозрачно
          </p>
        </div>

        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <DollarSign className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Контроль изменений</strong>
          <p className="text-textPrimary">
            Любое изменение требует вашего согласия. Вы всегда знаете влияние на сроки и бюджет
          </p>
        </div>

        <div className="md:col-span-2 bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
            <Shield className="text-accentBlue" size={20} />
          </div>
          <strong className="text-navy text-lg block mb-2">Качество на каждом шаге</strong>
          <p className="text-textPrimary">
            Автоматические проверки и тесты обеспечивают надёжность. Меньше ошибок, больше уверенности
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
