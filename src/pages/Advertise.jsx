import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Send, TrendingUp, Users, MapPin, Clock, ChevronDown, ChevronUp, Phone, Zap, Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProgramIcon from '../components/ProgramIcon';
import { adTariffs } from '../data/testimonials';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const whyAdvertise = [
  { icon: Users, title: '20 Lakh+ Daily Viewers', desc: 'Massive daily reach across Karnataka ensures your brand gets maximum exposure.' },
  { icon: MapPin, title: '10+ Districts Coverage', desc: 'From Mysore to Bangalore Rural — your ad reaches audiences across Karnataka.' },
  { icon: Clock, title: '18+ Hours Broadcasting', desc: 'Round-the-clock exposure with ads running during peak and off-peak hours.' },
  { icon: TrendingUp, title: 'Proven ROI', desc: 'Our advertisers report up to 40% increase in business within the first month.' },
];

function TariffCard({ tariff }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`glass-card-hover p-6 h-full flex flex-col relative ${tariff.popular ? 'ring-2 ring-brand-400/40' : ''}`}>
      {tariff.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-500 to-brand-400 rounded-full text-dark-600 text-[10px] font-accent font-bold tracking-wider uppercase">
          Most Popular
        </div>
      )}
      <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center mb-3">
        <ProgramIcon name={tariff.icon} size={22} className="text-brand-400" />
      </div>
      <h3 className="font-heading font-bold text-lg text-white/90 mb-1">{tariff.type}</h3>
      <span className="text-brand-400/70 text-xs font-accent tracking-wider uppercase mb-3">{tariff.tagline}</span>
      <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{tariff.description}</p>
      
      <button onClick={() => setExpanded(!expanded)} className="flex items-center justify-between w-full py-2 text-sm text-white/60 hover:text-brand-400 transition-colors border-t border-white/5 mt-2">
        <span>View Pricing</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      
      {expanded && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="overflow-hidden">
          <div className="space-y-2 mt-3">
            {tariff.plans.map((plan) => (
              <div key={plan.duration} className="flex justify-between items-center py-2 px-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors">
                <span className="text-white/60 text-sm">{plan.duration}</span>
                <span className="font-heading font-semibold text-brand-300 text-sm">₹{plan.price}/-</span>
              </div>
            ))}
            <div className="pt-3 border-t border-white/5 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm font-medium">1 Year</span>
                <span className="font-heading font-bold text-brand-400">₹{tariff.yearlyPrice}/-</span>
              </div>
              <p className="text-green-400/70 text-xs mt-1 flex items-center gap-1">
                <Zap size={10} /> {tariff.yearlyBonus}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Advertise() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', adType: '', budget: '', duration: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', business: '', email: '', phone: '', adType: '', budget: '', duration: '', message: '' }); }, 5000);
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-400/[0.06] via-dark-600 to-dark-600" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(245,166,35,0.05)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
            <Sparkles size={36} className="mx-auto mb-4 text-brand-400" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="section-title text-4xl sm:text-5xl">
            <span className="gradient-text-light">Advertise on Media TV</span>
          </motion.h1>
          <div className="gold-divider mx-auto" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="section-subtitle mx-auto mt-4 text-base sm:text-lg">
            Put your brand in front of 20+ lakh daily viewers across Karnataka.
            Affordable packages, maximum reach, proven results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8">
            <a href="tel:+919980959598" className="btn-gold text-base px-8 py-3.5 inline-flex items-center gap-2">
              <Phone size={18} /> Call Now: 9980 95 95 98
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Advertise */}
      <section className="py-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="section-title gradient-text text-2xl sm:text-3xl">Why Advertise With Us?</h2>
              <div className="gold-divider mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyAdvertise.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card-hover p-6 text-center h-full group">
                  <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={20} className="text-brand-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-white/90 mb-2">{item.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tariff Cards */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Pricing</span>
              <h2 className="section-title gradient-text text-3xl sm:text-4xl">Ad Packages & Tariffs</h2>
              <div className="gold-divider mx-auto" />
              <p className="section-subtitle mx-auto mt-4">Flexible plans to fit every budget. Click each card to see detailed pricing.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adTariffs.map((tariff, i) => (
              <ScrollReveal key={tariff.id} delay={i * 0.1}>
                <TariffCard tariff={tariff} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <p className="text-white/30 text-sm">
                * Payment by Cash, Check & Net Payment through Media TV<br />
                * Terms & Conditions apply
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ad Request Form */}
      <section className="py-16 sm:py-20 bg-gradient-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Get Started</span>
              <h2 className="section-title gradient-text text-3xl sm:text-4xl">Request an Ad Slot</h2>
              <div className="gold-divider mx-auto" />
              <p className="section-subtitle mx-auto mt-4">Fill out the form below and our team will reach out within 24 hours.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8">
              {submitted ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                  <CheckCircle size={52} className="mx-auto mb-4 text-green-400" />
                  <h3 className="font-heading font-semibold text-xl text-white/90 mb-2">Request Submitted!</h3>
                  <p className="text-white/50 mb-4">Our advertising team will contact you within 24 hours.</p>
                  <p className="text-white/30 text-sm">Helpline: +91 9980 95 95 98</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Your Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Business Name *</label>
                      <input type="text" required value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Your business" className="input-field" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Phone *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="input-field" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Ad Type *</label>
                      <select required value={form.adType} onChange={(e) => setForm({ ...form, adType: e.target.value })} className="input-field">
                        <option value="">Select type</option>
                        <option value="scrolling">Scrolling Ads</option>
                        <option value="video">Video Ads (30 sec)</option>
                        <option value="flash">Flash Ads</option>
                        <option value="combo">Video + Scrolling Combo</option>
                        <option value="lband">L-Band Ads</option>
                        <option value="sponsorship">Program Sponsorship</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Budget Range</label>
                      <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="input-field">
                        <option value="">Select budget</option>
                        <option value="3500-7000">₹3,500 – ₹7,000</option>
                        <option value="7000-15000">₹7,000 – ₹15,000</option>
                        <option value="15000-50000">₹15,000 – ₹50,000</option>
                        <option value="50000-100000">₹50,000 – ₹1,00,000</option>
                        <option value="100000+">₹1,00,000+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm mb-2">Message</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your advertising needs..." className="input-field resize-none" />
                  </div>
                  <button type="submit" className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2">
                    <Send size={16} /> Submit Ad Request
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
