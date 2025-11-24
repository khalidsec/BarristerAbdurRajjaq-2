import React from 'react';
import { TRIBUTES } from '../constants';
import { Reveal } from './Reveal';

const Tributes: React.FC = () => {
  return (
    <section id="tributes" className="py-28 bg-royal-950 text-white relative border-y border-royal-900/50">
       {/* Decorative background element */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-500 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-royal-600 rounded-full blur-[128px]"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Tributes & Reflections</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto opacity-70 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TRIBUTES.map((tribute, index) => (
            <Reveal key={tribute.id} delay={index * 0.1}>
                <div className="h-full bg-royal-900/30 p-10 rounded-xl border border-royal-800/50 backdrop-blur-sm hover:bg-royal-900/50 hover:border-accent-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] group flex flex-col">
                <div className="text-6xl text-accent-600 font-serif mb-6 opacity-50 group-hover:opacity-100 transition-opacity leading-none">“</div>
                <p className="text-xl text-gray-200 italic mb-8 font-serif leading-relaxed flex-grow">
                    {tribute.text}
                </p>
                <div className="border-t border-royal-800 pt-6 group-hover:border-royal-700 transition-colors">
                    <h4 className="font-bold text-white text-lg">{tribute.author}</h4>
                    <span className="text-sm text-accent-500 uppercase tracking-widest font-semibold">{tribute.role}</span>
                </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tributes;