import React from 'react';
import { Mail, Phone as PhoneIcon, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    // <boltAction type="file" filePath="src/pages/Contact.tsx">
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to create unforgettable moments? We're here to help you plan the perfect surprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: PhoneIcon,
              title: 'Phone',
              content: '+1 (555) 123-4567',
              description: 'Monday to Friday, 9am to 6pm EST',
            },
            {
              icon: Mail,
              title: 'Email',
              content: 'hello@surprisecall.com',
              description: 'Wel respond within 24 hours',
            },
            {
              icon: MapPin,
              title: 'Office',
              content: 'New York, NY',
              description: 'Available for in-person consultations',
            },
          ].map((contact, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center">
              <contact.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
              <p className="text-purple-400 mb-2">{contact.content}</p>
              <p className="text-gray-400">{contact.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}