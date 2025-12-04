import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsOfService = () => {
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
                Terms of Service
              </h1>
              <p className="text-gray-400 mb-12 font-mono text-sm uppercase tracking-wider">
                Last Updated: December 4, 2025
              </p>

              <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By using DataDrooler's services, including our website, workshops, and educational programs ("Services"), you agree to these Terms. If you do not agree, do not use our Services.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">2. Services</h2>
                  <p className="leading-relaxed">
                    DataDrooler provides educational resources and workshops on data engineering, data science, and related skills. Services may include live sessions, recorded content, projects, and community access.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">3. Accounts</h2>
                  <p className="leading-relaxed">
                    You are responsible for providing accurate information, keeping your account secure, and all activity under your account. Notify us immediately of unauthorized use.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">4. Payments</h2>
                  <p className="leading-relaxed">
                    Access to certain Services requires payment. Fees are non-refundable unless explicitly stated. Payments are processed through third-party providers.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">5. Intellectual Property</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-brand-cyan">Our Content</h3>
                      <p className="leading-relaxed">
                        All content belongs to DataDrooler or its licensors and may not be copied, shared, or used commercially without permission.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-brand-cyan">Your Content</h3>
                      <p className="leading-relaxed">
                        You retain ownership of content you provide, but grant us a license to use it to provide and improve our Services.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">6. User Conduct</h2>
                  <p className="leading-relaxed mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Violate laws or infringe on others' rights</li>
                    <li>Post harmful, offensive, or inappropriate content</li>
                    <li>Interfere with our Services</li>
                    <li>Impersonate others or access accounts without permission</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">7. Workshops</h2>
                  <p className="leading-relaxed">
                    Participation requires respectful conduct. Materials are for registered users only. Completion of workshops does not guarantee employment, income, or specific outcomes.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">8. Disclaimers</h2>
                  <p className="leading-relaxed">
                    Services are provided "as is" and "as available." DataDrooler makes no warranties regarding accuracy, reliability, or outcomes.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">9. Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    DataDrooler is not liable for any direct or indirect damages, loss of data, profits, or other losses arising from use of the Services.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">10. Indemnification</h2>
                  <p className="leading-relaxed">
                    You agree to hold DataDrooler and its affiliates harmless from claims, damages, or expenses arising from your use of the Services or violation of these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">11. Termination</h2>
                  <p className="leading-relaxed">
                    We may suspend or terminate your access at any time for violation of these Terms. Surviving provisions, such as disclaimers and liability limits, remain in effect.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">12. Modifications</h2>
                  <p className="leading-relaxed">
                    We may update these Terms at any time. Continued use of the Services constitutes acceptance of the updated Terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">13. Governing Law</h2>
                  <p className="leading-relaxed">
                    These Terms are governed by the laws of the jurisdiction where DataDrooler operates. Any disputes fall under the exclusive jurisdiction of those courts.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-4 text-white">14. Contact</h2>
                  <p className="leading-relaxed mb-4">
                    Email: <a href="mailto:hi@datadrooler.com" className="text-brand-cyan hover:text-brand-blue transition-colors">hi@datadrooler.com</a>
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

export default TermsOfService;

