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
      subtitle="Безопасность, Прозрачность, Контроль"
    >
      <div className="mt-4 sm:mt-8 md:mt-12 text-center space-y-4 sm:space-y-6 md:space-y-8">
        <div className="text-base sm:text-xl md:text-2xl text-textPrimary font-light mb-2 sm:mb-4">
          Профессиональный подход к разработке вашей личной платформы
        </div>
        
        <div className="my-4 sm:my-6 md:my-8 stagger-children">
          {/* Мобільна версія: іконка + відцентрований текст під нею, в один ряд */}
          <div className="sm:hidden flex flex-row flex-wrap justify-center items-start gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 flex-shrink-0 bg-gradient-to-br from-navy to-accentBlue rounded-full flex items-center justify-center text-white text-sm font-bold shadow-card">
                5
              </div>
              <p className="text-[10px] font-semibold text-textPrimary text-center leading-tight max-w-[72px]">Специалистов в команде</p>
            </div>
            <div className="h-9 flex items-center justify-center flex-shrink-0">
              <span className="text-navy text-xs font-light">+</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 flex-shrink-0 bg-gradient-to-br from-darkGreen to-accentTeal rounded-full flex items-center justify-center text-white text-sm font-bold shadow-card">
                $
              </div>
              <p className="text-[10px] font-semibold text-textPrimary text-center leading-tight max-w-[72px]">Предсказуемые затраты</p>
            </div>
            <div className="h-9 flex items-center justify-center flex-shrink-0">
              <span className="text-navy text-xs font-light">=</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 flex-shrink-0 bg-gradient-to-br from-accentBlue to-accentTeal rounded-full flex items-center justify-center text-white text-sm font-bold shadow-card">
                ✓
              </div>
              <p className="text-[10px] font-semibold text-textPrimary text-center leading-tight max-w-[72px]">Полная прозрачность</p>
            </div>
          </div>

          {/* Десктоп: сітка 5 колонок — круги/знаки і підписи строго по колонках */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-5 justify-items-center items-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1.5 sm:gap-y-2">
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 bg-gradient-to-br from-navy to-accentBlue rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold shadow-card">
                5
              </div>
              <div className="flex items-center justify-center text-navy text-2xl sm:text-3xl md:text-4xl font-light w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                +
              </div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 bg-gradient-to-br from-darkGreen to-accentTeal rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold shadow-card">
                $
              </div>
              <div className="flex items-center justify-center text-navy text-2xl sm:text-3xl md:text-4xl font-light w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                =
              </div>
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 bg-gradient-to-br from-accentBlue to-accentTeal rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold shadow-card">
                ✓
              </div>
              <p className="text-xs sm:text-sm font-semibold text-textPrimary text-center w-full max-w-[5rem] sm:max-w-20 md:max-w-24 mx-auto">Специалистов<br/>в команде</p>
              <div aria-hidden />
              <p className="text-xs sm:text-sm font-semibold text-textPrimary text-center w-full max-w-[5rem] sm:max-w-20 md:max-w-24 mx-auto">Предсказуемые<br/>затраты</p>
              <div aria-hidden />
              <p className="text-xs sm:text-sm font-semibold text-textPrimary text-center w-full max-w-[5rem] sm:max-w-20 md:max-w-24 mx-auto">Полная<br/>прозрачность</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 sm:gap-3 text-xs sm:text-sm sm:text-base stagger-children">
          <div className="bg-gradient-to-r from-navy to-accentBlue text-white px-2 py-1 sm:px-6 sm:py-3 rounded-md sm:rounded-lg sm:rounded-xl whitespace-nowrap">
            🧙‍♂️ Команда из 5 человек
          </div>
          <div className="bg-gradient-to-r from-darkGreen to-accentTeal text-white px-2 py-1 sm:px-6 sm:py-3 rounded-md sm:rounded-lg sm:rounded-xl whitespace-nowrap">
            💰 Понятные расходы
          </div>
          <div className="bg-gradient-to-r from-accentBlue to-accentTeal text-white px-2 py-1 sm:px-6 sm:py-3 rounded-md sm:rounded-lg sm:rounded-xl whitespace-nowrap">
            📊 Видите весь процесс
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
