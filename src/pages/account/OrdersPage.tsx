
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Clock, ChevronRight, ShoppingBag } from 'lucide-react';

const orders = [
  {
    id: '1001',
    date: '15.04.2025',
    status: 'delivered',
    statusText: 'Доставлен',
    items: 3,
    total: '45,600 ₽',
  },
  {
    id: '1002',
    date: '02.05.2025',
    status: 'processing',
    statusText: 'В обработке',
    items: 2,
    total: '32,800 ₽',
  },
  {
    id: '1003',
    date: '10.05.2025',
    status: 'shipped',
    statusText: 'Отправлен',
    items: 1,
    total: '12,500 ₽',
  },
];

const OrderStatusBadge = ({ status }) => {
  const variants = {
    processing: { variant: "outline", className: "border-blue-500 text-blue-700" },
    shipped: { variant: "outline", className: "border-orange-500 text-orange-700" },
    delivered: { variant: "outline", className: "border-green-500 text-green-700" },
    cancelled: { variant: "outline", className: "border-red-500 text-red-700" },
  };

  const { variant, className } = variants[status] || variants.processing;

  return <Badge variant={variant} className={className}>{status}</Badge>;
};

const OrdersPage = () => {
  return (
    <div className="py-8">
      <div className="guard-container">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Мои заказы</h1>
          <Button variant="outline" asChild>
            <Link to="/shop">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Продолжить покупки
            </Link>
          </Button>
        </div>
        
        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-gray-100 p-2">
                        <Package className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">Заказ #{order.id}</div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {order.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="outline" className="font-normal">
                        {order.items} {order.items === 1 ? 'товар' : 'товара'}
                      </Badge>
                      <OrderStatusBadge status={order.status} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{order.total}</div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/account/orders/${order.id}`}>
                          Подробнее
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">У вас пока нет заказов</h3>
            <p className="text-gray-500 mb-6">Самое время перейти в каталог и выбрать что-нибудь полезное</p>
            <Button asChild>
              <Link to="/shop">Перейти в каталог</Link>
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
