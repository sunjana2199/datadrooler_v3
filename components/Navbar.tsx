import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-brand-dark/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
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
            href="/pricing"
            className="group relative px-6 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Register
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2 z-[51] relative"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[49] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-brand-dark border-b border-white/10 relative z-[51]"
            >
              <div className="flex flex-col p-6 gap-1">
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-base font-medium"
                >
                  Home
                </Link>
                <a 
                  href="/#instructor" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-base font-medium"
                >
                  About
                </a>
                <a 
                  href="/#agenda" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-base font-medium"
                >
                  Projects
                </a>
                <a 
                  href="/pricing" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="mt-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  Register
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;