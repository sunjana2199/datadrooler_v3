import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="home-pricing" className="py-24 px-6 relative overflow-hidden bg-brand-dark">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
               Invest in Your Future <span className="italic text-gray-500"></span>
            </h2>
           Secure your spot in the next cohort. Prices increase soon. <p className="text-gray-400 text-lg max-w-2xl mx-auto">
               
            </p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-brand-blue/30 rounded-3xl p-2 max-w-lg mx-auto shadow-[0_0_50px_rgba(59,130,246,0.15)]"
        >
            <div className="bg-[#080808] rounded-[1.25rem] p-8 md:p-12 relative overflow-hidden">
                {/* Top Label */}
                <div className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">
                    Early Bird Spots
                </div>

                <div className="mb-8">
                    <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Total Access Pass</span>
                    <div className="flex flex-col mt-2">
                        <span className="text-5xl md:text-6xl text-brand-blue line-through">$1999</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl md:text-5xl text-white font-bold">$599</span>
                            <span className="text-gray-500 font-mono text-sm">/ one-time</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 mb-10">
                    <div className="text-gray-200 font-semibold text-base mb-2 -mt-2">What You'll Get</div>
                    <PricingItem text="3-Week Hands-On Curriculum" />
                    <PricingItem text="3 Production-Ready Portfolio Projects" />
                    <PricingItem text="Data Engineering Roadmap" />
                    <PricingItem text="Personalized 1:1 Mentorship" />
                    <PricingItem text="24/7 project support" />
                    <div className="text-gray-200 font-semibold text-base mb-2 mt-6">Additional Benefits</div>
                    <PricingItem text="Private Community Access" />
                    <PricingItem text="Lifetime Recordings" />
                </div>

                <a 
                    href="/pricing"
                    className="block w-full py-4 bg-brand-blue hover:bg-blue-600 text-white text-center rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-blue/25 mb-4"
                >
                    Secure Your Spot
                </a>
                
                <a 
                    href="https://cal.com/sunjana/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 glass-card hover:bg-white/5 text-gray-300 text-center rounded-xl font-medium text-lg transition-colors mb-4"
                >
                    Book an Info call
                </a>
                
                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <Shield size={12} />
                        <span>7 days money back guarantee</span>
                    </div>
                    <span className="text-[10px] text-gray-500">(*excluding transaction fee)</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

const PricingItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3">
        <div className="p-1 rounded-full bg-brand-cyan/10 mt-0.5">
            <Check size={14} className="text-brand-cyan" />
        </div>
        <span className="text-gray-300 text-sm">{text}</span>
    </div>
);

export default Pricing;