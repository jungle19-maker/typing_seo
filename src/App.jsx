import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import Features from './components/Features';
import SEOContent from './components/SEOContent';
import GameExperience from './components/GameExperience';
import IndianGovernmentExams from './components/IndianGovernmentExams';
import PricingPreview from './components/PricingPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <IndianGovernmentExams />
      <PricingPreview />
      <GameExperience />
      <ProjectOverview />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
