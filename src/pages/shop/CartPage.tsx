
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Trash2, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: 'Заказ оформлен',
      description: 'Ваш заказ успешно оформлен. Детали отправлены на вашу почту.',
    });
    clearCart();
  };

  return (
    <section className="section-padding">
      <div className="guard-container">
        <h1 className="text-3xl font-bold mb-6">Корзина</h1>

        {cart.length > 0 ? (
          <>
            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
              <div className="hidden md:grid grid-cols-6 gap-4 p-4 bg-gray-50 font-medium">
                <div className="col-span-3">Товар</div>
                <div className="text-center">Цена</div>
                <div className="text-center">Количество</div>
                <div className="text-right">Итого</div>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="border-t border-gray-200 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div className="md:col-span-3 flex items-center gap-4">
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <Link to={`/shop/product/${item.id}`} className="font-medium hover:text-guard-accent">
                          {item.name}
                        </Link>
                      </div>
                    </div>

                    <div className="text-center md:text-center">
                      <span className="md:hidden font-medium mr-2">Цена:</span>
                      {item.price.toLocaleString()} ₽
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="flex border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 border-r"
                        >
                          -
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 border-l"
                        >
                          +
                        </button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-right font-semibold">
                      <span className="md:hidden font-medium mr-2">Итого:</span>
                      {(item.price * item.quantity).toLocaleString()} ₽
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <Button variant="outline" onClick={() => clearCart()}>
                Очистить корзину
              </Button>
              <Link to="/shop">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Продолжить покупки
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Итого:</span>
                <span className="text-2xl font-bold">{totalPrice.toLocaleString()} ₽</span>
              </div>
              <Button onClick={handleCheckout} className="w-full">Оформить заказ</Button>
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Ваша корзина пуста</h2>
            <p className="text-gray-600 mb-6">Добавьте товары в корзину, чтобы оформить заказ</p>
            <Button asChild size="lg">
              <Link to="/shop">Перейти в магазин</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
