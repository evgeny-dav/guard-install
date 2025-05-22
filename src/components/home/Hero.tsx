
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-guard-DEFAULT to-guard-dark text-white py-16 md:py-24">
      <div className="guard-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/*<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-700">*/}
           <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">

            Современные системы безопасности
            </h1>
            <p className="text-lg md:text-xl text-gray-500">
              Профессиональный монтаж систем видеонаблюдения и пожарной сигнализации. Гарантия качества и надежности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-guard-accent hover:bg-guard-accent/90 text-white">
                <Link to="/services">Наши услуги</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white text-gray-700 hover:bg-white hover:text-guard-DEFAULT">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center rounded-lg shadow-lg"></div>
            <div className="absolute inset-0 bg-guard-DEFAULT/30 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
