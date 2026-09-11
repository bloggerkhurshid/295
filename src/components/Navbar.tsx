import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Programs', href: '#programs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/95 backdrop-blur-md border-b border-ink-500/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        {/* Logo (image only, no extra text) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center group transition-transform active:scale-95"
          aria-label="295 Fitness Gym Home"
        >
          <img
            src={logoImg}
            alt="295 Fitness Gym"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-500 uppercase tracking-wide text-bone-muted hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919854029500"
            className="flex items-center gap-2 text-sm font-500 text-bone-muted hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            +91 98540 29500
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-600 uppercase tracking-wide text-white transition-all hover:bg-accent-light hover:shadow-[0_0_20px_rgba(214,31,31,0.4)] active:scale-95"
          >
            Book Free Trial
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-md text-bone hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-ink-800/98 backdrop-blur-md border-t border-ink-500/40 px-5 py-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-3 text-base font-500 uppercase tracking-wide text-bone-muted hover:text-accent transition-colors border-b border-ink-500/30"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="tel:+919854029500"
              className="flex items-center justify-center gap-2 rounded-md border border-ink-400 px-5 py-3 text-sm font-600 uppercase tracking-wide text-bone hover:border-accent hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call +91 98540 29500
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="rounded-md bg-accent px-5 py-3 text-center text-sm font-600 uppercase tracking-wide text-white transition-all hover:bg-accent-light active:scale-95"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
