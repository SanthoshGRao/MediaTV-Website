import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Tv, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Advertise', path: '/advertise' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 50;
        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-600/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`flex items-center gap-3 group transition-all duration-500 ${
                location.pathname === '/' && !scrolled
                  ? 'opacity-0 -translate-x-4 pointer-events-none'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-2 ring-brand-400/30 group-hover:ring-brand-400/60 transition-all duration-300">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.jpeg`}
                  alt="Media TV Logo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight tracking-wide gradient-text">
                  MEDIA TV
                </span>
                <span className="text-[10px] text-white/40 font-medium tracking-[3px] uppercase">
                  Mysore
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-brand-400' : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-400 group-hover:w-6 transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/advertise"
                className="btn-gold text-sm px-5 py-2.5 flex items-center gap-2"
              >
                Advertise Now
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-dark-400/95 backdrop-blur-xl border-l border-white/10"
            >
              <div className="flex flex-col h-full pt-24 px-6">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between py-4 border-b border-white/5 transition-colors ${
                          isActive ? 'text-brand-400' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        <span className="font-heading font-medium text-lg">
                          {link.name}
                        </span>
                        <ChevronRight size={16} className="text-white/30" />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    to="/advertise"
                    className="btn-gold w-full text-center block text-sm"
                  >
                    Advertise With Us
                  </Link>
                </motion.div>

                <div className="mt-auto pb-8">
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Tv size={14} />
                    <span>Media TV Mysore</span>
                  </div>
                  <p className="text-white/20 text-xs mt-2">
                    Karnataka's Premier Channel
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
