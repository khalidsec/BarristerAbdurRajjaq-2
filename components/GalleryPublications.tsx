import React from 'react';
import { PUBLICATIONS } from '../constants';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const GalleryPublications: React.FC = () => {
  // Array of small gallery images - Updated paths to /public/images/
  const smallImages = [
    '/public/images/r3.jpg',
    '/public/images/r4.jpg',
    '/public/images/r5.jpg',
    '/public/images/r3.jpg' // Repeating r3 to fill the 4-grid layout perfectly
  ];

  return (
    <section className="py-28 bg-royal-950">
      <div className="container mx-auto px-6">
        
        {/* Gallery Section */}
        <div className="mb-32">
          <Reveal>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-6">Memories</h2>
                <p className="text-gray-300 text-xl font-light">A life dedicated to truth and service captured in moments.</p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
             {/* Main Large Image - r2 */}
             <Reveal className="col-span-2 row-span-2">
                <div className="w-full h-full overflow-hidden rounded-xl group relative border border-royal-800">
                    <img src="/public/images/r2.jpg" alt="Barrister Razzaq Memory" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-white font-serif italic text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Moments of reflection and service</span>
                    </div>
                </div>
             </Reveal>
             
             {/* Small Images Grid - r3, r4, r5 */}
             {smallImages.map((src, idx) => (
                <Reveal key={idx} delay={0.1 * (idx + 1)} className="col-span-1 row-span-1">
                    <div className="w-full h-full overflow-hidden rounded-xl group relative border border-royal-800">
                        <img src={src} alt={`Memory ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" />
                    </div>
                </Reveal>
             ))}
          </div>
        </div>

        {/* Publications Section */}
        <Reveal>
            <div id="publications" className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-10 border-b border-royal-800 pb-6 gap-4">
                <h3 className="text-3xl font-serif font-bold text-white">Selected Publications & Writings</h3>
                <button className="text-sm text-accent-500 font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center group">
                    View All Archive 
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform"/>
                </button>
            </div>

            <div className="space-y-6">
                {PUBLICATIONS.map((pub, idx) => (
                <Reveal key={pub.id} delay={idx * 0.1}>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-royal-900/30 rounded-xl border border-royal-800 hover:border-accent-500/50 hover:bg-royal-900/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-4 md:mb-0">
                            <h4 className="font-bold text-white text-xl mb-2 group-hover:text-accent-200 transition-colors">{pub.title}</h4>
                            <span className="text-xs text-accent-500 font-bold uppercase tracking-widest bg-royal-950/80 px-3 py-1 rounded-full border border-royal-800 inline-block">{pub.type}</span>
                        </div>
                        <div className="flex space-x-4">
                            <button title="Read Online" className="flex items-center gap-2 px-4 py-2 text-sm text-royal-200 hover:text-white bg-royal-950/50 hover:bg-accent-600 rounded-full transition-all border border-royal-800 hover:border-accent-500">
                                <ExternalLink size={16}/> <span>Read</span>
                            </button>
                            <button title="Download PDF" className="flex items-center gap-2 px-4 py-2 text-sm text-royal-200 hover:text-white bg-royal-950/50 hover:bg-accent-600 rounded-full transition-all border border-royal-800 hover:border-accent-500">
                                <Download size={16}/> <span>PDF</span>
                            </button>
                        </div>
                    </div>
                </Reveal>
                ))}
            </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default GalleryPublications;