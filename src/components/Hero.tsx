'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Nature's
                <span className="block text-orange-600">Crunchy Treasures</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                From premium almonds to exotic dried berries, explore our collection of handpicked dry fruits that bring health and flavor to your daily routine. Sustainably sourced, naturally delicious.
              </p>
            </div>
            
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Premium Almonds */}
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-amber-200 rounded-full"></div>
                  <p className="text-sm font-medium text-gray-700">Premium Almonds</p>
                </div>
              </div>
            </div>

            {/* Dried Apricots */}
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-orange-200 rounded-full"></div>
                  <p className="text-sm font-medium text-gray-700">Dried Apricots</p>
                </div>
              </div>
            </div>

            {/* Mixed Nuts */}
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-brown-100 to-amber-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-amber-300 rounded-full"></div>
                  <p className="text-sm font-medium text-gray-700">Mixed Nuts</p>
                </div>
              </div>
            </div>

            {/* Gift Hamper */}
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-red-200 rounded-full"></div>
                  <p className="text-sm font-medium text-gray-700">Gift Hamper</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
