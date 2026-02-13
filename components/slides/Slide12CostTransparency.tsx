import SlideLayout from "../SlideLayout";
import CalloutCard from "../CalloutCard";
import { DollarSign, Settings, Rocket, TestTube, Code } from "lucide-react";

export default function Slide12CostTransparency() {
  return (
    <SlideLayout
      title="Прозрачность расходов"
      subtitle="Вы всегда знаете, куда идут деньги"
    >
      <div className="space-y-5">
        <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 sm:p-5">
          <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <DollarSign className="text-accentBlue" size={18} />
            </div>
            Расходы на инфраструктуру
          </h3>
          <p className="text-base text-textPrimary mb-4">
            Четыре отдельные части для понятного учёта:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center text-sm">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-2">
                <Settings className="text-accentBlue" size={16} />
              </div>
              <div className="font-bold text-navy">Общие сервисы</div>
              <div className="text-xs text-textMuted">Для всех</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-2">
                <Rocket className="text-accentBlue" size={16} />
              </div>
              <div className="font-bold text-navy">Рабочая среда</div>
              <div className="text-xs text-textMuted">Клиенты</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-2">
                <TestTube className="text-accentBlue" size={16} />
              </div>
              <div className="font-bold text-navy">Тестовая среда</div>
              <div className="text-xs text-textMuted">Проверка</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-2">
                <Code className="text-accentBlue" size={16} />
              </div>
              <div className="font-bold text-navy">Среда разработка</div>
              <div className="text-xs text-textMuted">Команда</div>
            </div>
          </div>
        </div>

        <CalloutCard showLabel={false} type="cost" title="Примерные месячные расходы (базовая версия)">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Общие сервисы:</span>
              <span className="font-bold">~$538 / месяц</span>
            </div>
            <div className="flex justify-between">
              <span>Рабочая среда:</span>
              <span className="font-bold">~$719 / месяц</span>
            </div>
            <div className="flex justify-between">
              <span>Тестовая среда 1 (рабочие мощности):</span>
              <span className="font-bold">~$629 / месяц</span>
            </div>
            <div className="flex justify-between">
              <span>Тестовая среда 2 (ограниченные мощности, дешевле):</span>
              <span className="font-bold">~$230 / месяц</span>
            </div>
            <div className="flex justify-between">
              <span>Среда разработки:</span>
              <span className="font-bold">~$120 / месяц</span>
            </div>
            <div className="border-t-2 border-green-300 pt-2 mt-2 flex justify-between text-base">
              <span className="font-bold">Итого (тестовая среда 1):</span>
              <span className="font-bold text-darkGreen">~$2,006 / месяц</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="font-bold">Итого (тестовая среда 2):</span>
              <span className="font-bold text-darkGreen">~$1,607 / месяц</span>
            </div>
          </div>
        </CalloutCard>

        <CalloutCard type="cost" showLabel={false} title="Переменные расходы">
          <p className="text-sm">
            Расходы меняются в зависимости от трафика, объёма логов и передачи данных. 
            Точные цифры подтверждаются после запуска рабочей системы.
          </p>
        </CalloutCard>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 text-center">
          <p className="text-sm sm:text-base text-navy font-semibold">
            Каждый месяц получаете подробные сведения о затратах
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
