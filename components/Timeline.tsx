import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { Reveal } from './Reveal';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-28 bg-royal-950 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
            <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-6">Timeline of a Life Well Lived</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
            </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-royal-800 via-accent-500/50 to-royal-800 md:-ml-0.5"></div>

          <div className="space-y-16">
            {TIMELINE_DATA.map((event, index) => (
              <Reveal key={index} width="100%" delay={index * 0.1}>
                <div className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Empty Space for layout balance */}
                    <div className="hidden md:block w-1/2"></div>
                    
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-royal-950 rounded-full border-4 border-accent-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transform -translate-x-[11px] md:-translate-x-3 z-10 group-hover:scale-125 transition-transform"></div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="bg-royal-900/40 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-royal-800 hover:border-accent-500/40 backdrop-blur-sm group hover:-translate-y-1">
                        <span className="inline-block px-4 py-1 bg-royal-950 text-accent-500 text-sm font-bold rounded-full mb-4 border border-royal-800 shadow-sm">
                        {event.year}
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-accent-100 transition-colors">{event.title}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-light">{event.description}</p>
                    </div>
                    </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;