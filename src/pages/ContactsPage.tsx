
import React from 'react';
import ContactHeader from '@/components/contacts/ContactHeader';
import ContactForm from '@/components/contacts/ContactForm';
import ContactInfo from '@/components/contacts/ContactInfo';
import LocationMap from '@/components/contacts/LocationMap';

const ContactsPage = () => {
  return (
    <div>
      <ContactHeader />

      {/* Contact Info */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="guard-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <LocationMap />
    </div>
  );
};

export default ContactsPage;
