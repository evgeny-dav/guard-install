
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
        <section className="bg-[#0F3460] text-white py-16">
        <div className="guard-container text-center">
          <h2 className="text-3xl font-bold mb-6"> Готовы обеспечить безопасность?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня для бесплатной консультации и оценки стоимости проекта.
            Наши специалисты ответят на все ваши вопросы и подберут оптимальное решение.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contacts" className="bg-white text-[#0F3460] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Связаться с нами
            </a>
            <a href="/services" className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
             Узнать больше
            </a>
          </div>
        </div>
      </section>
  );
};

export default CTA;
