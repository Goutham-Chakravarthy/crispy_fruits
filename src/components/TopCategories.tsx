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
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [quantity, setQuantity] = useState(1);

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
      name: 'Pure Himalayan Shilajit',
      description: 'Enhance your energy and immunity with Pure Himalayan Shilajit. A natural product for muscle building, stamina, and immunity boosting.',
      price: '₹400',
      image: 'https://alfajermart.com/wp-content/uploads/2024/05/4-3.jpg',
      tag: 'Premium',
      sku: 'SHILAJIT',
    },
    {
      id: 2,
      name: 'Healthy Kashmiri Saffron (Kesar)',
      description: 'Experience richness of Kashmiri saffron from Al Fajer Mart. A premium spice with incredible benefits for flavor, health, and wellness.',
      price: '₹300',
      image: 'https://alfajermart.com/wp-content/uploads/2024/08/1g.jpg',
      tag: 'Premium',
      sku: 'ALFAJJER-1',
    },
    {
      id: 3,
      name: 'Pure Kashmiri Honey',
      description: 'Discover rich flavor and natural goodness of pure Kashmiri honey from Al Fajer Mart. 100% organic, raw, and packed with nutrients.',
      price: '₹200',
      image: 'https://alfajermart.com/wp-content/uploads/2024/05/7-1.jpg',
      tag: 'Organic',
      sku: 'ALFAJJER-0014',
    },
    {
      id: 4,
      name: 'Kashmiri Kahwa Tea',
      description: 'Enjoy rich flavor and health benefits of Kashmiri Kahwa tea, a blend of premium green tea and exotic spices, from Al Fajer Mart.',
      price: '₹300',
      image: 'https://alfajermart.com/wp-content/uploads/2024/08/36.jpg',
      tag: 'Premium',
      sku: 'ALFAJJER-0017',
    },
    {
      id: 5,
      name: 'Kashmiri Garlic | Lasun',
      description: 'Shop Kashmiri Garlic (Lasun) at Al Fajer Mart. Known for its potent flavor and medicinal properties, this unique variety boosts immunity, aids digestion, and enhances the taste of your dishes. 100% natural and packed with health benefits.',
      price: '₹800',
      image: 'https://alfajermart.com/wp-content/uploads/2024/05/Pure-healthy.jpg',
      tag: 'Premium',
      sku: 'ALFAJJER-0019',
    },
    {
      id: 6,
      name: 'Premium |Kashmiri| Walnut',
      description: 'Rich in Antioxidants | May Decrease Inflammation | Supports Weight Control | May Help Lower Blood Pressure | Supports Healthy Aging | Supports Good Brain Function | Walnuts are High in Protein | Walnuts are a Vegan Source of Omega-3 Fatty Acids | Walnuts Contain High Amounts of Fiber | Walnuts are High in Phosphorus | Bioavailable Vitamin B6 | Powder like substances can be found in pack, it is natural as it happens due to broken pieces of Walnuts in Transit, Simply sort out walnuts from Powder. Refrigerate Walnut For Long Life and Fresh Taste.',
      price: '₹500',
      image: 'https://alfajermart.com/wp-content/uploads/2024/08/walnuts-1kg.jpg',
      tag: 'Premium',
      sku: 'ALFAJER75676',
    },
    {
      id: 7,
      name: 'Kashmiri Almonds by Al Fajer Mart – Premium Quality, Protein-Rich Nuts',
      description: 'Discover rich taste and superior quality of Al Fajer Mart Kashmiri Almonds. Sourced from pristine regions of Kashmir, these almonds are packed with essential nutrients, including vitamins, minerals, and healthy fats. Ideal for snacking, cooking, or baking, they offer a wholesome crunch and exceptional flavor in every bite.',
      price: '₹500',
      image: 'https://alfajermart.com/wp-content/uploads/2024/08/almond-1kg.jpg',
      tag: 'Premium',
      sku: 'ALFAJJER-0036',
    },
    {
      id: 8,
      name: 'Pure Kashmiri Apricot',
      description: 'Discover rich taste of Kashmiri Apricots. Naturally sweet and packed with vitamins, minerals, and antioxidants, perfect for snacking and support overall health. 100% natural and nutrient-rich.',
      price: '₹400',
      image: 'https://alfajermart.com/wp-content/uploads/2024/05/Pure-healthy.png',
      tag: 'Premium',
      sku: 'apricot-0046',
    },
    {
      id: 9,
      name: 'KASHMIRI Dried Morel Mushrooms',
      description: 'Shop premium Kashmiri Dried Morel Mushrooms at Al Fajer Mart. Known for their rich, earthy flavor and unique texture, these gourmet mushrooms add depth to your dishes and offer numerous health benefits. 100% natural and hand-picked.',
      price: '₹400',
      image: 'https://alfajermart.com/wp-content/uploads/2024/05/633ffe979267dd30c97af3da-dried-morel-mushrooms.jpg',
      tag: 'Special',
      sku: 'kashmiri-dried-mashrm',
    },
    {
      id: 10,
      name: 'Original Kashmiri Mamra Almonds',
      description: 'Al Fajer Mart Mamra Almonds offer exceptional quality and flavor. Sourced from finest regions, these almonds are known for their rich, nutty taste and crunchy texture. Packed with essential nutrients and healthy fats, they make a perfect snack or addition to your favorite recipes.',
      price: '₹1000',
      image: 'https://alfajermart.com/wp-content/uploads/2024/08/almond-1kg-1.jpg',
      tag: 'Premium',
      sku: 'ALFAJER-3688',
    },
    {
      id: 11,
      name: 'Kashmiri Red Chilli Powder by Al Fajer Mart – Mild, Flavorful, and Aromatic',
      description: 'Hand Picked Kashmiri Whole Mirchi, Hand Sorted To make sure every Chilli is of good quality, Pure Kashmiri Mirchi Whole Pure, No added Color Or Fragrances, Big Red Colour Kashmiri Chillis Whole. These Kashmiri Red Chillies will impart a wonderful deep red colour into your Indian/Thai/Oriental without adding too much heat.',
      price: '₹250',
      image: 'https://alfajermart.com/wp-content/uploads/2024/05/Food-social-media-promotion-and-instagram-banner-post-6.png',
      tag: 'Premium',
      sku: 'ALFAJER6767',
    },
    {
      id: 12,
      name: 'Kashmir Walnuts in Shell |Kashmiri Sabut Akhrot |Walnuts with Shell',
      description: 'Discover premium Kashmiri Walnuts at Al Fajer Mart. Fresh, crunchy, and packed with nutrients, our walnuts are rich in omega-3 fatty acids, antioxidants, and protein—perfect for snacking or adding to your favorite recipes. 100% natural and healthy.',
      price: '₹500',
      image: 'https://alfajermart.com/wp-content/uploads/2024/08/walnuts-1kg.jpg',
      tag: 'Premium',
      sku: 'ALFAJER098098',
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
              onClick={() => setSelectedProduct(product)}
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
                    <div className="text-[14px] text-gray-500 mb-4 leading-[1.6] font-body">
                      {expandedCard === product.id ? (
                        <div className="space-y-2">
                          <p>{product.description}</p>
                          <div className="text-xs text-gray-400 bg-gray-50 p-3 rounded-lg">
                            <p className="font-semibold mb-1">Product Details:</p>
                            <p><span className="font-medium">SKU:</span> {product.sku}</p>
                            <p><span className="font-medium">Category:</span> {product.tag === 'Premium' ? 'Premium Quality' : product.tag === 'Organic' ? 'Organic Product' : product.tag === 'Special' ? 'Specialty Item' : 'Standard'}</p>
                            <p className="mt-2 text-orange-600 font-medium">✓ 100% Natural & Authentic</p>
                            <p className="text-green-600 font-medium">✓ Quality Assured</p>
                          </div>
                        </div>
                      ) : (
                        <p className="line-clamp-2">{product.description}</p>
                      )}
                      <button
                        onClick={() => setExpandedCard(expandedCard === product.id ? null : product.id)}
                        className="text-orange-600 hover:text-orange-700 text-sm font-medium mt-2 transition-colors duration-200 flex items-center gap-1"
                      >
                        {expandedCard === product.id ? (
                          <>
                            <span>Read Less</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
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

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                    {selectedProduct.tag}
                  </span>
                  <span>SKU: {selectedProduct.sku}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setQuantity(1);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close product details modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-lg bg-gray-100 overflow-hidden cursor-pointer border-2 border-transparent hover:border-orange-500 transition-colors">
                      <img
                        src={selectedProduct.image}
                        alt={`${selectedProduct.name} view ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                {/* Price and Quantity */}
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">{selectedProduct.price}</span>
                    <span className="text-gray-500">/500g</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-700">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="px-4 py-2 min-w-[60px] text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({quantity * 500}g total)
                    </span>
                  </div>

                  <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.447 2.293l6.647 6.646a.5.5 0 00.708-.708l-6.646-6.647a.5.5 0 00-.708 0z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>

                {/* Product Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                </div>

                {/* Product Features */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Product Features</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      100% Natural
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Quality Assured
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Premium Quality
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Authentic Source
                    </div>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.605 1.603-.921 1.902 0l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.783-1.81 0-2.38l2.8-2.034a1 1 0 00.364-1.118l-1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">4.5 (128 reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "Rahul Sharma", rating: 5, comment: "Excellent quality product! Very fresh and authentic taste. Will definitely order again.", date: "2 days ago" },
                      { name: "Priya Patel", rating: 4, comment: "Good quality and fast delivery. The packaging was also very good.", date: "1 week ago" },
                      { name: "Amit Kumar", rating: 5, comment: "Premium quality as described. Very satisfied with the purchase.", date: "2 weeks ago" }
                    ].map((review, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium text-gray-900">{review.name}</div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.605 1.603-.921 1.902 0l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.783-1.81 0-2.38l2.8-2.034a1 1 0 00.364-1.118l-1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  <button className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors">
                    View all reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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