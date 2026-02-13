import SlideLayout from "../SlideLayout";
import { Lock, Network, Eye, FileText } from "lucide-react";

export default function SlidePhase2Security() {
  return (
    <SlideLayout
      title="Этап 2: Безопасность и Аудит"
      subtitle="Готовность к проверкам регуляторов с первого дня"
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Lock className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Вход и защита</h3>
            <p className="text-textPrimary">
              Безопасная авторизация и шифрование данных
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Network className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">6-уровневая иерархия ролей</h3>
            <p className="text-textPrimary mb-3">
              От владельца системы до агента — чёткая структура подчинения
            </p>
            <div className="text-sm text-textMuted space-y-1 pl-3 border-l-2 border-blue-200">
              <div>1️⃣ Владелец → создаёт бренды</div>
              <div>2️⃣ Админ бренда → управляет брендом</div>
              <div>3️⃣ Менеджер по счетам → видит все офисы</div>
              <div>4️⃣ Менеджер смены → работает в офисе</div>
              <div>5️⃣ Менеджер → подчинён менеджеру смены</div>
              <div>6️⃣ Агент → подчинён менеджеру</div>
            </div>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Eye className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Ограничение видимости</h3>
            <p className="text-textPrimary">
              Каждый видит только свой бренд, свой офис, своих подчинённых — никакой утечки данных
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <FileText className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Полный журнал действий</h3>
            <p className="text-textPrimary">
              Записывается всё: вход, изменения данных, миграции, операции — полная прозрачность для аудита
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-base text-textPrimary">
            <strong className="text-navy">Зачем это важно:</strong> Регуляторы Forex требуют доказательств. С этой системой у вас всегда есть ответ на вопрос &ldquo;кто, что и когда делал&rdquo;
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
