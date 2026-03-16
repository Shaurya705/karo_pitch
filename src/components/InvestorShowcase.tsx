import { motion } from 'framer-motion';

const investors = [
  'Venture Capitals', 'Angel Networks', 'Family Offices', 'Micro VCs', 'Strategic Angels', 'Accelerators'
];

export default function InvestorShowcase() {
  return (
    <section className="py-24 border-y border-slate-800 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-12"
        >
          Backed By Trusted Investors & Networks
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {investors.map((investor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-400 to-slate-600 grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              {investor}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
