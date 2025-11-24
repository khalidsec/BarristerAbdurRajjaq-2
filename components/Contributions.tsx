import React from 'react';
import { CONTRIBUTIONS } from '../constants';
import { Scale, Users, Building2, BookOpen, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { motion } from 'framer-motion';

const iconMap = {
  gavel: Scale,
  users: Users,
  building: Building2,
  book: BookOpen,
};

const Contributions: React.FC = () => {
  return (
    <section id="contributions" className="py-32 bg-royal-950 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-royal-800/20 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 border-b border-royal-800 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4">
                Pillars of <span className="text-accent-500 italic">Impact</span>
              </h2>
              <p className="text-gray-400 text-lg font-light max-w-lg">
                Four decades of dedicated service categorized into key areas of influence.
              </p>
            </div>
            <div className="hidden md:block">
               <span className="text-accent-500 font-sans text-xs font-bold tracking-[0.2em] uppercase">Est. 1949 — 2025</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTRIBUTIONS.map((item, index) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap];
            const isEven = index % 2 !== 0;
            const staggerClass = isEven ? 'lg:translate-y-16' : '';
            
            return (
              <Reveal key={item.id} delay={index * 0.1} className={`h-full ${staggerClass}`}>
                <motion.div 
                  initial="initial"
                  whileHover="hover"
                  className="group relative h-full bg-royal-900/40 p-8 pt-12 rounded-xl border border-white/5 overflow-hidden flex flex-col backdrop-blur-sm"
                  transition={{ duration: 0.3 }}
                  variants={{
                    initial: { y: 0, borderColor: 'rgba(255,255,255,0.05)' },
                    hover: { y: -12, borderColor: 'rgba(148, 163, 184, 0.4)', boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }
                  }}
                >
                  
                  {/* Hover Gradient Background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-royal-800/0 via-royal-800/0 to-royal-800/0"
                    variants={{
                        hover: { opacity: 1, backgroundColor: 'rgba(30, 41, 59, 0.6)' }
                    }}
                  />

                  {/* Giant Watermark Number - Moving Parallax */}
                  <motion.div 
                    className="absolute -right-6 -top-10 text-[10rem] font-serif font-bold text-white/[0.03] select-none leading-none z-0"
                    variants={{
                        initial: { x: 0, y: 0, opacity: 0.03 },
                        hover: { x: -20, y: 10, opacity: 0.08, scale: 1.05 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    0{index + 1}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8 flex justify-between items-start">
                      {/* Icon Box with Glow */}
                      <motion.div 
                        className="relative p-4 bg-royal-950 border border-royal-800 rounded-lg shadow-xl"
                        variants={{
                            initial: { scale: 1, borderColor: 'rgba(30, 41, 59, 1)' },
                            hover: { scale: 1.1, borderColor: 'rgba(148, 163, 184, 0.5)' }
                        }}
                      >
                          <Icon className="w-8 h-8 text-accent-500 relative z-10" />
                      </motion.div>
                      
                      <motion.div
                        variants={{
                            initial: { x: 0, y: 0, color: '#334155' }, // royal-700
                            hover: { x: 4, y: -4, color: '#94a3b8' } // accent-500
                        }}
                      >
                        <ArrowUpRight className="w-6 h-6" />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    
                    {/* Expanding Line Animation */}
                    <motion.div 
                        className="h-0.5 bg-royal-700 mb-6"
                        variants={{
                            initial: { width: "3rem", backgroundColor: '#334155' },
                            hover: { width: "100%", backgroundColor: '#94a3b8' }
                        }}
                        transition={{ duration: 0.4 }}
                    />

                    <p className="text-gray-400 text-sm leading-relaxed font-body flex-grow">
                        {item.description}
                    </p>

                    <motion.div 
                        className="mt-8 pt-4 border-t border-white/5"
                        variants={{
                            initial: { opacity: 0.6 },
                            hover: { opacity: 1 }
                        }}
                    >
                        <span className="text-xs font-bold text-accent-500 uppercase tracking-widest flex items-center gap-2">
                            Explore 
                            <motion.span
                                variants={{
                                    initial: { x: 0 },
                                    hover: { x: 5 }
                                }}
                            >
                                <ArrowRight size={14} />
                            </motion.span>
                        </span>
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contributions;