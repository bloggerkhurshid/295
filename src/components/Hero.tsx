import { Phone, ChevronDown, Zap } from 'lucide-react';
import heroBg from '../assets/hero/hero-2.jpg';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with single uploaded gym image */}
      <div className="absolute inset-0 overflow-hidden bg-ink-900">
        <img
          src={heroBg}
          alt="295 Fitness Gym - Discipline Builds Freedom wall and training floor"
          className="h-full w-full object-cover object-center md:object-[60%_center] scale-105 animate-hero-bg"
        />

        {/* Ambient warm glow harmonizing with the warm neon mirror backlights */}
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

        {/* Cinematic gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 text-accent" fill="#D61F1F" />
            <span className="text-xs font-600 uppercase tracking-wide-lg text-accent-light">
              Bilasipara, Dhubri, Assam
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-700 uppercase leading-[0.95] text-bone text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            295 Fitness
            <br />
            <span className="text-accent">Gym</span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-bone-muted leading-relaxed font-300">
            No shortcuts. No gimmicks. Just hard work, science-backed training,
            and results that speak for themselves.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="group flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-600 uppercase tracking-wide text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(214,31,31,0.4)] active:scale-95"
            >
              Claim Your Free Trial
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="tel:+919854029500"
              className="flex items-center justify-center gap-2 rounded-md border border-ink-400 bg-ink-800/60 px-8 py-4 text-base font-600 uppercase tracking-wide text-bone backdrop-blur-md transition-all hover:border-accent hover:text-accent active:scale-95"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { value: '10,000+', label: 'Sq Ft Facility' },
              { value: '₹799', label: 'Starting / Month' },
              { value: '1-on-1', label: 'Coaching' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-700 text-2xl sm:text-3xl text-bone">
                  {stat.value}
                </div>
                <div className="text-xs font-500 uppercase tracking-wide-lg text-bone-dim mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-wide-lg text-bone-dim">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}

