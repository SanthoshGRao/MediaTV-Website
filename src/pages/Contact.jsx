import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, Facebook, Youtube, Instagram } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 9980 95 95 98', value2: '+91 7337 888 444', href: 'tel:+919980959598' },
  { icon: Mail, label: 'Email', value: 'mediatvmysore@gmail.com', href: 'mailto:mediatvmysore@gmail.com' },
  { icon: MapPin, label: 'Office', value: 'No.13/13, 2nd Cross, Shankar Mutt Road, Khille Mohalla, Mysuru, Karnataka 570004' },
  { icon: Clock, label: 'Hours', value: 'Monday – Saturday', value2: '9:00 AM – 6:00 PM' },
];

const socials = [
  { icon: Facebook, name: 'Facebook', handle: 'Media Tv Mysore', url: 'https://facebook.com/MediaTvMysore' },
  { icon: Youtube, name: 'YouTube', handle: 'MediaTV Mysore', url: 'https://youtube.com/@MediaTVMysore' },
  { icon: Instagram, name: 'Instagram', handle: '@Mediatvmys', url: 'https://instagram.com/Mediatvmys' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }, 4000);
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-400/5 via-dark-600 to-dark-600" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-brand-400 font-accent text-xs tracking-[4px] uppercase mb-3 block">Reach Out</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="section-title text-4xl sm:text-5xl gradient-text">Contact Us</motion.h1>
          <div className="gold-divider mx-auto" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="section-subtitle mx-auto mt-4">
            Have questions or want to collaborate? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.1}>
                <div className="glass-card-hover p-6 text-center h-full group">
                  <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <info.icon size={20} className="text-brand-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-white/80 mb-2">{info.label}</h3>
                  {info.href ? (
                    <a href={info.href} className="text-white/60 text-sm hover:text-brand-400 transition-colors block">{info.value}</a>
                  ) : (
                    <p className="text-white/60 text-sm">{info.value}</p>
                  )}
                  {info.value2 && <p className="text-white/40 text-sm mt-1">{info.value2}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <div className="glass-card p-8">
                  <h2 className="font-heading font-bold text-2xl text-white/90 mb-6">Send us a Message</h2>
                  {submitted ? (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                      <CheckCircle size={48} className="mx-auto mb-4 text-green-400" />
                      <h3 className="font-heading font-semibold text-xl text-white/90 mb-2">Message Sent!</h3>
                      <p className="text-white/50">Thank you for reaching out. We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-white/50 text-sm mb-2">Full Name *</label>
                          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="input-field" />
                        </div>
                        <div>
                          <label className="block text-white/50 text-sm mb-2">Email *</label>
                          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="input-field" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-white/50 text-sm mb-2">Phone</label>
                          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="input-field" />
                        </div>
                        <div>
                          <label className="block text-white/50 text-sm mb-2">Subject *</label>
                          <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="input-field">
                            <option value="">Select a topic</option>
                            <option value="general">General Inquiry</option>
                            <option value="advertising">Advertising</option>
                            <option value="programming">Programming</option>
                            <option value="feedback">Feedback</option>
                            <option value="partnership">Partnership</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-white/50 text-sm mb-2">Message *</label>
                        <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you need..." className="input-field resize-none" />
                      </div>
                      <button type="submit" className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2 text-sm">
                        <Send size={16} /> Send Message
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Map + Social */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="right">
                <div className="glass-card overflow-hidden h-64 lg:h-80">
                  <iframe
                    title="Media TV Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1!2d76.6394!3d12.3051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE4JzE4LjQiTiA3NsKwMzgnMjEuOCJF!5e0!3m2!1sen!2sin!4v1"
                    className="w-full h-full border-0 opacity-70 hover:opacity-100 transition-opacity duration-500"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.1}>
                <div className="glass-card p-6">
                  <h3 className="font-heading font-semibold text-sm text-white/80 mb-4">Follow Us</h3>
                  <div className="space-y-3">
                    {socials.map((s) => (
                      <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-brand-400/10 border border-brand-400/20 flex items-center justify-center group-hover:bg-brand-400/20 transition-colors">
                          <s.icon size={16} className="text-brand-400" />
                        </div>
                        <div>
                          <p className="text-white/80 text-sm font-medium">{s.name}</p>
                          <p className="text-white/40 text-xs">{s.handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
