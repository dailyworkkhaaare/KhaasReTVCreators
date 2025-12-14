import React, { useRef, useEffect } from 'react';
import { Users, TrendingUp, Zap, Heart, Star, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from './ScrollAnimation';

const UpcomingSeries: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const collaborators = [
    { name: "Atharva Sudame", followers: "3M+", image: "https://i.ibb.co/F4crTGKX/channels4-profile.jpg" },
    { name: "Sarang & Paula", followers: "2.5M+", image: "https://i.ibb.co/Mxt0sM5p/Sarang-Sathaye-Dev-Paula-Wedding-Love-Story-5.jpg" },
    { name: "Jeevan Kadam", followers: "750K+", image: "https://i.ibb.co/qLs7SJGg/IMG-20171224-WA0059.jpg" },
    { name: "Urmila Nimbalkar", followers: "2.8M+", image: "https://i.ibb.co/tMQN6BDt/IMG-20240831-WA0004.jpg" },
    { name: "Whyfal", followers: "375K+", image: "https://i.ibb.co/08d7Dvs/channels4-profile-1.jpg" },
    { name: "Amuk Tamuk", followers: "1M+", image: "https://i.ibb.co/sSjDcLf/maxresdefault.jpg" },
    { name: "Bol Bhidu", followers: "3.5M+", image: "https://i.ibb.co/jv2mfBvr/d39cb1183748343-Y3-Jvc-Cwx-Mzgw-LDEw-ODAs-Mjcw-LDA.jpg" },
    { name: "Apali Aajji", followers: "2M+", image: "https://i.ibb.co/SX4VND2b/16.jpg" },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            // If we are near the end, scroll back to start
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll by approx one item width + gap
                scrollContainerRef.current.scrollBy({ left: 180, behavior: 'smooth' });
            }
        }
    }, 2500); // Scroll every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = current.clientWidth * 0.75; // Scroll 75% of view width
        current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="upcoming" className="py-24 bg-slate-900 relative border-t border-slate-800">
       <div className="container mx-auto px-4">
          <AnimatedSection>
            {/* Header */}
            <div className="mb-16 text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-600/10 border border-orange-500/30 text-orange-500 font-bold tracking-widest uppercase text-xs mb-4">Coming Soon</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Upcoming <span className="text-orange-500">Web Series</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A glimpse into our next big production that's set to redefine Marathi digital entertainment.
              </p>
            </div>
          </AnimatedSection>

          {/* Main Card */}
          <AnimatedSection delay={200}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                 
                 {/* Content Side */}
                 <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center relative z-10">
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 leading-tight tracking-tight">
                      THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">CREATORS</span>
                    </h3>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded uppercase tracking-wider">A Marathi Web Show</span>
                      <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded uppercase tracking-wider">Dramedy</span>
                    </div>
                    
                    <p className="text-xl text-slate-300 font-medium mb-6 italic border-l-4 border-orange-500 pl-4">
                      "Three friends. One dream. Infinite chaos."
                    </p>
                    
                    <div className="space-y-6 text-slate-400 leading-loose mb-10 text-base md:text-lg">
                      <p>
                          They dive headfirst into the wild, hilarious world of content creation — chasing fame, followers, and that one viral hit! 
                          But as they meet real Marathi creators and face the madness behind the screens, they discover something deeper — it’s not about trends, it’s about truth.
                      </p>
                      <p>
                          It is <span className="text-slate-200 font-medium">funny, raw, and truly motivational</span>. A Marathi dramedy that captures what it really means to create, to fail, and to find your voice in the chaos.
                      </p>
                      <p className="font-semibold text-orange-400 italic">
                          This is the story your audience is waiting for.
                      </p>
                    </div>

                    {/* Themes Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                       <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                          <div className="flex items-center gap-2 mb-2">
                              <Heart className="text-orange-500" size={18} />
                              <h4 className="font-bold text-white text-sm">Authentic Voice</h4>
                          </div>
                          <p className="text-xs text-slate-400">Rooted in Marathi culture. From local slang to family dynamics, it's funny, messy, and deeply relatable.</p>
                       </div>
                       <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                          <div className="flex items-center gap-2 mb-2">
                              <Zap className="text-orange-500" size={18} />
                              <h4 className="font-bold text-white text-sm">Why Now?</h4>
                          </div>
                          <p className="text-xs text-slate-400">Exploring the content creation boom, hustle culture burnout, and the hunger for raw, real stories.</p>
                       </div>
                    </div>

                    {/* Collaborators Carousel */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                          <h5 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Expected Collaborations</h5>
                          <div className="flex gap-2">
                              <button 
                                  onClick={() => scroll('left')} 
                                  className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full hover:bg-orange-600 text-white transition-all shadow-lg border border-slate-700 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                  aria-label="Scroll left"
                              >
                                  <ChevronLeft size={16} />
                              </button>
                              <button 
                                  onClick={() => scroll('right')} 
                                  className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full hover:bg-orange-600 text-white transition-all shadow-lg border border-slate-700 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                  aria-label="Scroll right"
                              >
                                  <ChevronRight size={16} />
                              </button>
                          </div>
                      </div>
                      
                      <div 
                          ref={scrollContainerRef}
                          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                      >
                          {collaborators.map((collab, i) => (
                          <div key={i} className="min-w-[150px] sm:min-w-[160px] snap-center flex flex-col items-center text-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 hover:border-orange-500/50 transition-all hover:bg-slate-900 group shadow-lg">
                              <div className="w-24 h-24 mb-3 relative rounded-full p-[2px] bg-gradient-to-tr from-slate-700 to-slate-800 group-hover:from-orange-500 group-hover:to-red-500 transition-colors">
                                  <div className="w-full h-full rounded-full overflow-hidden relative">
                                      <img 
                                          src={collab.image} 
                                          alt={collab.name} 
                                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                      />
                                  </div>
                              </div>
                              <p className="text-white text-sm font-bold leading-tight mb-1 truncate w-full px-1">{collab.name}</p>
                              <p className="text-orange-500 text-xs font-extrabold">{collab.followers}</p>
                              <p className="text-slate-500 text-[10px] mt-0.5 leading-tight font-medium">Followers</p>
                          </div>
                          ))}
                      </div>
                    </div>
                 </div>

                 {/* Stats & Audience Side */}
                 <div className="lg:col-span-5 bg-slate-950/50 border-l border-slate-800 p-8 md:p-12 flex flex-col justify-between">
                    
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Users size={20} className="text-orange-500"/> Who's Watching?
                        </h4>
                        <ul className="space-y-4 mb-10">
                            <li className="flex gap-3">
                                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-orange-500"></div>
                                <div>
                                    <strong className="text-slate-200 block text-sm">Social Media Natives</strong>
                                    <span className="text-slate-500 text-xs">Young adults (18-35) living the influencer culture.</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-orange-500"></div>
                                <div>
                                    <strong className="text-slate-200 block text-sm">Streaming Enthusiasts</strong>
                                    <span className="text-slate-500 text-xs">Hungry for fresh, realistic regional dramedies.</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-orange-500"></div>
                                <div>
                                    <strong className="text-slate-200 block text-sm">Marathi Audience</strong>
                                    <span className="text-slate-500 text-xs">Craving quality content in their language.</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-orange-500"></div>
                                <div>
                                    <strong className="text-slate-200 block text-sm">Creator Community</strong>
                                    <span className="text-slate-500 text-xs">Aspiring influencers finding their story.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Metrics Box */}
                    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-3 opacity-10">
                          <Target size={64} className="text-white" />
                       </div>
                       <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">Projected Deliverables</h4>
                       <div className="space-y-5 relative z-10">
                          <div className="flex items-center justify-between">
                              <span className="text-slate-300 text-sm font-medium flex items-center gap-2"><Star size={14}/> YT Views</span>
                              <span className="text-orange-500 font-bold text-xl">7.5M+</span>
                          </div>
                          <div className="flex items-center justify-between">
                              <span className="text-slate-300 text-sm font-medium flex items-center gap-2"><TrendingUp size={14}/> Impressions</span>
                              <span className="text-orange-500 font-bold text-xl">75M+</span>
                          </div>
                          <div className="flex items-center justify-between">
                              <span className="text-slate-300 text-sm font-medium flex items-center gap-2"><Zap size={14}/> Total Reach</span>
                              <span className="text-orange-500 font-bold text-xl">10 Cr+</span>
                          </div>
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

export default UpcomingSeries;