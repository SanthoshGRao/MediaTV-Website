import { motion } from 'framer-motion';
import { Award, Star, Calendar, MapPin, ChevronRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  "Honoring visionary leadership and business excellence",
  "High-profile networking with industry titans",
  "State-level televised coverage across Karnataka",
  "Exclusive gala dinner and entertainment"
];

export default function BusinessAwardSection() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#050505] overflow-hidden isolate">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(245,166,35,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(245,166,35,0.05)_0%,_transparent_50%)] pointer-events-none" />
        
        {/* Subtle texture/grain (optional, using pure CSS for a clean look) */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-brand-400/40 z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)'
          }}
          animate={{
            y: [0, -40 - Math.random() * 60],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Cinematic Emblem */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
            
            {/* Spotlight from top */}
            <motion.div 
              animate={{ opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-96 bg-[conic-gradient(from_180deg_at_50%_0%,_transparent_0deg,_rgba(245,166,35,0.4)_20deg,_transparent_40deg)] blur-3xl pointer-events-none" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              {/* Outer Golden Glow */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-brand-400/20 rounded-full blur-[60px] z-0"
              />

              {/* The Image Construct */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] flex items-center justify-center"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/business-award-2026.png`}
                  alt="Media TV Business Icon Award 2026"
                  className="w-full h-full object-contain drop-shadow-[0_30px_50px_rgba(245,166,35,0.5)] filter brightness-110 contrast-110"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Floating Elegant Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-brand-400" />
                <span className="text-brand-400 font-accent text-sm tracking-[0.2em] uppercase font-medium">
                  Media TV Presents
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFDF73] via-[#F5A623] to-[#B06A00] mb-8 leading-[1.1] filter drop-shadow-[0_4px_24px_rgba(245,166,35,0.2)]">
                Business Icon <br/> Award 2026
              </h2>

              {/* Glowing Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-400/30 bg-brand-400/5 backdrop-blur-sm shadow-[0_0_20px_rgba(245,166,35,0.1)]">
                  <Calendar size={16} className="text-brand-400" />
                  <span className="text-sm text-white/90 font-medium tracking-wide">August 2026</span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-400/30 bg-brand-400/5 backdrop-blur-sm shadow-[0_0_20px_rgba(245,166,35,0.1)]">
                  <MapPin size={16} className="text-brand-400" />
                  <span className="text-sm text-white/90 font-medium tracking-wide">Mysuru, Karnataka</span>
                </div>
              </div>

              <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-xl">
                A highly anticipated corporate gala celebrating the most influential business leaders and entrepreneurs across the state. Recognize unparalleled achievement on a spectacular televised stage.
              </p>

              {/* Animated Features List */}
              <ul className="space-y-4 mb-12">
                {features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                    className="group flex items-start gap-4 cursor-default"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-400/10 border border-brand-400/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-400 group-hover:shadow-[0_0_15px_#F5A623] transition-all duration-300">
                      <Trophy size={12} className="text-brand-400 group-hover:text-dark-900 transition-colors" />
                    </div>
                    <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Luxury CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link 
                  to="/contact" 
                  className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F5A623] to-[#B06A00] text-dark-900 font-bold uppercase tracking-widest text-sm rounded-none overflow-hidden group hover:shadow-[0_0_40px_rgba(245,166,35,0.4)] transition-shadow duration-500"
                >
                  <span className="relative z-10">Enquire About Event</span>
                  <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Button Sweep Animation */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0"
                  />
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />
                </Link>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
