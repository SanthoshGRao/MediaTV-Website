import { useState } from 'react';
import { Clock, Filter, Star, Sparkles, Radio } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProgramIcon from '../components/ProgramIcon';
import { programs, specialPrograms, categories } from '../data/programs';

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? programs : programs.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-400/5 via-dark-600 to-dark-600" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">
            Schedule
          </span>
          <h1 className="section-title text-4xl sm:text-5xl gradient-text">
            Our Programs
          </h1>
          <div className="gold-divider mx-auto" />
          <p className="section-subtitle mx-auto mt-4">
            18+ hours of daily programming — entertainment, news, music, and much more.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-20 z-30 bg-dark-600/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <Filter size={16} className="text-white/30 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-400 text-dark-600 shadow-lg shadow-brand-400/20'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Daily Schedule</span>
              <h2 className="section-title gradient-text">Daily Programs</h2>
              <div className="gold-divider mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program, i) => (
              <ScrollReveal key={program.id} delay={Math.min(i * 0.05, 0.3)}>
                <div className="glass-card-hover p-5 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <ProgramIcon name={program.icon} size={20} className="text-brand-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-heading font-semibold text-white/90 group-hover:text-brand-300 transition-colors">{program.name}</h3>
                        <span className="text-[9px] font-accent font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-brand-400/10 text-brand-400/80 border border-brand-400/20 whitespace-nowrap">{program.category}</span>
                      </div>
                      <p className="text-brand-400/60 text-xs flex items-center gap-1.5 mb-2">
                        <Clock size={11} /> {program.time}
                      </p>
                      <p className="text-white/45 text-sm leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 sm:py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Exclusive</span>
              <h2 className="section-title gradient-text">Special Programs</h2>
              <div className="gold-divider mx-auto" />
              <p className="section-subtitle mx-auto mt-4">Unique weekly shows that set Media TV apart.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPrograms.map((program, i) => (
              <ScrollReveal key={program.id} delay={Math.min(i * 0.1, 0.3)}>
                <div className="glass-card-hover p-6 h-full group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ProgramIcon name={program.icon} size={20} className="text-brand-400" />
                    </div>
                    <span className="text-[9px] font-accent font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-brand-400/10 text-brand-400/80 border border-brand-400/20">{program.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white/90 mb-1 group-hover:text-brand-300 transition-colors">{program.name}</h3>
                  <p className="text-brand-400/60 text-xs flex items-center gap-1.5 mb-3">
                    <Sparkles size={11} /> {program.schedule}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">{program.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
