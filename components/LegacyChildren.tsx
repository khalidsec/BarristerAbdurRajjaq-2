import React from 'react';
import { FAMILY } from '../constants';
import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

const LegacyChildren: React.FC = () => {
  return (
    <section id="legacy" className="py-32 bg-royal-950 relative">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-royal-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-accent-500 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Generations of Service</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">The Legacy Continues</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                His principles live on through his children—three accomplished individuals serving society in their own fields, guided by the values instilled by their father.
              </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FAMILY.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.15}>
              <div className="group relative bg-royal-900 border border-royal-800 hover:border-accent-500/40 transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-2xl">
                
                {/* Image Container - Square Aspect Ratio */}
                <div className="relative aspect-square overflow-hidden border-b border-royal-800">
                    <div className="absolute inset-0 bg-royal-950/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                    <img 
                        src={`https://picsum.photos/id/${member.imageSeed}/500/500?grayscale`} 
                        alt={member.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                       <div className="absolute top-0 right-0 w-2 h-2 bg-accent-500 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                    </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow relative">
                    
                    {/* Role Badge */}
                    <div className="mb-4">
                        <span className="text-xs font-sans font-bold text-accent-500 uppercase tracking-widest border border-royal-700 px-2 py-1 rounded-sm bg-royal-950/50">
                            {member.relation}
                        </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-accent-200 transition-colors">
                        {member.name}
                    </h3>
                    
                    <div className="text-sm font-sans font-medium text-gray-400 mb-6 flex items-center gap-2">
                        {member.role}
                    </div>
                    
                    <div className="w-full h-px bg-royal-800 mb-6 group-hover:bg-accent-500/30 transition-colors"></div>

                    <p className="text-gray-400 text-sm leading-relaxed font-light flex-grow">
                        {member.description}
                    </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {/* Foundation Block */}
        <Reveal delay={0.4}>
          <div className="mt-20 border-t border-royal-800 pt-16">
            <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-royal-900 to-royal-950 border border-royal-800 p-8 md:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="md:w-3/4">
                        <h4 className="text-2xl font-serif text-white mb-3">The Siddiq Foundation</h4>
                        <p className="text-gray-400 text-base font-light leading-relaxed max-w-2xl">
                            Beyond his family, his vision is institutionalized through the Foundation, continuing philanthropic work in education and legal aid for the underprivileged.
                        </p>
                    </div>
                    <div className="md:w-1/4 flex justify-center md:justify-end">
                      <a href="#contact" className="group flex items-center gap-3 px-6 py-3 border border-royal-600 text-gray-300 hover:text-white hover:border-white font-bold rounded-full transition-all text-sm uppercase tracking-wider">
                          <span>View Projects</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LegacyChildren;