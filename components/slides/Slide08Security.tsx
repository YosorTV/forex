import SlideLayout from "../SlideLayout";
import CalloutCard from "../CalloutCard";
import { Shield } from "lucide-react";

export default function Slide08Security() {
  return (
    <SlideLayout
      title="Безопасность с первого дня"
      subtitle="Встроенная, а не добавленная потом"
    >
      <div className="bg-gradient-to-r from-navy to-accentBlue text-white p-6 rounded-2xl mb-6 flex items-center gap-4">
        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Shield size={28} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Стандарт безопасности для Forex</h3>
          <p className="text-blue-100">
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

      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
        <p className="text-lg font-semibold text-navy">
          Безопасность — не дополнение, а фундамент системы
        </p>
      </div>
    </SlideLayout>
  );
}
