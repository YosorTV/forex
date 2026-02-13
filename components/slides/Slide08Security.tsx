import SlideLayout from "../SlideLayout";
import CalloutCard from "../CalloutCard";
import { Shield } from "lucide-react";

export default function Slide08Security() {
  return (
    <SlideLayout
      title="Безопасность с первого дня"
      subtitle="Встроенная, а не добавленная потом"
    >
      <div className="bg-gradient-to-r from-navy to-accentBlue text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
          <Shield size={24} />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-bold mb-1">Стандарт безопасности для Forex</h3>
          <p className="text-blue-100 text-sm sm:text-base">
            Каждый элемент создан с учётом проверок и требований регуляторов
          </p>
        </div>
      </div>

      <div className="space-y-4 stagger-children">
        <CalloutCard showLabel={false} type="control" title="Безопасность данных">
          <p>Хранение файлов и баз данных в зашифрованном формате</p>
        </CalloutCard>

        <CalloutCard showLabel={false} type="control" title="Защита периметра">
          <p>Система защиты от атак, взломов и несанкционированного доступа работает 24/7</p>
        </CalloutCard>

        <CalloutCard showLabel={false} type="control" title="Управление секретами">
          <p>Все пароли и ключи хранятся в специальном защищённом хранилище, не в коде</p>
        </CalloutCard>

        <CalloutCard showLabel={false} type="control" title="Мониторинг и оповещения">
          <p>Система следит за ошибками, проблемами и подозрительной активностью в реальном времени</p>
        </CalloutCard>
      </div>

      <div className="mt-4 sm:mt-6 bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 text-center">
        <p className="text-base sm:text-lg font-semibold text-navy">
          Безопасность — не дополнение, а фундамент системы
        </p>
      </div>
    </SlideLayout>
  );
}
