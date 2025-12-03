import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Youtube, Instagram, Mail } from 'lucide-react';

const Instructor = () => {
  return (
    <section id="instructor" className="py-24 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                        src="https://datadrooler.com/wp-content/uploads/2024/09/A7400295-22-1024x1024.jpg" 
                        alt="Sunjana Ramana" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                        <h3 className="font-serif text-2xl text-white">Sunjana Ramana</h3>
                        <p className="font-mono text-brand-cyan text-xs tracking-widest uppercase">Lead Data Engineer // Instructor</p>
                    </div>
                </div>
            </motion.div>

            {/* Text Side */}
            <div>
                <span className="font-mono text-gray-500 text-xs tracking-[0.2em] uppercase mb-4 block">The Architect</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white">
                    I don't teach you to code. <br />
                    <span className="italic text-gray-500">I teach you to engineer.</span>
                </h2>
                
                <div className="space-y-6 text-gray-400 font-light text-lg mb-10">
                    <p>
                        There is a massive difference between writing a script that works on your laptop and building a pipeline that processes terabytes of data in the cloud.
                    </p>
                    <p>
                        I created the DataDrooler Initiative because I saw too many talented beginners getting rejected for lacking "real-world experience."
                    </p>
                    <p className="text-white font-medium border-l-2 border-brand-cyan pl-4">
                        "This workshop simulates the actual job. We use the same tools, face the same bugs, and solve the same problems you will face in your first month as a Data Engineer."
                    </p>
                </div>

                <div className="flex gap-6">
                    <SocialLink href="https://www.linkedin.com/in/sunjana-ramana/" icon={<Linkedin />} />
                    <SocialLink href="https://youtube.com/@sunjanaindata?si=J_w90D2e0Br0wWRi" icon={<Youtube />} />
                    <SocialLink href="https://www.instagram.com/sunjana.py/" icon={<Instagram />} />
                    <SocialLink href="mailto:sunjana.rc@gmail.com" icon={<Mail />} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
    >
        {icon}
    </a>
);

export default Instructor;