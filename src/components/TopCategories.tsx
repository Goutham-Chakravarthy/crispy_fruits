'use client';

import React, { useEffect, useRef, useState } from 'react';

// Simple ScrollReveal component
const ScrollReveal = ({ children, className = "", delayMs = 0 }: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delayMs);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

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
      description: 'Rich in protein and perfect for daily snacking',
      price: '₹599',
      image: 'https://images.unsplash.com/photo-1600189020840-e9918c25269d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Bestseller',
    },
    {
      id: 2,
      name: 'Turkish Apricots',
      description: 'Sweet, tangy and naturally sun-dried',
      price: '₹449',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80',
      tag: 'New',
    },
    {
      id: 3,
      name: 'Roasted Cashew Mix',
      description: 'Crunchy cashews roasted to perfection',
      price: '₹699',
      image: 'https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Popular',
    },
    {
      id: 4,
      name: 'Afghani Dried Figs',
      description: 'Premium quality figs with natural sweetness',
      price: '₹549',
      image: 'https://plus.unsplash.com/premium_photo-1725986663002-c2b55adc6ba5?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Organic',
    },
    {
      id: 5,
      name: 'Salted Pistachios',
      description: 'Lightly salted premium pistachios for a crunchy treat',
      price: '₹749',
      image: 'https://plus.unsplash.com/premium_photo-1725874816737-8918f48c41a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Hot',
    },
    {
      id: 6,
      name: 'Walnut Kernels',
      description: 'Omega-3 rich walnut halves for brain health',
      price: '₹799',
      image: 'https://plus.unsplash.com/premium_photo-1671405403469-b0ba7787b344?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Premium',
    },
    {
      id: 7,
      name: 'Cranberry Mix',
      description: 'Tangy dried cranberries mixed with raisins',
      price: '₹499',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
      tag: 'Trending',
    },
    {
      id: 8,
      name: 'Premium Trail Mix',
      description: 'Nut and berry trail mix for on-the-go energy',
      price: '₹649',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      tag: 'Energy',
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
      <ScrollReveal className="max-w-7xl mx-auto" delayMs={100}>
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-gray-900 mb-4 leading-[1.2] tracking-wide font-heading">
            Popular Dry Fruits
          </h2>
          <p className="text-[16px] text-gray-700 max-w-2xl mx-auto leading-[1.75] font-body">
            Handpicked selection of premium quality dry fruits from around the world
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex overflow-x-auto scrollbar-hide space-x-3 pb-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 font-semibold text-[15px] tracking-wide whitespace-nowrap transition-all duration-300 font-body ${
                  activeCategory === category
                    ? 'bg-black text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Tag Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-bold px-3 py-1.5">
                      {product.tag}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-black text-white px-6 py-2 text-[15px] font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-300 font-body shadow-md hover:shadow-lg">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-[20px] font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 leading-[1.3] font-heading">
                      {product.name}
                    </h3>
                    <p className="text-[14px] text-gray-500 mb-4 line-clamp-2 leading-[1.6] font-body">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-[14px] text-gray-500 ml-1">/500g</span>
                    </div>
                    <button
                      className="bg-black text-white p-3 hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-16">
          <button className="group relative bg-black text-white px-10 py-4 font-semibold text-[15px] tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden hover:bg-opacity-90 font-body">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Products
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </ScrollReveal>

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