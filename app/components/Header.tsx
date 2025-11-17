'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            <span className="text-secondary">Aero</span>Flight Industries
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-secondary transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-secondary transition">About</a>
            <a href="#services" className="text-gray-700 hover:text-secondary transition">Services</a>
            <a href="#fleet" className="text-gray-700 hover:text-secondary transition">Fleet</a>
            <a href="#technology" className="text-gray-700 hover:text-secondary transition">Technology</a>
            <a href="#contact" className="text-gray-700 hover:text-secondary transition">Contact</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-secondary transition">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-secondary transition">About</a>
            <a href="#services" className="block text-gray-700 hover:text-secondary transition">Services</a>
            <a href="#fleet" className="block text-gray-700 hover:text-secondary transition">Fleet</a>
            <a href="#technology" className="block text-gray-700 hover:text-secondary transition">Technology</a>
            <a href="#contact" className="block text-gray-700 hover:text-secondary transition">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
