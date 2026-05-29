import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Tv, Heart, Shield, Star, Trophy, Calendar, Building2, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProgramIcon from '../components/ProgramIcon';
import CoverageNetwork from '../components/KarnatakaMap';
import BusinessAwardSection from '../components/BusinessAwardSection';
import { businessAward } from '../data/programs';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const values = [
  { icon: Heart, title: 'Community First', desc: 'We are rooted in the communities of Karnataka, bringing stories that matter to the people who matter.' },
  { icon: Shield, title: 'Trusted Journalism', desc: 'Our news division delivers honest, unbiased coverage of events and issues that impact your daily life.' },
  { icon: Star, title: 'Quality Content', desc: 'From devotional songs at dawn to blockbuster movies at night — every program is curated for maximum engagement.' },
  { icon: Users, title: 'Viewer Centric', desc: 'Interactive shows like "Selfie with Song" and "Just Math Mathalli" put our viewers at the center of everything.' },
];

const milestones = [
  { year: '2018', event: 'Media TV Mysore officially registered and launched broadcasting.' },
  { year: '2019', event: 'Expanded coverage to 5 districts across Karnataka via multiple set-top box providers.' },
  { year: '2021', event: 'Reached 10+ districts with partnerships including VK Digital, Hathway, NXT Digital.' },
  { year: '2023', event: 'Launched the Media TV mobile app on Google Play Store for live streaming.' },
  { year: '2025', event: 'Surpassed 20 lakh daily viewers — became one of Karnataka\'s most-watched channels.' },
  { year: '2026', event: 'Expanded to 18+ districts across Karnataka. Launched the Business Icon Award ceremony.' },
];


export default function About() {
  const containerRef = useRef(null);
  const [hideScrollHint, setHideScrollHint] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-30, 60]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-15, 5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [10, -15]);

  useEffect(() => {
    const onScroll = () => setHideScrollHint(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-dark-600">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,166,35,0.07)_0%,_transparent_60%)]" />
          <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-[radial-gradient(circle,_rgba(245,166,35,0.05)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, rgba(245,166,35,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-600" />
        </div>

        {/* Main Content Centered */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center pb-12">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Our Story</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="section-title text-4xl sm:text-5xl lg:text-6xl gradient-text">About Media TV</motion.h1>
            <div className="gold-divider mx-auto my-8" />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="section-subtitle mx-auto mt-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
              Media TV is one of the best channels in Mysore District, telecasted throughout Karnataka
              in 18 districts through different set-top box providers. We are a purely entertainment and news
              channel, proudly serving 20-25 lakh viewers per day across Mysore and Karnataka.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-white/40 text-sm mt-8 max-w-xl mx-auto">
              Watch live TV in our Mobile App <strong className="text-brand-400/80">Media TV</strong> — Available on Google Play Store.
              Follow us on Facebook, YouTube, and Instagram for regular updates.
            </motion.p>
          </div>
        </div>

        {/* Scroll Hint at the absolute bottom of flex container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hideScrollHint ? 0 : 1, y: hideScrollHint ? 10 : 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-20 pointer-events-none flex justify-center animate-bounce"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] text-white/30 uppercase tracking-widest mb-2 font-accent whitespace-nowrap">Scroll to discover</span>
            <div className="w-px h-12 bg-gradient-to-b from-brand-400/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Founder / Leadership */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Leadership</span>
              <h2 className="section-title gradient-text">The Visionary Behind Media TV</h2>
              <div className="gold-divider mx-auto" />
            </div>
          </ScrollReveal>

          <div ref={containerRef} className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            {/* Founder Photo - Freestyle Collage Design */}
            <div className="w-full lg:w-5/12 flex justify-center perspective-1000">
              <div className="relative w-full max-w-[340px] flex justify-center items-center h-[500px]">

                {/* Subtle Monochromatic Glow */}
                <motion.div
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/5 blur-[50px] rounded-full aspect-square w-[120%] -left-[10%] top-0 mix-blend-screen"
                />

                {/* Collage Element 1: Offset Dark Paper */}
                <motion.div
                  style={{ y: y1, rotate: rotate1 }}
                  className="absolute top-10 -left-10 w-full h-[80%] bg-dark-500/80 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl z-0 overflow-hidden"
                >
                  {/* Subtle noise/texture */}
                  <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </motion.div>

                {/* Collage Element 2: Framed Wireframe */}
                <motion.div
                  style={{ y: y3, rotate: rotate2 }}
                  className="absolute -bottom-10 -right-8 w-[80%] h-[60%] border border-white/10 rounded-3xl z-0"
                />

                {/* Freestyle Image (Parallaxed) */}
                <motion.div
                  style={{ y: y2 }}
                  className="relative z-10 w-full pt-4 overflow-visible px-4"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/founder-transparent.png`}
                    alt="Founder of Media TV"
                    className="w-full h-auto max-h-[480px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] filter grayscale-[0.2] contrast-[1.05]"
                    loading="lazy"
                  />
                </motion.div>

                {/* Floating Tape/Text Fragment */}
                <motion.div
                  style={{ y: y1 }}
                  className="absolute -left-12 top-1/3 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 -rotate-6 z-20 shadow-xl"
                >
                  <span className="text-[10px] font-accent tracking-widest text-white/70 uppercase">Est. 2018</span>
                </motion.div>

                {/* Floating Visionary Badge */}
                <motion.div
                  style={{ y: y3 }}
                  className="absolute -right-6 bottom-24 bg-dark-400 border border-white/10 px-4 py-2 rounded-full z-20 shadow-xl flex items-center gap-2"
                >
                  <Award size={14} className="text-brand-400/70" />
                  <span className="text-xs font-heading font-medium text-white/80">Visionary</span>
                </motion.div>

              </div>
            </div>

            {/* Founder Bio - Balanced Typography */}
            <ScrollReveal direction="right" className="w-full lg:w-7/12">
              <div className="space-y-5 lg:py-6">
                <div>
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-2">
                    Mr. Nanjundaswamy
                  </h3>
                  <h4 className="font-heading font-semibold text-xl text-white/90 mb-1">
                    Founder & Managing Director
                  </h4>
                  <p className="text-brand-400 font-accent text-xs tracking-widest uppercase">Media TV Mysore</p>
                </div>

                <div className="space-y-4 text-white/60 leading-relaxed text-sm sm:text-base">
                  <p>
                    With a vision to bring quality entertainment and truthful journalism to every household in Karnataka,
                    Mr. Nanjundaswamy established Media TV in Mysore. Today, it has grown to become
                    one of the most-watched regional channels, reaching over <span className="text-white/90 font-medium">20 lakh daily viewers across 18+ districts.</span>
                  </p>
                  <p>
                    Under his leadership, Media TV has pioneered community-first broadcasting — featuring interactive
                    programs, empowering businesses through affordable advertising, and giving a platform to
                    grassroots talent. The channel's rapid expansion from Mysore to all corners of Karnataka
                    is a testament to the trust and connection built with viewers.
                  </p>
                </div>

                {/* Refined Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  <div className="glass-card p-3 text-center">
                    <p className="font-heading font-bold text-xl sm:text-2xl gradient-text">18+</p>
                    <p className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">Districts</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="font-heading font-bold text-xl sm:text-2xl gradient-text">20L+</p>
                    <p className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">Viewers</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="font-heading font-bold text-xl sm:text-2xl gradient-text">18+</p>
                    <p className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">Hours</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="font-heading font-bold text-xl sm:text-2xl gradient-text">15+</p>
                    <p className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">Programs</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-section">
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
                  talent, support small businesses through advertising, and keep our viewers informed
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
                  our reach to every district while maintaining personal touch that makes us unique.
                  We envision a future where Media TV is synonymous with quality Kannada content
                  and community empowerment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-dark">
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

      {/* Business Icon Award 2026 */}
      <BusinessAwardSection />

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

      {/* Interactive Coverage Network */}
      <section className="py-20 bg-dark-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,166,35,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <CoverageNetwork />
      </section>

    </motion.div>
  );
}
