import SlideLayout from "../SlideLayout";
import { Layers, Shield, Building2, Users, UserCircle, Wallet, DollarSign } from "lucide-react";

export default function SlidePhaseOverview() {
  return (
    <SlideLayout
      title="План создания системы"
      subtitle="7 этапов от фундамента до запуска"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/60 rounded-xl p-5 hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-accentBlue text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <Layers className="text-accentBlue" size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-1">Фундамент платформы</h3>
            <p className="text-sm text-textPrimary">Базовая архитектура, которая не потребует переделки</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 border border-indigo-200/60 rounded-xl p-5 hover:border-indigo-300 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <Shield className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-1">Безопасность и Аудит</h3>
            <p className="text-sm text-textPrimary">Контроль доступа и полный журнал действий</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 border border-cyan-200/60 rounded-xl p-5 hover:border-cyan-300 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <Building2 className="text-cyan-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-1">Бренды и Офисы</h3>
            <p className="text-sm text-textPrimary">Многобрендовая структура с офисами</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200/60 rounded-xl p-5 hover:border-teal-300 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#1b2a4a] text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <Users className="text-teal" size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-1">Пользователи и Иерархия</h3>
            <p className="text-sm text-textPrimary">Управление командой с контролем доступа</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/60 rounded-xl p-5 hover:border-emerald-300 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                5
              </div>
              <UserCircle className="text-emerald-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-1">Работа с Лидами</h3>
            <p className="text-sm text-textPrimary">Полный жизненный цикл клиента</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/60 rounded-xl p-5 hover:border-green-300 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-darkGreen text-white flex items-center justify-center font-bold text-sm">
                6
              </div>
              <Wallet className="text-darkGreen" size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-1">Счета и MetaTrader</h3>
            <p className="text-sm text-textPrimary">Торговые счета с автоматической синхронизацией</p>
          </div>

          <div className="md:col-span-2 bg-gradient-to-br from-lime-50 to-lime-100/50 border border-lime-200/60 rounded-xl p-5 hover:border-lime-300 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-lime-700 text-white flex items-center justify-center font-bold text-sm">
                7
              </div>
              <DollarSign className="text-lime-700" size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-1">Финансовый Модуль</h3>
            <p className="text-sm text-textPrimary">Пополнения и выводы с системой согласований</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-navy/5 to-darkGreen/5 border-2 border-navy/20 rounded-xl p-5 text-center">
          <p className="text-lg font-semibold text-navy mb-2">
            MVP = Все 7 этапов вместе
          </p>
          <p className="text-base text-textPrimary">
            К концу 6-го месяца вы получите полную рабочую систему со всеми модулями
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
