import { motion } from 'framer-motion';
import { FileText, Search, Mic, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="w-8 h-8 text-blue-400" />,
    title: '1. Apply with Pitch Deck',
    desc: 'Submit your fundamental details and an elevator pitch deck. We prioritize clarity and vision.'
  },
  {
    icon: <Search className="w-8 h-8 text-indigo-400" />,
    title: '2. Shortlisting',
    desc: 'Our expert panel reviews your submission based on market potential, team, and traction.'
  },
  {
    icon: <Mic className="w-8 h-8 text-teal-400" />,
    title: '3. Live Pitch',
    desc: 'Selected founders pitch virtually or in-person directly to India’s leading angel investors and VCs.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-green-400" />,
    title: '4. Raise Funding',
    desc: 'Secure capital and receive ongoing mentorship from industry veterans to scale your startup.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900/40 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The Journey to <span className="text-gradient">Funding</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A transparent, founder-friendly process designed to minimize friction and maximize opportunity.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-teal-500/50 to-green-500/20 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Node */}
                <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 z-10 bg-background border-2 border-slate-700 group-hover:border-blue-500 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
