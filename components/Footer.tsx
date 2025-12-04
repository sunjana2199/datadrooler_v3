import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
                <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white">
                    Applications Closing <br />
                    <span className="text-gray-600">Very Soon.</span>
                </h2>
                <p className="text-gray-400 max-w-md text-lg">
                    We keep cohorts small (approx. 10 people) to ensure personalized code reviews and mentorship. Don't wait until the next intake.
                </p>
            </div>
            <div className="flex items-center md:justify-end">
                <a 
                    href="https://datadrooler.com/register/"
                    className="group relative inline-flex h-32 w-32 md:h-48 md:w-48 items-center justify-center rounded-full bg-brand-blue text-white overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    <div className="relative flex flex-col items-center gap-2">
                        <span className="font-semibold text-lg">Join Now</span>
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </a>
            </div>
        </div>

        <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono uppercase tracking-wider gap-4">
                <p>&copy; 2025 DataDrooler.com All Rights Reserved.</p>
                {/* Logo */}
                <Link 
                    to="/" 
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex justify-center cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <img 
                        src="/images/ddlogo.png" 
                        alt="DataDrooler Logo" 
                        className="w-16 h-16 object-contain"
                    />
                </Link>
                <div className="flex gap-6">
                    <Link to="/privacy-protocol" className="hover:text-white transition-colors">Privacy Protocol</Link>
                    <Link to="/terms-of-service" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Terms of Service</Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;