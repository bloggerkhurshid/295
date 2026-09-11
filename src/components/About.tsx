import { Reveal } from './Reveal';
import { Award, FlaskConical, Target } from 'lucide-react';
import coachImg from '../assets/coach/coach-ejaj.jpg';

const PRINCIPLES = [
  { icon: FlaskConical, text: 'Science-backed programming — every set, every rep, has a purpose' },
  { icon: Target, text: 'Individualised protocols built around your body, your goals, your timeline' },
  { icon: Award, text: 'Coach Ejaj Hussain — hands-on expertise, not a clipboard and a sales pitch' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-full w-full border-2 border-accent/20 rounded-lg" />
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={coachImg}
                  alt="Coach Ejaj Hussain at 295 Fitness Gym"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-ink-800 border border-ink-500 rounded-lg px-6 py-4 shadow-xl">
                <div className="font-display font-700 text-3xl text-accent">2+</div>
                <div className="text-xs uppercase tracking-wide-lg text-bone-muted mt-1">
                  Years of Coaching
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={150} className="order-1 lg:order-2">
            <span className="text-sm font-600 uppercase tracking-wide-xl text-accent">
              The 295 Philosophy
            </span>
            <h2 className="mt-4 font-display font-700 uppercase text-4xl sm:text-5xl text-bone leading-[1.05]">
              No Shortcuts.
              <br />
              <span className="text-accent">No Gimmicks.</span>
            </h2>
            <p className="mt-6 text-lg text-bone-muted leading-relaxed font-300">
              We don't sell quick fixes or magic transformations. We build
              athletes — one disciplined rep at a time. Every program at 295
              Fitness Gym is engineered on biomechanics, progressive overload,
              and honest effort.
            </p>
            <p className="mt-4 text-base text-bone-dim leading-relaxed">
              Led by coach <span className="text-bone font-500">Ejaj Hussain</span>,
              our 10,000+ sq ft facility in Bilasipara is built for people who are
              serious about showing up and putting in the work.
            </p>

            <ul className="mt-8 space-y-4">
              {PRINCIPLES.map((p) => (
                <li key={p.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/15">
                    <p.icon className="h-3.5 w-3.5 text-accent" />
                  </span>
                  <span className="text-bone-muted leading-relaxed">{p.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px flex-1 bg-ink-400" />
              <span className="font-display font-600 uppercase text-sm tracking-wide-lg text-bone-dim">
                Ejaj Hussain — Head Coach
              </span>
              <span className="h-px flex-1 bg-ink-400" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
