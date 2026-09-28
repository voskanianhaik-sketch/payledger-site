import { Phone, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PHONE = '747-347-7198';
const PHONE_HREF = 'tel:+17473477198';

export default function CTABand() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 ledger-grid-navy pointer-events-none" />
      <div ref={ref} className="relative mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28 text-center">
        <div className="reveal">
          <h2 className="font-serif text-cream text-3xl lg:text-5xl font-400 tracking-tight leading-tight">
            Let&rsquo;s talk about your books.
          </h2>
          <p className="mt-6 text-cream/60 text-lg font-300">
            A free 20-minute consultation. No obligation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-navy font-500 text-sm tracking-wide rounded-sm transition-all hover:bg-amber-light hover:shadow-lg"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="hidden sm:block w-px h-6 bg-cream/20" />
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 text-cream font-500 text-sm tracking-wide transition-colors hover:text-amber"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
