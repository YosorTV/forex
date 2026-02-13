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
          {/* Мобільна версія: кожен круг з підписом зразу під ним, + та = менші */}
          <div className="flex sm:hidden flex-col items-center gap-4">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-navy to-accentBlue rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-card mb-2">
                5
              </div>
              <p className="text-xs font-semibold text-textPrimary">Специалистов<br/>в команде</p>
            </div>
            <div className="flex items-center justify-center text-navy text-lg font-light w-8 h-8">+</div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-darkGreen to-accentTeal rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-card mb-2">
                $
              </div>
              <p className="text-xs font-semibold text-textPrimary">Предсказуемые<br/>затраты</p>
            </div>
            <div className="flex items-center justify-center text-navy text-lg font-light w-8 h-8">=</div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-accentBlue to-accentTeal rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-card mb-2">
                ✓
              </div>
              <p className="text-xs font-semibold text-textPrimary">Полная<br/>прозрачность</p>
            </div>
          </div>

          {/* Десктоп: два ряди — круги/знаки, потім підписи */}
          <div className="hidden sm:block">
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-5 md:gap-8">
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
            </div>
            <div className="flex flex-row justify-center items-center gap-4 sm:gap-5 md:gap-8 mt-2 sm:mt-3">
              <p className="text-xs sm:text-sm font-semibold text-textPrimary text-center w-14 sm:w-20 md:w-24 flex-shrink-0">Специалистов<br/>в команде</p>
              <div className="w-20 md:w-24 flex-shrink-0" aria-hidden />
              <p className="text-xs sm:text-sm font-semibold text-textPrimary text-center w-14 sm:w-20 md:w-24 flex-shrink-0">Предсказуемые<br/>затраты</p>
              <div className="w-20 md:w-24 flex-shrink-0" aria-hidden />
              <p className="text-xs sm:text-sm font-semibold text-textPrimary text-center w-14 sm:w-20 md:w-24 flex-shrink-0">Полная<br/>прозрачность</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base stagger-children">
          <div className="bg-gradient-to-r from-navy to-accentBlue text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl">
            🧙‍♂️ Команда из 5 человек
          </div>
          <div className="bg-gradient-to-r from-darkGreen to-accentTeal text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl">
            💰 Понятные расходы
          </div>
          <div className="bg-gradient-to-r from-accentBlue to-accentTeal text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl">
            📊 Видите весь процесс
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
