'use client';

import React from 'react';

const Footer = () => {
  const legalLinks = [
    'Privacy Policy',
    'Terms & Conditions',
    'Shipping Policy',
    'Return & Refund Policy',
    'Cookie Policy',
  ];

  const companyLinks = [
    'About Us',
    'Our Story',
    'Why Choose Us',
    'Quality Promise',
    'Sustainability',
    'Certifications',
  ];

  const customerCareLinks = [
    'Contact Us',
    'FAQs',
    'Track My Order',
    'Bulk Orders',
    'Corporate Gifts',
    'Wholesale Inquiry',
  ];

  const resourcesLinks = [
    'Blog',
    'Recipes',
    'Health Tips',
    'Storage Guide',
    'Gift Ideas',
    'Nutritional Info',
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'f' },
    { name: 'Instagram', icon: '📷' },
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Pinterest', icon: 'P' },
    { name: 'YouTube', icon: '▶' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">LEGAL</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">COMPANY</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              {customerCareLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">RESOURCES</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Box and Social */}
          <div className="lg:col-span-1">
            {/* CTA Box */}
            <div className="bg-black border border-orange-500 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-2">Start Shopping</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get premium quality dry fruits delivered to your doorstep
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                Shop Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">CONNECT WITH US</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-200"
                    title={social.name}
                  >
                    <span className="text-sm font-bold">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Crispy Fruits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
