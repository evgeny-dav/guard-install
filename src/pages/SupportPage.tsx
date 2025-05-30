
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, FileQuestion, MessageSquare, Phone, Mail, FileText, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SupportPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const { toast } = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support form submitted:', contactForm);
    
    toast({
      title: 'Обращение отправлено',
      description: 'Мы рассмотрим ваш запрос и ответим в ближайшее время',
    });
    
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  const faqs = [
    {
      question: 'Как оформить заказ на сайте?',
      answer: 'Для оформления заказа добавьте товары в корзину, перейдите в корзину, укажите количество товаров, заполните данные для доставки и нажмите кнопку "Оформить заказ".'
    },
    {
      question: 'Как мне узнать статус моего заказа?',
      answer: 'Статус заказа можно посмотреть в личном кабинете в разделе "Мои заказы". Также вы будете получать уведомления на email о смене статуса заказа.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами, банковским переводом или наличными при получении. Для юридических лиц доступна оплата по счету.'
    },
    {
      question: 'Как вернуть товар?',
      answer: 'Для возврата товара свяжитесь с нашим отделом поддержки через форму на этой странице или по телефону. Мы объясним процедуру возврата и вышлем необходимые инструкции.'
    },
    {
      question: 'Как получить техническую поддержку по установленному оборудованию?',
      answer: 'Для получения технической поддержки вы можете оставить заявку через форму на этой странице, указав номер заказа и описание проблемы, или позвонить нам по телефону поддержки.'
    }
  ];

  // Материалы и инструкции
  const materials = [
    {
      title: 'Руководство по установке IP-камер',
      description: 'Подробная инструкция по монтажу и настройке IP-камер видеонаблюдения',
      fileType: 'PDF',
      fileSize: '4.2 MB',
    },
    {
      title: 'Схемы подключения систем контроля доступа (СКУД)',
      description: 'Типовые схемы подключения считывателей, электромагнитных замков и контроллеров',
      fileType: 'PDF',
      fileSize: '3.8 MB',
    },
    {
      title: 'Настройка видеорегистраторов',
      description: 'Пошаговое руководство по настройке видеорегистраторов и подключению камер',
      fileType: 'PDF',
      fileSize: '5.1 MB',
    },
    {
      title: 'Монтаж турникетов и шлагбаумов',
      description: 'Инструкция по установке и подключению турникетов и шлагбаумов к СКУД',
      fileType: 'PDF',
      fileSize: '6.3 MB',
    },
    {
      title: 'Техническое обслуживание систем видеонаблюдения',
      description: 'Регламентные работы и график обслуживания систем видеонаблюдения',
      fileType: 'PDF',
      fileSize: '2.9 MB',
    }
  ];

  // Function to switch tabs programmatically
  const switchToContactTab = () => {
    const contactTabTrigger = document.querySelector('[data-value="contact"]');
    if (contactTabTrigger instanceof HTMLElement) {
      contactTabTrigger.click();
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Техническая поддержка</h1>
            <p className="text-lg text-gray-200">
              Мы всегда готовы помочь вам с любыми вопросами по использованию нашей продукции и услуг
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="guard-container">
          <Tabs defaultValue="contact">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="contact" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Связаться с нами</span>
                </TabsTrigger>
                <TabsTrigger value="faq" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>Частые вопросы</span>
                </TabsTrigger>
                <TabsTrigger value="materials" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Материалы и инструкции</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="contact" className="max-w-3xl mx-auto">
              <Card>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Отправить обращение</h2>
                  <p className="text-gray-600 mb-6">
                    Заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Тема обращения *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit">
                      Отправить обращение
                    </Button>
                  </form>
                </div>
              </Card>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-[#0F3460]/10 p-2">
                      <Phone className="h-5 w-5 text-[#0F3460]" />
                    </div>
                    <h3 className="font-semibold text-lg">Телефон поддержки</h3>
                  </div>
                  <p className="text-gray-600">Для срочной связи со специалистами</p>
                  <p className="font-medium text-lg mt-2">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-500">Пн-Пт: 9:00 - 18:00</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-[#0F3460]/10 p-2">
                      <Mail className="h-5 w-5 text-[#0F3460]" />
                    </div>
                    <h3 className="font-semibold text-lg">Email поддержки</h3>
                  </div>
                  <p className="text-gray-600">Для подробных запросов и приложений</p>
                  <p className="font-medium text-lg mt-2">support@guardinstall.ru</p>
                  <p className="text-sm text-gray-500">Ответ в течение 24 часов</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="faq">
              <div className="max-w-3xl mx-auto space-y-4">
                <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
                
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="rounded-full bg-[#0F3460]/10 p-2 mt-1">
                          <FileQuestion className="h-5 w-5 text-[#0F3460]" />
                        </div>
                        <h3 className="font-semibold text-lg">{faq.question}</h3>
                      </div>
                      <p className="text-gray-600 ml-11">{faq.answer}</p>
                    </div>
                  </Card>
                ))}
                
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <p className="text-center text-gray-600">
                    Не нашли ответ на свой вопрос? Свяжитесь с нашей службой поддержки через форму обратной связи или по телефону.
                  </p>
                  <div className="text-center mt-4">
                    <Button onClick={switchToContactTab}>
                      Связаться с поддержкой
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="materials">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Материалы и инструкции по монтажу</h2>
                <p className="text-gray-600 mb-8">
                  Здесь вы можете скачать полезные материалы и инструкции по монтажу и настройке систем видеонаблюдения и СКУД.
                  Материалы доступны в формате PDF и содержат подробные схемы и пошаговые руководства.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {materials.map((material, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="rounded-full bg-[#0F3460]/10 p-2 mt-1">
                            <FileText className="h-5 w-5 text-[#0F3460]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{material.title}</h3>
                            <p className="text-gray-600 text-sm">{material.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            {material.fileType} · {material.fileSize}
                          </div>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold mb-2">Нужна дополнительная помощь?</h3>
                  <p className="text-gray-700 mb-4">
                    Если вам требуется дополнительная техническая документация или консультация специалиста по монтажу,
                    свяжитесь с нашей службой поддержки.
                  </p>
                  <Button onClick={switchToContactTab}>
                    Запросить дополнительные материалы
                  </Button>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-semibold mb-3">Оставьте отзыв о наших материалах</h3>
                  <p className="text-gray-600 mb-4">
                    Ваше мнение поможет нам улучшить качество технической документации
                  </p>
                  <Button variant="outline">
                    Оставить отзыв
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
