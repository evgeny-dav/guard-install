
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Package, CreditCard, Truck, Clock, MapPin, HelpCircle } from 'lucide-react';

const DeliveryPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-12">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Доставка и оплата</h1>
            <p className="text-lg text-gray-200">
              Информация о способах доставки и оплаты заказов в интернет-магазине GuardInstall
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="guard-container">
          <Tabs defaultValue="delivery">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="delivery">
                <Truck className="mr-2 h-4 w-4" />
                Доставка
              </TabsTrigger>
              <TabsTrigger value="payment">
                <CreditCard className="mr-2 h-4 w-4" />
                Оплата
              </TabsTrigger>
            </TabsList>
            
            {/* Delivery Tab */}
            <TabsContent value="delivery" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Truck className="h-8 w-8 text-[#E94560]" />
                    <div>
                      <CardTitle>Курьерская доставка</CardTitle>
                      <p className="text-sm text-muted-foreground">Москва и МО</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Стоимость:</span>
                        <span className="font-medium">от 350 ₽</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Срок доставки:</span>
                        <span className="font-medium">1-2 дня</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Бесплатно от:</span>
                        <span className="font-medium">5000 ₽</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Доставка осуществляется в пределах МКАД и ближайшего Подмосковья. Точная стоимость и время доставки согласовываются с менеджером.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <MapPin className="h-8 w-8 text-[#E94560]" />
                    <div>
                      <CardTitle>Самовывоз</CardTitle>
                      <p className="text-sm text-muted-foreground">Из офиса компании</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Стоимость:</span>
                        <span className="font-medium">Бесплатно</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Срок получения:</span>
                        <span className="font-medium">В день заказа*</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Адрес:</span>
                        <span className="font-medium">г. Москва, ул. Примерная, д. 123</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      * При наличии товара на складе и оформлении заказа до 15:00. Перед приездом обязательно согласуйте визит с менеджером.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Package className="h-8 w-8 text-[#E94560]" />
                    <div>
                      <CardTitle>Транспортная компания</CardTitle>
                      <p className="text-sm text-muted-foreground">По всей России</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Стоимость:</span>
                        <span className="font-medium">По тарифам ТК</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Срок доставки:</span>
                        <span className="font-medium">2-14 дней</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Компании:</span>
                        <span className="font-medium">СДЭК, DPD, ПЭК и др.</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Отправка осуществляется после 100% оплаты заказа. Стоимость доставки рассчитывается индивидуально в зависимости от объема и веса заказа.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6">Условия доставки</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Как отслеживать заказ?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        После оформления заказа вам будет присвоен уникальный номер, по которому вы сможете отслеживать статус в личном кабинете.
                        Для заказов, отправляемых транспортной компанией, вы получите трек-номер для отслеживания на сайте перевозчика.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Что делать при получении заказа?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        При получении заказа необходимо проверить целостность упаковки и соответствие товара заказанному. 
                        В случае обнаружения повреждений или несоответствий, сообщите об этом курьеру или сотруднику пункта выдачи,
                        и составьте акт о повреждении.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Можно ли изменить адрес доставки после оформления заказа?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Да, изменить адрес доставки можно до момента отправки заказа. Для этого свяжитесь с нашим менеджером
                        по телефону или через личный кабинет. После передачи заказа в службу доставки изменение адреса может быть невозможно.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Что делать, если товар не подошел?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Вы можете вернуть товар надлежащего качества в течение 14 дней с момента получения, если он не был в эксплуатации,
                        сохранены его товарный вид, потребительские свойства, пломбы, фабричные ярлыки и оригинальная упаковка.
                        Для возврата свяжитесь с нами через форму обратной связи или по телефону.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            {/* Payment Tab */}
            <TabsContent value="payment" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Способы оплаты</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#0F3460]/10 p-2 mt-1">
                        <CreditCard className="h-6 w-6 text-[#0F3460]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Банковской картой на сайте</h3>
                        <p className="text-gray-600 mt-1">
                          Оплата производится через защищенный сервис. Мы принимаем карты Visa, Mastercard, МИР.
                          Комиссия за оплату не взимается.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#0F3460]/10 p-2 mt-1">
                        <CreditCard className="h-6 w-6 text-[#0F3460]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Оплата при получении</h3>
                        <p className="text-gray-600 mt-1">
                          Вы можете оплатить заказ наличными или банковской картой при получении (только для курьерской доставки по Москве и МО).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#0F3460]/10 p-2 mt-1">
                        <CreditCard className="h-6 w-6 text-[#0F3460]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Безналичный расчет (для юр. лиц)</h3>
                        <p className="text-gray-600 mt-1">
                          Оплата по выставленному счету. После оформления заказа мы выставим счет и отправим его на указанную
                          вами электронную почту.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 items-center mt-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mir-logo.SVG.svg/1200px-Mir-logo.SVG.svg.png" alt="МИР" className="h-8" />
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Безопасна ли оплата на сайте?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Да, оплата на нашем сайте полностью безопасна. Мы используем защищенный платежный шлюз, который
                          соответствует стандартам безопасности PCI DSS. Ваши платежные данные не хранятся на нашем сайте
                          и передаются в зашифрованном виде.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Когда происходит списание средств?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          При оплате банковской картой на сайте списание средств происходит сразу после подтверждения оплаты.
                          При безналичном расчете - после поступления средств на наш расчетный счет.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Можно ли получить чек?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Да, электронный чек будет отправлен на ваш email после оплаты заказа.
                          При оплате наличными или картой при получении вы получите бумажный чек от курьера.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Как вернуть денежные средства при отмене заказа?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          В случае отмены заказа или возврата товара денежные средства возвращаются тем же способом,
                          которым была произведена оплата. Срок возврата денежных средств составляет от 3 до 10 рабочих дней
                          в зависимости от банка-эмитента карты.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              
              <div className="bg-[#0F3460]/5 p-6 rounded-lg mt-12">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-[#0F3460] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Остались вопросы?</h3>
                    <p className="text-gray-600 mt-1">
                      Если у вас возникли вопросы по оплате заказа или вам нужна помощь, свяжитесь с нами по телефону
                      <a href="tel:+78001234567" className="text-[#0F3460] font-semibold mx-1">8 (800) 123-45-67</a>
                      или напишите на почту
                      <a href="mailto:info@guardinstall.ru" className="text-[#0F3460] font-semibold mx-1">info@guardinstall.ru</a>
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default DeliveryPage;
