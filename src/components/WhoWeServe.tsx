import { useScrollReveal } from '@/hooks/useScrollReveal';

const SEGMENTS = [
  'Owner-Operators',
  'Small Fleets',
  'Freight Brokers',
  'Dispatch Companies',
  '3PL & Warehousing',
];

export default function WhoWeServe() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="who-we-serve" className="py-24 lg:py-32 bg-cream-dark/40 border-y border-navy/10">
      <div ref={ref} className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: label + heading */}
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-amber" />
              <span className="section-label">Built for logistics</span>
            </div>
            <h2 className="font-serif text-navy text-3xl lg:text-5xl font-400 tracking-tight leading-tight">
              We don&rsquo;t serve
              <br />
              everyone.
              <br />
              <span className="italic font-300">We serve you.</span>
            </h2>
          </div>

          {/* Right: paragraph + segments */}
          <div className="lg:col-span-7 reveal">
            <p className="text-lg text-charcoal leading-relaxed font-300 max-w-2xl">
              Payledger Solutions works exclusively with transportation and logistics businesses.
              That focus means we understand IFTA, cost-per-mile, factoring, and the cash flow
              realities of life on the road — without you having to explain them first.
            </p>

            <div className="mt-12">
              <div className="hairline mb-0" />
              <div className="flex flex-col sm:flex-row sm:items-center">
                {SEGMENTS.map((segment, i) => (
                  <div key={segment} className="flex items-center flex-1">
                    {i > 0 && <div className="hidden sm:block w-px h-10 bg-navy/15" />}
                    <span className="flex-1 py-5 px-1 sm:px-5 text-navy text-sm font-500 tracking-wide border-b sm:border-b-0 border-navy/10">
                      {segment}
                    </span>
                  </div>
                ))}
              </div>
              <div className="hairline mt-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
