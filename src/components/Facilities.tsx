import { Reveal } from './Reveal';
import { Ruler, Cog, UserCheck, Sparkles } from 'lucide-react';

const FACILITIES = [
  {
    icon: Ruler,
    title: '10,000+ Sq Ft',
    description:
      'A sprawling training floor with dedicated zones for strength, conditioning, and mobility. Space to move, space to breathe.',
  },
  {
    icon: Cog,
    title: 'Biomechanical Equipment',
    description:
      'Precision-engineered machines and free weights designed around how your body actually moves. No guesswork, no injury shortcuts.',
  },
  {
    icon: UserCheck,
    title: '1-on-1 Coaching',
    description:
      'Direct guidance from coach Ejaj Hussain. Your form, your program, your progress — watched, corrected, and pushed forward.',
  },
  {
    icon: Sparkles,
    title: 'Clean & Modern',
    description:
      'A premium, hygienic environment maintained to a high standard. Because where you train matters as much as how you train.',
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-24 sm:py-32 bg-ink-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl">
          <span className="text-sm font-600 uppercase tracking-wide-xl text-accent">
            What You Walk Into
          </span>
          <h2 className="mt-4 font-display font-700 uppercase text-4xl sm:text-5xl text-bone leading-[1.05]">
            Facility Highlights
          </h2>
          <p className="mt-5 text-lg text-bone-muted leading-relaxed font-300">
            Every square foot is designed for one thing: making you stronger,
            faster, and better conditioned.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="group h-full rounded-xl border border-ink-500 bg-ink-700/50 p-7 transition-all duration-300 hover:border-accent/50 hover:bg-ink-700 hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <f.icon className="h-6 w-6 text-accent" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display font-600 uppercase text-xl text-bone tracking-wide">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-bone-muted leading-relaxed">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
