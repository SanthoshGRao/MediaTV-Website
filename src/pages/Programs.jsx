import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Filter, Star, Sparkles, Radio } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProgramIcon from '../components/ProgramIcon';
import { programs, specialPrograms, categories } from '../data/programs';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? programs : programs.filter((p) => p.category === activeCategory);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-400/5 via-dark-600 to-dark-600" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">
            Schedule
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="section-title text-4xl sm:text-5xl gradient-text">
            Our Programs
          </motion.h1>
          <div className="gold-divider mx-auto" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="section-subtitle mx-auto mt-4">
            18+ hours of daily programming — entertainment, news, music, and much more.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-dark-600/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <Filter size={16} className="text-white/30 flex-shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-400/20 text-brand-300 border border-brand-400/30'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Programs Grid */}
      <section className="py-16 sm:py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-semibold text-xl text-white/80 mb-8 flex items-center gap-2">
              <Clock size={20} className="text-brand-400" /> Daily Schedule
              <span className="text-white/30 text-sm font-normal ml-2">({filtered.length} programs)</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((program, i) => (
              <ScrollReveal key={program.id} delay={i * 0.05}>
                <motion.div
                  layout
                  className="glass-card-hover p-5 h-full group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-400/20 transition-all duration-300">
                      <ProgramIcon name={program.icon} size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm text-white/90 group-hover:text-brand-300 transition-colors">
                        {program.name}
                      </h3>
                      <span className="text-[10px] font-accent text-brand-400/70 tracking-wider uppercase">{program.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs mb-2">
                    <Clock size={10} />
                    <span>{program.time}</span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{program.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-white/30">
              <Radio size={40} className="mx-auto mb-4 opacity-50" />
              <p className="font-heading text-lg">No programs found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Exclusive</span>
              <h2 className="section-title gradient-text text-3xl sm:text-4xl">Special Programs</h2>
              <div className="gold-divider mx-auto" />
              <p className="section-subtitle mx-auto mt-4">Unique weekly shows that set Media TV apart.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPrograms.map((program, i) => (
              <ScrollReveal key={program.id} delay={i * 0.1}>
                <div className="glass-card-hover p-6 h-full group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-400/20 transition-all duration-300">
                      <ProgramIcon name={program.icon} size={22} className="text-brand-400" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-accent tracking-wider uppercase bg-brand-400/10 text-brand-400/80 border border-brand-400/20">
                      {program.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white/90 mb-1 group-hover:text-brand-300 transition-colors">{program.name}</h3>
                  <p className="text-brand-400/60 text-xs font-medium mb-3 flex items-center gap-1">
                    <Sparkles size={10} /> {program.schedule}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">{program.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
