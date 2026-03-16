import { motion } from 'framer-motion';
import { Target, TrendingUp, Globe } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: 'Focus on Bharat',
    desc: 'Empowering founders from Tier-2 and Tier-3 cities with unprecedented access.'
  },
  {
    icon: <Target className="w-8 h-8 text-teal-400" />,
    title: 'Real Businesses, Real Impact',
    desc: 'We look for grit, innovation, and sustainable models that solve real-world problems.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
    title: 'Direct Access',
    desc: 'Skip the endless cold emails. Pitch directly to a curated panel of top-tier investors.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Our Mission at <span className="text-gradient">Karo Pitch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            We believe that great ideas aren't confined to major metropolises. Karo Pitch was born out of the necessity to democratize access to capital. We support the builders, the hustlers, and the visionaries who are creating real businesses but often lack the mentorship, network, and funding to scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 + 0.4 }}
              className="glass-card p-8 hover:border-blue-500/50 transition-colors group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
