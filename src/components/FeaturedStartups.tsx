import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const startups = [
  {
    name: 'FarmBharat',
    category: 'AgriTech',
    desc: 'Empowering local farmers with AI-driven crop forecasting and direct-to-consumer supply chains.'
  },
  {
    name: 'CodeKala',
    category: 'EdTech',
    desc: 'Vernacular coding platform for K-12 students across Tier-3 cities and rural India.'
  },
  {
    name: 'MediDeliver',
    category: 'HealthTech',
    desc: 'Drone-assisted last-mile delivery of essential medicines to remote healthcare centers.'
  }
];

export default function FeaturedStartups() {
  return (
    <section id="startups" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Alumni</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400"
          >
            Startups that broke out of obscurity and raised capital through Karo Pitch.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {startups.map((startup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card flex flex-col justify-between group cursor-pointer overflow-hidden border-slate-700/50 hover:border-teal-500/50 transition-colors"
            >
              <div className="p-8 pb-4 relative z-10">
                <div className="inline-block px-3 py-1 bg-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-300 rounded-full mb-6">
                  {startup.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {startup.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed min-h-[80px]">
                  {startup.desc}
                </p>
              </div>

              <div className="px-8 py-4 border-t border-slate-800 flex justify-between items-center group-hover:bg-slate-800/30 transition-colors">
                <span className="text-sm font-semibold text-blue-400">View Profile</span>
                <ArrowUpRight className="w-5 h-5 text-blue-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
