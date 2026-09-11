import { Phone, MessageCircle, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import logoImg from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-ink-500/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block transition-transform hover:scale-105">
              <img src={logoImg} alt="295 Fitness Gym" className="h-10 w-auto object-contain" />
            </a>
            <p className="mt-5 text-sm text-bone-dim leading-relaxed max-w-xs">
              No shortcuts. No gimmicks. Just hard work, science-backed
              training, and results that speak for themselves.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-400 text-bone-muted hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-400 text-bone-muted hover:border-accent hover:text-accent transition-colors"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://wa.me/919854029500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-400 text-bone-muted hover:border-accent hover:text-accent transition-colors"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-600 uppercase text-sm tracking-wide-lg text-bone">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Facilities', href: '#facilities' },
                { label: 'Programs', href: '#programs' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-bone-dim hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-600 uppercase text-sm tracking-wide-lg text-bone">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-bone-dim leading-relaxed">
                  Bangalipara, Bilasipara,
                  <br />
                  Dhubri, Assam
                </span>
              </li>
              <li>
                <a
                  href="tel:+919854029500"
                  className="flex items-center gap-3 text-sm text-bone-dim hover:text-accent transition-colors"
                >
                  <Phone className="h-4.5 w-4.5 text-accent shrink-0" />
                  +91 98540 29500
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919854029500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-bone-dim hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-4.5 w-4.5 text-accent shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-600 uppercase text-sm tracking-wide-lg text-bone">
              Hours
            </h4>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-bone-dim leading-relaxed">
                  Mon – Sat
                  <br />
                  <span className="text-bone-muted">5:30 AM – 10:00 PM</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-bone-dim leading-relaxed">
                  Sunday
                  <br />
                  <span className="text-bone-muted">6:00 AM – 2:00 PM</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-ink-500/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bone-dim uppercase tracking-wide">
            © {new Date().getFullYear()} 295 Fitness Gym. All rights reserved.
          </p>
          <p className="text-xs text-bone-dim">
            Powered by{' '}
            <span className="text-bone-muted hover:text-accent transition-colors font-500">
              ProjuktiSoft
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
