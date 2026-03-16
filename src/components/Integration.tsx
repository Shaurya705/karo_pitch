import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Integration() {
  return (
    <section id="integration" className="py-24 relative bg-slate-900/40">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl w-full p-8 md:p-16 rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex justify-center items-center shadow-[0_0_50px_rgba(59,130,246,0.3)] inset-0">
                <Rocket className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Powered by <br className="md:hidden" />
                <span className="text-gradient drop-shadow-sm">KaroStartup</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-xl">
                India's largest startup storytelling platform. We reach over millions of founders, investors, and startup enthusiasts. Karo Pitch extends our mission from telling stories to writing the first checks.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="px-4 py-2 glass-card rounded-lg text-sm font-semibold flex flex-col">
                  <span className="text-2xl text-white">1M+</span>
                  <span className="text-slate-400">Community</span>
                </div>
                <div className="px-4 py-2 glass-card rounded-lg text-sm font-semibold flex flex-col">
                  <span className="text-2xl text-white">500+</span>
                  <span className="text-slate-400">Stories Covered</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
