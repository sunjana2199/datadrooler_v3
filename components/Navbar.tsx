import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center">
            <span className="font-serif italic font-bold text-black text-lg">D</span>
          </div>
          <span className="font-sans font-semibold text-xl tracking-tight">
            Data<span className="text-gray-400">Drooler</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Protocol</a>
          <a href="#comparison" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Compare</a>
          <a href="#agenda" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Manifest</a>
          <a href="#pricing" className="text-sm font-medium text-brand-cyan hover:text-white transition-colors">Pricing</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://datadrooler.com/register/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Start Engine
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
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Protocol</a>
              <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Compare</a>
              <a href="#agenda" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Manifest</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-brand-cyan">Pricing</a>
              <a href="https://datadrooler.com/register/" className="text-white">Register Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;