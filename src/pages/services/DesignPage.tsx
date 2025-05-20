
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, LayoutIcon, Ruler } from 'lucide-react';

const DesignPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Проектирование систем безопасности</h1>
            <p className="text-lg text-gray-200">
              Профессиональная разработка проектной документации для систем видеонаблюдения и пожарной сигнализации
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="guard-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Грамотное проектирование - залог эффективности системы</h2>
              <p className="text-gray-600 mb-4">
                Проектирование систем безопасности - важнейший этап создания надежной защиты. Наша компания выполняет 
                профессиональную разработку проектов систем видеонаблюдения и пожарной сигнализации с учетом всех 
                особенностей объекта и требований заказчика.
              </p>
              <p className="text-gray-600 mb-6">
                Наши проектировщики имеют многолетний опыт и все необходимые допуски для разработки проектной документации.
                Мы учитываем нормативные требования, особенности объекта и бюджет заказчика, предлагая оптимальные решения.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Соответствие нормативам</h3>
                    <p className="text-gray-600">Проекты полностью соответствуют требованиям ГОСТ, СП и других нормативов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Детальная документация</h3>
                    <p className="text-gray-600">Полный комплект чертежей, спецификаций и расчетов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Оптимизация затрат</h3>
                    <p className="text-gray-600">Проекты с оптимальным соотношением цены и качества</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092335337-9ef71f76bc6f?ixlib=rb-4.0.3"
                alt="Проектирование систем безопасности"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Что включает проектирование</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="rounded-full bg-[#0F3460]/10 h-12 w-12 flex items-center justify-center mb-4">
                <Ruler className="h-6 w-6 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Обследование объекта</h3>
              <p className="text-gray-600">
                Детальное обследование объекта, определение уязвимых мест, анализ требований заказчика и 
                нормативных документов, формирование технического задания.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#0F3460]/10 h-12 w-12 flex items-center justify-center mb-4">
                <LayoutIcon className="h-6 w-6 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Разработка проекта</h3>
              <p className="text-gray-600">
                Создание схем расположения оборудования, расчет кабельных трасс, выбор оптимального оборудования,
                расчет нагрузок и ёмкости системы.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="rounded-full bg-[#0F3460]/10 h-12 w-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Документация</h3>
              <p className="text-gray-600">
                Подготовка полного комплекта проектной документации, включая пояснительную записку, 
                планы расположения, спецификации, сметы и рекомендации по монтажу.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Виды проектируемых систем</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579118246034-d02130ae3f9a?ixlib=rb-4.0.3" 
                alt="Видеонаблюдение" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Системы видеонаблюдения</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Аналоговые и IP-системы видеонаблюдения</li>
                  <li>Системы распознавания лиц и номеров</li>
                  <li>Интеллектуальные системы аналитики</li>
                  <li>Системы удаленного доступа и мониторинга</li>
                  <li>Интеграция с другими системами безопасности</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541992206525-3a5b154fcdb4?ixlib=rb-4.0.3" 
                alt="Пожарная сигнализация" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Пожарная сигнализация</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Системы пожарной сигнализации и оповещения</li>
                  <li>Автоматические системы пожаротушения</li>
                  <li>Системы дымоудаления и противопожарной вентиляции</li>
                  <li>Системы контроля и управления доступом (СКУД)</li>
                  <li>Интегрированные системы безопасности</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-[#0F3460] text-white">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать проектирование?</h2>
            <p className="text-lg mb-8">
              Свяжитесь с нами для консультации и оценки стоимости проектных работ
            </p>
            <Button size="lg" className="bg-white text-[#0F3460] hover:bg-gray-100" asChild>
              <Link to="/contacts">Заказать проектирование</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignPage;
