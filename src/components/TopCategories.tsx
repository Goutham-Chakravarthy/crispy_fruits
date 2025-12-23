'use client';

import React, { useState } from 'react';

const TopCategories = () => {
  const [activeCategory, setActiveCategory] = useState('Nuts');

  const categories = [
    'Nuts',
    'Dried Fruits',
    'Seeds',
    'Trail Mix',
    'Organic Range',
    'Exotic Mix',
    'Bestsellers',
  ];

  const products = [
    {
      id: 1,
      name: 'Premium California Almonds',
      description: 'High-quality almonds from California',
      bgColor: 'from-amber-100 to-orange-100',
      iconColor: 'bg-amber-200',
    },
    {
      id: 2,
      name: 'Turkish Apricots',
      description: 'Sweet and tangy dried apricots',
      bgColor: 'from-orange-100 to-yellow-100',
      iconColor: 'bg-orange-200',
    },
    {
      id: 3,
      name: 'Roasted Cashew Mix',
      description: 'Perfectly roasted cashew nuts',
      bgColor: 'from-yellow-100 to-amber-100',
      iconColor: 'bg-yellow-200',
    },
    {
      id: 4,
      name: 'Afghani Dried Figs',
      description: 'Premium dried figs from Afghanistan',
      bgColor: 'from-purple-100 to-pink-100',
      iconColor: 'bg-purple-200',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
          Popular Dry Fruits
        </h2>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-black text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Product Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${product.bgColor} flex items-center justify-center relative overflow-hidden`}>
                  <div className={`w-20 h-20 ${product.iconColor} rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300`}></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Hover Action Button */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-black text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
            Explore All Products
          </button>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TopCategories;
