import { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles } from 'lucide-react';

const panelVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.96,
    filter: 'blur(4px)',
    transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 420,
      damping: 28,
      mass: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    filter: 'blur(2px)',
    transition: { duration: 0.12, ease: [0.4, 0, 1, 1] },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.06 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 500, damping: 32 },
  },
};

export default function AnimatedSelect({
  label,
  value,
  onChange,
  options,
  placeholder = 'Choose…',
  required = false,
  error = '',
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();

  const selected = options.find((o) => o.value === value);
  const display = selected?.label ?? placeholder;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const pick = (v) => {
    onChange(v);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      {label && (
        <label className="block text-white/50 text-sm mb-2">
          {label}
          {required && <span className="text-brand-400/80 ml-0.5">*</span>}
        </label>
      )}

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        whileTap={{ scale: 0.995 }}
        className={`input-field w-full flex items-center justify-between gap-3 text-left cursor-pointer group relative overflow-hidden ${
          open ? 'border-brand-400/50 bg-white/[0.08] shadow-[0_0_24px_rgba(245,166,35,0.12)]' : ''
        } ${error ? 'border-red-400/50 shadow-[0_0_16px_rgba(248,113,113,0.12)]' : ''} ${!value ? 'text-white/40' : 'text-white/90'}`}
      >
        <span className="truncate font-medium">{display}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="flex-shrink-0 text-brand-400/80 group-hover:text-brand-400"
        >
          <ChevronDown size={18} strokeWidth={2.25} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={listId}
            role="listbox"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute z-[100] left-0 right-0 mt-2 origin-top rounded-xl overflow-hidden border border-white/10 bg-dark-500/95 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),0_0_0_1px_rgba(245,166,35,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="py-1.5 max-h-64 overflow-y-auto overflow-x-hidden"
            >
              {options.map((opt, i) => {
                const active = opt.value === value;
                return (
                  <motion.li key={opt.value || `opt-${i}`} variants={rowVariants} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => pick(opt.value)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors relative group/row ${
                        active
                          ? 'text-brand-300 bg-brand-400/[0.12]'
                          : 'text-white/75 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId={`animated-select-bar-${listId}`}
                          className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-brand-400 to-brand-500"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="flex-1 truncate pl-1">{opt.label}</span>
                      {active ? (
                        <motion.span
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                          className="text-brand-400 flex-shrink-0"
                        >
                          <Check size={16} strokeWidth={2.5} />
                        </motion.span>
                      ) : (
                        <span className="w-4 h-4 flex-shrink-0 opacity-0 group-hover/row:opacity-40 transition-opacity text-brand-400/50">
                          <Sparkles size={14} />
                        </span>
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>
            <div className="h-px bg-white/[0.06]" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 text-xs text-red-400/90"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
