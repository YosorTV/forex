import SlideLayout from "../SlideLayout";
import { Wallet, Globe, RefreshCw } from "lucide-react";

export default function SlidePhase6Accounts() {
  return (
    <SlideLayout
      title="Этап 6: Счета и MetaTrader"
      subtitle="Живые данные счетов без ручной работы"
    >
      <div className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-base">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Wallet className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Торговые счета</h3>
            <p className="text-textPrimary mb-3">
              У каждого лида может быть множество торговых счетов с разными платформами, серверами и валютами
            </p>
            <p className="text-sm text-textMuted">
              Отслеживание: логин, баланс, активность, статус счёта
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Globe className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Глобальная таблица счетов</h3>
            <p className="text-textPrimary">
              Все счета в одном месте с фильтрацией по бренду, видимостью в зависимости от роли пользователя
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <RefreshCw className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">Синхронизация с MetaTrader</h3>
            <p className="text-textPrimary mb-3">
              Автоматическое обновление данных счетов по расписанию или по запросу. Журналирование всех изменений
            </p>
            <p className="text-sm text-textMuted">
              ⚠️ Только чтение данных — никакой торговой логики, только синхронизация информации
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 text-center">
          <p className="text-base text-textPrimary">
            <strong className="text-navy">Зачем это важно:</strong> Актуальные данные счетов без ручного ввода — экономия времени и исключение ошибок
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
