
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ClipboardCheck, Clock, Wrench, AlertCircle, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MaintenancePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    systemType: '',
    date: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // В реальном приложении здесь был бы API-запрос
    console.log('Form submitted:', formData);
    
    toast({
      title: 'Заявка успешно отправлена',
      description: 'Наш специалист свяжется с вами для уточнения деталей',
    });
    
    // Очистка формы
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      systemType: '',
      date: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Техническое обслуживание</h1>
            <p className="text-lg text-gray-200">
              Профессиональное обслуживание систем безопасности для обеспечения их надежной работы
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-12">
        <div className="guard-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Почему техническое обслуживание необходимо?</h2>
              <p className="text-gray-600 mb-4">
                Регулярное техническое обслуживание систем безопасности — это гарантия их бесперебойной работы и долговечности.
                Даже самое качественное оборудование требует периодической профилактики, проверки и настройки.
              </p>
              <p className="text-gray-600 mb-6">
                Наши специалисты помогут предотвратить возможные неисправности, а также оперативно устранить возникшие проблемы,
                обеспечивая постоянную работоспособность ваших систем видеонаблюдения и пожарной сигнализации.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Увеличение срока службы оборудования</h3>
                    <p className="text-gray-600">Регулярное обслуживание значительно продлевает срок эксплуатации систем безопасности</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Минимизация рисков</h3>
                    <p className="text-gray-600">Своевременное выявление и устранение неисправностей предотвращает сбои в работе системы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Соблюдение нормативных требований</h3>
                    <p className="text-gray-600">Регулярное обслуживание систем пожарной безопасности — требование законодательства</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-4.0.3"
                alt="Техническое обслуживание систем безопасности"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-12 bg-gray-50">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Виды технического обслуживания</h2>
          
          <Tabs defaultValue="regular">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="regular">Регулярное ТО</TabsTrigger>
              <TabsTrigger value="emergency">Экстренные выезды</TabsTrigger>
              <TabsTrigger value="diagnostic">Диагностика</TabsTrigger>
            </TabsList>
            
            <TabsContent value="regular" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-[#E94560]" />
                    Регулярное техническое обслуживание
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Плановое техническое обслуживание проводится по заранее согласованному графику и включает в себя комплекс
                    работ по проверке, настройке и профилактике систем безопасности.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Видеонаблюдение</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Очистка камер и объективов</li>
                        <li>Проверка крепления и регулировка положения камер</li>
                        <li>Проверка работоспособности регистраторов</li>
                        <li>Проверка качества записи и настройка параметров</li>
                        <li>Обновление программного обеспечения</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Пожарная сигнализация</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Проверка работоспособности извещателей</li>
                        <li>Тестирование приемно-контрольных приборов</li>
                        <li>Проверка линий связи и электропитания</li>
                        <li>Проверка системы оповещения</li>
                        <li>Составление актов проверки</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href="#order-form">Заказать обслуживание</a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="emergency" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-[#E94560]" />
                    Экстренные выезды при неисправностях
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    В случае возникновения неисправностей или сбоев в работе системы безопасности наши специалисты готовы оперативно
                    выехать на объект для диагностики и устранения проблемы.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Возможные неисправности</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Отсутствие сигнала с камер</li>
                        <li>Сбои в работе регистраторов</li>
                        <li>Ложные срабатывания датчиков</li>
                        <li>Неисправности блоков питания</li>
                        <li>Проблемы с передачей данных</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Преимущества</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Быстрое реагирование (от 2 часов)</li>
                        <li>Наличие запасных частей и оборудования</li>
                        <li>Выполнение работ в любое время</li>
                        <li>Гарантия на выполненные работы</li>
                        <li>Подробный отчет о проделанной работе</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href="#order-form">Вызвать специалиста</a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="diagnostic" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardCheck className="h-6 w-6 text-[#E94560]" />
                    Диагностика и аудит систем безопасности
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Комплексная проверка систем безопасности для оценки их состояния, выявления потенциальных проблем и
                    формирования рекомендаций по модернизации или оптимизации.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Что включает аудит</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Оценка состояния оборудования</li>
                        <li>Проверка соответствия нормативам</li>
                        <li>Анализ эффективности системы</li>
                        <li>Выявление уязвимостей</li>
                        <li>Проверка настроек и конфигурации</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2">Результаты</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Подробный отчет о состоянии системы</li>
                        <li>Рекомендации по устранению недостатков</li>
                        <li>Предложения по модернизации</li>
                        <li>Оценка соответствия требованиям</li>
                        <li>План технического обслуживания</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href="#order-form">Заказать аудит</a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-12">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Пакеты технического обслуживания</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Базовый</CardTitle>
                <p className="text-2xl font-bold mt-2">от 5,000 ₽/мес</p>
                <p className="text-sm text-gray-500">для небольших объектов</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ежемесячный визит специалиста</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Проверка работоспособности системы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Очистка оборудования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Базовая настройка</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#order-form">Выбрать</a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="flex flex-col border-[#0F3460] shadow-lg relative">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-[#0F3460] text-white px-4 py-1 rounded-full text-sm font-medium">Популярный</span>
              </div>
              <CardHeader>
                <CardTitle>Стандартный</CardTitle>
                <p className="text-2xl font-bold mt-2">от 10,000 ₽/мес</p>
                <p className="text-sm text-gray-500">для средних объектов</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Два визита специалиста в месяц</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Полная проверка оборудования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Очистка и профилактика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Обновление ПО</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Один экстренный выезд в месяц</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0F3460] hover:bg-[#0F3460]/90" asChild>
                  <a href="#order-form">Выбрать</a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Премиум</CardTitle>
                <p className="text-2xl font-bold mt-2">от 20,000 ₽/мес</p>
                <p className="text-sm text-gray-500">для крупных объектов</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Еженедельные визиты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Комплексная диагностика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Неограниченные экстренные выезды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Приоритетное обслуживание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ежемесячный отчет о состоянии</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#order-form">Выбрать</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order-form" className="py-12 bg-gray-50">
        <div className="guard-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Заказать техническое обслуживание</h2>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Адрес объекта *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="systemType" className="block text-sm font-medium text-gray-700 mb-1">
                        Тип системы *
                      </label>
                      <Select 
                        value={formData.systemType} 
                        onValueChange={(value) => handleSelectChange('systemType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип системы" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Видеонаблюдение</SelectItem>
                          <SelectItem value="fire">Пожарная сигнализация</SelectItem>
                          <SelectItem value="access">Система контроля доступа</SelectItem>
                          <SelectItem value="combined">Комплексная система</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Предпочтительная дата
                      </label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Дополнительная информация
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Опишите вашу систему и проблемы, с которыми вы столкнулись"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="w-full md:w-auto">
                      Отправить заявку
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;
