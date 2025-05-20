
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ModernizationPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Модернизация систем безопасности</h1>
            <p className="text-lg text-gray-200">
              Обновление и улучшение существующих систем для повышения их эффективности и надежности
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="guard-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Зачем нужна модернизация систем безопасности?</h2>
              <p className="text-gray-600 mb-4">
                С течением времени системы безопасности морально и технически устаревают, снижается их 
                эффективность и надежность. Модернизация позволяет вдохнуть новую жизнь в существующие 
                системы, повысить их функциональность и улучшить характеристики.
              </p>
              <p className="text-gray-600 mb-6">
                Наша компания предлагает комплексные решения по модернизации систем видеонаблюдения,
                пожарной сигнализации, контроля доступа и других систем безопасности с максимальным 
                сохранением существующей инфраструктуры.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Экономия средств</h3>
                    <p className="text-gray-600">Частичное использование существующего оборудования и кабельных трасс</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Минимум простоя</h3>
                    <p className="text-gray-600">Модернизация без длительной остановки работы системы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Поэтапное обновление</h3>
                    <p className="text-gray-600">Возможность распределить затраты по времени</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1594964644661-7225b7fd5f38?ixlib=rb-4.0.3"
                alt="Модернизация систем безопасности"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Что мы модернизируем</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Системы видеонаблюдения</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Замена аналоговых камер на IP</li>
                <li>Интеграция с системами аналитики</li>
                <li>Переход на облачное хранение данных</li>
                <li>Добавление распознавания лиц и номеров</li>
              </ul>
              <Button variant="outline" className="mt-2" asChild>
                <Link to="/services">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Пожарные системы</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Переход на адресные системы</li>
                <li>Модернизация системы оповещения</li>
                <li>Интеграция с умным домом/зданием</li>
                <li>Обновление средств пожаротушения</li>
              </ul>
              <Button variant="outline" className="mt-2" asChild>
                <Link to="/services">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Системы контроля доступа</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Переход на биометрические системы</li>
                <li>Бесконтактные решения доступа</li>
                <li>Интеграция с видеонаблюдением</li>
                <li>Повышение уровня защиты данных</li>
              </ul>
              <Button variant="outline" className="mt-2" asChild>
                <Link to="/services">Подробнее <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Процесс модернизации</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="font-bold mt-4 mb-2">Аудит системы</h3>
              <p className="text-gray-600">Оценка текущего состояния и возможностей модернизации</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="font-bold mt-4 mb-2">Проектирование</h3>
              <p className="text-gray-600">Разработка проекта модернизации с несколькими вариантами</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="font-bold mt-4 mb-2">Реализация</h3>
              <p className="text-gray-600">Поэтапная модернизация с минимальными простоями</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                4
              </div>
              <h3 className="font-bold mt-4 mb-2">Тестирование</h3>
              <p className="text-gray-600">Проверка и настройка обновленной системы</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-[#0F3460] text-white">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы модернизировать вашу систему безопасности?</h2>
            <p className="text-lg mb-8">
              Свяжитесь с нами для проведения бесплатного аудита и получения предложения по модернизации
            </p>
            <Button size="lg" className="bg-white text-[#0F3460] hover:bg-gray-100" asChild>
              <Link to="/contacts">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernizationPage;
