import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/30 via-background to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Ready to Pitch Your <span className="text-gradient">Startup?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Take the leap. Apply now to get your startup in front of the right investors and take your business to the next level.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white rounded-full font-bold text-xl shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95">
              Apply Now
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/10 text-white rounded-full font-bold text-xl transition-all hover:scale-105 border-2 border-slate-600 hover:border-slate-500">
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <footer className="absolute bottom-6 w-full text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} KaroStartup. Empowering Bharat.
      </footer>
    </section>
  );
}
