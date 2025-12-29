import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center z-10 relative"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span className="text-xs font-mono text-brand-cyan tracking-wider uppercase">Cohort Jan 16 // Limited Spots</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 tracking-tight">
            Escape Tutorial Hell. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue italic pr-2">
              Become a Data Engineer
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-gray-400 text-lg md:text-xl max-w-3xl mb-10 font-light leading-relaxed">
            Build a production-grade Data Engineering portfolio with Airflow, Azure, and AWS in just 21 days.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/pricing"
              className="group relative px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] flex items-center gap-2 w-full sm:w-auto justify-center overflow-hidden"
            >
              {/* Light Beam Effect */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] animate-beam pointer-events-none" />
              
              <span className="relative z-10 flex items-center gap-2">
                Apply for Cohort
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="https://cal.com/sunjana/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-card hover:bg-white/5 text-gray-300 rounded-full font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Book an Info call
            </a>
          </div>
        </motion.div>

        {/* Decorative Graphic Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none z-0">
            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px]" />
            
            {/* Tech Lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-20" width="100%" height="100%">
                <path d="M0,100 Q400,150 800,100 T1600,100" fill="none" stroke="url(#gradient)" strokeWidth="1" />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
