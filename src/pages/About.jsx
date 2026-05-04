import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, MapPin, Tv, Heart, Shield, Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { coverageAreas } from '../data/programs';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const values = [
  { icon: Heart, title: 'Community First', desc: 'We are rooted in the local communities of Karnataka, bringing stories that matter to the people who matter.' },
  { icon: Shield, title: 'Trusted Journalism', desc: 'Our news division delivers honest, unbiased coverage of local events and issues that impact your daily life.' },
  { icon: Star, title: 'Quality Content', desc: 'From devotional songs at dawn to blockbuster movies at night — every program is curated for maximum engagement.' },
  { icon: Users, title: 'Viewer Centric', desc: 'Interactive shows like "Selfie with Song" and "Just Math Mathalli" put our viewers at the center of everything.' },
];

const milestones = [
  { year: '2018', event: 'Media TV Mysore officially registered and launched broadcasting.' },
  { year: '2019', event: 'Expanded coverage to 5 districts across Karnataka via multiple set-top box providers.' },
  { year: '2021', event: 'Reached 10+ districts with partnerships including VK Digital, Hathway, NXT Digital.' },
  { year: '2023', event: 'Launched the Media TV mobile app on Google Play Store for live streaming.' },
  { year: '2025', event: 'Surpassed 20 lakh daily viewers — becoming one of Karnataka\'s most-watched local channels.' },
];

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-600">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,166,35,0.07)_0%,_transparent_60%)]" />
          <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-[radial-gradient(circle,_rgba(245,166,35,0.05)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, rgba(245,166,35,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-600" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Our Story</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="section-title text-4xl sm:text-5xl gradient-text">About Media TV</motion.h1>
          <div className="gold-divider mx-auto" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="section-subtitle mx-auto mt-6 text-base sm:text-lg">
            Media TV is one of the best local channels in Mysore District, telecasted throughout Karnataka
            in 10+ districts through different set-top box providers. We are a purely entertainment and news
            channel, proudly serving 20-25 lakh viewers per day across Mysore and Karnataka.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="glass-card-hover p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center mb-5">
                  <Target size={24} className="text-brand-400" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white/90 mb-4">Our Mission</h3>
                <p className="text-white/55 leading-relaxed">
                  To be the voice of every community in Karnataka — delivering authentic entertainment,
                  fearless journalism, and meaningful content that connects people to their roots. We empower
                  local talent, support small businesses through advertising, and keep our viewers informed
                  and engaged every single day.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="glass-card-hover p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center mb-5">
                  <Eye size={24} className="text-brand-400" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white/90 mb-4">Our Vision</h3>
                <p className="text-white/55 leading-relaxed">
                  To become Karnataka's most trusted and beloved regional television channel — expanding
                  our reach to every district while maintaining the local, personal touch that makes us
                  unique. We envision a future where Media TV is synonymous with quality Kannada content
                  and community empowerment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Why Us</span>
              <h2 className="section-title gradient-text">What We Stand For</h2>
              <div className="gold-divider mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="glass-card-hover p-6 text-center h-full group">
                  <div className="w-14 h-14 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <v.icon size={22} className="text-brand-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-white/90 mb-2 group-hover:text-brand-300 transition-colors">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Journey</span>
              <h2 className="section-title gradient-text">Our Milestones</h2>
              <div className="gold-divider mx-auto" />
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/30 via-brand-400/10 to-transparent" />
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.12}>
                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className="absolute left-6 sm:left-1/2 w-3 h-3 rounded-full bg-brand-400 border-2 border-dark-600 -translate-x-1/2 mt-1.5 z-10" />
                  <div className={`ml-14 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <span className="font-accent text-brand-400 text-sm font-bold">{m.year}</span>
                    <p className="text-white/60 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Network</span>
              <h2 className="section-title gradient-text">Coverage Area</h2>
              <div className="gold-divider mx-auto" />
              <p className="section-subtitle mx-auto mt-4">Available across 10+ districts of Karnataka through multiple set-top box providers.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {coverageAreas.map((area, i) => (
              <ScrollReveal key={area.area} delay={i * 0.03}>
                <div className="glass-card-hover p-4 text-center group cursor-default">
                  <MapPin size={16} className="mx-auto mb-2 text-brand-400/50 group-hover:text-brand-400 transition-colors" />
                  <p className="font-heading font-medium text-sm text-white/80 group-hover:text-brand-300 transition-colors">{area.area}</p>
                  <p className="text-white/30 text-[10px] mt-1">{area.setupBox}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
