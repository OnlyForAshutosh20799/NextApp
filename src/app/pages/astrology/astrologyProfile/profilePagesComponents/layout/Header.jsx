'use client';
import { useState } from 'react';
import { MdVerified } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Expertise', id: 'expertise' },
    { name: 'Horoscope', id: 'horoscope' },
    { name: 'Zodiac', id: 'zodiac' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b" style={{ borderColor: '#FFD70033' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-l from-yellow-500 to-orange-500"
            
            >
              <span className="text-white font-bold text-lg">MC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 flex flex-row items-center justify-center gap-2">Manish Choudhary <span className='text-green-700 text-xs flex flex-row items-center justify-center gap-1'><MdVerified size={17}/> Verified </span></h1>
              <p className="text-xs font-medium" style={{ color: '#FFD700' }}>
                Vedic Astrologer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 font-medium transition-all duration-300 hover:scale-105 relative group"
                style={{ color: '#444' }}
              >
                {item.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#FFD700' }}
                ></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium py-2 text-left transition-colors duration-200 border-b border-gray-100"
                  style={{ color: '#444' }}
                >
                  {item.name}
                </button>
              ))}
              <button
                className="text-white px-6 py-3 rounded-full font-semibold mt-4"
                style={{ background: 'linear-gradient(to right, #F4A300, #FFD700)' }}
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
