'use client';

import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const TrustBadges = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{fullImage: string; label: string} | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    "Certified quality meets exceptional taste - every product backed by trusted certifications",
    "Premium ingredients, rigorous testing - your health and satisfaction guaranteed"
  ];

  // Auto-slide testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const certificationBadges = [
    {
      name: 'FDA',
      label: 'FDA Registered',
      image: '/slogo1-150x150.webp',
      fullImage: '/slogo1-150x150.webp',
    },
    {
      name: 'Organic',
      label: 'Certified Organic',
      image: '/slogo2-150x150.webp',
      fullImage: '/slogo2-150x150.webp',
    },
    {
      name: 'ISO',
      label: 'ISO 9001:2008',
      image: '/slogo3-150x150.webp',
      fullImage: '/slogo3-150x150.webp',
    },
    {
      name: 'DUNS',
      label: 'D-U-N-S Registered',
      image: '/slogo4-150x150.webp',
      fullImage: '/slogo4-150x150.webp',
    },
    {
      name: 'FDA Approved',
      label: 'FDA Approved',
      image: '/slogo5-150x150.webp',
      fullImage: '/slogo5-150x150.webp',
    },
  ];

  const certificates = [
    {
      title: 'Organic Certificate',
      subtitle: 'EU Organic Certification',
      image: '/certificate-1.webp',
    },
    {
      title: 'ISO Certificate',
      subtitle: 'ISO 9001:2011',
      image: '/certificate-2.webp',
    },
    {
      title: 'FSSAI Certificate',
      subtitle: 'Food Safety Standards',
      image: '/certificate-3.webp',
    },
    {
      title: 'Lab Report',
      subtitle: 'Quality Analysis Report',
      image: '/lab_report_2-scaled.webp',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
      <ScrollReveal className="max-w-7xl mx-auto" delayMs={100}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#B8935C] tracking-widest uppercase mb-3">
            CERTIFIED BY
          </p>
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-gray-900 mb-4 leading-[1.2] tracking-wide font-heading">
            Our Certifications & Quality Standards
          </h2>
          <p className="text-[16px] text-gray-700 max-w-2xl mx-auto leading-[1.75] font-body">
            Trusted certifications ensuring premium quality and safety standards
          </p>
        </div>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {certificationBadges.map((badge, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
              onClick={() => setSelectedCertificate(badge)}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg hover:shadow-xl border-4 border-gray-100 hover:border-[#E8DCC8] transition-all duration-300 flex items-center justify-center overflow-hidden">
                <img
                  src={badge.image}
                  alt={badge.label}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <p className="text-center text-xs font-semibold text-gray-700 mt-3 group-hover:text-[#E8DCC8] transition-colors">
                {badge.label}
              </p>
            </div>
          ))}
        </div>

        {/* Certificate Documents Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => setSelectedCertificate({ fullImage: cert.image, label: cert.title })}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-[#E8DCC8] relative group">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Glassmorphism overlay with title on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="w-full p-4 text-center">
                      <h4 className="text-white font-semibold text-sm mb-1 backdrop-blur-sm bg-white/10 rounded-lg px-3 py-2">
                        {cert.title}
                      </h4>
                      <p className="text-white/80 text-xs backdrop-blur-sm bg-white/10 rounded-lg px-3 py-1">
                        {cert.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="text-center max-w-3xl mx-auto py-8 px-6">
          <svg className="w-10 h-10 text-[#B8935C] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          {/* Sliding Testimonials */}
          <div className="relative h-20 overflow-hidden">
            {testimonials.map((text, index) => (
              <p
                key={index}
                className={`absolute inset-0 text-lg text-gray-700 italic leading-relaxed font-body transition-all duration-700 flex items-center justify-center ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-y-0'
                    : index < currentTestimonial
                    ? 'opacity-0 -translate-y-full'
                    : 'opacity-0 translate-y-full'
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Animated Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-8 h-2 bg-[#B8935C]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{selectedCertificate.label}</h3>
              <img
                src={selectedCertificate.fullImage}
                alt={selectedCertificate.label}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrustBadges;