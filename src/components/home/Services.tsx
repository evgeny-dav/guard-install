
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera, Bell, Settings, Tool, FileText, Phone } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Camera className="h-10 w-10 text-guard-accent" />,
    title: 'Монтаж систем видеонаблюдения',
    description: 'Профессиональная установка камер видеонаблюдения с настройкой и запуском системы.',
    path: '/services/installation',
  },
  {
    icon: <Bell className="h-10 w-10 text-guard-accent" />,
    title: 'Монтаж пожарной сигнализации',
    description: 'Установка пожарной сигнализации в соответствии с нормативными требованиями.',
    path: '/services/installation',
  },
  {
    icon: <Settings className="h-10 w-10 text-guard-accent" />,
    title: 'Техническое обслуживание',
    description: 'Регулярное обслуживание и проверка работоспособности систем безопасности.',
    path: '/services/maintenance',
  },
  {
    icon: <FileText className="h-10 w-10 text-guard-accent" />,
    title: 'Проектирование систем',
    description: 'Разработка проектной документации для систем видеонаблюдения и пожарной сигнализации.',
    path: '/services/design',
  },
  {
    icon: <Tool className="h-10 w-10 text-guard-accent" />,
    title: 'Модернизация систем',
    description: 'Обновление и улучшение существующих систем безопасности.',
    path: '/services/modernization',
  },
  {
    icon: <Phone className="h-10 w-10 text-guard-accent" />,
    title: 'Консультации',
    description: 'Экспертные консультации по выбору и установке систем безопасности.',
    path: '/services/consultation',
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="guard-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600">
            Предоставляем полный спектр услуг по установке, обслуживанию и модернизации систем безопасности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {service.icon}
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to={service.path}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
