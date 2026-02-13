import SlideLayout from "../SlideLayout";
import { Users, FileText, Wallet, Shield, Activity, BarChart3 } from "lucide-react";

export default function Slide04WhatWeBuild() {
  return (
    <SlideLayout
      title="Что мы создаём"
      subtitle="Простыми словами о вашей системе"
    >
      <div className="space-y-6">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-xl text-textPrimary leading-relaxed">
            Система управления клиентами и финансовыми операциями
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 mx-auto">
              <Users className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-center text-navy mb-2">Работа с клиентами</h4>
            <p className="text-sm text-textPrimary text-center">
              От первого контакта до заключения сделки. Вся история общения в одном месте
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 mx-auto">
              <FileText className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-center text-navy mb-2">Учёт клиентов</h4>
            <p className="text-sm text-textPrimary text-center">
              Данные, документы, история операций. Всё под рукой и хорошо организовано
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 mx-auto">
              <Wallet className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-center text-navy mb-2">Деньги</h4>
            <p className="text-sm text-textPrimary text-center">
              Пополнения и выводы с контролем и согласованием. Безопасно и прозрачно
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 mx-auto">
              <Shield className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-center text-navy mb-2">Права доступа</h4>
            <p className="text-sm text-textPrimary text-center">
              Каждый видит только то, что нужно для работы. Безопасность превыше всего
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 mx-auto">
              <Activity className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-center text-navy mb-2">Журнал действий</h4>
            <p className="text-sm text-textPrimary text-center">
              Кто, что и когда делал. Полная история для проверок и аудита
            </p>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 mx-auto">
              <BarChart3 className="text-accentBlue" size={20} />
            </div>
            <h4 className="font-bold text-center text-navy mb-2">Аналитика</h4>
            <p className="text-sm text-textPrimary text-center">
              Видите ключевые показатели, принимайте решения на основе данных
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-lg text-navy font-semibold">
            Всё готово для проверок регуляторов и защиты ваших денег
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
