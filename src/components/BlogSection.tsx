'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const BlogSection = () => {
  // Featured article about storage – image shows jars/containers with nuts & dry fruits
  const featuredArticle = {
    title:
      "The Ultimate Guide to Storing Dry Fruits: Keep Them Fresh for Months",
    subtitle:
      "Simple, practical tips to keep your almonds, berries, and seeds crunchy, aromatic, and full of nutrition.",
    category: "Storage Tips",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80", // glass jars with dry ingredients
  };

  // Side articles use images that clearly match each topic
  const sideArticles = [
    {
      title: "10 Health Benefits of Eating Almonds Daily",
      subtitle:
        "From heart health to glowing skin, discover why almonds deserve a place in your daily diet.",
      category: "Health",
      date: "Dec 12, 2024",
      readTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80", // almonds close-up
    },
    {
      title: "How to Create the Perfect Trail Mix at Home",
      subtitle:
        "Balance nuts, seeds, dried fruits, and sweet bites for an energy-packed, healthy snack.",
      category: "Recipes",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80", // bowl of trail mix
    },
    {
      title: "5 Ways to Use Dried Fruits in Your Cooking",
      subtitle:
        "Upgrade breakfasts, desserts, and savory dishes with naturally sweet dried fruits.",
      category: "Cooking",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80", // assorted dried fruits
    },
  ];

  return (
    <section className="py-28 px-6 sm:px-10 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4" delayMs={100}>
          <div>
            <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-gray-900 mb-2 leading-[1.2] tracking-wide font-heading">
              Fresh From Our Blog
            </h2>
            <p className="text-[16px] text-gray-700 leading-[1.75] font-body">
              Expert tips, recipes, and insights about dry fruits
            </p>
          </div>
          <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold text-[15px] tracking-wide hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-body">
            View All Posts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </ScrollReveal>

        {/* Articles Grid */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-3 gap-10" delayMs={200}>
          {/* Featured Article - Large Card */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-orange-600 shadow-lg">
                    {featuredArticle.category}
                  </span>
                </div>

                {/* Metadata Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 text-sm mb-3">
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-[22px] font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300 leading-[1.3] font-heading">
                  {featuredArticle.title}
                </h3>
                <p className="text-[16px] text-gray-700 mb-6 leading-[1.75] font-body">
                  {featuredArticle.subtitle}
                </p>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold text-[15px] tracking-wide group-hover:gap-3 transition-all duration-300 hover:bg-opacity-90 font-body">
                  Read Full Article
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </article>
          </div>

          {/* Side Articles - Stacked (only first two) */}
          <div className="space-y-6">
            {sideArticles.slice(0, 2).map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="relative">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-orange-600 shadow-md">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h4 className="text-[22px] font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-[1.3] font-heading">
                      {article.title}
                    </h4>
                    <p className="text-[14px] text-gray-500 mb-4 line-clamp-2 leading-[1.6] font-body">
                      {article.subtitle}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center justify-between text-[14px] text-gray-500 pt-4 border-t border-gray-100 leading-[1.6] font-body">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Custom styles */}
      <style jsx>{`
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

export default BlogSection;
