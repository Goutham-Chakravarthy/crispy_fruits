'use client';

import React from 'react';

const BlogSection = () => {
  const featuredArticle = {
    title: "The Ultimate Guide to Storing Dry Fruits: Keep Them Fresh for Months",
    subtitle: "Discover professional tips to maintain crunchiness, prevent moisture, and preserve nutritional value in your premium dry fruits collection.",
    category: "Storage Tips",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    bgColor: "from-amber-100 to-orange-100",
    iconColor: "bg-amber-200",
  };

  const sideArticles = [
    {
      title: "10 Health Benefits of Eating Almonds Daily",
      subtitle: "From heart health to glowing skin, discover why almonds deserve a place in your daily diet.",
      category: "Health",
      date: "Dec 12, 2024",
      readTime: "3 min read",
      bgColor: "from-green-100 to-emerald-100",
      iconColor: "bg-green-200",
    },
    {
      title: "How to Create the Perfect Trail Mix at Home",
      subtitle: "Mix, match, and customize your own energy-packed snack with our expert tips.",
      category: "Recipes",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      bgColor: "from-purple-100 to-pink-100",
      iconColor: "bg-purple-200",
    },
    {
      title: "5 Ways to Use Dried Fruits in Your Cooking",
      subtitle: "Transform everyday meals with the natural sweetness and nutrition of dried fruits.",
      category: "Cooking",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      bgColor: "from-blue-100 to-cyan-100",
      iconColor: "bg-blue-200",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Fresh From Our Blog
          </h2>
          <button className="text-black font-medium hover:text-gray-700 transition-colors duration-300 flex items-center gap-2">
            View All Posts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article - Large Card */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
              {/* Image */}
              <div className={`h-64 bg-gradient-to-br ${featuredArticle.bgColor} flex items-center justify-center relative overflow-hidden`}>
                <div className={`w-24 h-24 ${featuredArticle.iconColor} rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300`}></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {featuredArticle.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {featuredArticle.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.subtitle}
                </p>
                
                {/* Metadata */}
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
            </article>
          </div>

          {/* Side Articles - Stacked */}
          <div className="space-y-6">
            {sideArticles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="flex gap-4 p-6">
                  {/* Image */}
                  <div className={`w-24 h-24 flex-shrink-0 bg-gradient-to-br ${article.bgColor} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className={`w-12 h-12 ${article.iconColor} rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300`}></div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {article.subtitle}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
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
