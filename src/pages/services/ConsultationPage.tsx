
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, PhoneCall, FileText, Users } from 'lucide-react';

const ConsultationPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Консультации по безопасности</h1>
            <p className="text-lg text-gray-200">
              Профессиональные рекомендации и экспертная оценка для эффективной защиты вашего объекта
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="guard-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Экспертная консультация — основа эффективной безопасности</h2>
              <p className="text-gray-600 mb-4">
                Каждый объект уникален и требует индивидуального подхода к организации системы безопасности.
                Наши эксперты помогут определить оптимальный набор средств защиты, оценить существующие 
                уязвимости и разработать эффективную стратегию обеспечения безопасности.
              </p>
              <p className="text-gray-600 mb-6">
                Мы предлагаем консультации как для новых проектов, так и для аудита и улучшения существующих
                систем безопасности в жилых, коммерческих и промышленных объектах любой сложности.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Опытные специалисты</h3>
                    <p className="text-gray-600">Консультанты с опытом от 10 лет в сфере безопасности</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Индивидуальный подход</h3>
                    <p className="text-gray-600">Учитываем особенности объекта и ваши требования</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Независимая оценка</h3>
                    <p className="text-gray-600">Объективные рекомендации без привязки к определённым производителям</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3"
                alt="Консультации по безопасности"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши консультационные услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="rounded-full bg-[#0F3460]/10 h-12 w-12 flex items-center justify-center mb-4">
                <PhoneCall className="h-6 w-6 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Онлайн-консультации</h3>
              <p className="text-gray-600">
                Удаленная консультация по видеосвязи для оценки потребностей и предоставления
                базовых рекомендаций по системам безопасности.
              </p>
              <div className="mt-4">
                <p className="font-semibold">От 3000 ₽</p>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#0F3460]/10 h-12 w-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Выездная консультация</h3>
              <p className="text-gray-600">
                Визит специалиста на объект для детальной оценки требований безопасности,
                анализа уязвимостей и разработки конкретных рекомендаций.
              </p>
              <div className="mt-4">
                <p className="font-semibold">От 8000 ₽</p>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#0F3460]/10 h-12 w-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Комплексный аудит</h3>
              <p className="text-gray-600">
                Полная проверка существующих систем безопасности с подробным отчетом
                о состоянии, уязвимостях и рекомендациями по улучшению.
              </p>
              <div className="mt-4">
                <p className="font-semibold">От 15000 ₽</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Как проходит консультация</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="font-bold mt-4 mb-2">Заявка</h3>
              <p className="text-gray-600">Оформление заявки на консультацию через сайт или по телефону</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="font-bold mt-4 mb-2">Обсуждение</h3>
              <p className="text-gray-600">Первичная беседа для определения ваших потребностей и задач</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="font-bold mt-4 mb-2">Консультация</h3>
              <p className="text-gray-600">Проведение онлайн-консультации или выезд специалиста на объект</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0F3460] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                4
              </div>
              <h3 className="font-bold mt-4 mb-2">Рекомендации</h3>
              <p className="text-gray-600">Предоставление отчета с рекомендациями и вариантами решений</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-[#0F3460] text-white">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна консультация эксперта?</h2>
            <p className="text-lg mb-8">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время для организации консультации
            </p>
            <Button size="lg" className="bg-white text-[#0F3460] hover:bg-gray-100" asChild>
              <Link to="/contacts">Заказать консультацию</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
