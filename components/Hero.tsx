import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-royal-950">
      {/* Background - Removed Image, kept gradient for depth */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950"></div>
         {/* Subtle pattern for texture without using a photo */}
         <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}>
         </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-block"
        >
            <motion.h1 
            whileHover={{ 
                scale: 1.02, 
                textShadow: "0 0 30px rgba(148, 163, 184, 0.3)",
                color: "#f8fafc" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="text-4xl md:text-6xl lg:text-7xl font-body text-white font-bold tracking-tight drop-shadow-lg cursor-default select-none"
            >
            {HERO_CONTENT.name}
            </motion.h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-accent-400 font-body mb-6 italic"
        >
          {HERO_CONTENT.dates}
        </motion.p>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-1 bg-accent-500 mx-auto mb-8"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide font-body"
        >
          {HERO_CONTENT.tagline}
          <br/>
          <span className="text-base md:text-lg opacity-80 mt-4 block font-sans text-gray-300">{HERO_CONTENT.subTagline}</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          {/* Professional High-Contrast Button: White background with Navy text */}
          <motion.button 
             onClick={() => document.getElementById('biography')?.scrollIntoView({behavior: 'smooth'})}
             whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
             whileTap={{ scale: 0.95 }}
             className="group relative px-10 py-4 bg-white text-royal-950 font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all uppercase tracking-wider text-sm"
          >
            <span className="relative z-10">Explore His Life</span>
            {/* Shine Effect */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg]"
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.button>
          
          {/* Secondary Ghost Button */}
          <motion.button 
             onClick={() => document.getElementById('legacy')?.scrollIntoView({behavior: 'smooth'})}
             whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#ffffff", color: "#ffffff" }}
             whileTap={{ scale: 0.95 }}
             className="px-10 py-4 border border-royal-700 text-gray-300 font-semibold rounded-full transition-all uppercase tracking-wider text-sm bg-transparent"
          >
            Legacy Continues
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;