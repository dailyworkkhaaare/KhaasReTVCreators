import React from 'react';
import { COMPANY_DESCRIPTION } from '../constants';
import { Target, Heart, Film, Globe } from 'lucide-react';
import { AnimatedSection } from './ScrollAnimation';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 skew-x-12 translate-x-20 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <AnimatedSection>
              <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                The Voice of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Global Maharashtra</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-4 border-orange-500 pl-6">
                {COMPANY_DESCRIPTION}
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-orange-500"><Globe /></div>
                  <div>
                    <h4 className="font-bold text-white">Global Reach</h4>
                    <p className="text-sm text-slate-400">Taking rural Marathi content to the world.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-orange-500"><Film /></div>
                  <div>
                    <h4 className="font-bold text-white">Filmmaking</h4>
                    <p className="text-sm text-slate-400">Promoting 100+ Marathi films digitally.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-orange-500"><Target /></div>
                  <div>
                    <h4 className="font-bold text-white">AI Technology</h4>
                    <p className="text-sm text-slate-400">Leveraging future tech for content.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-orange-500"><Heart /></div>
                  <div>
                    <h4 className="font-bold text-white">Social Impact</h4>
                    <p className="text-sm text-slate-400">Vaccination drives & youth employment.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:w-1/2 relative">
             <AnimatedSection delay={400}>
               <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://i.ibb.co/cXMRzSQt/khaas-re-marathi.jpg" 
                    className="rounded-2xl transform translate-y-8 shadow-2xl border border-slate-700 w-full aspect-[4/5] object-cover object-center bg-slate-800" 
                    alt="Khaas Re Marathi" 
                  />
                  <img 
                    src="https://i.ibb.co/N6Wkx72D/STREAMING-NOW.jpg" 
                    className="rounded-2xl shadow-2xl border border-slate-700 w-full aspect-[4/5] object-cover" 
                    alt="Streaming Now" 
                  />
               </div>
               {/* Circular Badge */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-full w-32 h-32 flex items-center justify-center shadow-xl shadow-orange-900/50 text-center border-4 border-slate-900">
                  <div>
                    <span className="block text-2xl font-black text-white">2017</span>
                    <span className="text-xs text-white/80 uppercase font-bold">Est.</span>
                  </div>
               </div>
             </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;