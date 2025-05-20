
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-guard-DEFAULT text-white pt-12 pb-6">
      <div className="guard-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Guard<span className="text-guard-accent">Install</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Профессиональные системы видеонаблюдения и пожарной сигнализации. Монтаж, обслуживание и продажа оборудования.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+78001234567" className="flex items-center gap-2 text-gray-300 hover:text-guard-accent">
                <Phone className="h-4 w-4" />
                <span>8 (800) 123-45-67</span>
              </a>
              <a href="mailto:info@guardinstall.ru" className="flex items-center gap-2 text-gray-300 hover:text-guard-accent">
                <Mail className="h-4 w-4" />
                <span>info@guardinstall.ru</span>
              </a>
              <p className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-guard-accent">Главная</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-guard-accent">Магазин</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-guard-accent">Услуги</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-guard-accent">О нас</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-guard-accent">Контакты</Link>
              </li>
              <li>
                <Link to="/contractors" className="text-gray-300 hover:text-guard-accent">Для подрядчиков</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/installation" className="text-gray-300 hover:text-guard-accent">Монтаж систем</Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="text-gray-300 hover:text-guard-accent">Техническое обслуживание</Link>
              </li>
              <li>
                <Link to="/services/design" className="text-gray-300 hover:text-guard-accent">Проектирование</Link>
              </li>
              <li>
                <Link to="/services/modernization" className="text-gray-300 hover:text-guard-accent">Модернизация систем</Link>
              </li>
              <li>
                <Link to="/services/consultation" className="text-gray-300 hover:text-guard-accent">Консультации</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-gray-300 hover:text-guard-accent">Личный кабинет</Link>
              </li>
              <li>
                <Link to="/account/orders" className="text-gray-300 hover:text-guard-accent">История заказов</Link>
              </li>
              <li>
                <Link to="/account/projects" className="text-gray-300 hover:text-guard-accent">Мои проекты</Link>
              </li>
              <li>
                <Link to="/shop/delivery" className="text-gray-300 hover:text-guard-accent">Доставка и оплата</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-guard-accent">Техподдержка</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} GuardInstall. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
