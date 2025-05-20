
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Building2, BookOpen, Wrench, Clock, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Доступные проекты для подрядчиков
const availableProjects = [
  {
    id: 1,
    title: 'Монтаж видеонаблюдения в офисном центре',
    location: 'г. Москва, ул. Профсоюзная',
    deadline: '30.06.2025',
    budget: '450,000 ₽',
    description: 'Требуется установка системы видеонаблюдения в офисном центре площадью 2000 кв.м. В объем работ входит монтаж 32 камер, прокладка кабеля, настройка системы.',
    requirements: ['Опыт работы от 3 лет', 'Наличие СРО', 'Выезд на объект для оценки'],
    status: 'open',
  },
  {
    id: 2,
    title: 'Монтаж пожарной сигнализации в жилом комплексе',
    location: 'г. Санкт-Петербург, пр-т Невский',
    deadline: '15.07.2025',
    budget: '850,000 ₽',
    description: 'Монтаж пожарной сигнализации в новом жилом комплексе из 3 корпусов. Требуется установка извещателей, прокладка кабельных линий, программирование системы.',
    requirements: ['Опыт работы от 5 лет', 'Наличие СРО', 'Лицензия МЧС'],
    status: 'open',
  },
  {
    id: 3,
    title: 'Техническое обслуживание систем видеонаблюдения',
    location: 'г. Москва, разные объекты',
    deadline: 'Постоянно',
    budget: 'По договоренности',
    description: 'Требуются подрядчики для регулярного технического обслуживания систем видеонаблюдения на различных объектах в Москве.',
    requirements: ['Опыт работы от 2 лет', 'Наличие сертификатов от производителей оборудования', 'Наличие инструментов и оборудования'],
    status: 'open',
  },
  {
    id: 4,
    title: 'Модернизация системы контроля доступа',
    location: 'г. Екатеринбург, ул. Ленина',
    deadline: '10.08.2025',
    budget: '320,000 ₽',
    description: 'Модернизация существующей системы контроля доступа в бизнес-центре. Замена устаревшего оборудования, интеграция с системой видеонаблюдения.',
    requirements: ['Опыт аналогичных проектов', 'Знание оборудования Hikvision и Parsec'],
    status: 'open',
  },
];

const ContractorsPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    experience: '',
    specialization: '',
    message: '',
  });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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
    console.log('Form submitted:', { ...formData, projectId: selectedProject });
    
    toast({
      title: 'Заявка отправлена',
      description: 'Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время',
    });
    
    // Очистка формы
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      experience: '',
      specialization: '',
      message: '',
    });
    setSelectedProject(null);
  };

  const handleProjectSelect = (id) => {
    setSelectedProject(id === selectedProject ? null : id);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Для подрядчиков</h1>
            <p className="text-lg text-gray-200">
              Станьте нашим партнером и получайте регулярные заказы на монтаж систем безопасности
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Преимущества работы с нами</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-[#0F3460]/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#0F3460]" />
                </div>
                <CardTitle>Стабильные объемы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Постоянный поток заказов на монтаж систем видеонаблюдения и пожарной сигнализации</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-[#0F3460]/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#0F3460]" />
                </div>
                <CardTitle>Четкие технические задания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Подробные проекты и спецификации для каждого объекта, минимум дополнительных согласований</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-[#0F3460]/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-[#0F3460]" />
                </div>
                <CardTitle>Техническая поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Помощь наших специалистов при возникновении сложностей на объекте</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Projects */}
      <section className="py-12">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Доступные проекты</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {availableProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`cursor-pointer transition-all ${selectedProject === project.id ? 'ring-2 ring-[#0F3460]' : 'hover:shadow-lg'}`}
                onClick={() => handleProjectSelect(project.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.status === 'open' ? (
                      <Badge className="bg-green-500">Открыт для заявок</Badge>
                    ) : (
                      <Badge variant="outline">Заявки закрыты</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#E94560]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#E94560]" />
                      <span>Срок: {project.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                      <span>Бюджет: {project.budget}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{project.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Требования:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.requirements.map((req, index) => (
                        <li key={index} className="text-gray-600">{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedProject === project.id && (
                    <div className="flex justify-end">
                      <div className="flex items-center gap-2 text-[#0F3460]">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Выбран для заявки</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-gray-50">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Стать подрядчиком</h2>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Название компании *
                      </label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                        Контактное лицо *
                      </label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Опыт работы *
                      </label>
                      <Select 
                        value={formData.experience} 
                        onValueChange={(value) => handleSelectChange('experience', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите опыт работы" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 года</SelectItem>
                          <SelectItem value="3-5">3-5 лет</SelectItem>
                          <SelectItem value="5-10">5-10 лет</SelectItem>
                          <SelectItem value="10+">Более 10 лет</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                        Специализация *
                      </label>
                      <Select 
                        value={formData.specialization} 
                        onValueChange={(value) => handleSelectChange('specialization', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите специализацию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Видеонаблюдение</SelectItem>
                          <SelectItem value="fire">Пожарная сигнализация</SelectItem>
                          <SelectItem value="access">Системы контроля доступа</SelectItem>
                          <SelectItem value="all">Все системы безопасности</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {selectedProject && (
                    <div className="bg-[#0F3460]/5 p-4 rounded-md">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-[#0F3460]" />
                        <span className="font-medium">Выбранный проект:</span>
                      </div>
                      <p>{availableProjects.find(p => p.id === selectedProject)?.title}</p>
                    </div>
                  )}
                  
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
                      placeholder="Расскажите о вашей компании, опыте работы, реализованных проектах"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <Button type="submit" disabled={!formData.companyName || !formData.contactName || !formData.email || !formData.phone || !formData.experience || !formData.specialization}>
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

export default ContractorsPage;
