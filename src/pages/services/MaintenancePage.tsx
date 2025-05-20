
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaintenancePlans = [
  {
    title: 'Базовый',
    price: 3500,
    period: 'месяц',
    features: [
      'Ежемесячный осмотр оборудования',
      'Проверка работы системы',
      'Очистка оптических элементов',
      'Телефонная поддержка',
      'Время реакции: 24 часа',
    ],
    recommended: false,
  },
  {
    title: 'Стандартный',
    price: 5500,
    period: 'месяц',
    features: [
      'Все услуги Базового плана',
      'Два осмотра в месяц',
      'Замена неисправных элементов',
      'Обновление ПО',
      'Время реакции: 12 часов',
    ],
    recommended: true,
  },
  {
    title: 'Премиум',
    price: 9900,
    period: 'месяц',
    features: [
      'Все услуги Стандартного плана',
      'Еженедельный осмотр',
      'Неограниченное количество выездов',
      'Приоритетное обслуживание',
      'Время реакции: 4 часа',
    ],
    recommended: false,
  },
];

const MaintenancePage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-guard-DEFAULT to-guard-dark text-white py-12">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Техническое обслуживание</h1>
            <p className="text-lg text-gray-200">
              Профессиональное обслуживание систем безопасности для обеспечения их надежной и бесперебойной работы
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему важно техническое обслуживание</h2>
            <p className="text-lg text-gray-600">
              Регулярное техническое обслуживание систем безопасности – залог их эффективной и долговечной работы. 
              Своевременное обнаружение и устранение неисправностей поможет избежать сбоев в работе и дорогостоящего ремонта.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-guard-light rounded-full mb-4">
                <Settings className="h-8 w-8 text-guard-DEFAULT" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Профилактика</h3>
              <p className="text-gray-600">
                Предотвращение возможных неисправностей и сбоев в работе системы безопасности
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-guard-light rounded-full mb-4">
                <Settings className="h-8 w-8 text-guard-DEFAULT" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Оперативность</h3>
              <p className="text-gray-600">
                Быстрое реагирование и устранение возникших неисправностей квалифицированными специалистами
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center bg-guard-light rounded-full mb-4">
                <Settings className="h-8 w-8 text-guard-DEFAULT" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Экономия</h3>
              <p className="text-gray-600">
                Снижение затрат на ремонт и замену оборудования благодаря своевременному обслуживанию
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-lg text-gray-600">
              Выберите подходящий тарифный план для обслуживания вашей системы безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MaintenancePlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`${plan.recommended ? 'border-guard-accent shadow-lg relative' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-guard-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Рекомендуемый
                    </span>
                  </div>
                )}
                <CardHeader className={plan.recommended ? 'pt-8' : ''}>
                  <CardTitle className="text-2xl font-bold text-center">{plan.title}</CardTitle>
                  <div className="text-center mt-2">
                    <span className="text-3xl font-bold">{plan.price.toLocaleString()} ₽</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.recommended ? 'bg-guard-accent hover:bg-guard-accent/90' : ''}`}
                    asChild
                  >
                    <Link to="/contacts">Заказать</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Процесс обслуживания</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-guard-DEFAULT text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Заявка на обслуживание</h3>
                  <p className="text-gray-600">
                    Оформите заявку на техническое обслуживание, указав тип системы, количество оборудования и адрес объекта.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-guard-DEFAULT text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Осмотр системы</h3>
                  <p className="text-gray-600">
                    Наш специалист проведет осмотр вашей системы безопасности, определит ее состояние и необходимые работы.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-guard-DEFAULT text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Заключение договора</h3>
                  <p className="text-gray-600">
                    После осмотра мы предложим оптимальный тарифный план и заключим договор на техническое обслуживание.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-guard-DEFAULT text-white flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Регулярное обслуживание</h3>
                  <p className="text-gray-600">
                    Согласно выбранному плану, наши специалисты будут регулярно проводить техническое обслуживание вашей системы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы заказать обслуживание?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Свяжитесь с нами для получения консультации и оформления заявки на техническое обслуживание
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contacts">Оставить заявку</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Другие услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaintenancePage;
