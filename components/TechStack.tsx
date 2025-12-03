import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Settings, GitBranch, Database, Workflow } from 'lucide-react';

// --- Brand Icons ---

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#3776AB" d="M12.02 0c-1.38 0-2.66.17-3.69.46-.86.25-1.48.56-1.99.98-.5.42-.86.96-1.07 1.62-.2.66-.3 1.48-.3 2.45v1.27h6.63v1.86H4.07v.29c0 1.54.2 2.76.6 3.65.4.88 1.05 1.54 1.95 1.97.9.43 2.15.65 3.73.65 1.15 0 2.22-.11 3.2-.32l.48 2.6c-1.29.39-2.81.58-4.56.58-1.92 0-3.56-.37-4.91-1.12-1.35-.75-2.39-1.82-3.13-3.2C.73 12.33.36 10.59.36 8.5c0-2.49.52-4.47 1.56-5.94 1.04-1.47 2.44-2.55 4.19-3.23C7.87 2.65 9.85 2.31 12.02 2.31c2.18 0 3.96.28 5.34.84 1.38.56 2.46 1.43 3.23 2.6.77 1.17 1.16 2.69 1.16 4.56h-2.91c0-1.15-.22-2.07-.65-2.76-.43-.69-1.07-1.18-1.91-1.47-.84-.29-1.98-.44-3.42-.44H12.02z" />
    <path fill="#FFD43B" d="M11.98 24c1.38 0 2.66-.17 3.69-.46.86-.25 1.48-.56 1.99-.98.5-.42.86-.96 1.07-1.62.2-.66.3-1.48.3-2.45v-1.27H12.4v-1.86h7.53v-.29c0-1.54-.2-2.76-.6-3.65-.4-.88-1.05-1.54-1.95-1.97-.9-.43-2.15-.65-3.73-.65-1.15 0-2.22.11-3.2.32l-.48-2.6c1.29-.39 2.81-.58 4.56-.58 1.92 0 3.56.37 4.91 1.12 1.35.75 2.39 1.82 3.13 3.2.74 1.38 1.11 3.12 1.11 5.21 0 2.49-.52 4.47-1.56 5.94-1.04 1.47-2.44 2.55-4.19 3.23-1.75.68-3.73 1.02-5.9 1.02-2.18 0-3.96-.28-5.34-.84-1.38-.56-2.46-1.43-3.23-2.6-.77-1.17-1.16-2.69-1.16-4.56h2.91c0 1.15.22 2.07.65 2.76.43.69 1.07 1.18 1.91 1.47.84.29 1.98.44 3.42.44h.82z" />
  </svg>
);

const SQLIcon = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
        <Database className="w-12 h-12 text-gray-300 absolute" strokeWidth={1} />
        <span className="font-bold text-[10px] text-white absolute bg-black px-1">SQL</span>
    </div>
);

const AirflowIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#00C7B7]">
        <path d="M12.48 18.84c-1.25.21-2.43-.59-2.64-1.83-.21-1.24.6-2.43 1.84-2.63 1.25-.22 2.43.59 2.64 1.83.21 1.24-.6 2.43-1.84 2.63zM22.9 6.87L22 2h-4.87l2.25 12.28c.18.99-.48 1.94-1.47 2.13-.99.17-1.95-.49-2.12-1.48L12.55 2.1h-4.9l4.5 20.88 4.97-.93 5.78-15.18zM6.92 12.87c.18.99-.48 1.94-1.47 2.13-.99.17-1.94-.49-2.12-1.48L1.09 1.27h4.89L7.22 7.7l.87 4.75-.87-4.74.87 4.74.02.09c.17.97-.48 1.91-1.47 2.1-.98.18-1.92-.47-2.1-1.46l-.28-1.54L1.76 21.9l4.87-.9.29-8.13z"/>
    </svg>
);

const DockerIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#2496ED]">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.185m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.929 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.186.185v1.888c0 .102.082.185.186.185m2.929 2.697c-3.125.047-6.046.732-8.594 1.883a.622.622 0 00-.317.817c.504 1.252 1.547 2.193 2.802 2.193 1.896 0 3.737-.306 4.498-.539a2.3 2.3 0 012.396.95c.57.854 1.53.96 1.53.96s.903-.16 1.436-.97a2.316 2.316 0 012.378-.92c.768.23 2.61.528 4.51.528 1.22 0 2.24-.897 2.768-2.103a.625.625 0 00-.306-.827c-2.544-1.168-5.463-1.874-8.586-1.954h-4.515z"/>
    </svg>
);

const PostgresIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#336791]">
        <path d="M22.2,14.6c-0.3-2.6-1.5-4.9-3.4-6.5C18,7.3,16.8,6.8,15.6,6.6c-0.1,0-0.3,0-0.4,0c0,0-0.1,0-0.1-0.1c0.3-1,0.5-2.1,0.4-3.2 c-0.1-0.9-0.4-1.7-0.9-2.3C14,0.3,13,0,11.9,0c-0.6,0-1.1,0.2-1.7,0.5c-0.5,0.3-0.9,0.7-1.2,1.2C8.5,2.7,8.4,4,8.7,5.3 C6.9,6.1,5.3,7.5,4.3,9.4c-1.4,2.5-1.4,5.4-0.1,8c-1,0.6-1.7,1.7-1.7,3c0,1.9,1.5,3.4,3.4,3.4c1.3,0,2.4-0.7,3-1.8 c0.5,0.2,1.1,0.3,1.6,0.3l0.3,0c0.6-0.1,1.1-0.2,1.6-0.5c0.8,0.7,1.9,1.2,3,1.2c2.6,0,4.7-2,4.8-4.6C20.3,17.4,20.2,16.2,19.6,15.2 L22.2,14.6z M11.5,1.7c0.6-0.3,1.4-0.3,2.1,0.2c0.4,0.3,0.6,0.8,0.7,1.4c0.1,0.8-0.1,1.7-0.4,2.5l-0.3,1C13.5,6.7,13.4,6.7,13.3,6.7 c-0.8,0-1.6,0.3-2.2,0.7l0.2-0.8C11.5,5.1,11.7,3.4,11.5,1.7z M5.9,22.3c-1,0-1.8-0.8-1.8-1.8c0-0.8,0.5-1.4,1.2-1.7 c0.6,0.9,1.3,1.6,2.2,2.2C7,21.8,6.4,22.3,5.9,22.3z M10.4,20.7c-1-0.8-1.7-1.8-2.2-3c-0.7-1.7-0.7-3.6,0.1-5.3 c0.7-1.4,2-2.5,3.5-3c0.1,0,0.2,0,0.2-0.1c0.6-0.3,1.3-0.5,2-0.5h0.2c0.9,0.1,1.8,0.4,2.6,0.9c-0.8,0-1.6,0.3-2.3,0.7 c-0.8,0.6-1.4,1.4-1.6,2.4l-0.4,2.1l-1.6-0.4l0.4-2c-0.5-0.1-1.1-0.1-1.6,0l-0.5,2.3L7.7,14l0.5-2.2c-0.6,0.5-1,1.1-1.3,1.8 c-0.6,1.4-0.6,3.1,0.2,4.5c0.3,0.6,0.8,1.2,1.4,1.6C9.1,19.8,9.7,20.3,10.4,20.7z M17.2,21.5c-1.8,0-3.2-1.4-3.2-3.2 c0-1.8,1.4-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2C20.4,20.1,19,21.5,17.2,21.5z"/>
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

const AWSIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
        <path d="M12.986 18.066c-1.27.796-2.92 1.179-4.707 1.179-2.028 0-3.95-.583-5.334-1.666l.89-1.364c1.17 1.053 2.825 1.626 4.542 1.626 1.38 0 2.535-.295 3.551-.937l1.058 1.162zm5.797-3.837c-.328 3.596-2.738 5.772-7.51 5.772-2.148 0-4.09-.54-5.602-1.39l.865-1.874c1.474.797 3.09 1.15 4.81 1.15 3.012 0 4.881-1.272 4.881-3.414v-.22c-1.127 1.677-2.915 2.193-4.814 2.193-3.692 0-5.842-2.311-5.842-5.49 0-3.327 2.247-5.594 6.22-5.594 1.996 0 3.738.563 4.908 2.064v-1.83h2.373v8.663h-2.29v-.03zm-2.29-3.46c0-2.016-1.474-3.468-3.715-3.468-2.342 0-3.692 1.405-3.692 3.467 0 1.944 1.332 3.444 3.668 3.444 2.295 0 3.74-1.38 3.74-3.443z"/>
        <path d="M18.66 19.34c-1.34 1.48-4.22 2.13-6.66 2.13-2.6 0-5.46-.77-7.22-2.23l1.1-1.43c1.7 1.13 3.86 1.85 6.12 1.85 2.12 0 4.09-.43 5.48-1.55l1.18 1.23z" fill="#FF9900"/>
    </svg>
);

const LambdaIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#FF9900]">
       <path d="M11.96 16.59L8.43 8.35c-.4-.93-.66-1.57-.66-1.57A10.87 10.87 0 0 0 6.6 4.92c-.67-.32-1.56-.39-2.2-.42H1.96V1.53l1.14.04c1.78.05 3.3.43 4.54 1.12.91.5 1.7 1.28 2.23 2.51.13.3.74 1.75 1.15 2.72l2.36 5.51L17.5 22h-3.43l-2.11-5.41zM18.8 1.5l3.24 3.24-3.23 3.25V1.5z"/>
    </svg>
);

const RedshiftIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#232F3E" d="M2.5 5.5l9 3.5 9-3.5-9-3.5z"/>
        <path fill="#232F3E" d="M2.5 8v8l9 3.5 9-3.5V8L11.5 11.5z"/>
        <path fill="#527FFF" d="M11.5 11.5L2.5 8v8l9 3.5z"/>
        <path fill="#4063c2" d="M11.5 19.5V11.5l9-3.5v8z"/>
    </svg>
);

const GlueIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#8C4FFF]">
       <path d="M16 11.5a4.5 4.5 0 1 1-4.5-4.5 4.5 4.5 0 0 1 4.5 4.5zm-3.5 5.8a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm-5.5-2.8a2.5 2.5 0 1 1-2.5-2.5 2.5 2.5 0 0 1 2.5 2.5zm-1.5 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm14.5 0a2.5 2.5 0 1 1-2.5-2.5 2.5 2.5 0 0 1 2.5 2.5zm-1.5 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1z"/>
    </svg>
);

const IAMIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#DD344C]">
        <path d="M16.5 10c0-2.5-2-4.5-4.5-4.5S7.5 7.5 7.5 10c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5zm-7 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5z"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.8.6-3.5 1.7-4.9.1.2 3.6 3.9 6.3 3.9 2.7 0 6.2-3.7 6.3-3.9 1.1 1.4 1.7 3.1 1.7 4.9 0 4.4-3.6 8-8 8z"/>
    </svg>
);

const AzureIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#0078D4]">
        <path d="M5.4 20h12.1l-2.4-3.6H9.3L5.4 20zM13.4 3L2 19h3.6l6-9.6L13.4 3zm1.8 1.2L8.9 16.4h4.2l6-9.6h-3.9z"/>
    </svg>
);

const DatabricksIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#FF3621]">
        <path d="M2.93 19.38L12.5 13.9 22.08 19.38 12.5 24.9 2.93 19.38ZM2.93 16.5L12.5 22.03 22.08 16.5 12.5 10.97 2.93 16.5ZM2.93 7.5l9.57-5.53 9.57 5.53-9.57 5.53L2.93 7.5Zm0-2.88L12.5 10.15 22.08 4.62 12.5-.9 2.93 4.62Z" />
    </svg>
);

const ADFIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#0078D4]">
         <path d="M10.8 2.6c0.8-0.5 1.7-0.5 2.5 0l8.7 5.2c0.8 0.5 1.2 1.3 1.2 2.2v10.3c0 0.9-0.5 1.7-1.2 2.2l-8.7 5.2c-0.8 0.5-1.7 0.5-2.5 0l-8.7-5.2c-0.8-0.5-1.2-1.3-1.2-2.2V10c0-0.9 0.5-1.7 1.2-2.2L10.8 2.6z M11.5 5.8L4.6 9.8v8.6l7.4 4.3 7.4-4.3V9.8L12.5 5.8C12.2 5.6 11.8 5.6 11.5 5.8z" opacity="0.4"/>
         <path d="M15.4 12l-2.3 4h-2.1l-2.3-4h2.1l1.3 2.2 1.3-2.2H15.4z" />
         <path d="M9.6 10.5h4.8v1.2H9.6V10.5z" />
         <path d="M12 7.5L8.5 9.5v3l3.5 2 3.5-2v-3L12 7.5z" fill="none" />
    </svg>
);

// --- Configuration ---

const techStack = [
  { name: 'Python', icon: <PythonIcon />, color: '#FFD43B' },
  { name: 'SQL', icon: <SQLIcon />, color: '#ffffff' },
  { name: 'Airflow', icon: <AirflowIcon />, color: '#00C7B7' },
  { name: 'Docker', icon: <DockerIcon />, color: '#2496ED' },
  { name: 'Postgres', icon: <PostgresIcon />, color: '#336791' },
  { name: 'Github', icon: <GithubIcon />, color: '#ffffff' },
  { name: 'AWS', icon: <AWSIcon />, color: '#FF9900' },
  { name: 'Lambda', icon: <LambdaIcon />, color: '#FF9900' },
  { name: 'Redshift', icon: <RedshiftIcon />, color: '#527FFF' },
  { name: 'Glue', icon: <GlueIcon />, color: '#8C4FFF' },
  { name: 'IAM', icon: <IAMIcon />, color: '#DD344C' },
  { name: 'CSV', icon: <FileText className="w-12 h-12 text-[#217346]" />, color: '#217346' },
  { name: 'Azure', icon: <AzureIcon />, color: '#0078D4' },
  { name: 'Databricks', icon: <DatabricksIcon />, color: '#FF3621' },
  { name: 'Jobs', icon: <Settings className="w-12 h-12 text-gray-300" />, color: '#ffffff' },
  { name: 'Workflows', icon: <GitBranch className="w-12 h-12 text-gray-300" />, color: '#ffffff' },
  { name: 'Data Factory', icon: <ADFIcon />, color: '#0078D4' },
];

const TechStack = () => {
  return (
    <section className="bg-black py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-brand-cyan text-xs tracking-[0.2em] uppercase mb-4 block">
            Tech Stacks
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Master the high-demand data <br />
            <span className="italic text-gray-500">engineering tech stack</span>
          </h2>
        </div>

        {/* 
            Grid Layout Configuration:
            Mobile: 2 cols
            Tablet: 3 cols
            Desktop: 6 cols
        */}
        <div className="border-t border-l border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-r border-b border-white/10 p-8 flex flex-col items-center justify-center gap-4 group hover:bg-white/[0.02] transition-colors relative overflow-hidden h-44"
            >
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 text-white">
                {tech.icon}
              </div>
              <span className="text-sm font-mono text-gray-500 group-hover:text-white transition-colors relative z-10 font-medium">
                {tech.name}
              </span>
              
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
              />
            </motion.div>
          ))}
          
          {/* Fill empty cells to complete the grid visually for the last row if needed */}
          {[...Array(1)].map((_, i) => (
             <div key={`empty-${i}`} className="hidden lg:block border-r border-b border-white/10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;