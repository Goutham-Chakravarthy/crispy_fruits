'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const TrustBadges = () => {
  const badges = [
    {
      title: '100% Natural',
      description: 'Pure and unprocessed',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'from-green-100 to-emerald-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'No Preservatives',
      description: 'Fresh and chemical-free',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      bgColor: 'from-red-100 to-pink-100',
      iconColor: 'text-red-600',
    },
    {
      title: 'Premium Quality',
      description: 'Handpicked and selected',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      bgColor: 'from-yellow-100 to-amber-100',
      iconColor: 'text-yellow-600',
    },
    {
      title: 'Fresh & Crunchy',
      description: 'Perfect texture and taste',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'from-blue-100 to-cyan-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Secure Packaging',
      description: 'Protected during transit',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      bgColor: 'from-purple-100 to-indigo-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'from-orange-100 to-red-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section className="py-28 px-6 sm:px-10 lg:px-16 bg-gray-50">
      <ScrollReveal className="max-w-7xl mx-auto" delayMs={100}>
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-gray-900 mb-4 leading-[1.2] tracking-wide font-heading">
            Why Choose Crispy Fruits
          </h2>
          <p className="text-[16px] text-gray-700 max-w-2xl mx-auto leading-[1.75] font-body">
            We're committed to providing you with the highest quality dry fruits with complete transparency and trust.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${badge.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={badge.iconColor}>
                  {badge.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[22px] font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 leading-[1.3] font-heading">
                {badge.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-[1.6] font-body">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default TrustBadges;
