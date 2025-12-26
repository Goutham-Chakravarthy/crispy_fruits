'use client';

import React, { useEffect, useRef, useState } from 'react';

// Simple ScrollReveal component
const ScrollReveal = ({ children, className = "", delayMs = 0 }: { 
  children: React.ReactNode; 
  className?: string; 
  delayMs?: number; 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

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

const Hero = () => {
  // Countdown timer state - starts from 6.5 days (156 hours)
  const [scale, setScale] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  // Handle scroll for background zoom effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition * 0.0008; // controls zoom speed
      setScale(Math.min(newScale, 1.2)); // limit max zoom to 1.2x
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        // Countdown logic
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 6.5 days when countdown reaches 0
          days = 6;
          hours = 12;
          minutes = 0;
          seconds = 0;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format numbers to always show 2 digits
  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <>
      <section
        className="relative min-h-screen flex items-center py-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
      >
        {/* Background image with zoom effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url(/Hero_BG.jpg)`,
            transform: `scale(${scale})`,
            willChange: 'transform',
          }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto w-full z-20">
          <div className="flex justify-end">
            <div className="max-w-xl lg:max-w-2xl">
              {/* Text Content */}
              <ScrollReveal className="space-y-6" delayMs={100}>
                <div className="space-y-4">
                  <span className="inline-block bg-white text-black text-[10px] sm:text-[11px] font-semibold tracking-widest px-4 py-1.5 rounded-sm mb-2">
                    PURE HEALTHY
                  </span>
                  <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-white leading-[1.15] tracking-wide font-heading">
                    KASHMIRI DRY FRUITS &{' '}
                    <span className="block mt-1">HIMALAYAN SHILAJIT</span>
                  </h1>
                  <p className="text-[13px] sm:text-[14px] text-gray-200 leading-[1.75] max-w-lg font-body">
                    Don't get stuck with fake products! We are a Kashmiri-based distributor of authentic Shilajit, premium saffron, and high-quality dry fruits. With us, you get genuine products straight from the source. First try, then trust — experience the difference!
                  </p>
                </div>

                <button
                  className="bg-black text-white px-8 py-3.5 rounded-sm text-[14px] font-semibold tracking-wide font-body hover:bg-gray-900 transition-colors"
                >
                  Shop Now
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Card Section - Overlapping Hero */}
      <div className="relative -mt-48 lg:-mt-56 z-30 px-6 sm:px-10 lg:px-16 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-lg">
            <div className="px-8 sm:px-12 lg:px-20 xl:px-32 py-12 lg:py-16">
              {/* Header */}
              <div className="mb-8">
                <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#C9A96E] uppercase mb-3">
                  CHOOSE DELICIOUS & HEALTHY
                </p>
                <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-black leading-tight">
                  CHOOSE AL FAJER MART
                </h2>
              </div>

              {/* Two Column Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Column */}
                <div className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.8]">
                  <p>
                    At <span className="font-semibold text-black">Kashmir-based</span> distributors, we take pride in offering 100% pure{' '}
                    <span className="font-semibold text-black">Shilajit</span> and{' '}
                    <span className="font-semibold text-black">saffron</span> straight from the lush valleys of Kashmir. Our{' '}
                    <span className="font-semibold text-black">Shilajit</span> is known for its rich mineral content, offering numerous health benefits like increased energy, improved stamina, and detoxification. Similarly, our{' '}
                    <span className="font-semibold text-black">saffron</span>, known for its vibrant color and strong aroma, is handpicked to ensure the highest quality. Avoid counterfeit products in the market—<span className="font-semibold text-black">first try, then trust</span> our authentic Kashmiri Shilajit and saffron.
                  </p>
                </div>

                {/* Right Column */}
                <div className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.8]">
                  <p>
                    Our <span className="font-semibold text-black">dry fruits</span> are sourced directly from the orchards of Kashmir, where the climate and soil produce some of the finest{' '}
                    <span className="font-semibold text-black">walnuts, almonds, and apricots</span>. We ensure that every nut and fruit is fresh, nutrient-dense, and packed with flavor. Whether you're looking to boost your daily nutrition or add a touch of richness to your dishes, our premium{' '}
                    <span className="font-semibold text-black">dry fruits</span> deliver unmatched quality and taste. Don't settle for substandard options—choose the best with our Kashmiri-sourced dry fruits for a healthy, authentic experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purple Banner Section */}
      <div className="relative px-6 sm:px-10 lg:px-16 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-pink-800 py-20 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left - Product Categories */}
                <div className="text-white space-y-4 lg:items-start items-center flex flex-col">
                  <p className="text-[15px] sm:text-[16px] font-light tracking-[0.15em] uppercase">SHILAJIT</p>
                  <p className="text-[15px] sm:text-[16px] font-light tracking-[0.15em] uppercase">SAFFRON</p>
                  <p className="text-[15px] sm:text-[16px] font-light tracking-[0.15em] uppercase">DRY FRUITS</p>
                </div>

                {/* Center - Countdown Timer */}
                <div className="text-center text-white flex-1">
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold mb-1 tracking-wide">
                    BUY 1 GET 1 FREE
                  </h2>
                  <p className="text-[13px] sm:text-[14px] font-light tracking-[0.2em] uppercase mb-6">
                    LIMITED TIME OFFER
                  </p>
                  
                  {/* Countdown */}
                  <div className="flex justify-center gap-3 sm:gap-5">
                    <div className="flex flex-col items-center">
                      <div className="text-[52px] sm:text-[60px] lg:text-[68px] font-bold leading-none tracking-tight">
                        {formatTime(timeLeft.days)}
                      </div>
                      <div className="text-[11px] sm:text-[12px] font-light uppercase tracking-wider mt-1">Days</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[52px] sm:text-[60px] lg:text-[68px] font-bold leading-none tracking-tight">
                        {formatTime(timeLeft.hours)}
                      </div>
                      <div className="text-[11px] sm:text-[12px] font-light uppercase tracking-wider mt-1">Hours</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[52px] sm:text-[60px] lg:text-[68px] font-bold leading-none tracking-tight">
                        {formatTime(timeLeft.minutes)}
                      </div>
                      <div className="text-[11px] sm:text-[12px] font-light uppercase tracking-wider mt-1">Minutes</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[52px] sm:text-[60px] lg:text-[68px] font-bold leading-none tracking-tight">
                        {formatTime(timeLeft.seconds)}
                      </div>
                      <div className="text-[11px] sm:text-[12px] font-light uppercase tracking-wider mt-1">Seconds</div>
                    </div>
                  </div>
                </div>

                {/* Right - CTA Button */}
                <div className="flex lg:justify-end justify-center">
                  <button className="bg-white text-black px-9 py-3.5 text-[13px] font-semibold tracking-wide hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Shilajit Description (Takes full height) */}
            <div className="lg:row-span-2 bg-[#E8DCC8] p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B8935C] uppercase mb-4">
                  100% BEST QUALITY SHILAJIT
                </p>
                <h3 className="text-[28px] sm:text-[32px] font-bold text-black mb-6 leading-tight">
                  PURE HIMALAYAN SHILAJIT
                </h3>
                <p className="text-[14px] text-gray-700 leading-relaxed mb-8">
                  After being sourced from the great Himalayan ranges in a short harvesting period from these extreme high altitudes, it is traditionally purified using the ancient Shodhana technique using only Triphala in natural spring water and the sun.
                </p>
              </div>
              <button className="border-2 border-black text-black px-8 py-3 text-[13px] font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition-colors w-fit">
                SHOP NOW
              </button>
            </div>

            {/* Right Column - Product Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Product Card 1 - Shilajit Product */}
              <div className="relative overflow-hidden group cursor-pointer bg-white shadow-sm">
                <div className="absolute top-4 left-4 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded z-10">
                  -43%
                </div>
                <div className="relative h-[280px] bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1629738601425-494c3d6ba3e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Pure Himalayan Shilajit"
                    className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-[13px] font-semibold text-black mb-3 uppercase tracking-wide leading-tight">
                    PURE HIMALAYAN SHILAJIT BY AL FAJER MART — NATURAL STAMINA BOOSTER
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-bold text-black">₹400.00</span>
                    <span className="text-[13px] text-gray-500 line-through">₹1,330.00</span>
                  </div>
                </div>
              </div>

              {/* Product Card 2 - Saffron Product */}
              <div className="relative overflow-hidden group cursor-pointer bg-white shadow-sm">
                <div className="absolute top-4 left-4 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded z-10">
                  -70%
                </div>
                <div className="relative h-[280px] bg-[#D4B896] flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1564057779901-11451bfca03b?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Healthy Kashmiri Saffron"
                    className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-[13px] font-semibold text-black mb-3 uppercase tracking-wide leading-tight">
                    HEALTHY KASHMIRI SAFFRON (KESAR) — PREMIUM SPICE GOOD FOR HEALTH
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-bold text-black">₹300.00</span>
                    <span className="text-[13px] text-gray-500 line-through">₹3,000.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;