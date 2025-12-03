import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Features from './components/Features';
import Agenda from './components/Agenda';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-blue selection:text-white">
      {/* Tech Border Overlay - High Z-Index to frame the site */}
      <div className="fixed inset-0 z-[60] pointer-events-none">
         {/* Left Side Dot Matrix */}
         <div 
           className="absolute top-0 left-0 bottom-0 w-16 dot-matrix animate-border-pulse" 
           style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }}
         />
         <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-blue/60 to-transparent shadow-[0_0_15px_#3b82f6]"></div>

         {/* Right Side Dot Matrix */}
         <div 
           className="absolute top-0 right-0 bottom-0 w-16 dot-matrix animate-border-pulse"
           style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}
         />
         <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-blue/60 to-transparent shadow-[0_0_15px_#3b82f6]"></div>
         
         {/* Top Border Line */}
         <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent"></div>
         
         {/* Bottom Border Line */}
         <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent"></div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue origin-left z-50"
        style={{ scaleX }}
      />

      {/* Dynamic Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] grid-bg" />
        {/* Mouse Follower Glow */}
        <div 
          className="absolute w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ 
            left: mousePosition.x, 
            top: mousePosition.y,
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <Features />
          <Comparison />
          <Agenda />
          <Pricing />
          <Instructor />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
