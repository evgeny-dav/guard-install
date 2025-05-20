
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

// Sample products data
const products = [
  {
    id: 1,
    name: 'IP-камера Hikvision DS-2CD2143G2-I',
    image: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 6990,
    category: 'cameras',
  },
  {
    id: 2,
    name: 'Извещатель пожарный ИП 212-45',
    image: 'https://satro-paladin.com/_img/satro/goods/0/956/00-00006956/0be9949e_e486_11eb_80d8_48df3707765d_e5513ad3_e53d_11eb_80d8_48df3707765d%20%281%29.png',
    price: 890,
    category: 'fire',
  },
  {
    id: 3,
    name: 'Видеорегистратор Dahua DHI-NVR4216-16P-4KS2',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 21500,
    category: 'cameras',
  },
  {
    id: 4,
    name: 'Контрольная панель Болид С2000М',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 15700,
    category: 'fire',
  },
  {
    id: 5,
    name: 'Купольная камера Dahua DH-IPC-HDW2431RP-ZS',
    image: 'https://images.unsplash.com/photo-1580745129441-2e8b6a23ea3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 8450,
    category: 'cameras',
  },
  {
    id: 6,
    name: 'Источник питания Бастион СКАТ-1200И7',
    image: 'https://images.unsplash.com/photo-1614064643411-7862f663ec8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 3900,
    category: 'accessories',
  },
];

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || product.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Товар добавлен",
      description: `${product.name} добавлен в корзину`,
    });
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-12">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Наш магазин</h1>
            <p className="text-lg text-gray-200">
              Широкий выбор оборудования для систем безопасности от ведущих производителей
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="guard-container">
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="all">Все товары</TabsTrigger>
                  <TabsTrigger value="cameras">Видеонаблюдение</TabsTrigger>
                  <TabsTrigger value="fire">Пожарная сигнализация</TabsTrigger>
                  <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg font-medium line-clamp-2">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2 flex-grow">
                    <p className="text-xl font-bold text-[#0F3460]">{product.price.toLocaleString()} ₽</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button asChild variant="default" size="sm" className="w-full">
                      <Link to={`/shop/product/${product.id}`}>Подробнее</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="shrink-0"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">По вашему запросу ничего не найдено</h3>
              <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ShopPage;
