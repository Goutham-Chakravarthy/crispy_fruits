'use client';

import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Shop', href: '#shop' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Hamburger menu and navigation */}
          <div className="flex items-center justify-start space-x-8">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <Menu size={20} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-700 hover:text-gray-900 text-[17px] font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src="/al-fajer-mart-logo.png"
              alt="AL FAJER MART"
              className="h-14 w-auto"
            />
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center justify-end space-x-6">
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Login"
            >
              <span className="text-[17px] font-medium">Login</span>
            </button>
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={22} />
            </button>
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Wishlist"
            >
              <Heart size={22} />
            </button>
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-[17px] font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-200 mt-2 pt-4">
                <button
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Login"
                >
                  <span className="text-[17px] font-medium">Login</span>
                </button>
                <button
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Search"
                >
                  <Search size={22} />
                </button>
                <button
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Wishlist"
                >
                  <Heart size={22} />
                </button>
                <button
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Shopping Cart"
                >
                  <ShoppingBag size={22} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
