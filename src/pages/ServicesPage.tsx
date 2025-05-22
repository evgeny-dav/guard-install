
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera, Bell, Settings, Wrench, FileText, Phone } from 'lucide-react';

const services = [
  {
    icon: <Camera className="h-16 w-16 text-guard-accent" />,
    title: 'Монтаж систем видеонаблюдения',
    description: 'Профессиональная установка камер видеонаблюдения с настройкой и запуском системы. Мы подберем оптимальную конфигурацию оборудования под ваши задачи и бюджет.',
    path: '/services/installation',
  },
  {
    icon: <Bell className="h-16 w-16 text-guard-accent" />,
    title: 'Монтаж пожарной сигнализации',
    description: 'Установка пожарной сигнализации в соответствии с нормативными требованиями. Наши специалисты выполнят все работы качественно и в срок.',
    path: '/services/installation',
  },
  {
    icon: <Settings className="h-16 w-16 text-guard-accent" />,
    title: 'Техническое обслуживание',
    description: 'Регулярное обслуживание и проверка работоспособности систем безопасности. Оперативное реагирование на неисправности и своевременный ремонт.',
    path: '/services/maintenance',
  },
  {
    icon: <FileText className="h-16 w-16 text-guard-accent" />,
    title: 'Проектирование систем',
    description: 'Разработка проектной документации для систем видеонаблюдения и пожарной сигнализации. Индивидуальный подход к каждому объекту.',
    path: '/services/design',
  },
  {
    icon: <Wrench className="h-16 w-16 text-guard-accent" />,
    title: 'Модернизация систем',
    description: 'Обновление и улучшение существующих систем безопасности. Повышение эффективности работы и расширение функциональных возможностей.',
    path: '/services/modernization',
  },
  {
    icon: <Phone className="h-16 w-16 text-guard-accent" />,
    title: 'Консультации',
    description: 'Экспертные консультации по выбору и установке систем безопасности. Помощь в решении сложных технических вопросов.',
    path: '/services/consultation',
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
            <p className="text-lg text-gray-100">
              Предлагаем полный спектр услуг в сфере систем видеонаблюдения и пожарной сигнализации.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="guard-container">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
                <div className="md:w-1/3 flex justify-center">
                  <div className="p-6 rounded-full bg-gray-100">{service.icon}</div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  <Button asChild>
                    <Link to={service.path}>Подробнее</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна консультация?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости услуг
            </p>
            <Button asChild size="lg">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
