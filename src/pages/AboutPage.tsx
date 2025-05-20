
import React from 'react';
import { Building, CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white py-16">
        <div className="guard-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">О компании</h1>
            <p className="text-lg text-gray-200">
              Более 10 лет опыта в сфере установки и обслуживания систем безопасности
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding">
        <div className="guard-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-gray-600 mb-4">
                Компания GuardInstall была основана в 2012 году с целью предоставления высококачественных услуг по установке
                и обслуживанию систем безопасности. Мы специализируемся на видеонаблюдении и пожарной сигнализации для
                жилых и коммерческих объектов.
              </p>
              <p className="text-gray-600 mb-4">
                За годы работы мы накопили огромный опыт и собрали команду профессионалов, которые готовы решить любую задачу
                в сфере безопасности, от простой установки камер до комплексного проектирования сложных систем.
              </p>
              <p className="text-gray-600">
                Наша миссия — обеспечить безопасность и спокойствие наших клиентов, предлагая надежные и современные решения
                по защите имущества и жизни людей.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3"
                alt="Команда GuardInstall"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats 
      <section className="bg-gray-50 py-16">
        <div className="guard-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <Building className="h-12 w-12 text-[#E94560]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0F3460] mb-2">1250+</h3>
              <p className="text-gray-600">Реализованных проектов</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-[#E94560]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0F3460] mb-2">35</h3>
              <p className="text-gray-600">Профессиональных сотрудников</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-[#E94560]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0F3460] mb-2">15</h3>
              <p className="text-gray-600">Отраслевых наград</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-[#E94560]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0F3460] mb-2">10+</h3>
              <p className="text-gray-600">Лет на рынке</p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Values */}
      <section className="section-padding">
        <div className="guard-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0F3460]/10 h-16 w-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <CheckCircle className="h-8 w-8 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Качество</h3>
              <p className="text-gray-600 text-center">
                Мы используем только проверенное оборудование от надежных производителей, а все наши специалисты имеют
                сертификаты и регулярно проходят обучение.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0F3460]/10 h-16 w-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <CheckCircle className="h-8 w-8 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Ответственность</h3>
              <p className="text-gray-600 text-center">
                Мы понимаем, что от качества нашей работы зависит безопасность людей и имущества, поэтому подходим к
                каждому проекту с максимальной ответственностью.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#0F3460]/10 h-16 w-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <CheckCircle className="h-8 w-8 text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Клиентоориентированность</h3>
              <p className="text-gray-600 text-center">
                Мы всегда готовы пойти навстречу клиенту, предложить оптимальное решение с учетом всех пожеланий и бюджета.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F3460] text-white py-16">
        <div className="guard-container text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, и мы поможем вам выбрать оптимальное решение для вашего дома или бизнеса
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contacts" className="bg-white text-[#0F3460] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Связаться с нами
            </a>
            <a href="/services" className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Наши услуги
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
