import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger transformation after 50px of scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Biography', href: '#biography' },
    { name: 'Contributions', href: '#contributions' },
    { name: 'Legacy', href: '#legacy' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Tributes', href: '#tributes' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      {/* 
        Container Transition:
        We animate the width, border-radius, background, and margin-top based on `isScrolled`.
      */}
      <div 
        className={`
          pointer-events-auto transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
          flex justify-between items-center px-8 py-4
          ${isScrolled 
            ? 'w-[90%] md:w-[75%] lg:w-[60%] mt-6 rounded-full bg-royal-900/90 backdrop-blur-xl border border-royal-700/50 shadow-2xl shadow-black/50' 
            : 'w-full mt-0 bg-gradient-to-b from-black/50 to-transparent border-b border-white/5 backdrop-blur-sm'
          }
        `}
      >
        <a href="#home" className="text-white font-body text-xl font-bold tracking-wider relative group flex items-center leading-none">
          <span className="relative z-10 group-hover:text-accent-400 transition-colors duration-300">BARRISTER RAJJAQ</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative text-gray-300 hover:text-white text-xs uppercase tracking-widest transition-colors font-sans font-medium group py-2"
            >
              {link.name}
              {/* Hover effect: Glow point */}
              <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-1/2 transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none hover:text-accent-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-royal-900/95 backdrop-blur-xl border border-royal-700 rounded-2xl shadow-2xl pointer-events-auto md:hidden overflow-hidden z-50"
          >
            <div className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-300 hover:text-accent-400 text-sm uppercase tracking-widest font-medium border-b border-white/5 pb-3 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;