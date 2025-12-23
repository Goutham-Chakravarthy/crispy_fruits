'use client';

import React, { useState } from 'react';
import { Mail, Phone, Clock, Gift } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form. In a real app you would POST this.
    console.log('Contact form submitted:', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <ScrollReveal className="max-w-6xl mx-auto" delayMs={100}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-gray-900 mb-4 leading-[1.2] tracking-wide font-heading">
            Let's Connect
          </h2>
          <p className="text-[16px] text-gray-700 max-w-2xl mx-auto leading-[1.75] font-body">
            We're here to answer your questions and help you find the perfect products
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EDEAD3]/20 to-transparent rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-[22px] font-semibold text-gray-900 mb-2 leading-[1.3] font-heading">
                Get in Touch
              </h3>
              <p className="text-gray-700 mb-8 leading-[1.75] text-[16px] font-body">
                Have a question about our products, bulk orders, or partnerships?
                Send us a message and we'll get back within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-[14px] font-semibold text-gray-700 mb-2 leading-[1.6] font-body">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border-2 border-gray-200 px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-[15px] font-body"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-semibold text-gray-700 mb-2 leading-[1.6] font-body">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border-2 border-gray-200 px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-[15px] font-body"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-semibold text-gray-700 mb-2 leading-[1.6]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-2xl border-2 border-gray-200 px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all duration-200 text-[15px] font-body"
                    placeholder="Tell us how we can help you"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-black text-white font-bold hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-[15px] tracking-wide font-body"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-[22px] font-semibold mb-4 text-gray-900 leading-[1.3] font-heading">Customer Support</h3>
              <p className="text-gray-700 mb-6 leading-[1.75] text-[16px] font-body">
                Our team is here to help with orders, product questions, and
                wholesale enquiries.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-[14px] font-medium leading-[1.6] font-body">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Response within 24 hours
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#EDEAD3]/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-[15px] leading-[1.6] font-body">Email</p>
                  <p className="text-gray-700 text-[15px] leading-[1.6] font-body">support@crispyfruits.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#EDEAD3]/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-[15px] leading-[1.6] font-body">Phone</p>
                  <p className="text-gray-700 text-[15px] leading-[1.6] font-body">+91-98765-43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#EDEAD3]/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-[15px] leading-[1.6] font-body">Hours</p>
                  <p className="text-gray-700 text-[15px] leading-[1.6] font-body">Mon–Sat, 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#EDEAD3]/20 to-[#EDEAD3]/5 rounded-3xl border-2 border-dashed border-[#EDEAD3] p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  <Gift className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2 text-[16px] leading-[1.3] font-heading">Bulk & Corporate Orders</p>
                  <p className="text-gray-700 leading-[1.75] text-[14px] font-body">
                    Planning gifts or office hampers? Share your requirements and we'll
                    prepare a custom quote with curated dry fruit boxes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;