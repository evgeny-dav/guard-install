
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { title: 'Главная', path: '/' },
    { title: 'Магазин', path: '/shop' },
    { title: 'Услуги', path: '/services' },
    { title: 'О нас', path: '/about' },
    { title: 'Контакты', path: '/contacts' },
    { title: 'Для подрядчиков', path: '/contractors' },
  ];

  return (
    <header className="sticky top-0 w-full bg-white z-50 shadow-sm">
      <div className="guard-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-guard-DEFAULT">
              Guard<span className="text-guard-accent">Install</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn("nav-link", isActive && "active")
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/shop/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-guard-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Личный кабинет
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="guard-container py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn("nav-link", isActive && "active")
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-4 mt-2">
              <Link to="/shop/cart" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
                  <span className="absolute -top-1 -right-1 bg-guard-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
              <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Личный кабинет
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
