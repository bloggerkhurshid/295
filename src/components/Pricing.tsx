import { Reveal } from './Reveal';
import { Check, Phone } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter Plan',
    price: '₹799',
    period: '/month',
    note: 'Starting price. Cancel anytime.',
    badge: 'Most Popular',
    highlighted: true,
    features: [
      'Full access to 10,000+ sq ft facility',
      'All biomechanical equipment included',
      'Mon–Sat 5:30 AM – 10:00 PM access',
      'Sun 6:00 AM – 2:00 PM access',
      'Personalised fitness assessment',
      'Form correction & guidance from coaching staff',
    ],
  },
  {
    name: 'Personal Trainer',
    price: '₹1999',
    period: '/month',
    note: '1-on-1 coaching with Ejaj Hussain.',
    badge: 'Premium',
    highlighted: false,
    features: [
      'Everything in the Starter Plan',
      'Dedicated 1-on-1 personal training sessions',
      'Customised program built around your goals',
      'Weekly progress tracking & program adjustments',
      'Direct WhatsApp access to your coach',
      'Priority booking for peak hours',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-ink-800 relative overflow-hidden">
      {/* Decorative accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-600 uppercase tracking-wide-xl text-accent">
            Start Training
          </span>
          <h2 className="mt-4 font-display font-700 uppercase text-4xl sm:text-5xl text-bone leading-[1.05]">
            Pricing
          </h2>
          <p className="mt-5 text-lg text-bone-muted leading-relaxed font-300">
            Two transparent plans. No hidden fees. No annual lock-in tricks.
          </p>
        </Reveal>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 150}>
              <div
                className={`relative h-full rounded-2xl p-8 sm:p-10 transition-all ${
                  plan.highlighted
                    ? 'border-2 border-accent bg-ink-700 shadow-[0_0_40px_rgba(214,31,31,0.15)]'
                    : 'border border-ink-500 bg-ink-700/50 hover:border-ink-400'
                }`}
              >
                {/* Badge */}
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-5 py-1.5 text-xs font-700 uppercase tracking-wide-lg ${
                    plan.highlighted
                      ? 'bg-accent text-white'
                      : 'bg-ink-400 text-bone'
                  }`}
                >
                  {plan.badge}
                </div>

                <div className="text-center">
                  <h3 className="font-display font-600 uppercase text-2xl text-bone tracking-wide">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span
                      className={`font-display font-700 text-5xl sm:text-6xl ${
                        plan.highlighted ? 'text-accent' : 'text-bone'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-lg text-bone-muted font-400">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-bone-dim">{plan.note}</p>
                </div>

                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-bone-muted leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`mt-8 block rounded-md px-6 py-4 text-center text-base font-600 uppercase tracking-wide transition-all active:scale-95 ${
                    plan.highlighted
                      ? 'bg-accent text-white hover:bg-accent-light hover:shadow-[0_0_25px_rgba(214,31,31,0.4)]'
                      : 'border border-ink-400 text-bone hover:border-accent hover:text-accent'
                  }`}
                >
                  Claim Free Trial
                </a>

                <a
                  href="tel:+919854029500"
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-500 text-bone-dim hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Or call +91 98540 29500
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-8 text-center text-sm text-bone-dim">
            Customised coaching packages and long-term plans available. Talk to us.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
