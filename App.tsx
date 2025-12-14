import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import UpcomingSeries from './components/UpcomingSeries';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-orange-500 selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Expertise />
        <Portfolio />
        <Analytics />
        <UpcomingSeries />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;