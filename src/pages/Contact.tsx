import React, { useEffect } from "react";
import { Mail, Phone as PhoneIcon, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Get in Touch
          </h1>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to create unforgettable moments? We're here to help you plan
            the perfect surprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: PhoneIcon,
              title: "Phone",
              content: "+1 (555) 123-4567",
              description: "Monday to Friday, 9am to 6pm EST",
            },
            {
              icon: Mail,
              title: "Email",
              content: "hello@surprisecall.com",
              description: "We respond within 24 hours",
            },
            {
              icon: MapPin,
              title: "Office",
              content: "New York, NY",
              description: "Available for in-person consultations",
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <contact.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-purple-400 mb-2">{contact.content}</p>
              <p className="text-gray-400">{contact.description}</p>
            </div>
          ))}
        </div>

        <div
          className="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Fill Out the Form Below
          </h2>
          <form className="space-y-6 bg-slate-800/50 p-8 rounded-xl border border-slate-700 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-white font-medium mb-2 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-white font-medium mb-2 block"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-white font-medium mb-2 block"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="event-date"
                className="text-white font-medium mb-2 block"
              >
                Date of Event
              </label>
              <input
                type="date"
                id="event-date"
                className="w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white font-medium mb-2 block"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us more about the surprise"
                rows={4}
                className="w-full p-4 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
