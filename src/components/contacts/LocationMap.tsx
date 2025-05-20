
import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-12">
      <div className="guard-container">
        <h2 className="text-2xl font-bold mb-6 text-center">Как нас найти</h2>
        <div className="h-96 rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.397087892983!2d37.6172699!3d55.7539734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Moscow%20Kremlin!5e0!3m2!1sen!2sru!4v1637510444832!5m2!1sen!2sru" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy"
            title="Карта расположения офиса"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
