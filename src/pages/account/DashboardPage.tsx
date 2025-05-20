
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Package, ShoppingCart, Clock, Settings, FileText } from 'lucide-react';

// Sample data for orders
const orders = [
  {
    id: 'ORD-2023-001',
    date: '15.09.2023',
    status: 'Завершен',
    total: 12500,
    items: 3
  },
  {
    id: 'ORD-2023-002',
    date: '05.10.2023',
    status: 'В пути',
    total: 8900,
    items: 2
  }
];

// Sample data for installation projects
const projects = [
  {
    id: 'PRJ-2023-001',
    title: 'Монтаж системы видеонаблюдения',
    status: 'В процессе',
    progress: 70,
    date: '20.10.2023',
    address: 'г. Москва, ул. Примерная, д. 10'
  },
  {
    id: 'PRJ-2023-002',
    title: 'Установка пожарной сигнализации',
    status: 'Планирование',
    progress: 15,
    date: '01.11.2023',
    address: 'г. Москва, ул. Примерная, д. 15'
  }
];

const DashboardPage = () => {
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="guard-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Личный кабинет</h1>
            <p className="text-gray-600">Добро пожаловать, Иван Иванов</p>
          </div>
          
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Настройки аккаунта
          </Button>
        </div>
        
        <Tabs defaultValue="overview">
          <div className="border-b mb-6">
            <TabsList className="w-full justify-start border-b-0">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="orders">Заказы</TabsTrigger>
              <TabsTrigger value="projects">Проекты</TabsTrigger>
              <TabsTrigger value="maintenance">Обслуживание</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {/* Quick Stats Cards */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2 text-guard-accent" />
                    Заказы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">2</div>
                  <p className="text-sm text-gray-500">Последний заказ 05.10.2023</p>
                  <Button variant="link" asChild className="p-0 h-auto mt-2">
                    <Link to="/account/orders">Просмотреть все</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Package className="h-5 w-5 mr-2 text-guard-accent" />
                    Проекты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">2</div>
                  <p className="text-sm text-gray-500">1 активный проект</p>
                  <Button variant="link" asChild className="p-0 h-auto mt-2">
                    <Link to="/account/projects">Просмотреть все</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-guard-accent" />
                    Обслуживание
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">0</div>
                  <p className="text-sm text-gray-500">Нет активных контрактов</p>
                  <Button variant="link" asChild className="p-0 h-auto mt-2">
                    <Link to="/services/maintenance">Заказать обслуживание</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Recent Activity */}
            <h2 className="text-xl font-semibold mb-4">Недавняя активность</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Последние заказы</CardTitle>
                  <CardDescription>История ваших покупок</CardDescription>
                </CardHeader>
                <CardContent>
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{order.id}</div>
                            <div className="text-sm text-gray-500">
                              {order.date} · {order.items} товара
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-right">{order.total.toLocaleString()} ₽</div>
                            <div className={`text-sm ${order.status === 'Завершен' ? 'text-green-600' : 'text-blue-600'}`}>
                              {order.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      У вас пока нет заказов
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Recent Projects */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Текущие проекты</CardTitle>
                  <CardDescription>Статус работ по монтажу</CardDescription>
                </CardHeader>
                <CardContent>
                  {projects.length > 0 ? (
                    <div className="space-y-6">
                      {projects.map((project) => (
                        <div key={project.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">{project.title}</div>
                            <div className="text-sm font-medium text-blue-600">{project.status}</div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-guard-accent h-2 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{project.date}</span>
                            <span>{project.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      У вас нет активных проектов
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>История заказов</CardTitle>
                <CardDescription>
                  Все ваши заказы товаров из нашего магазина
                </CardDescription>
              </CardHeader>
              <CardContent>
                {orders.length > 0 ? (
                  <div className="border rounded-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            № Заказа
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Дата
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Сумма
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Статус
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Действия
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{order.id}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{order.date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{order.total.toLocaleString()} ₽</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${order.status === 'Завершен' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="link" className="p-0 h-auto">Подробнее</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">У вас пока нет заказов</h3>
                    <p className="mt-1 text-sm text-gray-500">Здесь будут отображаться ваши заказы</p>
                    <div className="mt-6">
                      <Button asChild>
                        <Link to="/shop">Перейти в магазин</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Проекты монтажа</CardTitle>
                <CardDescription>
                  Информация о ходе выполнения работ по монтажу систем
                </CardDescription>
              </CardHeader>
              <CardContent>
                {projects.length > 0 ? (
                  <div className="space-y-8">
                    {projects.map((project) => (
                      <div key={project.id} className="border rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-500">{project.id} · {project.date}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 
                            ${project.status === 'В процессе' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {project.status}
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4">Адрес: {project.address}</p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm font-medium">
                            <span>Прогресс</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-guard-accent h-2.5 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                          <Button size="sm">Просмотр деталей</Button>
                          <Button variant="outline" size="sm">Связаться с менеджером</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Package className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">Нет активных проектов</h3>
                    <p className="mt-1 text-sm text-gray-500">У вас пока нет проектов по монтажу систем</p>
                    <div className="mt-6">
                      <Button asChild>
                        <Link to="/services/installation">Заказать монтаж</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Maintenance Tab */}
          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle>Техническое обслуживание</CardTitle>
                <CardDescription>
                  Информация о контрактах на техническое обслуживание
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Settings className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold text-gray-900">Нет активных контрактов</h3>
                  <p className="mt-1 text-sm text-gray-500">У вас пока нет контрактов на техническое обслуживание</p>
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/services/maintenance">Заказать обслуживание</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
