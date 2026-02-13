import SlideLayout from "../SlideLayout";
import { BanknoteArrowUpIcon, BanknoteArrowDownIcon, CheckCircle } from "lucide-react";

export default function SlidePhase7Financial() {
  return (
    <SlideLayout
      title="Этап 7: Финансовый Модуль"
      subtitle="Деньги движутся только с авторизацией"
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-3">
              <BanknoteArrowUpIcon className="text-darkGreen" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Пополнения</h3>
            <p className="text-textPrimary mb-3">
              Глобальная таблица всех пополнений с привязкой к лиду. Каждое пополнение проходит через жизненный цикл статусов
            </p>
            <p className="text-sm text-textMuted">
              Статусы: Новый → В обработке → Одобрен → Завершён (или Отклонён)
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
              <BanknoteArrowDownIcon className="text-red-600" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Выводы средств</h3>
            <p className="text-textPrimary mb-3">
              Запросы на вывод проходят через систему согласований с учётом иерархии и прав доступа
            </p>
            <p className="text-sm text-textMuted">
              Процесс согласования с проверками и возможностью отклонения с комментарием
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <CheckCircle className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Система согласований</h3>
            <p className="text-textPrimary">
              Каждое финансовое действие требует одобрения. Полный журнал: кто запросил, кто одобрил, когда, изменения статуса
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 text-center">
          <p className="text-base text-amber-900 font-medium">
            🔒 Безопасность: Автоматическая проверка области доступа — можно одобрить только операции внутри своего бренда/офиса
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-base text-textPrimary">
            <strong className="text-navy">Зачем это важно:</strong> Контроль денежных потоков и соблюдение регуляторных требований — ничего не происходит без следа и согласования
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
