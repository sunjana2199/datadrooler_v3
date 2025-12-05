import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Users, GraduationCap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import Navbar from './Navbar';
import Footer from './Footer';

const PricingPage = () => {
  // Calculate next midnight
  const getNextMidnight = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to next midnight (rolls over to next day)
    return midnight;
  };

  const targetDate = getNextMidnight();

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-blue selection:text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-brand-dark">
            <div className="max-w-5xl mx-auto relative z-10">
              {/* Join Cohort Heading */}
              <div className="text-center mb-8">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  <strong>Join Cohort</strong>
                </h2>
              </div>

              {/* Countdown Timer */}
              <CountdownTimer targetDate={targetDate} />

              {/* Limited Spots Badge */}
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                  </span>
                  <span className="text-sm font-semibold text-white">Only 2 Spots Left!</span>
                </motion.div>
              </div>

              {/* Price Display */}
              <div className="text-center mb-8 max-w-lg mx-auto">
                <h2 className="text-5xl md:text-6xl text-brand-blue/60 line-through mb-2">
                  $1999
                </h2>
                <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
                  $599
                </h1>
                <hr className="border-gray-700 w-full mb-6" />
              </div>

              {/* What You'll Get Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card border border-brand-blue/30 rounded-3xl p-2 max-w-2xl mx-auto shadow-[0_0_50px_rgba(59,130,246,0.15)] mb-8"
              >
                <div className="bg-[#080808] rounded-[1.25rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="mb-8">
                    <p className="text-gray-200 font-semibold text-base mb-4">
                      <strong>What you'll get?:</strong>
                    </p>
                    <ul className="space-y-3 text-left list-none">
                      <PricingItem text="7 day money back guarantee* (if you are not satisfied) – No questions asked!" />
                      <PricingItem text="3-Week Hands-On Curriculum" />
                      <PricingItem text="3 Production-Ready Portfolio Projects" />
                      <PricingItem text="Live Workshops(1hr/week)" />
                      <PricingItem text="Data Engineering Roadmap" />
                      <PricingItem text="Personalized 1:1 Mentorship" />
                      <PricingItem text="24/7 Project Implementation Support" />
                      <PricingItem text="Private community access" />
                      <PricingItem text="Lifetime Recordings" />
                    </ul>
                  </div>

                  <p className="text-xs text-gray-500 mb-6">
                    *Excluding transaction fee ($50)
                  </p>

                  <a 
                    href="https://archive.datadrooler.com/checkouts/join/?coupon=limited599"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-brand-blue hover:bg-blue-600 text-white text-center rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-blue/25 mb-4"
                  >
                    Join Live Workshop
                  </a>
                </div>
              </motion.div>

              {/* Discount Cards */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                {/* Student Discount Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card border border-brand-blue/30 rounded-3xl p-6 bg-[#080808]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-brand-cyan/10">
                      <GraduationCap size={32} className="text-brand-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Student Discount (additional $100 off)
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Use code "STU100" to get $100 off. Only for full-time enrolled students.
                    </p>
                  </div>
                </motion.div>

                {/* Bring Friend Discount Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card border border-brand-blue/30 rounded-3xl p-6 bg-[#080808]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-brand-cyan/10">
                      <Users size={32} className="text-brand-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Bring your friend (each of you gets $100 off)
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Email us at{' '}
                      <a 
                        href="mailto:hi@datadrooler.com" 
                        className="text-brand-cyan hover:underline"
                      >
                        hi@datadrooler.com
                      </a>
                      {' '}to get the discount
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Final CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                  It's time to build Data Engineering Pipelines
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Many of our past participants say it's the best decision they made for their career. You might feel the same.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://archive.datadrooler.com/checkouts/join/?coupon=limited599"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-blue/25"
                  >
                    Join Workshop
                  </a>
                  <a 
                    href="https://cal.com/sunjana/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 glass-card hover:bg-white/5 text-gray-300 rounded-full font-medium transition-colors"
                  >
                    Book an Info call
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer showClosingSoon={false} />
      </div>
    </div>
  );
};

const PricingItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <div className="p-1 rounded-full bg-brand-cyan/10 mt-0.5 flex-shrink-0">
      <Check size={14} className="text-brand-cyan" />
    </div>
    <span className="text-gray-300 text-sm">{text}</span>
  </li>
);

export default PricingPage;

