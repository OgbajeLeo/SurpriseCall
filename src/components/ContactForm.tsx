import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

type FormData = {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success('Message sent successfully! Well get back to you soon.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Full Name
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          className="mt-1 block w-full rounded-lg bg-slate-800/50 border border-slate-700 text-white px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          className="mt-1 block w-full rounded-lg bg-slate-800/50 border border-slate-700 text-white px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
          Phone Number
        </label>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^\+?[\d\s-]+$/,
              message: 'Invalid phone number',
            },
          })}
          type="tel"
          className="mt-1 block w-full rounded-lg bg-slate-800/50 border border-slate-700 text-white px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="+1 234 567 8900"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="occasion" className="block text-sm font-medium text-gray-300">
          Occasion
        </label>
        <select
          {...register('occasion', { required: 'Please select an occasion' })}
          className="mt-1 block w-full rounded-lg bg-slate-800/50 border border-slate-700 text-white px-4 py-2 focus:outline-none focus:border-purple-500"
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="graduation">Graduation</option>
          <option value="other">Other</option>
        </select>
        {errors.occasion && (
          <p className="mt-1 text-sm text-red-400">{errors.occasion.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
          rows={4}
          className="mt-1 block w-full rounded-lg bg-slate-800/50 border border-slate-700 text-white px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="Tell us about your special occasion..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
      >
        <span>Send Message</span>
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}