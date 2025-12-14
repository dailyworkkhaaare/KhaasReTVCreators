import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Content', href: '#portfolio' },
    { name: 'Upcoming', href: '#upcoming' },
    { name: 'Stats', href: '#analytics' },
  ];

  const subscribeLink = "https://yt.openinapp.co/y8lgw";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100; // Height of header + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="text-2xl font-black text-white"
        >
          KHAAS RE <span className="text-orange-500">TV</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-300 hover:text-orange-500 font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={subscribeLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-sm transition-colors"
          >
            Subscribe
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-300 hover:text-white py-2 font-medium border-b border-slate-800/50 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
           <a 
            href={subscribeLink}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center px-6 py-3 bg-red-600 text-white rounded-lg font-bold"
          >
            Subscribe Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;