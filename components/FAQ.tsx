import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Who is this workshop for?",
    a: "This workshop is designed for aspiring data engineers, software engineers, data scientists, and anyone looking to gain hands-on experience with real-world data engineering projects. A basic understanding of SQL and Python is helpful."
  },
  {
    q: "Do I need prior experience to join?",
    a: "Not necessarily! This workshop is structured to help both beginners and those with some experience build practical, portfolio-worthy projects from scratch. If you have some background in Python and SQL, you'll be able to follow along more easily."
  },
  {
    q: "What technologies will we use?",
    a: "The workshop will cover tools commonly used in data engineering, such as SQL, Python, Apache Airflow, dbt, Spark, and cloud platforms like AWS/GCP/Azure. Each project will introduce new tools and concepts relevant to real-world data engineering workflows."
  },
  {
    q: "How much time will I need to dedicate each week?",
    a: "Expect to spend around 4-6 hours per week, including 1hr live sessions every week, hands-on coding assignment, and project implementation. The goal is to make it manageable for professionals and students alike."
  },
  {
    q: "Do I need a cloud account?",
    a: "Yes, you will need a free-tier account on AWS, GCP, or Azure to deploy and test your projects. We'll provide guidance on setting up the necessary environments."
  },
  {
    q: "Will this help me get a data engineering job?",
    a: "This workshop helps you build a strong portfolio of projects that showcase real-world skills—something employers value highly. It's a great way to gain experience and stand out in job applications. However, the workshop won't guarantee a job by itself. Your portfolio is a major part of the job hunt process and this workshop will help you make it better."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400">95% of questions are answered here. Can't find what you're looking for? Feel free to reach out!</p>
            <hr className="my-8 border-white/10" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={false}
              className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className={`font-medium text-lg ${openIndex === i ? 'text-brand-cyan' : 'text-gray-200'}`}>
                  {faq.q}
                </span>
                <span className="text-gray-500">
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;