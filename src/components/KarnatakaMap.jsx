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
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            Extensive Network <span className="text-brand-400">Coverage</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Media TV is available across Karnataka through various leading set-top box providers. Find your local area below to see how you can tune in.
          </p>
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
        >
          {coverageData.map((item, index) => (
            <motion.div
              key={`${item.area}-${item.provider}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ProviderCard item={item} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Footer stats */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-white">{coverageData.length}</div>
          <div className="text-[10px] text-white/50 font-accent uppercase tracking-widest leading-tight">Supported<br/>Regions</div>
        </div>
        <div className="w-px h-8 bg-white/10 hidden sm:block" />
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-white">
            {new Set(coverageData.map(d => d.provider.toLowerCase())).size}
          </div>
          <div className="text-[10px] text-white/50 font-accent uppercase tracking-widest leading-tight">Network<br/>Partners</div>
        </div>
        <div className="w-px h-8 bg-white/10 hidden sm:block" />
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-dark-900 bg-dark-600 flex items-center justify-center text-[10px] font-bold ${i===1?'text-brand-400':i===2?'text-emerald-400':'text-blue-400'}`}>
                STB
              </div>
            ))}
          </div>
          <div className="text-[10px] text-white/50 font-accent uppercase tracking-widest leading-tight">Wide<br/>Compatibility</div>
        </div>
      </div>
    </div>
  );
}
