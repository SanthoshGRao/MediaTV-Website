import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Play, ChevronRight, Star, Quote, Users, MapPin, Tv, Radio, ArrowRight, Clock, Sparkles, Briefcase, Newspaper, Mic, Megaphone, Calendar } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProgramIcon from '../components/ProgramIcon';
import { programs, specialPrograms, careerOpenings } from '../data/programs';
import { testimonials } from '../data/testimonials';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const stats = [
  { value: '50L+', label: 'Daily Viewers', icon: Users },
  { value: '18+', label: 'Districts', icon: MapPin },
  { value: '18+', label: 'Hours Daily', icon: Clock },
  { value: '15+', label: 'Programs', icon: Tv },
];


const careerIcons = { megaphone: Megaphone, mic: Mic, calendar: Calendar, newspaper: Newspaper };

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background — always atmospheric */}
      <div className="absolute inset-0 bg-dark-600">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        >
          <source src={`${import.meta.env.BASE_URL}download_20260619_130809_0000 (1).mp4`} type="video/mp4" />
        </video>
        {/* Gradient overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-600/50 via-dark-600/40 to-dark-600" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(10,10,14,0.6)_100%)]" />
      </div>

      {/* Content — staggered cascade */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 10.3, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-8 inline-block"
        >
          <div id="home-hero-logo" className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-2xl overflow-hidden ring-4 ring-brand-400/30 shadow-2xl shadow-brand-400/20">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
              alt="Media TV Logo"
              className="w-full h-full object-cover logo-image-sharp"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 10.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight"
        >
          <span className="gradient-text-light">MEDIA TV</span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 11.1, duration: 0.7, ease: 'easeOut' }}
            className="text-white/90 text-2xl sm:text-3xl md:text-4xl font-light inline-block"
          >
            Karnataka's Premier Channel
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 11.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Media TV is one of the best channel in Mysuru District and telecasted Mysore Karnataka in set off box. 
          Media TV is basic purely entertainment & news channel & we have best viewer of 50 lakhs per day average throughout Mysore another places in Karnataka.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 11.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/programs" className="btn-gold text-base px-8 py-3.5 flex items-center gap-2">
            <Play size={18} /> View Programs
          </Link>
          <Link to="/advertise" className="btn-outline-gold text-base px-8 py-3.5 flex items-center gap-2">
            Advertise With Us <ChevronRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function LiveTicker() {
  const reduceMotion = useReducedMotion();
  const nowPrograms = ['Movie Time — Now Showing', 'Sthaliya Sudhigalu — 8:00 PM', 'Dubs Dhamaka — 8:30 PM', 'Night Movie Marathon — 9:30 PM', 'Hello Doctor — Every Saturday'];
  return (
    <div className="relative bg-dark-400 border-y border-white/5 py-3 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-400 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-400 to-transparent z-10" />

      <motion.div
        className="flex gap-12 pl-24 whitespace-nowrap"
        animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={reduceMotion ? undefined : { duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {[...nowPrograms, ...nowPrograms].map((item, i) => (
          <span key={i} className="text-white/50 text-sm font-medium">{item}</span>
        ))}
      </motion.div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="relative py-16 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-card-hover text-center p-6 sm:p-8">
                <stat.icon size={28} className="mx-auto mb-3 text-brand-400/70" />
                <p className="font-heading font-bold text-3xl sm:text-4xl gradient-text mb-1">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPrograms() {
  const featured = programs.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">What's On</span>
            <h2 className="section-title gradient-text">Featured Programs</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4">From breaking news to blockbuster movies — there's something for everyone on Media TV.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((program, i) => (
            <ScrollReveal key={program.id} delay={i * 0.08}>
              <div className="glass-card-hover p-6 h-full group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-400/20 transition-all duration-300">
                    <ProgramIcon name={program.icon} size={22} className="text-brand-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-accent text-brand-400/70 tracking-wider uppercase px-2 py-0.5 bg-brand-400/10 rounded-full">{program.category}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-white/90 mb-1 group-hover:text-brand-300 transition-colors">{program.name}</h3>
                    <p className="text-white/40 text-xs flex items-center gap-1 mb-2"><Clock size={10} /> {program.time}</p>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{program.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <Link to="/programs" className="btn-outline-gold inline-flex items-center gap-2 text-sm">
              View All Programs <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function AdvertiseCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-800/30 via-brand-400/10 to-brand-800/30" />
      <div className="absolute inset-0 bg-dark-600/80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <Sparkles size={32} className="mx-auto mb-4 text-brand-400" />
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            <span className="gradient-text-light">Grow Your Business</span><br />
            <span className="text-white/80 text-xl sm:text-2xl font-light">with Media TV Advertising</span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="section-subtitle mx-auto mt-6 mb-10">
            Reach over 50 lakh daily viewers across 18+ districts of Karnataka.
            Affordable ad packages starting from just ₹3,500.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/advertise" className="btn-gold text-base px-8 py-3.5 flex items-center gap-2">
              View Ad Packages <ChevronRight size={16} />
            </Link>
            <a href="tel:+919980959598" className="btn-outline-gold text-base px-8 py-3.5">
              Call: +91 9980 95 95 98
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Join Our Team</span>
            <h2 className="section-title gradient-text">Career Opportunities</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4">
              Be part of Karnataka's fastest growing regional TV channel. We're hiring across all districts.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {careerOpenings.map((job, i) => {
            const IconComp = careerIcons[job.icon] || Briefcase;
            return (
              <ScrollReveal key={job.id} delay={i * 0.1}>
                <div className="glass-card-hover p-6 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-400/20 transition-all duration-300">
                      <IconComp size={22} className="text-brand-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-heading font-semibold text-white/90 group-hover:text-brand-300 transition-colors">{job.title}</h3>
                        <span className="text-[10px] font-accent text-brand-400/70 tracking-wider uppercase px-2 py-0.5 bg-brand-400/10 rounded-full">{job.type}</span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed mt-2">{job.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <p className="text-white/40 text-sm mb-4">Interested? Contact us for more details.</p>
            <a href="tel:+919980959598" className="btn-gold inline-flex items-center gap-2 text-sm px-6 py-3">
              Helpline: 9980 95 95 98
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visibleTestimonials = testimonials.slice(0, 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % visibleTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [visibleTestimonials.length]);

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Testimonials</span>
            <h2 className="section-title gradient-text">What Our Viewers Say</h2>
            <div className="gold-divider mx-auto" />
          </div>
        </ScrollReveal>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {visibleTestimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <div className="glass-card-hover p-6 h-full flex flex-col">
                <Quote size={20} className="text-brand-400/30 mb-3" />
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-brand-400/20 flex items-center justify-center text-brand-300 font-heading font-bold text-sm">{t.avatar}</div>
                  <div>
                    <p className="text-white/80 font-medium text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={12} className="text-brand-400 fill-brand-400" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6"
            >
              <Quote size={20} className="text-brand-400/30 mb-3" />
              <p className="text-white/60 text-sm leading-relaxed mb-4">"{visibleTestimonials[current].text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-400/20 flex items-center justify-center text-brand-300 font-heading font-bold text-sm">{visibleTestimonials[current].avatar}</div>
                <div>
                  <p className="text-white/80 font-medium text-sm">{visibleTestimonials[current].name}</p>
                  <p className="text-white/40 text-xs">{visibleTestimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-6">
            {visibleTestimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-400 w-6' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <LiveTicker />
      <StatsSection />
      <FeaturedPrograms />
      <CareersSection />
      <AdvertiseCTA />
      <TestimonialsSection />
    </motion.div>
  );
}
