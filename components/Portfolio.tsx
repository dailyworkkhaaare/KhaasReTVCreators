import React from 'react';
import { PROJECTS } from '../constants';
import { Zap, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { AnimatedSection } from './ScrollAnimation';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="max-w-2xl">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-2 block">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Creations</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Curated content that resonates with the heart of Maharashtra, blending entertainment with cultural significance.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <AnimatedSection key={`${project.title}-${idx}`} delay={idx * 100} className="h-full">
               <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="group block h-full">
            <div className="relative h-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] hover:scale-[1.02] hover:brightness-110 flex flex-col">
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    
                    {/* Stats Badge */}
                    {project.stats && (
                        <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg z-10">
                            <Zap size={10} className="text-orange-500" />
                            {project.stats}
                        </div>
                    )}
                     
                     {/* Category Badge */}
                     <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-orange-600 text-white text-[10px] font-bold rounded-full shadow-lg border border-orange-500/50">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col relative z-10 bg-gradient-to-b from-slate-900 to-slate-950">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-1">
                        {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 border-b border-slate-800/50 pb-4">
                        {project.description}
                    </p>
                    
                    <a 
                        href={project.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-xs font-bold text-orange-500 uppercase tracking-widest hover:text-white transition-colors w-fit"
                    >
                        Watch Now <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;