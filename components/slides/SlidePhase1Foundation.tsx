import React from "react";
import SlideLayout from "../SlideLayout";
import { Server, Globe, Table, Palette } from "lucide-react";

export default function SlidePhase1Foundation() {
  return (
    <SlideLayout
      title="Этап 1: Фундамент платформы"
      subtitle="Архитектура, которая не потребует переделки"
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Server className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Серверная часть</h3>
            <p className="text-textPrimary">
              Центральное ядро системы с единым подходом к обработке запросов, ошибок и логирования
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Globe className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Пользовательский интерфейс</h3>
            <p className="text-textPrimary">
              Современное веб-приложение с защитой маршрутов и управлением состоянием
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Table className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Универсальные таблицы</h3>
            <p className="text-textPrimary">
              Мощные таблицы данных с сортировкой, фильтрацией и массовыми операциями
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Palette className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Система компонентов</h3>
            <p className="text-textPrimary">
              Готовые элементы интерфейса: кнопки, формы, модальные окна, которые используются повсюду
            </p>
          </div>
        </div>

        <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-5">
          <p className="text-base text-navy font-medium text-center">
            💡 Базовые сущности: Компании, Бренды, Офисы, Пользователи, Роли, Права, Журнал действий
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-base text-textPrimary">
            <strong className="text-navy">Зачем это важно:</strong> Правильный фундамент позволяет быстро добавлять новые возможности без переписывания кода
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
