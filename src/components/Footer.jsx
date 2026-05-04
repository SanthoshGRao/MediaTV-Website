import { Link } from 'react-router-dom';
import {
  Facebook,
  Youtube,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronUp,
  Tv,
} from 'lucide-react';

const footerLinks = {
  channel: [
    { name: 'Programs', path: '/programs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Advertise', path: '/advertise' },
  ],
  programs: [
    { name: 'Sthaliya Sudhigalu', path: '/programs' },
    { name: 'Dubs Dhamaka', path: '/programs' },
    { name: 'Hello Doctor', path: '/programs' },
    { name: 'Just Math Mathalli', path: '/programs' },
    { name: 'Movie Time', path: '/programs' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/MediaTvMysore', handle: 'Media Tv Mysore' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@MediaTVMysore', handle: 'MediaTV Mysore' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/Mediatvmys', handle: '@Mediatvmys' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-700 border-t border-white/5">
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-brand-400/30">
                <img
                  src="/images/logo.jpeg"
                  alt="Media TV"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl gradient-text">
                  MEDIA TV
                </span>
                <p className="text-[10px] text-white/40 tracking-[3px] uppercase">
                  Mysore
                </p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              One of the best local channels in Mysore District, telecasted
              throughout Karnataka in 10+ districts. Purely entertainment &
              news with 20-25 lakh viewers daily.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-400/20 hover:border-brand-400/30 transition-all duration-300 group"
                  title={social.name}
                >
                  <social.icon
                    size={16}
                    className="text-white/50 group-hover:text-brand-400 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white/90 uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.channel.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-brand-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronUp
                      size={12}
                      className="rotate-90 text-white/20 group-hover:text-brand-400 transition-colors"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Programs */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white/90 uppercase tracking-wider mb-6">
              Popular Shows
            </h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-brand-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Tv
                      size={12}
                      className="text-white/20 group-hover:text-brand-400 transition-colors"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white/90 uppercase tracking-wider mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919980959598"
                className="flex items-start gap-3 text-white/50 hover:text-brand-400 transition-colors group text-sm"
              >
                <Phone
                  size={16}
                  className="text-brand-400/60 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p>+91 9980 95 95 98</p>
                  <p>+91 7337 888 444</p>
                </div>
              </a>
              <a
                href="mailto:mediatvmysore@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-brand-400 transition-colors text-sm"
              >
                <Mail size={16} className="text-brand-400/60 flex-shrink-0" />
                mediatvmysore@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin
                  size={16}
                  className="text-brand-400/60 mt-0.5 flex-shrink-0"
                />
                <p>
                  No.13/13, 2nd Cross, Shankar Mutt Road, Khille Mohalla,
                  Mysuru, Karnataka 570004
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Media TV Mysore. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/30 text-sm">
            <span>GST: 29AEXPN5447H1ZO</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-400/20 hover:border-brand-400/30 transition-all duration-300"
              title="Back to top"
            >
              <ChevronUp size={16} className="text-white/50" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
