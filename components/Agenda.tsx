import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, CheckCircle2, Wind, Cloud, Database } from 'lucide-react';

const weeks = [
  {
    id: "01",
    title: "Building Data Pipelines with Airflow",
    // Using Wind as a proxy for Airflow icon
    icon: <Wind size={56} className="text-[#00C7B7]" />, 
    // Airflow teal colors
    gradient: "from-[#00C7B7]/10 to-transparent",
    borderColor: "border-[#00C7B7]/20",
    glowColor: "shadow-[#00C7B7]/10",
    badgeColor: "text-[#00C7B7] border-[#00C7B7]/30",
    items: [
      "Introduction to Airflow and its components (DAGs, Operators, Tasks, Scheduler)",
      "Setting up Airflow locally using Docker or a virtual environment",
      "Exploring the Airflow Web UI to monitor DAGs and tasks",
      "Creating a basic ETL pipeline (Extract, Transform, Load)",
      "Scheduling tasks with Airflow's cron-like syntax",
      "Implementing error handling and retries for tasks",
      "Monitoring pipeline execution and logs in Airflow"
    ]
  },
  {
    id: "02",
    title: "Building Data Pipelines with Azure",
    // Using Cloud for Azure
    icon: <Cloud size={56} className="text-[#0078D4]" />,
    // Azure Blue colors
    gradient: "from-[#0078D4]/10 to-transparent",
    borderColor: "border-[#0078D4]/20",
    glowColor: "shadow-[#0078D4]/10",
    badgeColor: "text-[#0078D4] border-[#0078D4]/30",
    items: [
      "Introduction to Azure Data Factory (ADF) and Databricks",
      "Setting up Azure Blob Storage and configuring ADF",
      "Connecting ADF to data sources (APIs, databases)",
      "Building an ETL pipeline using ADF to extract, transform, and load data",
      "Setting up and processing data in Azure Databricks",
      "Storing processed data in Azure SQL Database or Blob Storage",
      "Scheduling and monitoring pipeline execution with ADF"
    ]
  },
  {
    id: "03",
    title: "Building Data Pipelines on AWS",
    // Using Database for AWS
    icon: <Database size={56} className="text-[#FF9900]" />, 
    // AWS Orange colors
    gradient: "from-[#FF9900]/10 to-transparent",
    borderColor: "border-[#FF9900]/20",
    glowColor: "shadow-[#FF9900]/10",
    badgeColor: "text-[#FF9900] border-[#FF9900]/30",
    items: [
      "Introduction to AWS Glue, Lambda, and S3",
      "Setting up AWS services (S3, Glue, Lambda) and IAM roles",
      "Creating an S3 bucket for data storage",
      "Building an ETL pipeline with AWS Glue (extract, transform, load)",
      "Processing real-time data using AWS Lambda triggered by S3 events",
      "Storing results in DynamoDB or Redshift",
      "Monitoring pipeline execution using AWS CloudWatch"
    ]
  }
];

const Agenda = () => {
  return (
    <section id="agenda" className="py-24 px-6 relative bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <span className="font-mono text-xs text-gray-500 tracking-[0.2em] uppercase">Curriculum Protocol</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4 text-white">
                The Deployment <span className="italic text-gray-500">Schedule.</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-light text-lg">
                3 Weeks. 3 Clouds. 3 Production Projects. <br className="hidden md:block" />
                This is the detailed roadmap designed to turn beginners into deployable engineers.
            </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {weeks.map((week, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`glass-card rounded-2xl overflow-hidden border ${week.borderColor} flex flex-col hover:shadow-2xl ${week.glowColor} transition-all duration-500 group relative`}
            >
                {/* Card Header */}
                <div className={`p-8 bg-gradient-to-b ${week.gradient} relative border-b border-white/5`}>
                    <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {week.icon}
                    </div>
                    <div className="text-center">
                        <span className={`font-mono text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full bg-black/40 ${week.badgeColor}`}>
                            Week {week.id}
                        </span>
                        <h3 className="font-serif text-xl text-white mt-5 leading-snug min-h-[3.5rem] flex items-center justify-center">
                            {week.title}
                        </h3>
                    </div>
                </div>

                {/* Checklist Content */}
                <div className="p-8 bg-[#080808]/60 flex-grow backdrop-blur-sm">
                    <ul className="space-y-5">
                        {week.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="mt-0.5 min-w-[20px]">
                                    <CheckCircle2 size={20} className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
                                </div>
                                <span className="text-[15px] text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 flex justify-center">
             <a href="https://datadrooler.com/register/" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                <Terminal size={18} />
                INITIALIZE LEARNING SEQUENCE
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </a>
        </div>
      </div>
    </section>
  );
};

export default Agenda;