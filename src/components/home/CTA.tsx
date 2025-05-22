
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
      <div className="guard-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" >
                  {/*  <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">*/}

            Готовы обеспечить безопасность?
          </h2>
          <p className="text-lg md:text-xl mb-8 ">
            Свяжитесь с нами сегодня для бесплатной консультации и оценки стоимости проекта.
            Наши специалисты ответят на все ваши вопросы и подберут оптимальное решение.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#0F3460] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white  hover:bg-white/10">
              <Link to="/services">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
