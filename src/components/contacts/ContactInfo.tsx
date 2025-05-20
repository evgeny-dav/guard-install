
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-[#E94560] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Телефон</h3>
              <p className="text-gray-600 mt-1">8 (800) 123-45-67</p>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-[#E94560] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 mt-1">info@guardinstall.ru</p>
              <p className="text-gray-600">support@guardinstall.ru</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-[#E94560] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Адрес</h3>
              <p className="text-gray-600 mt-1">г. Москва, ул. Примерная, д. 123</p>
              <p className="text-gray-600">БЦ "Горизонт", офис 456</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Clock className="h-6 w-6 text-[#E94560] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Время работы</h3>
              <p className="text-gray-600 mt-1">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-600">Сб-Вс: выходной</p>
            </div>
          </div>
        </div>
      </div>
      
      <SocialLinks />
    </div>
  );
};

export default ContactInfo;
