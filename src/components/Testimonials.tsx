'use client';

import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Customers Say
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Review Card */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg p-8 lg:p-10">
            {/* Star Rating */}
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Simply Outstanding Quality!
            </h3>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              "I've been ordering from Crispy Fruits for over two years now, and quality never disappoints! The almonds are always fresh and perfectly crunchy, dried apricots are plump and sweet, and everything arrives beautifully packaged. Their customer service is exceptional too. I recently tried their organic trail mix, and it's become my go-to snack for work. Highly recommend to anyone looking for premium quality dry fruits!"
            </p>

            {/* Reviewer */}
            <p className="text-gray-900 font-semibold text-right text-lg">
              Ananya Patel, Mumbai
            </p>
          </div>

          {/* Side Image Block */}
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 lg:p-10 flex flex-col justify-center items-center text-center min-h-[400px] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 bg-green-200 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-emerald-200 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-300 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Premium Quality, Perfectly Packed
              </h3>
              <p className="text-gray-700 text-lg">
                See how we source and package our products
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                READ ALL REVIEWS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
