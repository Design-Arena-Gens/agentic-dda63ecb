'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to discuss your aviation needs? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p>123 Aviation Boulevard</p>
                    <p>Sky City, SC 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@aeroflight.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">🕐</span>
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-4">Why Partner With Us?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Industry-leading expertise
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Cutting-edge technology
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Customized solutions
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span>
                  Global support network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
