import React from 'react';
import { motion } from 'framer-motion';

// --- Generic/Custom Icons ---

const SQLIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
        <path d="M12 3C7.58 3 4 4.34 4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0-1.66-3.58-3-8-3zm0 2c3.87 0 6 1.12 6 1s-2.13 1-6 1-6-1.12-6-1 2.13-1 6-1zm0 14c-3.87 0-6-1.12-6-1v-2.13c1.6.86 3.65 1.13 6 1.13s4.4-.27 6-1.13V18c0 .12-2.13 1-6 1zm6-5.13c-1.6.86-3.65 1.13-6 1.13s-4.4-.27-6-1.13v-2.74c1.6.86 3.65 1.13 6 1.13s4.4-.27 6-1.13v2.74z" />
    </svg>
);

const CsvIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-[#217346]">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

const RedshiftIcon = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12">
    <defs>
      <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="redshift_gradient">
        <stop stopColor="#4D27A8" offset="0%" />
        <stop stopColor="#A166FF" offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="url(#redshift_gradient)">
        <rect x="0" y="0" width="80" height="80" />
      </g>
        <path d="M50.8250355,35.1704885 C49.7652069,35.1704885 48.9041586,34.3110668 48.9041586,33.2542373 C48.9041586,32.1974078 49.7652069,31.336989 50.8250355,31.336989 C51.8838652,31.336989 52.7449135,32.1974078 52.7449135,33.2542373 C52.7449135,34.3110668 51.8838652,35.1704885 50.8250355,35.1704885 M45.9594133,46.8245264 C44.9005836,46.8245264 44.0395353,45.9651047 44.0395353,44.9082752 C44.0395353,43.8514457 44.9005836,42.9920239 45.9594133,42.9920239 C47.018243,42.9920239 47.8802902,43.8514457 47.8802902,44.9082752 C47.8802902,45.9651047 47.018243,46.8245264 45.9594133,46.8245264 M34.2823195,44.8823529 C33.2244887,44.8823529 32.3634404,44.0229312 32.3634404,42.9661017 C32.3634404,41.9092722 33.2244887,41.0488534 34.2823195,41.0488534 C35.3421482,41.0488534 36.2031965,41.9092722 36.2031965,42.9661017 C36.2031965,44.0229312 35.3421482,44.8823529 34.2823195,44.8823529 M29.4176962,55.5653041 C28.3598654,55.5653041 27.4978182,54.7058824 27.4978182,53.6490528 C27.4978182,52.5922233 28.3598654,51.7328016 29.4176962,51.7328016 C30.4775248,51.7328016 31.3385732,52.5922233 31.3385732,53.6490528 C31.3385732,54.7058824 30.4775248,55.5653041 29.4176962,55.5653041 M50.8250355,29.3429711 C48.6644235,29.3429711 46.9063666,31.0977069 46.9063666,33.2542373 C46.9063666,34.5762712 47.5706325,35.7417747 48.5805163,36.4506481 L46.7525367,41.0787637 C46.4958204,41.0259222 46.2301141,40.998006 45.9594133,40.998006 C44.2413122,40.998006 42.793912,42.114656 42.2674938,43.6550349 L38.1770149,42.7268195 C38.0501551,40.6839482 36.3620209,39.0548355 34.2823195,39.0548355 C32.1227065,39.0548355 30.3656485,40.8095713 30.3656485,42.9661017 C30.3656485,43.9740778 30.7592135,44.885344 31.3895168,45.5792622 L29.6044898,49.7577268 C29.5405604,49.7537388 29.4816256,49.7387836 29.4176962,49.7387836 C27.2580832,49.7387836 25.5000263,51.4925224 25.5000263,53.6490528 C25.5000263,55.8045862 27.2580832,57.559322 29.4176962,57.559322 C31.5783082,57.559322 33.3363651,55.8045862 33.3363651,53.6490528 C33.3363651,52.2652044 32.6091688,51.0548355 31.5193733,50.3589232 L33.0946322,46.6729811 C33.4722149,46.7936191 33.8657799,46.8763709 34.2823195,46.8763709 C35.823616,46.8763709 37.1471531,45.9760718 37.7854477,44.6829511 L42.1186583,45.666002 C42.4732664,47.4606181 44.0595132,48.8185444 45.9594133,48.8185444 C48.1200252,48.8185444 49.8780821,47.0648056 49.8780821,44.9082752 C49.8780821,43.7427717 49.3536617,42.7068794 48.5405604,41.9890329 L50.4614374,37.1276171 C50.5833027,37.1395813 50.7001735,37.1645065 50.8250355,37.1645065 C52.9846485,37.1645065 54.7427054,35.4097707 54.7427054,33.2542373 C54.7427054,31.0977069 52.9846485,29.3429711 50.8250355,29.3429711 M40,66.0059821 C30.2687556,66.0059821 22.9977919,63.0847458 22.9977919,60.4725823 L22.9977919,23.1515454 C26.3081331,25.8414756 33.3153883,27.2632104 40.0209768,27.2632104 C46.6965985,27.2632104 53.6738868,25.8534397 57.0022081,23.1864407 L57.0022081,60.4725823 C57.0022081,63.0847458 49.7302455,66.0059821 40,66.0059821 M40.0209768,13.9940179 C50.0279165,13.9940179 57.0022081,16.9651047 57.0022081,19.6321037 C57.0022081,22.2981057 50.0279165,25.2691924 40.0209768,25.2691924 C30.0130382,25.2691924 23.0397455,22.2981057 23.0397455,19.6321037 C23.0397455,16.9651047 30.0130382,13.9940179 40.0209768,13.9940179 M59,19.6321037 C59,14.6749751 49.2218075,12 40.0209768,12 C30.8201462,12 21.0419536,14.6749751 21.0419536,19.6321037 C21.0419536,19.6400798 21.0439514,19.6490528 21.0439514,19.6570289 L21,19.6570289 L21,60.4725823 C21,65.3619143 30.7891804,68 40,68 C49.2108196,68 59,65.3619143 59,60.4725823 L59,19.6570289 L58.9980022,19.6570289 C58.9980022,19.6490528 59,19.6400798 59,19.6321037" fill="#FFFFFF"/>
    </g>
  </svg>
);

const PlusIcon = () => (
    <span className="font-mono text-3xl text-gray-400 group-hover:text-white transition-colors">++</span>
);

// --- Configuration ---

const techStack = [
  { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', color: '#FFD43B' },
  { name: 'SQL', icon: <SQLIcon />, color: '#ffffff' },
  { name: 'Airflow', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apacheairflow/apacheairflow-original.svg', color: '#00C7B7' },
  { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'Postgres', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', color: '#336791' },
  { name: 'Github', logo: 'https://cdn.simpleicons.org/github/ffffff', color: '#ffffff' },
  { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#FF9900' },
  { name: 'Lambda', logo: 'https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg', color: '#FF9900' },
  { name: 'Redshift', icon: <RedshiftIcon />, color: '#527FFF' },
  { name: 'Glue', logo: 'https://icon.icepanel.io/AWS/svg/Analytics/Glue.svg', color: '#8C4FFF' },
  { name: 'IAM', logo: 'https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Identity-and-Access-Management.svg', color: '#DD344C' },
  { name: 'CSV', icon: <CsvIcon />, color: '#217346' },
  { name: 'Azure', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg', color: '#0078D4' },
  { name: 'Databricks', logo: 'https://cdn.simpleicons.org/databricks/FF3621', color: '#FF3621' },
  { name: 'And More', icon: <PlusIcon />, color: '#888888' }
];

const TechStack = () => {
  return (
    <section className="bg-black py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-brand-cyan text-xs tracking-[0.2em] uppercase mb-4 block">
            Modern Stack
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            We don't teach outdated tools. <br />
            <span className="italic text-gray-500">Master the exact stack companies are hiring for.</span>
          </h2>
        </div>

        {/* 
            Grid Layout Configuration:
            Mobile: 2 cols
            Tablet: 3 cols
            Desktop: 5 cols
        */}
        <div className="border-t border-l border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-r border-b border-white/10 p-8 flex flex-col items-center justify-center gap-4 group hover:bg-white/[0.02] transition-colors relative overflow-hidden h-44"
            >
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    {tech.icon}
                  </div>
                )}
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
        </div>
      </div>
    </section>
  );
};

export default TechStack;