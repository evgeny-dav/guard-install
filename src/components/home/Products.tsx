
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

// Sample featured products
const featuredProducts = [
  {
    id: 1,
    name: 'IP-камера Hikvision DS-2CD2143G2-I',
    image: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 6990,
    category: 'Видеонаблюдение',
  },
  {
    id: 2,
    name: 'Извещатель пожарный ИП 212-45',
    image: 'https://github.com/evgeny-dav/guard-install/blob/main/src/components/home/ip212.png',
    price: 890,
    category: 'Пожарная сигнализация',
  },
  {
    id: 3,
    name: 'Видеорегистратор Dahua DHI-NVR4216-16P-4KS2',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 21500,
    category: 'Видеонаблюдение',
  },
  {
    id: 4,
    name: 'Контрольная панель Болид С2000М',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 15700,
    category: 'Пожарная сигнализация',
  },
];

const Products = () => {
  return (
    <section className="section-padding">
      <div className="guard-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
            Популярные товары
          </h2>
          <p className="text-lg text-gray-600">
            Представляем вам самое качественное оборудование для систем безопасности от ведущих производителей.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <span className="text-xs text-gray-500">{product.category}</span>
                <CardTitle className="text-lg font-medium line-clamp-2">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2 flex-grow">
                <p className="text-xl font-bold text-guard-DEFAULT">{product.price.toLocaleString()} ₽</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 gap-2">
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link to={`/shop/product/${product.id}`}>Подробнее</Link>
                </Button>
                <Button variant="outline" size="icon" className="shrink-0">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/shop">Перейти в магазин</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
