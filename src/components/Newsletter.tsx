'use client';

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
    setEmail('');
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Get Your Healthy Snacking Inspiration
          <span className="block">Straight to Your Inbox</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Subscribe for exclusive recipes, health tips, and special offers
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
        </form>

        {/* Privacy Text */}
        <p className="text-sm text-gray-300 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
