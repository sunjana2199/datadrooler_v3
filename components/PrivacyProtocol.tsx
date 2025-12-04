import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyProtocol = () => {
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-blue selection:text-white">
      {/* Tech Border Overlay */}
      <div className="fixed inset-0 z-[60] pointer-events-none">
        <div 
          className="absolute top-0 left-0 bottom-0 w-16 dot-matrix animate-border-pulse" 
          style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }}
        />
        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-blue/60 to-transparent shadow-[0_0_15px_#3b82f6]"></div>
        <div 
          className="absolute top-0 right-0 bottom-0 w-16 dot-matrix animate-border-pulse"
          style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}
        />
        <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-blue/60 to-transparent shadow-[0_0_15px_#3b82f6]"></div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent"></div>
      </div>

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] grid-bg" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl mb-4 text-white">
                Privacy Protocol
              </h1>
              <p className="text-gray-400 mb-12 font-mono text-sm uppercase tracking-wider">
                Last Updated: December 4, 2025
              </p>

              <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">1. Introduction</h2>
                  <p className="leading-relaxed">
                    At DataDrooler, we value your privacy. This protocol explains how we may collect, use, and protect your information when you use our services.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">2. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-brand-cyan">Information you provide:</h3>
                      <p className="leading-relaxed">
                        Name, contact info, payment details, educational/professional background, and workshop participation.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-brand-cyan">Automatically collected information:</h3>
                      <p className="leading-relaxed">
                        IP address, browser/device type, pages visited, and usage patterns.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">3. How We Use Information</h2>
                  <p className="leading-relaxed mb-4">
                    We may use your information to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Provide and improve our services</li>
                    <li>Process payments and registrations</li>
                    <li>Communicate updates or respond to inquiries</li>
                    <li>Analyze usage to enhance our services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">4. Sharing Information</h2>
                  <p className="leading-relaxed mb-4">
                    We do not sell your data. We may share information only:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>With trusted service providers</li>
                    <li>If required by law</li>
                    <li>With your consent</li>
                    <li>In connection with a business transfer</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">5. Security</h2>
                  <p className="leading-relaxed">
                    We implement measures to protect your information, but cannot guarantee complete security.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">6. Your Rights</h2>
                  <p className="leading-relaxed mb-4">
                    You may:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Access, correct, or delete your information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Contact: <a href="mailto:hi@datadrooler.com" className="text-brand-cyan hover:text-brand-blue transition-colors">hi@datadrooler.com</a>
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">7. Cookies</h2>
                  <p className="leading-relaxed">
                    We may use cookies to improve your experience. You can adjust browser settings to manage cookies.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">8. Data Retention</h2>
                  <p className="leading-relaxed">
                    We keep your information only as long as needed and delete it securely when no longer required.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">9. Children</h2>
                  <p className="leading-relaxed">
                    Our services are for users 18+. We do not knowingly collect information from children.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">10. International Transfers</h2>
                  <p className="leading-relaxed">
                    Your information may be processed outside your country with appropriate safeguards.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">11. Changes</h2>
                  <p className="leading-relaxed">
                    We may update this protocol at any time. The updated version will appear on our website.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">12. Disclaimer</h2>
                  <p className="leading-relaxed">
                    DataDrooler is not liable for any damages or issues arising from the use of our services or the handling of your information.
                  </p>
                  <p className="leading-relaxed mt-4">
                    Contact: <a href="mailto:hi@datadrooler.com" className="text-brand-cyan hover:text-brand-blue transition-colors">hi@datadrooler.com</a>
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyProtocol;

