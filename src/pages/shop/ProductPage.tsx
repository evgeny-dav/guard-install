
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Check, Package, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

// Sample product data
const productsData = [
  {
    id: '1',
    name: 'IP-камера Hikvision DS-2CD2143G2-I',
    image: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 6990,
    oldPrice: 7990,
    category: 'Видеонаблюдение',
    brand: 'Hikvision',
    inStock: true,
    description: 'Профессиональная IP-камера для системы видеонаблюдения с высоким разрешением и ночной съемкой.',
    features: [
      'Разрешение 4 МП',
      'ИК-подсветка до 30 м',
      'Степень защиты IP67',
      'Питание PoE',
      'Слот для SD карты',
      'H.265+ кодирование'
    ],
    specifications: {
      'Матрица': '1/2.8" Progressive Scan CMOS',
      'Разрешение': '4 МП (2688×1520)',
      'Объектив': '2.8 мм',
      'День/ночь': 'Механический ИК-фильтр',
      'Минимальная освещенность': '0.01Лк/F2.0 (цвет), 0Лк с ИК',
      'ИК-подсветка': 'до 30 метров',
      'Степень защиты': 'IP67',
      'Питание': '12В DC/PoE (802.3af)',
      'Потребляемая мощность': 'не более 7.5Вт',
      'Рабочая температура': '-40°C...+60°C',
      'Габариты': 'Ø111 × 82.4 мм',
      'Вес': '500 г'
    }
  }
];

const ProductPage = () => {
  const { id } = useParams<{id: string}>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  // Find product based on id
  const product = productsData.find(p => p.id === id) || productsData[0]; // Fallback to first product if not found

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
    toast({
      title: "Товар добавлен",
      description: `${product.name} добавлен в корзину`,
    });
  };

  return (
    <div className="section-padding">
      <div className="guard-container">
        <Link to="/shop" className="inline-flex items-center text-guard-DEFAULT hover:text-guard-accent mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Назад к списку товаров
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
              <span className="text-gray-500">Производитель: {product.brand}</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-guard-DEFAULT">{product.price.toLocaleString()} ₽</span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">{product.oldPrice.toLocaleString()} ₽</span>
              )}
            </div>
            
            <div className="flex items-center text-sm mb-6">
              {product.inStock ? (
                <span className="flex items-center text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  В наличии
                </span>
              ) : (
                <span className="text-gray-500">Нет в наличии</span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Features list */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Основные характеристики:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
            
            {/* Add to cart section */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex border rounded-md">
                <button 
                  onClick={decreaseQuantity} 
                  className="px-4 py-2 border-r" 
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-6 py-2 flex items-center justify-center">{quantity}</span>
                <button 
                  onClick={increaseQuantity} 
                  className="px-4 py-2 border-l"
                >
                  +
                </button>
              </div>
              
              <Button className="flex-1 gap-2" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" />
                Добавить в корзину
              </Button>
            </div>
            
            {/* Delivery info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Package className="h-5 w-5 mt-0.5 text-guard-accent" />
                  <div>
                    <h4 className="font-semibold">Доставка</h4>
                    <p className="text-sm text-gray-600">Доставка курьером, самовывоз или транспортной компанией</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-0.5 text-guard-accent" />
                  <div>
                    <h4 className="font-semibold">Гарантия</h4>
                    <p className="text-sm text-gray-600">12 месяцев официальной гарантии от производителя</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Product details tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specifications">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="specifications">Характеристики</TabsTrigger>
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="flex py-2 border-b">
                    <span className="font-medium w-1/2">{key}</span>
                    <span className="text-gray-600 w-1/2">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p>
                  {product.name} - профессиональная IP-камера с разрешением 4 МП, предназначенная для построения системы 
                  видеонаблюдения высокого качества. Камера обеспечивает четкое изображение даже при слабом освещении и полной темноте
                  благодаря встроенной ИК-подсветке дальностью до 30 метров.
                </p>
                <p className="mt-4">
                  Корпус камеры имеет степень защиты IP67, что позволяет использовать ее как внутри помещений, так и на улице
                  при любых погодных условиях. Питание может подаваться как через стандартный адаптер 12В, так и по технологии PoE,
                  что значительно упрощает монтаж и снижает затраты на прокладку кабелей.
                </p>
                <p className="mt-4">
                  Камера поддерживает технологию H.265+, что значительно снижает требования к объему хранилища при записи видео
                  с высоким разрешением. Встроенный слот для SD карты позволяет записывать видео локально, что может быть полезно
                  при разрыве сетевого соединения или в качестве резервного хранилища.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold mb-2">Отзывов пока нет</h3>
                <p className="text-gray-600">Будьте первым, кто оставит отзыв об этом товаре</p>
                <Button className="mt-4">Оставить отзыв</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
