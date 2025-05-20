
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Truck, Calendar, MapPin, CreditCard, Package } from 'lucide-react';

const OrderDetailsPage = () => {
  const { id } = useParams();
  
  // В реальном приложении здесь будет запрос к API для получения данных заказа по id
  const order = {
    id: id,
    date: '15.04.2025',
    status: 'delivered',
    statusText: 'Доставлен',
    paymentMethod: 'Банковская карта',
    shippingAddress: 'г. Москва, ул. Ленина, д. 10, кв. 25',
    shippingMethod: 'Курьерская доставка',
    total: '45,600 ₽',
    items: [
      {
        id: 1,
        name: 'IP-камера 4K PTZ',
        price: '15,200 ₽',
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1557333569-66df719d3f35?ixlib=rb-4.0.3',
      },
      {
        id: 2,
        name: 'Видеорегистратор 8-канальный',
        price: '15,200 ₽',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3',
      }
    ],
    timeline: [
      { date: '15.04.2025', time: '18:30', status: 'Заказ доставлен' },
      { date: '14.04.2025', time: '10:15', status: 'Заказ передан курьеру' },
      { date: '13.04.2025', time: '14:20', status: 'Заказ отправлен' },
      { date: '12.04.2025', time: '09:45', status: 'Заказ собран' },
      { date: '11.04.2025', time: '15:30', status: 'Заказ оформлен' },
    ]
  };

  const getStatusBadge = (status) => {
    const variants = {
      processing: { variant: "outline", className: "border-blue-500 text-blue-700" },
      shipped: { variant: "outline", className: "border-orange-500 text-orange-700" },
      delivered: { variant: "outline", className: "border-green-500 text-green-700" },
      cancelled: { variant: "outline", className: "border-red-500 text-red-700" },
    };

    const { variant, className } = variants[status] || variants.processing;
    return <Badge variant={variant} className={className}>{status}</Badge>;
  };

  return (
    <div className="py-8">
      <div className="guard-container">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" asChild className="p-0">
            <Link to="/account/orders">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Заказ #{order.id}</h1>
          {getStatusBadge(order.status)}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="mb-6">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Товары в заказе</h2>
                <div className="divide-y">
                  {order.items.map((item) => (
                    <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="text-sm text-gray-500">Количество: {item.quantity}</div>
                        </div>
                        <div className="font-semibold">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 pt-4 border-t">
                  <span className="font-semibold">Итого:</span>
                  <span className="font-bold text-lg">{order.total}</span>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">История заказа</h2>
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-[9px] w-0.5 bg-gray-200"></div>
                  <div className="space-y-4">
                    {order.timeline.map((event, index) => (
                      <div key={index} className="flex items-start gap-4 relative">
                        <div className={`w-5 h-5 rounded-full mt-0.5 ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div>
                          <div className="font-medium">{event.status}</div>
                          <div className="text-sm text-gray-500">
                            {event.date}, {event.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="mb-6">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Информация о доставке</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500">Адрес доставки</div>
                      <div>{order.shippingAddress}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Truck className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500">Способ доставки</div>
                      <div>{order.shippingMethod}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="mb-6">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Информация об оплате</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CreditCard className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500">Способ оплаты</div>
                      <div>{order.paymentMethod}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Calendar className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500">Дата заказа</div>
                      <div>{order.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="flex flex-col gap-3">
              <Button className="w-full">Повторить заказ</Button>
              <Button variant="outline" className="w-full">Связаться с поддержкой</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
