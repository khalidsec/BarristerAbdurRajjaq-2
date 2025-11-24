import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Contributions from './components/Contributions';
import Biography from './components/Biography';
import LegacyChildren from './components/LegacyChildren';
import Timeline from './components/Timeline';
import Tributes from './components/Tributes';
import GalleryPublications from './components/GalleryPublications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-200 bg-royal-950 selection:bg-accent-500 selection:text-white">
      <Navbar />
      <Hero />
      <Intro />
      <Contributions />
      <Biography />
      <LegacyChildren />
      <Timeline />
      <Tributes />
      <GalleryPublications />
      <Footer />
    </div>
  );
}

export default App;