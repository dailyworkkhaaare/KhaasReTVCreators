import React from 'react';
import { Music, Clapperboard, Mic2, Video } from 'lucide-react';

const expertiseItems = [
  {
    title: "Production",
    icon: <Video size={20} />,
    description: "End-to-end services from conceptualization to post-production."
  },
  {
    title: "Music",
    icon: <Music size={20} />,
    description: "Producing viral Marathi songs blending tradition with modern beats."
  },
  {
    title: "Web Series",
    icon: <Clapperboard size={20} />,
    description: "Creating binge-worthy narrative series that capture millions of views."
  },
  {
    title: "Live Shows",
    icon: <Mic2 size={20} />,
    description: "Engaging on-ground events, fan meetups, and live performances."
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            
            {/* Minimal Header */}
            <div className="lg:w-1/5 text-center lg:text-left pt-2">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-[10px] mb-2 block">What We Do</span>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Our <span className="text-orange-500">Expertise</span>
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed hidden lg:block">
                  Excellence across all entertainment verticals.
                </p>
            </div>

            {/* Compact Grid */}
            <div className="lg:w-4/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {expertiseItems.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-all hover:bg-slate-900 group flex flex-col items-center text-center lg:items-start lg:text-left"
                    >
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-500 group-hover:bg-orange-500/10 transition-colors mb-3">
                            <div className="group-hover:animate-bounce">
                                {item.icon}
                            </div>
                        </div>
                        <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;