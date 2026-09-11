import { Reveal } from './Reveal';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Rakib Ahmed',
    role: 'Member — 8 months',
    quote:
      "I've trained at three gyms in Dhubri before this. None of them corrected my squat form on day one. Ejaj sir watched me for ten minutes and fixed what I'd been doing wrong for two years.",
    rating: 5,
  },
  {
    name: 'Priya Das',
    role: 'Member — 1 year',
    quote:
      "The equipment here is genuinely different. It's not just rows of machines — everything is set up for proper biomechanics. My knee pain is gone and I'm lifting heavier than I ever have.",
    rating: 5,
  },
  {
    name: 'Sahil Khan',
    role: 'Member — 6 months',
    quote:
      "No sales pressure. No fake promises. Just a clear plan and someone who actually watches you train. ₹799 a month for this level of coaching is honestly a steal.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-ink-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl">
          <span className="text-sm font-600 uppercase tracking-wide-xl text-accent">
            Real People. Real Results.
          </span>
          <h2 className="mt-4 font-display font-700 uppercase text-4xl sm:text-5xl text-bone leading-[1.05]">
            What Members Say
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="h-full rounded-xl border border-ink-500 bg-ink-700/50 p-7 transition-all duration-300 hover:border-accent/30">
                <Quote className="h-8 w-8 text-accent/40" fill="#D61F1F" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 text-accent"
                      fill="#D61F1F"
                    />
                  ))}
                </div>
                <p className="mt-4 text-bone-muted leading-relaxed text-sm">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-5 border-t border-ink-500/50">
                  <div className="font-display font-600 uppercase text-bone tracking-wide">
                    {t.name}
                  </div>
                  <div className="text-xs text-bone-dim mt-1">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
