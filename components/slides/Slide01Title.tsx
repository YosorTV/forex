import SlideLayout from "../SlideLayout";

export default function Slide01Title() {
  return (
    <SlideLayout
      title="Создание Forex CRM системы"
      subtitle="Безопасность, Прозрачность, Контроль"
    >
      <div className="mt-12 text-center space-y-8">
        <div className="text-2xl text-textPrimary font-light mb-4">
          Профессиональный подход к разработке вашей личной платформы
        </div>
        
        <div className="flex justify-center items-center gap-8 my-8 stagger-children">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-navy to-accentBlue rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-card mb-3">
              5
            </div>
            <p className="text-sm font-semibold text-textPrimary">Специалистов<br/>в команде</p>
          </div>
          <div className="text-5xl text-navy font-light">+</div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-darkGreen to-accentTeal rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-card mb-3">
              $
            </div>
            <p className="text-sm font-semibold text-textPrimary">Предсказуемые<br/>затраты</p>
          </div>
          <div className="text-5xl text-navy font-light">=</div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accentBlue to-accentTeal rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-card mb-3">
              ✓
            </div>
            <p className="text-sm font-semibold text-textPrimary">Полная<br/>прозрачность</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-base stagger-children">
          <div className="bg-gradient-to-r from-navy to-accentBlue text-white px-6 py-3 rounded-xl">
            🧙‍♂️ Команда из 5 человек
          </div>
          <div className="bg-gradient-to-r from-darkGreen to-accentTeal text-white px-6 py-3 rounded-xl">
            💰 Понятные расходы
          </div>
          <div className="bg-gradient-to-r from-accentBlue to-accentTeal text-white px-6 py-3 rounded-xl">
            📊 Видите весь процесс
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
