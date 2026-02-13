import React from "react";
import SlideLayout from "../SlideLayout";
import { Monitor, Server, Database, Shield } from "lucide-react";

export default function Slide10TechStack() {
  return (
    <SlideLayout
      title="Технологии (простым языком)"
      subtitle="Проверенные, надёжные, современные"
    >
      <div className="space-y-6">
        <div className="flex justify-center items-center gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-navy to-accentBlue rounded-xl flex items-center justify-center shadow-card">
              <Monitor className="text-white" size={32} />
            </div>
            <div className="text-sm mt-2 text-textMuted">Веб-сайт</div>
          </div>
          <div className="text-3xl text-navy font-light">+</div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-navy to-accentBlue rounded-xl flex items-center justify-center shadow-card">
              <Server className="text-white" size={32} />
            </div>
            <div className="text-sm mt-2 text-textMuted">Сервер</div>
          </div>
          <div className="text-3xl text-navy font-light">+</div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-navy to-accentBlue rounded-xl flex items-center justify-center shadow-card">
              <Database className="text-white" size={32} />
            </div>
            <div className="text-sm mt-2 text-textMuted">База данных</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base stagger-children">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Monitor className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Веб-интерфейс</h3>
            <ul className="space-y-2 text-textPrimary text-sm">
              <li>• Быстрая загрузка страниц</li>
              <li>• Работает на всех устройствах</li>
              <li>• Современный дизайн</li>
              <li>• Удобно пользоваться</li>
            </ul>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Server className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Серверная часть</h3>
            <ul className="space-y-2 text-textPrimary text-sm">
              <li>• Обрабатывает запросы</li>
              <li>• Защищает данные</li>
              <li>• Проверяет права доступа</li>
              <li>• Проверенная технология Microsoft</li>
            </ul>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Database className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Хранение данных</h3>
            <ul className="space-y-2 text-textPrimary text-sm">
              <li>• Все данные в безопасности</li>
              <li>• Быстрый поиск</li>
              <li>• Резервное копирование</li>
              <li>• Хранение документов</li>
            </ul>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
              <Shield className="text-accentBlue" size={20} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Инфраструктура</h3>
            <ul className="space-y-2 text-textPrimary text-sm">
              <li>• Защита от атак</li>
              <li>• Защищённое хранилище паролей</li>
              <li>• Мониторинг 24/7</li>
              <li>• Облако Microsoft Azure</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-base text-textPrimary">
            Используем только проверенные технологии от Microsoft — мирового лидера в финансовых системах
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
