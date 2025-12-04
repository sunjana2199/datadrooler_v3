import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-brand-dark/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          {logoError ? (
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center">
              <span className="font-serif italic font-bold text-black text-lg">D</span>
            </div>
          ) : (
            <img 
              src="/images/ddlogo.png" 
              alt="DataDrooler Logo" 
              className="w-12 h-12 object-contain"
              style={{ mixBlendMode: 'normal', backgroundColor: 'transparent' }}
              onError={() => setLogoError(true)}
            />
          )}
          <span className="font-sans font-semibold text-xl tracking-tight">
            Data<span className="text-gray-400">Drooler</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</Link>
          <a href="/#instructor" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
          <a href="/#agenda" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Projects</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://datadrooler.com/register/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Register
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Home</Link>
              <a href="/#instructor" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">About</a>
              <a href="/#agenda" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Projects</a>
              <a href="https://datadrooler.com/register/" onClick={() => setMobileMenuOpen(false)} className="text-white">Register</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;