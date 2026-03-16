import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-300 text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="tracking-wide uppercase text-xs">Empowering Bharat's Next Generation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1] text-white"
        >
          Pitch Your Startup to <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 drop-shadow-lg">India’s Top Investors</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Karo Pitch bridges the gap for early-stage founders from Tier-2, Tier-3 cities, and beyond. Direct access to mentorship, networks, and <span className="text-white font-medium">real funding.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:duration-200 animate-tilt"></div>
            <button className="relative w-full sm:w-auto px-10 py-5 bg-background border border-white/10 hover:bg-slate-900 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3">
              Apply to Pitch
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-teal-400" />
            </button>
          </div>
          
          <button className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all border border-slate-700 hover:border-slate-500 shadow-xl shadow-black/20">
            Explore Startups
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
}
