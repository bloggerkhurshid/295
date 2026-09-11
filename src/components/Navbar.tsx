import { useEffect, useState } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
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

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background body scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // Allow state and overflow to reset smoothly before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-ink-900/98 backdrop-blur-lg border-b border-ink-500/50 py-3 shadow-2xl'
            : 'bg-ink-900/85 backdrop-blur-md border-b border-ink-500/30 py-4 shadow-lg'
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
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-ink-500/60 bg-ink-800/80 text-bone hover:text-accent hover:border-accent transition-all active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5 text-accent" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[calc(100dvh-4.5rem)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-ink-900/98 backdrop-blur-xl border-t border-ink-500/40 px-6 py-5 shadow-2xl overflow-y-auto max-h-[calc(100dvh-5rem)]">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between py-3.5 text-base font-600 uppercase tracking-wide text-bone-muted hover:text-accent active:text-accent border-b border-ink-500/30 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-ink-400" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 pb-2">
              <a
                href="tel:+919854029500"
                className="flex items-center justify-center gap-2.5 rounded-lg border border-ink-400 bg-ink-800/80 px-5 py-3.5 text-sm font-600 uppercase tracking-wide text-bone hover:border-accent hover:text-accent active:scale-98 transition-all"
              >
                <Phone className="h-4 w-4 text-accent" />
                Call +91 98540 29500
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-center text-sm font-600 uppercase tracking-wide text-white shadow-[0_0_20px_rgba(214,31,31,0.3)] hover:bg-accent-light active:scale-98 transition-all"
              >
                Book Free Trial
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop (click outside to close) */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />
    </>
  );
}

