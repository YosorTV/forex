import React from "react";
import SlideLayout from "../SlideLayout";
import { UserPlus, GitBranch, Shield } from "lucide-react";

export default function SlidePhase4Users() {
  return (
    <SlideLayout
      title="Этап 4: Пользователи и Иерархия"
      subtitle="Каждый видит только то, что должен"
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <UserPlus className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Создание пользователей по ролям</h3>
            <p className="text-textPrimary mb-3">
              Администратор бренда создаёт менеджеров. Менеджеры создают агентов. Каждый может создавать только нижестоящих
            </p>
            <p className="text-sm text-textMuted">
              Невозможно создать пользователя выше или вне своей иерархии
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <GitBranch className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Соблюдение иерархии</h3>
            <p className="text-textPrimary">
              Система автоматически проверяет, что пользователь не выходит за границы своего бренда или офиса
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Shield className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Ограничения по доступу</h3>
            <p className="text-textPrimary">
              Агент видит только клиентов своего офиса. Менеджер офиса не видит данные других офисов. Администратор бренда не видит другие бренды
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-base text-textPrimary">
            <strong className="text-navy">Зачем это важно:</strong> Защита данных и соблюдение регуляторных требований — каждый работает только со своими данными
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
