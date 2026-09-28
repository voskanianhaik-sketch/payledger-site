import { Phone, ArrowRight } from 'lucide-react';

const PHONE = '747-347-7198';
const PHONE_HREF = 'tel:+17473477198';

function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 520 520"
        className="w-full max-w-[520px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Stylized ledger grid with a route line and bar chart"
      >
        {/* Ledger grid */}
        <g opacity="0.12" stroke="#0B1F3A" strokeWidth="1">
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="520" />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 52} x2="520" y2={i * 52} />
          ))}
        </g>

        {/* Route line */}
        <path
          d="M40 400 C 120 400, 120 200, 220 200 S 360 360, 480 120"
          stroke="#E0A33E"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0,1200"
            to="1200,0"
            dur="2.5s"
            fill="freeze"
          />
        </path>

        {/* Route nodes */}
        <circle cx="40" cy="400" r="6" fill="#E0A33E" opacity="0" >
          <animate attributeName="opacity" from="0" to="1" begin="0.3s" dur="0.4s" fill="freeze" />
        </circle>
        <circle cx="220" cy="200" r="5" fill="#0B1F3A" opacity="0">
          <animate attributeName="opacity" from="0" to="1" begin="1.0s" dur="0.4s" fill="freeze" />
        </circle>
        <circle cx="480" cy="120" r="6" fill="#E0A33E" opacity="0">
          <animate attributeName="opacity" from="0" to="1" begin="2.3s" dur="0.4s" fill="freeze" />
        </circle>

        {/* Bar chart motif */}
        <g opacity="0.85">
          <rect x="60" y="340" width="28" height="80" rx="2" fill="#0B1F3A" opacity="0.15" />
          <rect x="100" y="300" width="28" height="120" rx="2" fill="#0B1F3A" opacity="0.2" />
          <rect x="140" y="260" width="28" height="160" rx="2" fill="#0B1F3A" opacity="0.25" />
          <rect x="180" y="220" width="28" height="200" rx="2" fill="#0B1F3A" opacity="0.3" />
          <rect x="220" y="180" width="28" height="240" rx="2" fill="#E0A33E" opacity="0.5" />
        </g>

        {/* Hairline divider */}
        <line x1="40" y1="440" x2="480" y2="440" stroke="#0B1F3A" strokeWidth="1" opacity="0.15" />
        <line x1="40" y1="448" x2="280" y2="448" stroke="#0B1F3A" strokeWidth="1" opacity="0.1" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ledger grid */}
      <div className="absolute inset-0 ledger-grid pointer-events-none" />

      {/* Warm radial wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(224,163,62,0.06), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-content px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-amber" />
              <span className="section-label">Accounting & Collections for Trucking</span>
            </div>

            <h1 className="font-serif text-navy text-[2.75rem] sm:text-5xl lg:text-[4.25rem] leading-[1.08] font-400 tracking-tight">
              Accounting and collections,
              <br />
              built for the <span className="italic font-300">road.</span>
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-charcoal-light leading-relaxed max-w-xl font-300">
              Payledger Solutions handles the books, payroll, and tax work for trucking and
              logistics companies — and goes after the money you&rsquo;re still owed.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-navy font-500 text-sm tracking-wide rounded-sm transition-all hover:bg-amber-dark hover:shadow-lg"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy/30 text-navy font-500 text-sm tracking-wide rounded-sm transition-all hover:border-navy hover:bg-navy hover:text-cream"
              >
                <Phone className="w-4 h-4" />
                Call {PHONE}
              </a>
            </div>
          </div>

          {/* Right: visual */}
          <div className="lg:col-span-5 hidden sm:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
