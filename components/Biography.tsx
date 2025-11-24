import React from 'react';
import { Reveal, FadeIn } from './Reveal';

const Biography: React.FC = () => {
  return (
    <section id="biography" className="py-32 bg-royal-900 text-white relative overflow-hidden border-t border-royal-800/50">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-royal-800/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Image Section - Resized and Framed */}
          <div className="lg:w-5/12 w-full flex justify-center lg:justify-end">
            <FadeIn width="fit-content">
              <div className="relative group max-w-sm mx-auto">
                {/* Decorative Frame Elements */}
                <div className="absolute -inset-4 border border-royal-700/50 rounded-sm z-0"></div>
                <div className="absolute -inset-1 border border-royal-600 rounded-sm z-0 opacity-50"></div>
                
                {/* Main Image Container */}
                <div className="relative z-10 p-3 bg-royal-950 shadow-2xl rounded-sm border border-royal-800">
                    <div className="relative overflow-hidden aspect-[3/4]">
                        <div className="absolute inset-0 border-[12px] border-royal-950/80 z-20 pointer-events-none"></div>
                        <div className="absolute inset-0 border border-accent-400/20 z-30 pointer-events-none m-3"></div>
                        <img 
                            src="https://picsum.photos/id/1059/600/800?grayscale" 
                            alt="Working in Chambers" 
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                        />
                    </div>
                </div>

                {/* Caption / Badge */}
                <div className="absolute -bottom-6 -right-6 bg-royal-800 px-6 py-3 shadow-xl border border-royal-700 z-20">
                    <span className="text-accent-400 font-serif italic text-sm">Lincoln’s Inn, 1976</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-7/12">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-white">
                A Life Defined by <span className="text-accent-400 border-b-2 border-accent-500/30 pb-1">Purpose</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-loose font-body text-lg font-light">
                <p>
                  <span className="text-5xl float-left mr-3 mt-[-6px] font-serif text-accent-500">F</span>
                  rom humble beginnings in 1949, Barrister Siddiq’s journey was one of relentless pursuit of knowledge. His years at <span className="font-semibold text-white">Lincoln’s Inn</span> shaped not just his career, but his worldview—one where law serves as the ultimate equalizer in society.
                </p>
                <p>
                  Throughout his illustrious career spanning five decades, he was known not merely for his eloquence in the courtroom, but for his <span className="italic text-accent-400 font-medium">unwavering integrity</span> outside of it. He believed that a lawyer's duty extends beyond the client to the court and the community at large.
                </p>
                <p className="border-l-4 border-accent-500/50 pl-6 py-1 my-6 text-xl font-serif italic text-gray-400 bg-royal-950/30 rounded-r-lg">
                  "Justice is not a concept to be studied, but a virtue to be lived."
                </p>
                <p>
                  His core values—honesty, humility, and hard work—remained unshaken even as he rose to the pinnacle of the legal profession.
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <button className="px-8 py-3 bg-white text-royal-950 font-bold rounded-full hover:bg-gray-200 transition-all uppercase tracking-widest text-xs shadow-lg hover:shadow-white/10 hover:-translate-y-1">
                  Read Full Biography
                </button>
                <button className="px-8 py-3 border border-royal-600 text-gray-300 font-bold rounded-full hover:border-white hover:text-white transition-all uppercase tracking-widest text-xs hover:-translate-y-1">
                  View Career Timeline
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;