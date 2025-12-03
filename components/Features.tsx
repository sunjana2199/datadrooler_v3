import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Layers, Cpu, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Briefcase size={24} />,
    title: "The Portfolio Gap",
    desc: "Certificates don't get you hired. Code does. You will leave with 3 production-grade projects that prove you can do the job on Day 1.",
    delay: 0
  },
  {
    icon: <Layers size={24} />,
    title: "Full Tech Stack",
    desc: "We don't just teach syntax. We build end-to-end pipelines using Airflow, Docker, Azure, and AWS. This is the modern stack employers demand.",
    delay: 0.1
  },
  {
    icon: <Cpu size={24} />,
    title: "Live Execution",
    desc: "No pre-recorded fluff. Join live sessions, debug real errors, and understand the 'why' behind architectural decisions, not just the 'how'.",
    delay: 0.2
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Code Reviews",
    desc: "Stop coding in a vacuum. Get your logic challenged and your code reviewed by a Senior Data Engineer. This is how you grow.",
    delay: 0.3
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex md:items-end md:justify-between">
            <div>
                <span className="font-mono text-brand-cyan text-xs tracking-widest uppercase mb-4 block">System Capabilities</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white">
                Most courses are theoretical <br />
                <span className="italic text-gray-400">We believe in practical implementation</span>
                </h2>
            </div>
            <p className="text-gray-400 mt-6 md:mt-0 max-w-sm text-sm border-l border-brand-blue/30 pl-4">
                The market is flooded with "certified" engineers who can't deploy a Data Engineering pipeline. 
                DataDrooler is the bridge between knowing the theory and owning the infrastructure.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: f.delay }}
              className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-colors relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;