import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [cohortDate, setCohortDate] = useState<{ month: string; day: number; year: number }>({ month: 'Jan', day: 23, year: 2026 });

  useEffect(() => {
    const calculateNextCohortDate = () => {
      const now = new Date();
      const currentYear = 2026; // Fixed to 2026
      
      // Check if it's a leap year for February
      const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      const febDays = isLeapYear(currentYear) ? 29 : 28;
      
      const jan23 = new Date(currentYear, 0, 23); // January 23, 2026 (month is 0-indexed)
      const endOfFeb = new Date(currentYear, 1, febDays); // Last day of February 2026

      // If we're before or on Jan 23, show Jan 23
      if (now <= jan23) {
        setCohortDate({ month: 'Jan', day: 23, year: currentYear });
        return;
      }

      // If we're past the end of February, show the last Friday of February
      if (now > endOfFeb) {
        // Find last Friday of February
        const lastDayOfFeb = new Date(currentYear, 1, febDays);
        let lastFriday = new Date(lastDayOfFeb);
        while (lastFriday.getDay() !== 5) { // 5 = Friday
          lastFriday.setDate(lastFriday.getDate() - 1);
        }
        setCohortDate({ month: 'Feb', day: lastFriday.getDate(), year: currentYear });
        return;
      }

      // Calculate next Friday after Jan 23
      let nextFriday = new Date(jan23);
      nextFriday.setDate(nextFriday.getDate() + 1); // Start from Jan 24

      // Find the next Friday
      while (nextFriday.getDay() !== 5) { // 5 = Friday
        nextFriday.setDate(nextFriday.getDate() + 1);
      }

      // If we've passed this Friday, find the next one
      while (nextFriday <= now) {
        nextFriday.setDate(nextFriday.getDate() + 7); // Add a week
      }

      // Make sure we don't go past end of February
      if (nextFriday > endOfFeb) {
        // Find last Friday of February
        let lastFriday = new Date(endOfFeb);
        while (lastFriday.getDay() !== 5) {
          lastFriday.setDate(lastFriday.getDate() - 1);
        }
        setCohortDate({ month: 'Feb', day: lastFriday.getDate(), year: currentYear });
      } else {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        setCohortDate({ month: monthNames[nextFriday.getMonth()], day: nextFriday.getDate(), year: currentYear });
      }
    };

    calculateNextCohortDate();
    // Update daily to ensure the date changes when needed
    const interval = setInterval(calculateNextCohortDate, 1000 * 60 * 60); // Check every hour
    return () => clearInterval(interval);
  }, []);

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
            <span className="text-xs font-mono text-brand-cyan tracking-wider uppercase">Cohort {cohortDate.month} {cohortDate.day} // Limited Spots</span>
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
          
          {/* Cohort Date */}
          <p className="text-gray-400 text-sm mt-4 font-mono">
            Next Cohort Starting {cohortDate.month} {cohortDate.day}, {cohortDate.year}
          </p>
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
