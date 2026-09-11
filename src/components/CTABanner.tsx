import { Reveal } from './Reveal';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink-950 overflow-hidden">
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-accent/8 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display font-700 uppercase text-4xl sm:text-5xl md:text-6xl text-bone leading-[1.05]">
            Stop waiting for
            <br />
            <span className="text-accent">someday.</span>
          </h2>
          <p className="mt-6 text-lg text-bone-muted leading-relaxed font-300 max-w-xl mx-auto">
            Your first session is free. No commitment, no pressure. Walk in,
            look around, train. Then decide.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919854029500"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-600 uppercase tracking-wide text-white transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(214,31,31,0.4)] active:scale-95"
            >
              Claim Your Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/919854029500"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border border-ink-400 px-8 py-4 text-base font-600 uppercase tracking-wide text-bone transition-all hover:border-accent hover:text-accent active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
