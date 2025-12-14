import React from 'react';
import { Youtube, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="text-3xl font-black text-white mb-4">
              KHAAS RE <span className="text-orange-500">TV</span>
            </h2>
            <p className="text-slate-400 mb-6">
              Strengthening the Marathi language and culture through digital innovation. Join the revolution.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@KhaasReTV" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-red-600 text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/khaasretv/" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/khaasretv" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0" size={20} />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <span>contact@khaasretv.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 shrink-0" size={20} />
                <span>+91-8983414932</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Khaas Re TV. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;