import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Send, TrendingUp, Users, MapPin, Clock, Phone, ChevronLeft, ChevronRight, Star, Crown, Gem, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedSelect from '../components/AnimatedSelect';
import TariffCard from '../components/TariffCard';
import { adTariffs, businessPackages } from '../data/testimonials';

const AD_TYPE_OPTIONS = [
  { value: 'scrolling', label: 'Scrolling Ads' },
  { value: 'video', label: 'Video Ads (30 sec)' },
  { value: 'flash', label: 'Flash Ads' },
  { value: 'combo', label: 'Video + Scrolling Combo' },
  { value: 'lband', label: 'L-Band Ads' },
  { value: 'sponsorship', label: 'Program Sponsorship' },
];

const BUDGET_OPTIONS = [
  { value: '', label: 'Select budget' },
  { value: '3500-7000', label: '₹3,500 – ₹7,000' },
  { value: '7000-15000', label: '₹7,000 – ₹15,000' },
  { value: '15000-50000', label: '₹15,000 – ₹50,000' },
  { value: '50000-100000', label: '₹50,000 – ₹1,00,000' },
  { value: '100000+', label: '₹1,00,000+' },
];

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const whyAdvertise = [
  { icon: Users, title: '50 Lakh+ Daily Viewers', desc: 'Massive daily reach across Karnataka ensures your brand gets maximum exposure.' },
  { icon: MapPin, title: '18+ Districts Coverage', desc: 'From Mysore to Bidar — your ad reaches audiences across all of Karnataka.' },
  { icon: Clock, title: '18+ Hours Broadcasting', desc: 'Round-the-clock exposure with ads running during peak and off-peak hours.' },
  { icon: TrendingUp, title: 'Proven ROI', desc: 'Our advertisers report up to 40% increase in business within the first month.' },
];

const TARIFF_TO_AD_TYPE = {
  'Scrolling Ads': 'scrolling',
  'Video Ads': 'video',
  'Flash Ads': 'flash',
  'Video & Scrolling Combo': 'combo',
};

/** Parse tariff price strings like "3,500" or "1,00,000" → number */
function parseInrPrice(str) {
  if (!str) return 0;
  const n = Number(String(str).replace(/,/g, ''));
  return Number.isFinite(n) ? n : 0;
}

/** Prefer 1‑month slot as typical spend; else middle tier */
function representativeTariffRupees(tariff) {
  const plans = tariff?.plans ?? [];
  const oneMonth = plans.find((p) => /1\s*month/i.test(p.duration));
  if (oneMonth) return parseInrPrice(oneMonth.price);
  const mid = plans[Math.floor(plans.length / 2)];
  return mid ? parseInrPrice(mid.price) : 0;
}

/** Align with BUDGET_OPTIONS `value` keys */
function rupeesToBudgetValue(amount) {
  if (amount <= 0) return '';
  if (amount < 7000) return '3500-7000';
  if (amount < 15000) return '7000-15000';
  if (amount < 50000) return '15000-50000';
  if (amount < 100000) return '50000-100000';
  return '100000+';
}

/* ─────────────────────────────────────────────
   3D Wheel Carousel Logic
   ───────────────────────────────────────────── */
function getCardTransform(offset, total) {
  // offset: how far this card is from the front-facing position
  // Normalise to range [-total/2, total/2]
  let norm = offset;
  if (norm > total / 2) norm -= total;
  if (norm < -total / 2) norm += total;

  const absNorm = Math.abs(norm);

  // Circular positioning
  const angle = norm * (360 / total);          // rotateY degrees
  const radius = 440;                          // cylinder radius in px
  const z = Math.cos((angle * Math.PI) / 180) * radius - radius; // depth
  const x = Math.sin((angle * Math.PI) / 180) * radius;          // horizontal offset

  // Scale & opacity based on distance from front
  const scale = Math.max(0.55, 1 - absNorm * 0.18);
  const opacity = Math.max(0, 1 - absNorm * 0.4);
  const blur = absNorm > 1 ? Math.min(absNorm * 2, 6) : 0;

  // z-index: front card highest
  const zIndex = total - Math.round(absNorm);

  return { x, z, angle, scale, opacity, blur, zIndex };
}

export default function Advertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', adType: '', budget: '', duration: '', message: '' });
  const [adTypeError, setAdTypeError] = useState('');
  const autoTimer = useRef(null);
  const resumeTimer = useRef(null);
  const formRef = useRef(null);
  const total = adTariffs.length;

  const goTo = useCallback((index) => {
    setActiveIndex(((index % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-rotation
  useEffect(() => {
    if (isPaused) return;
    autoTimer.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % total);
    }, 4000);
    return () => clearInterval(autoTimer.current);
  }, [isPaused, total]);

  const pauseAndResume = useCallback(() => {
    setIsPaused(true);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 6000);
  }, []);

  const handleNav = useCallback((dir) => {
    pauseAndResume();
    dir === 'next' ? next() : prev();
  }, [next, prev, pauseAndResume]);

  // Select a plan → scroll to form & auto-fill ad type + budget bucket from typical slot price
  const selectPlan = useCallback((tariff, specificPlan = null) => {
    const adType = TARIFF_TO_AD_TYPE[tariff.type] || '';

    let rupees = 0;
    if (specificPlan && specificPlan.price) {
      rupees = parseInrPrice(specificPlan.price);
    } else {
      rupees = representativeTariffRupees(tariff);
    }

    const budget = rupeesToBudgetValue(rupees);

    setForm((prev) => ({ ...prev, adType, budget }));
    setAdTypeError('');
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  }, []);

  // Card transforms
  const cardStyles = useMemo(() => {
    return adTariffs.map((_, i) => {
      const offset = ((i - activeIndex) % total + total) % total;
      return getCardTransform(offset, total);
    });
  }, [activeIndex, total]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.adType) {
      setAdTypeError('Please select an ad type');
      return;
    }
    setAdTypeError('');
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', business: '', email: '', phone: '', adType: '', budget: '', duration: '', message: '' }); }, 5000);
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-400/[0.035] via-dark-600 to-dark-600" />
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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3D Wheel Pricing Carousel
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-28 bg-gradient-section overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-400/55">
                Rate card
              </span>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Packages & tariffs
              </h2>
              <div
                aria-hidden
                className="mx-auto mt-4 h-px w-16 max-w-full bg-gradient-to-r from-transparent via-brand-400/35 to-transparent"
              />
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/52">
                Compare slots and annual bundles. Select the front card to load this package into your inquiry form.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 3D Wheel */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: 1200 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-30 pointer-events-none" />

          {/* Nav arrows */}
          <button
            type="button"
            onClick={() => handleNav('prev')}
            className="group absolute left-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/[0.09] bg-[#151311]/95 text-white/55 shadow-sm shadow-black/30 backdrop-blur-sm transition-all hover:border-brand-400/22 hover:bg-[#1a1814] hover:text-brand-200/90 sm:left-6"
            aria-label="Previous package"
          >
            <ChevronLeft size={18} strokeWidth={2} className="transition-transform group-hover:-translate-x-px" />
          </button>
          <button
            type="button"
            onClick={() => handleNav('next')}
            className="group absolute right-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/[0.09] bg-[#151311]/95 text-white/55 shadow-sm shadow-black/30 backdrop-blur-sm transition-all hover:border-brand-400/22 hover:bg-[#1a1814] hover:text-brand-200/90 sm:right-6"
            aria-label="Next package"
          >
            <ChevronRight size={18} strokeWidth={2} className="transition-transform group-hover:translate-x-px" />
          </button>

          {/* Wheel stage */}
          <div
            className="relative mx-auto overflow-visible"
            style={{
              height: 560,
              perspective: '1400px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            {adTariffs.map((tariff, i) => {
              const s = cardStyles[i];
              const isFront = i === activeIndex;

              return (
                <div
                  key={tariff.id}
                  onClick={() => {
                    pauseAndResume();
                    if (i === activeIndex) {
                      // Front card clicked → select this plan (general/representative)
                      selectPlan(tariff);
                    } else {
                      goTo(i);
                    }
                  }}
                  className="absolute top-1/2 left-1/2 cursor-pointer outline-none [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:outline-none"
                  style={{
                    width: 320,
                    height: 540,
                    transform: `
                      translate(-50%, -50%)
                      translateX(${s.x}px)
                      translateZ(${s.z}px)
                      scale(${s.scale})
                    `,
                    opacity: s.opacity,
                    zIndex: s.zIndex,
                    filter: s.blur > 0 ? `blur(${s.blur}px)` : 'none',
                    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), filter 0.8s ease',
                    pointerEvents: s.opacity < 0.15 ? 'none' : 'auto',
                  }}
                >
                  <div
                    className={`
                      relative h-full w-full overflow-hidden rounded-[24px] outline-none transition-[box-shadow,transform] duration-500
                      ${isFront
                        ? 'shadow-[0_22px_50px_-14px_rgba(0,0,0,0.78),0_0_42px_-12px_rgba(245,166,35,0.09),0_0_0_1px_rgba(245,166,35,0.14)]'
                        : 'shadow-[0_14px_36px_-16px_rgba(0,0,0,0.58),0_0_0_1px_rgba(245,166,35,0.04)]'
                      }
                    `}
                  >
                    <TariffCard tariff={tariff} onPlanSelect={selectPlan} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center gap-2">
            {adTariffs.map((tariff, i) => (
              <button
                type="button"
                key={tariff.id}
                onClick={() => { pauseAndResume(); goTo(i); }}
                className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i
                  ? 'w-8 bg-gradient-to-r from-brand-500/70 to-brand-400/50 shadow-sm shadow-brand-900/40'
                  : 'w-1.5 bg-white/18 hover:bg-brand-400/30'
                  }`}
                aria-label={`Show ${tariff.type}`}
                aria-current={activeIndex === i ? 'true' : undefined}
              />
            ))}
          </div>

          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 text-center text-sm text-white/55"
          >
            <span className="font-heading font-medium text-white/85">{adTariffs[activeIndex].type}</span>
            <span className="mx-2 text-brand-400/35">·</span>
            <span className="text-brand-400/50">{adTariffs[activeIndex].tagline}</span>
          </motion.p>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-white/25 text-sm">
              * Payment by Cash, Check & Net Payment through Media TV<br />
              * Terms & Conditions apply
            </p>
          </div>
        </ScrollReveal>
      </section>



      {/* Ad Request Form */}
      {/* ref target for scroll-to */}
      <section ref={formRef} className="py-16 sm:py-20 bg-gradient-dark">
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
                  <p className="text-white/30 text-sm">Helpline: +91 99809 59598</p>
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
                    <AnimatedSelect
                      label="Ad Type"
                      placeholder="Select type"
                      required
                      value={form.adType}
                      onChange={(v) => {
                        setAdTypeError('');
                        setForm({ ...form, adType: v });
                      }}
                      options={AD_TYPE_OPTIONS}
                      error={adTypeError}
                    />
                    <AnimatedSelect
                      label="Budget Range"
                      placeholder="Select budget"
                      value={form.budget}
                      onChange={(v) => setForm({ ...form, budget: v })}
                      options={BUDGET_OPTIONS}
                    />
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
