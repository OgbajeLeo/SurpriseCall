import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarCheck, Phone, Gift, MessageCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HowItWorks() {
  const navigate = useNavigate();

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
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How It Works
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Making someone's day special is easy with SurpriseCall. Follow these
            simple steps to create an unforgettable moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: CalendarCheck,
              title: "Choose the Date",
              description:
                "Select the perfect date and time for the surprise call.",
            },
            {
              icon: MessageCircle,
              title: "Plan the Message",
              description:
                "Craft a personalized message or choose from our templates.",
            },
            {
              icon: Gift,
              title: "Select Package",
              description:
                "Pick the package that best suits your celebration needs.",
            },
            {
              icon: Phone,
              title: "We Handle the Rest",
              description:
                "Our team ensures a perfect delivery of your surprise.",
            },
          ].map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 100}`}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 text-center">
                <step.icon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-purple-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How far in advance should I book?",
                answer:
                  "We recommend booking at least 48 hours in advance to ensure the best experience.",
              },
              {
                question: "Can I customize the message?",
                answer:
                  "Yes! You can fully customize your message or use our templates as inspiration.",
              },
              {
                question: "What if the recipient misses the call?",
                answer:
                  "Don't worry! We'll coordinate a backup time that works for everyone.",
              },
              {
                question: "Are international calls supported?",
                answer:
                  "Yes, we support international calls to most countries worldwide.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${700 + index * 100}`}
                className="space-y-2"
              >
                <h3 className="text-lg font-semibold text-purple-400">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
