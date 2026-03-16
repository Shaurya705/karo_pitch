import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Karo<span className="text-blue-400">Pitch</span></span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
          <a href="#startups" className="hover:text-white transition-colors">Startups</a>
          <a href="#integration" className="hover:text-white transition-colors">KaroStartup</a>
        </div>

        <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95">
          Apply to Pitch
        </button>
      </div>
    </motion.nav>
  );
}
