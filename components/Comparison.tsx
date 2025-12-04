import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const comparisonData = [
  { feature: "Project Building", us: true, bootcamp: false, course: false },
  { feature: "Production Cloud (AWS/Azure)", us: true, bootcamp: "Local", course: false },
  { feature: "Portfolio Assets", us: "3 Enterprise Projects", bootcamp: "Toy Project", course: "Theory" },
  { feature: "Time to Completion", us: "3 Weeks", bootcamp: "6-12 Months", course: "Never" },
  { feature: "Investment", us: "$599", bootcamp: "$12000+", course: "$$$" },
];

const Comparison = () => {
  return (
    <section id="comparison" className="py-12 md:py-24 px-6 relative bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
            <span className="font-mono text-xs text-brand-blue tracking-[0.2em] uppercase">Market Analysis</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl mt-4 text-white">
                Stop Overpaying for <br/><span className="italic text-gray-500">Outdated Education.</span>
            </h2>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr className="border-b border-white/10">
                        <th className="p-3 md:p-6 font-mono text-xs md:text-sm text-gray-500 uppercase tracking-wider w-1/3">Feature Protocol</th>
                        <th className="p-3 md:p-6 font-mono text-sm md:text-lg text-brand-cyan w-1/4 bg-brand-cyan/5 border-t-2 border-brand-cyan">DataDrooler</th>
                        <th className="p-3 md:p-6 font-mono text-xs md:text-sm text-gray-400 w-1/4">Generic Bootcamp</th>
                        <th className="p-3 md:p-6 font-mono text-xs md:text-sm text-gray-400 w-1/4">Video Course</th>
                    </tr>
                </thead>
                <tbody>
                    {comparisonData.map((row, i) => (
                        <motion.tr 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <td className="p-3 md:p-6 font-medium text-white text-sm md:text-base">{row.feature}</td>
                            
                            {/* DataDrooler Column */}
                            <td className="p-3 md:p-6 bg-brand-cyan/[0.02] border-x border-white/5">
                                {row.us === true ? (
                                    <Check className="text-brand-cyan w-5 h-5 md:w-6 md:h-6" />
                                ) : (
                                    <span className="font-bold text-white font-mono text-xs md:text-sm">{row.us}</span>
                                )}
                            </td>

                            {/* Bootcamp Column */}
                            <td className="p-3 md:p-6 text-gray-400">
                                {row.bootcamp === true ? (
                                    <Check className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                                ) : row.bootcamp === false ? (
                                    <X className="text-red-500/50 w-4 h-4 md:w-5 md:h-5" />
                                ) : (
                                    <span className="text-xs md:text-sm font-mono">{row.bootcamp}</span>
                                )}
                            </td>

                            {/* Course Column */}
                            <td className="p-3 md:p-6 text-gray-500">
                                {row.course === true ? (
                                    <Check className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                                ) : row.course === false ? (
                                    <Minus className="text-gray-600 w-4 h-4 md:w-5 md:h-5" />
                                ) : (
                                    <span className="text-xs md:text-sm font-mono">{row.course}</span>
                                )}
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;