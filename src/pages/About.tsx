import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About SurpriseCall</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make every special moment even more memorable through personalized celebration calls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2024, SurpriseCall was born from a simple idea: to help people create unforgettable moments for their loved ones. We understand that sometimes distance keeps us apart from those we care about most, but that shouldn't stop us from making their special days extraordinary.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to bridge the gap between hearts through meaningful, personalized celebration calls. We believe that every milestone deserves recognition, and every celebration should be as unique as the person being celebrated.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Heart, title: 'Personalized Touch', value: '80+', label: 'Happy Celebrations' },
            { icon: Users, title: 'Growing Community', value: '200+', label: 'Satisfied Customers' },
            { icon: Award, title: 'Excellence', value: '98%', label: 'Satisfaction Rate' },
            { icon: Clock, title: 'Reliability', value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
              <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'Every call is crafted with genuine care and attention to detail.',
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve our services to create better experiences.',
              },
              {
                title: 'Connection',
                description: 'Building meaningful relationships through memorable moments.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}