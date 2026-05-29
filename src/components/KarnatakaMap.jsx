import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Signal, CheckCircle2 } from 'lucide-react';

/*
 * Network Providers Grid — Displays coverage areas and set-top box providers
 * based on the provided reference image.
 */

const coverageData = [
  { area: 'Mysore', provider: 'VK Digital' },
  { area: 'H.D.Kote', provider: 'Priya Darshini' },
  { area: 'Sarguru', provider: 'Priya Darshini' },
  { area: 'Nanjangud', provider: 'KCL' }, // Interpreting 'NARIPURA' as potentially related or similar, replaced with standard district/area if needed, keeping mostly to ref
  { area: 'Piriyapatna', provider: 'NXT' },
  { area: 'Ballary', provider: 'RCN Digital' },
  { area: 'Koppal', provider: 'KCN' },
  { area: 'Davangere', provider: 'REXSI' },
  { area: 'Shivamogga', provider: 'Shivamogga Digital' },
  { area: 'Bangalore Rural', provider: 'Hathway' },
  { area: 'Chikballapura', provider: 'Nxt Digital' },
  { area: 'Kolara', provider: 'VK Digital' },
  { area: 'Yalaburga', provider: 'REXSI' },
  { area: 'Vijayapura', provider: 'den' },
  { area: 'Gulbarga', provider: 'sitbox' },
  { area: 'Raichur', provider: 'Den ex' },
  { area: 'Shira', provider: 'DIGITAL' },
  { area: 'Devadurga', provider: 'NXT' },
  { area: 'Belagale', provider: 'VK Digital DIGITAL' },
  { area: 'Bagepalle', provider: 'Hathway' }
];

function ProviderCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, type: 'spring', stiffness: 200, damping: 20 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

      <div className="relative h-full rounded-xl border border-white/10 bg-dark-600/50 backdrop-blur-md p-3 sm:p-4 transition-all duration-300 group-hover:border-brand-400/30 group-hover:bg-dark-500/80 group-hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between">



        <div className="mb-2">
          <h3 className="text-sm font-heading font-semibold text-white tracking-tight">
            {item.area}
          </h3>
        </div>

        <div className="pt-2 border-t border-white/5 group-hover:border-brand-400/20 transition-colors duration-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-brand-400" />
            <p className="text-xs font-medium text-brand-400/90 truncate">
              {item.provider}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoverageNetwork() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 lg:py-12">

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Side: Creative Image Presentation */}
        <div className="w-full lg:w-5/12 relative">
          <div className="sticky top-28 flex justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[450px]"
            >
              {/* Image Container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative p-2 overflow-visible group"
              >
                <div className="relative z-10">
                  <img
                    src={`${import.meta.env.BASE_URL}images/coverage-map.png`}
                    alt="Karnataka Coverage Map"
                    className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Content and Grid */}
        <div className="w-full lg:w-7/12 flex flex-col">
          {/* Header */}
          <div className="mb-10 text-center lg:text-left">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-xs font-accent tracking-widest uppercase mb-6"
            >
              <Tv size={14} />
            <span>Reach & Network</span>
            </motion.div> */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight"
            >
              Extensive Network <br className="hidden lg:block" /><span className="text-brand-400">Coverage</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-base leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Media TV is available across Karnataka through various leading set-top box providers. Find your local area below to see how you can tune in and stay connected.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-400/5 via-transparent to-transparent rounded-3xl blur-2xl -z-10" />
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative z-10"
              >
                {coverageData.map((item, index) => (
                  <motion.div
                    key={`${item.area}-${item.provider}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <ProviderCard item={item} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-6 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-dark-600 border border-white/5 flex items-center justify-center shadow-inner">
                <span className="text-2xl font-heading font-bold gradient-text">{coverageData.length}</span>
              </div>
              <div className="text-[10px] text-white/50 font-accent uppercase tracking-widest leading-relaxed">Supported<br />Regions</div>
            </div>

            <div className="w-px h-10 bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-dark-600 border border-white/5 flex items-center justify-center shadow-inner">
                <span className="text-2xl font-heading font-bold gradient-text">
                  {new Set(coverageData.map(d => d.provider.toLowerCase())).size}+
                </span>
              </div>
              <div className="text-[10px] text-white/50 font-accent uppercase tracking-widest leading-relaxed">Network<br />Partners</div>
            </div>

            <div className="w-px h-10 bg-white/10 hidden lg:block" />

            <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-[3px] border-dark-900 bg-dark-600 flex items-center justify-center text-[9px] font-bold shadow-lg ${i === 1 ? 'text-brand-400' : i === 2 ? 'text-emerald-400' : 'text-blue-400'}`}>
                    STB
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-white/50 font-accent uppercase tracking-widest leading-relaxed">Wide<br />Compatibility</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
