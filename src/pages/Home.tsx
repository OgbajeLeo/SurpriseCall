import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Gift,
  Calendar,
  GraduationCap,
  Heart,
  Star,
  CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const navigate = useNavigate();

  const handleBooking = (plan: string) => {
    toast.success(`Selected ${plan} plan! Redirecting to contact form...`);
    navigate("/contact");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Make Their Day Special
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Surprise your loved ones with personalized celebration calls on
              their special occasions. Create unforgettable moments that last a
              lifetime.
            </p>
            <button
              onClick={() => navigate("/how-it-works")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Book a Surprise
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Special Occasions We Celebrate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Gift,
              title: "Birthdays",
              desc: "Make birthdays extra special",
            },
            {
              icon: Heart,
              title: "Anniversaries",
              desc: "Celebrate love and togetherness",
            },
            {
              icon: GraduationCap,
              title: "Graduations",
              desc: "Honor academic achievements",
            },
            {
              icon: Star,
              title: "Special Events",
              desc: "Any occasion worth celebrating",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all"
              data-aos="fade-up"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Choose Your Package
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic",
              price: "2000 - 3000",
              features: [
                "Personal message",
                "Scheduled call",
                "Basic customization",
              ],
            },
            {
              name: "Premium",
              price: "3000 - 4000",
              features: [
                "Personal message",
                "Scheduled call",
                "Full customization",
                "Background music",
                "Video message",
              ],
              popular: true,
            },
            {
              name: "Ultimate",
              price: "4000 - 5000",
              features: [
                "Personal message",
                "Scheduled call",
                "Full customization",
                "Background music",
                "Video message",
                "Gift coordination",
                "Multiple calls",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border transition-transform transform hover:scale-105 duration-500 ${
                plan.popular ? "border-purple-500" : "border-slate-700"
              }`}
              data-aos="zoom-in-up"
              data-aos-delay={`${index * 100}`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-white mb-6">
                ₦{plan.price}
                <span className="text-lg text-gray-400">/call</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleBooking(plan.name)}
                className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-slate-700 text-white hover:bg-slate-600"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
