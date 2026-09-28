import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function AgingReportVisual() {
  return (
    <svg
      viewBox="0 0 300 200"
      className="w-full max-w-[300px] h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Stylized aging receivables report with upward arrow"
    >
      {/* Column headers */}
      <text x="20" y="28" fill="#FAF9F6" opacity="0.35" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1.5">
        INVOICE
      </text>
      <text x="130" y="28" fill="#FAF9F6" opacity="0.35" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1.5">
        DAYS OUT
      </text>
      <text x="220" y="28" fill="#FAF9F6" opacity="0.35" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1.5">
        AMOUNT
      </text>

      {/* Hairline header separator */}
      <line x1="20" y1="36" x2="280" y2="36" stroke="#FAF9F6" strokeWidth="1" opacity="0.1" />

      {/* Row 1 */}
      <text x="20" y="58" fill="#FAF9F6" opacity="0.55" fontSize="11" fontFamily="Inter, sans-serif">#1042-A</text>
      <text x="130" y="58" fill="#FAF9F6" opacity="0.55" fontSize="11" fontFamily="Inter, sans-serif">38</text>
      <text x="220" y="58" fill="#FAF9F6" opacity="0.55" fontSize="11" fontFamily="Inter, sans-serif">$4,200</text>
      <line x1="20" y1="68" x2="280" y2="68" stroke="#FAF9F6" strokeWidth="1" opacity="0.06" />

      {/* Row 2 */}
      <text x="20" y="90" fill="#FAF9F6" opacity="0.55" fontSize="11" fontFamily="Inter, sans-serif">#1087-B</text>
      <text x="130" y="90" fill="#FAF9F6" opacity="0.55" fontSize="11" fontFamily="Inter, sans-serif">61</text>
      <text x="220" y="90" fill="#E0A33E" opacity="0.85" fontSize="11" fontFamily="Inter, sans-serif">$7,850</text>
      <line x1="20" y1="100" x2="280" y2="100" stroke="#FAF9F6" strokeWidth="1" opacity="0.06" />

      {/* Row 3 */}
      <text x="20" y="122" fill="#FAF9F6" opacity="0.55" fontSize="11" fontFamily="Inter, sans-serif">#1103-C</text>
      <text x="130" y="122" fill="#FAF9F6" opacity="0.55" fontSize="11" fontFamily="Inter, sans-serif">94</text>
      <text x="220" y="122" fill="#E0A33E" opacity="0.85" fontSize="11" fontFamily="Inter, sans-serif">$12,400</text>
      <line x1="20" y1="132" x2="280" y2="132" stroke="#FAF9F6" strokeWidth="1" opacity="0.06" />

      {/* Upward arrow motif */}
      <g opacity="0.7">
        <path
          d="M200 175 L230 155 L255 165 L280 135"
          stroke="#E0A33E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M272 133 L280 135 L278 143"
          stroke="#E0A33E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default function CollectionsBand() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="collections" className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 ledger-grid-navy pointer-events-none" />
      <div ref={ref} className="relative mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-amber" />
              <span className="section-label">Collections</span>
            </div>
            <h2 className="font-serif text-cream text-3xl lg:text-[2.75rem] font-400 tracking-tight leading-[1.12]">
              Owed money on a
              <br />
              delivered <span className="italic font-300">load?</span>
            </h2>
            <p className="mt-6 text-cream/60 text-lg font-300 leading-relaxed max-w-xl">
              Slow-paying brokers cost carriers more than fuel does. We pursue unpaid invoices on
              your behalf — demand letters, persistent follow-up, and escalation — while you keep
              moving freight.
            </p>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-navy font-500 text-sm tracking-wide rounded-sm transition-all hover:bg-amber-light hover:shadow-lg"
            >
              Start a Collection Claim
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: visual */}
          <div className="lg:col-span-5 hidden sm:flex justify-center reveal">
            <AgingReportVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
