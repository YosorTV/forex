import SlideLayout from "../SlideLayout";
import { Database, CreditCard, ArrowRightLeft, Upload, History } from "lucide-react";

export default function SlidePhase5Leads() {
  return (
    <SlideLayout
      title="Этап 5: Работа с Лидами"
      subtitle="Полный жизненный цикл клиента"
    >
      <div className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-base">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Database className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">База лидов</h3>
            <p className="text-textPrimary">
              Мощная таблица со всеми клиентами: фильтры, поиск, сортировка, массовые операции, экспорт
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <CreditCard className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Карточка лида</h3>
            <p className="text-textPrimary">
              Вкладки: Информация, История действий, <br /> Торговые счета, Пополнения, Выводы, Журнал входов
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <ArrowRightLeft className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Миграция между офисами</h3>
            <p className="text-textPrimary">
              Переводите клиентов между офисами с автоматическим созданием записи, сменой статуса и журналированием
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Upload className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Импорт данных</h3>
            <p className="text-textPrimary">
              Загружайте клиентов массово: сопоставление полей, проверка, исключение дубликатов, полный аудит
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <History className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Полная история</h3>
            <p className="text-textPrimary">
              Каждое действие с лидом записывается: кто, когда, что изменил — полная прозрачность
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 text-center">
          <p className="text-base text-textPrimary">
            <strong className="text-navy">Зачем это важно:</strong> Это сердце CRM — управление клиентами от первого контакта до постоянной работы
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
