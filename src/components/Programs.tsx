import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

const PROGRAMS = [
  {
    title: 'Strength Training',
    description:
      'Barbell-based progressive overload. Squat, deadlift, press, pull — the fundamentals that build raw, functional power.',
    image:
      'https://images.pexels.com/photos/4720794/pexels-photo-4720794.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Foundation',
  },
  {
    title: 'Personal Coaching',
    description:
      'One-on-one sessions with coach Ejaj Hussain. Fully individualised programming, form correction, and accountability.',
    image:
      'https://images.pexels.com/photos/6455895/pexels-photo-6455895.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: '1-on-1',
  },
  {
    title: 'General Fitness',
    description:
      'Build a base of cardiovascular health, mobility, and muscular endurance. For those who want to feel better, every day.',
    image:
      'https://images.pexels.com/photos/7674492/pexels-photo-7674492.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'All Levels',
  },
  {
    title: 'Conditioning & HIIT',
    description:
      'High-intensity circuits that torch fat and build engine. Short, brutal, effective. No treadmills-and-texting here.',
    image:
      'https://images.pexels.com/photos/30191517/pexels-photo-30191517.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'High Intensity',
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl">
          <span className="text-sm font-600 uppercase tracking-wide-xl text-accent">
            Train With Purpose
          </span>
          <h2 className="mt-4 font-display font-700 uppercase text-4xl sm:text-5xl text-bone leading-[1.05]">
            Programs
          </h2>
          <p className="mt-5 text-lg text-bone-muted leading-relaxed font-300">
            Pick your path. Every program is built on the same foundation:
            biomechanics, progressive overload, and honest effort.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-xl border border-ink-500 bg-ink-800 transition-all duration-300 hover:border-accent/40">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/30 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-600 uppercase tracking-wide text-white">
                    {p.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-600 uppercase text-2xl text-bone tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-bone-muted leading-relaxed">
                    {p.description}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-600 uppercase tracking-wide text-accent transition-colors hover:text-accent-light"
                  >
                    Book a Tour
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
