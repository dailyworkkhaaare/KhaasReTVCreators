import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { KEY_METRICS, DEMOGRAPHICS } from '../constants';
import { Users, Eye, PlayCircle, Award, Youtube, Instagram, Facebook, Trophy, Star, TrendingUp } from 'lucide-react';
import { AnimatedSection, useElementOnScreen } from './ScrollAnimation';

const COLORS = ['#ea580c', '#334155']; // Orange-600, Slate-700
const HOVER_COLORS = ['#fb923c', '#475569']; // Orange-400, Slate-600 (Brighter/Lighter)

interface MetricCardProps {
  metric: typeof KEY_METRICS[0];
  index: number;
}

// Sub-component for individual metric cards
const MetricCard: React.FC<MetricCardProps> = ({ metric, index }) => {
  const [ref, isVisible] = useElementOnScreen({
    threshold: 0.2 // Trigger when 20% visible
  });

  return (
    <div 
      ref={ref}
      className={`glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 text-orange-500">
        {index === 0 && <Eye size={40} />}
        {index === 1 && <Users size={40} />}
        {index === 2 && <PlayCircle size={40} />}
        {index === 3 && <Award size={40} />}
      </div>
      <h3 className="text-4xl font-black text-white mb-2">{metric.value}</h3>
      <p className="text-orange-500 font-bold uppercase tracking-wide text-sm mb-1">{metric.label}</p>
      <p className="text-slate-500 text-xs">{metric.subtext}</p>
    </div>
  );
};

const Analytics: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(undefined);
  };

  return (
    <section id="analytics" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-orange-500">Impact</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Dominating the digital space with unparalleled engagement and a loyal youth audience.
            </p>
          </div>
        </AnimatedSection>

        {/* Highlighted Metric: Total Audience Network */}
        <div className="max-w-4xl mx-auto mb-20">
           <AnimatedSection>
             <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-3xl p-[2px] shadow-[0_0_60px_rgba(234,88,12,0.2)] hover:shadow-[0_0_80px_rgba(234,88,12,0.3)] transition-shadow duration-500">
                <div className="bg-slate-900/95 backdrop-blur-xl rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
                    
                    <div className="relative z-10 text-center md:text-left flex-1">
                       <h3 className="text-5xl md:text-7xl font-black text-white mb-4 leading-none tracking-tight">
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100">10 Lakh+</span>
                       </h3>
                       <p className="text-orange-500 font-bold tracking-widest uppercase text-xl mb-4">Total Audience Network</p>
                       <p className="text-slate-300 text-base leading-relaxed max-w-lg">
                         Connecting over a million hearts across YouTube, Instagram, Facebook, and our digital ecosystem. A massive community united by culture and content.
                       </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-center gap-6">
                        <div className="flex -space-x-6">
                           <div className="w-16 h-16 rounded-full bg-[#1e293b] border-[6px] border-slate-900 flex items-center justify-center text-red-500 shadow-xl relative z-30 transform hover:scale-110 transition-transform">
                              <Youtube size={28} />
                           </div>
                           <div className="w-16 h-16 rounded-full bg-[#1e293b] border-[6px] border-slate-900 flex items-center justify-center text-pink-500 shadow-xl relative z-20 transform hover:scale-110 transition-transform">
                              <Instagram size={28} />
                           </div>
                           <div className="w-16 h-16 rounded-full bg-[#1e293b] border-[6px] border-slate-900 flex items-center justify-center text-blue-500 shadow-xl relative z-10 transform hover:scale-110 transition-transform">
                              <Facebook size={28} fill="currentColor" />
                           </div>
                        </div>
                        <div className="flex flex-col pl-2">
                           <span className="text-3xl font-black text-white">1M+</span>
                           <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">Community</span>
                        </div>
                    </div>

                    {/* Decorative background effects */}
                    <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
                </div>
             </div>
           </AnimatedSection>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {KEY_METRICS.map((metric, idx) => (
            <MetricCard key={idx} metric={metric} index={idx} />
          ))}
        </div>

        {/* Detailed Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Chart */}
          <AnimatedSection>
            <div className="bg-slate-800/40 rounded-3xl p-8 border border-slate-700 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Audience Age Demographics</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={DEMOGRAPHICS}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationBegin={200}
                      animationEasing="ease-out"
                      activeIndex={activeIndex}
                      activeOuterRadiusOffset={10}
                      onMouseEnter={onPieEnter}
                      onMouseLeave={onPieLeave}
                    >
                      {DEMOGRAPHICS.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={activeIndex === index ? HOVER_COLORS[index % HOVER_COLORS.length] : COLORS[index % COLORS.length]} 
                          className="transition-all duration-300 ease-in-out cursor-pointer outline-none"
                          stroke={activeIndex === index ? 'rgba(255,255,255,0.1)' : 'none'}
                          strokeWidth={activeIndex === index ? 4 : 0}
                        />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                        itemStyle={{ color: '#f8fafc' }}
                        cursor={false}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-4">
                <p className="text-slate-300 text-sm">
                  <span className="text-orange-500 font-bold">94.1%</span> of our audience belongs to the 13-44 age group.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Vargamantri Highlight - Re-designed */}
          <AnimatedSection delay={200}>
            <div className="relative rounded-3xl overflow-hidden group h-full min-h-[500px] flex flex-col justify-end border border-slate-800 shadow-2xl bg-slate-900">
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                 <img 
                    src="https://i.ibb.co/GfbJw24X/vargamantri1.jpg" 
                    alt="Vargamantri Web Series"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Improved Gradient for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90 opacity-60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/90 text-white backdrop-blur-md mb-3 shadow-lg border border-orange-500/50">
                        <Star size={12} fill="currentColor" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Flagship Series</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-md">Vargamantri</h3>
                    <p className="text-slate-200 text-sm md:text-base border-l-4 border-orange-500 pl-3 font-medium drop-shadow-sm leading-relaxed">The political satire that captured the heart of Maharashtra.</p>
                </div>

                {/* Stats Grid - Enhanced for Readability */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Stat 1 */}
                    <div className="bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-orange-500/40 transition-all hover:bg-slate-800/80">
                        <div className="flex items-center gap-2 mb-1 text-slate-300">
                            <Youtube size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Views</span>
                        </div>
                        <p className="text-2xl font-black text-white">5M+</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-orange-500/40 transition-all hover:bg-slate-800/80">
                        <div className="flex items-center gap-2 mb-1 text-slate-300">
                            <Eye size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Impressions</span>
                        </div>
                        <p className="text-2xl font-black text-white">50M+</p>
                    </div>

                    {/* Stat 3 - Full Width */}
                    <div className="col-span-2 bg-gradient-to-r from-orange-600/30 to-slate-900/80 backdrop-blur-md p-5 rounded-xl border border-white/10 flex items-center justify-between group/stat hover:bg-slate-800/80 transition-all">
                         <div>
                            <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">Total Views</p>
                            <p className="text-3xl font-black text-white group-hover/stat:text-orange-100 transition-colors">5 Cr+</p>
                            <p className="text-[10px] text-slate-300">Cross-Platform Dominance</p>
                         </div>
                         <div className="bg-orange-500/20 p-3 rounded-full text-orange-500 group-hover/stat:bg-orange-500 group-hover/stat:text-white transition-all shadow-lg">
                            <TrendingUp size={24} />
                         </div>
                    </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Nominations Section - Minimal & Professional */}
        <AnimatedSection delay={400}>
          <div className="relative rounded-3xl overflow-hidden bg-slate-900/50 border border-slate-800">
             {/* Subtle top spotlight effect */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent blur-sm"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest">
                   <Trophy size={14} /> 2025 Recognition
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                   Vargamantri <span className="text-slate-500 font-light">Nominations</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* NDTV Card */}
                <div className="group bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-yellow-500/30 transition-all duration-500 relative overflow-hidden">
                   {/* Minimal Leaf Watermark */}
                   <Award className="absolute -bottom-4 -right-4 text-yellow-500/5 w-32 h-32 rotate-[-15deg]" strokeWidth={1} />
                   
                   <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-5">
                           <div className="h-12 w-12 rounded-lg border border-slate-800 overflow-hidden shadow-sm shrink-0">
                                <img src="https://i.ibb.co/TF9LjS5/ndtv-awards.jpg" alt="NDTV Marathi Awards" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <h4 className="font-bold text-white text-lg leading-tight">NDTV Marathi</h4>
                              <p className="text-slate-500 text-xs uppercase tracking-wide font-medium mt-0.5">Entertainment Awards 2025</p>
                           </div>
                      </div>
                      
                      <ul className="space-y-5">
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 group/item">
                            <span className="font-bold text-white group-hover/item:text-yellow-400 transition-colors">Akshaya Deodhar</span>
                            <span className="text-slate-500 text-sm border-l-2 border-slate-800 pl-3 sm:border-l-0 sm:pl-0">Best Actress (Web Series)</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 group/item">
                            <span className="font-bold text-white group-hover/item:text-yellow-400 transition-colors">Vargamantri</span>
                            <span className="text-slate-500 text-sm border-l-2 border-slate-800 pl-3 sm:border-l-0 sm:pl-0">Best Web Series</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 group/item">
                            <span className="font-bold text-white group-hover/item:text-yellow-400 transition-colors">Sanjay Kamble</span>
                            <span className="text-slate-500 text-sm border-l-2 border-slate-800 pl-3 sm:border-l-0 sm:pl-0">Best Direction (Web Series)</span>
                        </li>
                      </ul>
                   </div>
                </div>

                {/* MaTa Card */}
                <div className="group bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-yellow-500/30 transition-all duration-500 relative overflow-hidden">
                   {/* Minimal Leaf Watermark */}
                   <Trophy className="absolute -bottom-4 -right-4 text-yellow-500/5 w-32 h-32 rotate-[-15deg]" strokeWidth={1} />
                   
                   <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-5">
                           <div className="h-12 w-12 rounded-lg border border-slate-800 overflow-hidden shadow-sm shrink-0">
                                <img src="https://i.ibb.co/CssdwCD2/mata-saman.jpg" alt="MaTa Sanman" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <h4 className="font-bold text-white text-lg leading-tight">MaTa Sanman</h4>
                              <p className="text-slate-500 text-xs uppercase tracking-wide font-medium mt-0.5">Maharashtra Times Awards 2025</p>
                           </div>
                      </div>
                      
                      <ul className="space-y-5">
                         <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 group/item">
                            <span className="font-bold text-white group-hover/item:text-yellow-400 transition-colors">Sanjay Kamble</span>
                            <span className="text-slate-500 text-sm border-l-2 border-slate-800 pl-3 sm:border-l-0 sm:pl-0">Best Direction</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 group/item">
                            <span className="font-bold text-white group-hover/item:text-yellow-400 transition-colors">Vargamantri</span>
                            <span className="text-slate-500 text-sm border-l-2 border-slate-800 pl-3 sm:border-l-0 sm:pl-0">Best Web Series</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 group/item">
                            <span className="font-bold text-white group-hover/item:text-yellow-400 transition-colors">Sanjay Kamble</span>
                            <span className="text-slate-500 text-sm border-l-2 border-slate-800 pl-3 sm:border-l-0 sm:pl-0">Best Direction (Web Series)</span>
                        </li>
                      </ul>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Analytics;