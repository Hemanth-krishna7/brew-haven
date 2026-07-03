import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-text-dark selection:bg-secondary/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
