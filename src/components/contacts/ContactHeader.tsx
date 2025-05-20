
import React from 'react';

const ContactHeader = () => {
  return (
    <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
      <div className="guard-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-gray-200">
            Свяжитесь с нами для получения консультации или заказа услуг
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
