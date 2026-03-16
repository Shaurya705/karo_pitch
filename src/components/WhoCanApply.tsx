import { motion } from 'framer-motion';
import { Package, Smartphone, Cloud, Factory, MapPin } from 'lucide-react';

const categories = [
  {
    icon: <Package className="w-6 h-6" />,
    title: 'D2C Brands',
    color: 'from-pink-500 to-rose-400',
    desc: 'Consumer-first brands building the next generation of lifestyle products.'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Bharat-Focused',
    color: 'from-orange-500 to-amber-400',
    desc: 'Solutions tailored specifically for Tier-2, Tier-3 cities and rural India.'
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'SaaS & Tech',
    color: 'from-blue-500 to-cyan-400',
    desc: 'Scalable software solutions solving complex B2B or B2C challenges.'
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Manufacturing & MSME',
    color: 'from-emerald-500 to-green-400',
    desc: 'Hardware, deep-tech, and sustainable manufacturing innovations.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Consumer Tech',
    color: 'from-purple-500 to-indigo-400',
    desc: 'Apps and platforms enhancing everyday digital experiences.'
  }
];

export default function WhoCanApply() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Who Should <span className="text-gradient">Apply?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400"
            >
              We are sector-agnostic but highly biased towards founders with conviction, strong execution, and a deep understanding of their market.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col gap-4 hover:-translate-y-2 transition-transform cursor-default group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                <div className="text-white group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
