import React from 'react';
import { Play, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/maharashtra/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 mb-6 animate-fade-in-up">
          <TrendingUp size={16} />
          <span className="text-sm font-semibold uppercase tracking-wider">100 Crore+ Impressions</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
          KHAAS RE <span className="text-orange-500">TV</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
          Propagating <span className="text-white font-medium">Marathi</span> culture, 
          empowering the <span className="text-white font-medium">Youth</span>, 
          and creating digital history since 2017.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://yt.openinapp.co/y8lgw"
            target="_blank"
            rel="noreferrer"
            className="group relative px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg rounded-full transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(234,88,12,0.5)]"
          >
            <Play fill="currentColor" size={20} />
            Watch Content
          </a>
        </div>
      </div>
      
      {/* Floating Elements (Decorative) */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce text-slate-500">
        <span className="text-sm tracking-widest uppercase">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;