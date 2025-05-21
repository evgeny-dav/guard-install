
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Bell, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstallationPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Монтаж систем безопасности</h1>
            <p className="text-lg text-gray-200">
              Профессиональная установка систем видеонаблюдения и пожарной сигнализации
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="guard-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Качественный монтаж - основа надежной системы безопасности</h2>
              <p className="text-gray-600 mb-4">
                Профессиональный монтаж систем безопасности является ключевым фактором их эффективной работы. 
                Наша компания специализируется на установке видеонаблюдения и пожарной сигнализации с соблюдением всех 
                технических требований и нормативов.
              </p>
              <p className="text-gray-600 mb-6">
                Мы выполняем полный цикл работ: от проектирования и подбора оборудования до монтажа, настройки и запуска 
                системы в эксплуатацию. Наши специалисты имеют все необходимые сертификаты и многолетний опыт работы.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Соблюдение нормативов</h3>
                    <p className="text-gray-600">Установка в соответствии с требованиями ГОСТ и СНиП</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Гарантия на работы</h3>
                    <p className="text-gray-600">Предоставляем гарантию на все выполненные работы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Опытные специалисты</h3>
                    <p className="text-gray-600">В нашей команде только сертифицированные инженеры</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://impsa.ru/upload/iblock/1b8/картинка-для-монтажа.webp"
                alt="Монтаж систем безопасности"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши услуги по монтажу</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://s2.stc.all.kpcdn.net/expert/wp-content/uploads/2023/04/videonablyudenie.jpg" 
                  alt="Монтаж видеонаблюдения" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Camera className="h-6 w-6 text-[#E94560]" />
                  <h3 className="text-xl font-bold">Монтаж систем видеонаблюдения</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Установка камер внутреннего и наружного видеонаблюдения для жилых и коммерческих объектов.
                  Настройка записи и хранения видео, удаленного доступа через интернет.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Включает в себя:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Монтаж и крепление камер</li>
                    <li>Прокладка кабельных трасс</li>
                    <li>Установка и настройка регистраторов</li>
                    <li>Настройка удаленного доступа</li>
                    <li>Обучение пользователей работе с системой</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://media.istockphoto.com/id/1707812169/ru/фото/установка-домашнего-детектора-дыма-и-пожарной-сигнализации-проверка-тестирование-или-замена.jpg?s=612x612&w=0&k=20&c=e_VJiiKCqpUo2Y5jgRWjH2XPeWKe1BkAVldBB3dg8Po=" 
                  alt="Монтаж пожарной сигнализации" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Bell className="h-6 w-6 text-[#E94560]" />
                  <h3 className="text-xl font-bold">Монтаж пожарной сигнализации</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Установка пожарной сигнализации в соответствии с нормативными требованиями. Интеграция с системами 
                  оповещения и пожаротушения.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Включает в себя:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Монтаж пожарных извещателей</li>
                    <li>Установка приемно-контрольных приборов</li>
                    <li>Прокладка кабельных линий</li>
                    <li>Настройка системы оповещения</li>
                    <li>Сдача системы в эксплуатацию</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <a href="#contact-form">Заказать монтаж</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Процесс работы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="font-bold mt-4 mb-2">Консультация</h3>
              <p className="text-gray-600">Бесплатная консультация и выезд специалиста на объект</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="font-bold mt-4 mb-2">Проектирование</h3>
              <p className="text-gray-600">Разработка проекта и спецификации оборудования</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="font-bold mt-4 mb-2">Монтаж</h3>
              <p className="text-gray-600">Профессиональная установка оборудования</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                4
              </div>
              <h3 className="font-bold mt-4 mb-2">Настройка</h3>
              <p className="text-gray-600">Настройка и тестирование системы, обучение персонала</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-12 bg-gray-50">
        <div className="guard-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы обеспечить безопасность?</h2>
            <p className="text-gray-600 mb-8">
              Оставьте заявку, и наш специалист свяжется с вами для консультации и расчета стоимости
            </p>
            <Button size="lg" asChild>
              <Link to="/contacts">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstallationPage;
