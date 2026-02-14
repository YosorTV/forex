import SlideLayout from "../SlideLayout";

export default function Slide01Title() {
  return (
    <SlideLayout
      title={
        <>
          Создание
          <br className="sm:hidden" />
          {" "}Forex CRM системы
        </>
      }
      subtitle="Безопасность данных, прозрачная экономика, управляемый запуск"
    >
      <div className="mt-4 sm:mt-8 md:mt-12 text-center space-y-4 sm:space-y-6 md:space-y-8">
        <div className="text-sm sm:text-base md:text-xl text-textPrimary font-light mb-2 sm:mb-4">
          Собственная Forex CRM как операционный актив с предсказуемой отдачей
        </div>
        
        <div className="my-4 sm:my-6 md:my-8 stagger-children">
          {/* KPI-блок: на мобілці — колонка на всю ширину, з sm — ряд з + и = */}
          <div className="flex w-full flex-col gap-2 sm:grid sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-stretch sm:gap-3 md:gap-4">
            <div className="w-full rounded-lg border border-slate-300/80 bg-white/70 px-3 py-3 text-center shadow-sm sm:rounded-xl sm:px-4 sm:py-4">
              <div className="text-xl font-bold text-navy sm:text-2xl md:text-3xl">5</div>
              <p className="mt-1 text-xs font-semibold text-textPrimary leading-tight sm:text-sm">
                Senior-команда
              </p>
            </div>

            <div className="hidden sm:flex items-center justify-center text-navy text-xl font-light px-1 md:text-2xl" aria-hidden>
              +
            </div>

            <div className="w-full rounded-lg border border-slate-300/80 bg-white/70 px-3 py-3 text-center shadow-sm sm:rounded-xl sm:px-4 sm:py-4">
              <div className="text-xl font-bold text-darkGreen sm:text-2xl md:text-3xl">$</div>
              <p className="mt-1 text-xs font-semibold text-textPrimary leading-tight sm:text-sm">
                Фиксированный бюджет
              </p>
            </div>

            <div className="hidden sm:flex items-center justify-center text-navy text-xl font-light px-1 md:text-2xl" aria-hidden>
              =
            </div>

            <div className="w-full rounded-lg border border-slate-300/80 bg-white/70 px-3 py-3 text-center shadow-sm sm:rounded-xl sm:px-4 sm:py-4">
              <div className="text-xl font-bold text-accentBlue sm:text-2xl md:text-3xl">✓</div>
              <p className="mt-1 text-xs font-semibold text-textPrimary leading-tight sm:text-sm">
                Полная прозрачность
              </p>
            </div>
          </div>
        </div>

        <div className="stagger-children">
          <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-300/80 bg-white/70 px-3 py-2 text-xs text-textPrimary font-medium sm:inline-flex sm:w-auto sm:max-w-full sm:flex-row sm:gap-0 sm:px-5 sm:py-3 sm:text-sm md:text-base">
            <span className="text-center sm:whitespace-nowrap">MVP: 20-26 недель</span>
            <span className="hidden sm:inline mx-2 text-slate-400" aria-hidden> | </span>
            <span className="text-center sm:whitespace-nowrap">Поэтапная оплата</span>
            <span className="hidden sm:inline mx-2 text-slate-400" aria-hidden> | </span>
            <span className="text-center sm:whitespace-nowrap">Прозрачная отчетность</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
