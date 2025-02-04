import React, { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Birthday Celebration",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      content:
        "The birthday surprise call for my mom was absolutely perfect! She was so touched, it brought tears to her eyes.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Anniversary Surprise",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      content:
        "I couldn't be with my wife on our anniversary due to work, but SurpriseCall made it special. The personalized message was beautiful.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Graduation Celebration",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      content:
        "Used SurpriseCall for my sister's graduation. The team went above and beyond to make it memorable!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Special Occasion",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      content:
        "The attention to detail and personalization was incredible. Worth every penny!",
      rating: 5,
    },
  ];

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
            What Our Customers Say
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what people are saying about
            their SurpriseCall experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 100}`}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700"
            >
              <div className="flex items-start mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-purple-400">{testimonial.role}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="w-8 h-8 text-purple-400 opacity-50 absolute -left-2 -top-2" />
                <p className="text-gray-300 italic pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Join Our Happy Customers
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-slate-700/50 px-6 py-2 rounded-full">
              <span className="text-purple-400 font-semibold">4.9/5</span>
              <span className="text-gray-300 ml-2">Average Rating</span>
            </div>
            <div className="bg-slate-700/50 px-6 py-2 rounded-full">
              <span className="text-purple-400 font-semibold">1000+</span>
              <span className="text-gray-300 ml-2">Happy Customers</span>
            </div>
            <div className="bg-slate-700/50 px-6 py-2 rounded-full">
              <span className="text-purple-400 font-semibold">98%</span>
              <span className="text-gray-300 ml-2">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
