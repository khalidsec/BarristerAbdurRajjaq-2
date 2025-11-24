import React from 'react';
import { INTRO_CONTENT } from '../constants';
import { Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const Intro: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-royal-950 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-5 rounded-full bg-royal-900 border border-royal-800 mb-8 shadow-xl animate-float">
               <Quote className="w-8 h-8 text-accent-500" />
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-body leading-relaxed md:leading-loose text-shadow-sm font-light">
              {INTRO_CONTENT}
            </p>
            
            <div className="mt-12 flex justify-center items-center gap-6 opacity-70">
               <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-600/50 to-transparent"></div>
               <div className="text-accent-500/80 text-xs font-bold uppercase tracking-[0.3em] font-sans">Legacy &bull; Honor &bull; Service</div>
               <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-600/50 to-transparent"></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Intro;