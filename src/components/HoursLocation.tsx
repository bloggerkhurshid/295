import { Reveal } from './Reveal';
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react';

const HOURS = [
  { day: 'Monday', time: '5:30 AM – 10:00 PM' },
  { day: 'Tuesday', time: '5:30 AM – 10:00 PM' },
  { day: 'Wednesday', time: '5:30 AM – 10:00 PM' },
  { day: 'Thursday', time: '5:30 AM – 10:00 PM' },
  { day: 'Friday', time: '5:30 AM – 10:00 PM' },
  { day: 'Saturday', time: '5:30 AM – 10:00 PM' },
  { day: 'Sunday', time: '6:00 AM – 2:00 PM', highlight: true },
];

export function HoursLocation() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal className="max-w-2xl">
          <span className="text-sm font-600 uppercase tracking-wide-xl text-accent">
            Visit Us
          </span>
          <h2 className="mt-4 font-display font-700 uppercase text-4xl sm:text-5xl text-bone leading-[1.05]">
            Hours & Location
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Hours + Contact */}
          <Reveal>
            <div className="rounded-xl border border-ink-500 bg-ink-800 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-5 w-5 text-accent" />
                <h3 className="font-display font-600 uppercase text-xl text-bone tracking-wide">
                  Operating Hours
                </h3>
              </div>
              <ul className="space-y-1">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-3 border-b border-ink-500/50 ${
                      h.highlight ? 'rounded-md bg-accent/5 px-3 -mx-3' : ''
                    }`}
                  >
                    <span className="text-sm font-500 text-bone">{h.day}</span>
                    <span
                      className={`text-sm font-400 ${
                        h.highlight ? 'text-accent font-600' : 'text-bone-muted'
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Contact quick links */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-bone-muted leading-relaxed">
                    Bangalipara, Bilasipara, Dhubri, Assam
                  </span>
                </div>
                <a
                  href="tel:+919854029500"
                  className="flex items-center gap-3 text-sm text-bone-muted hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  +91 98540 29500
                </a>
                <a
                  href="https://wa.me/919854029500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-bone-muted hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-accent shrink-0" />
                  WhatsApp us
                </a>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/919854029500"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-600 uppercase tracking-wide text-white transition-all hover:bg-accent-light hover:shadow-[0_0_20px_rgba(214,31,31,0.4)] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                Book Free Trial on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={150}>
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-ink-500">
              <iframe
                title="295 Fitness Gym Location — Bangalipara, Bilasipara, Dhubri, Assam"
                src="https://maps.google.com/maps?q=295+Fitness+GYM+Bangalipara+Bilasipara+Dhubri+Assam&center=26.24046,90.206802&zoom=15&output=embed"
                className="w-full h-full min-h-[400px] grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.app.goo.gl/oaAXyUxy6nKuSRXt7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 flex items-center gap-2 rounded-md bg-ink-900/90 backdrop-blur-sm border border-ink-400 px-4 py-2.5 text-xs font-600 uppercase tracking-wide text-bone hover:border-accent hover:text-accent transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
