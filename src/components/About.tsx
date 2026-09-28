import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 lg:py-32 bg-cream-dark/40 border-y border-navy/10">
      <div ref={ref} className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: pull quote */}
          <div className="lg:col-span-6 reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-amber" />
              <span className="section-label">Who we are</span>
            </div>
            <blockquote className="font-serif text-navy text-3xl lg:text-[2.75rem] font-400 leading-[1.15] tracking-tight">
              <span className="text-amber font-serif text-5xl leading-none align-top mr-1">&ldquo;</span>
              Most accountants don&rsquo;t know what a cost-per-mile is.
              <span className="italic font-300"> We do.</span>
              <span className="text-amber font-serif text-5xl leading-none align-bottom ml-1">&rdquo;</span>
            </blockquote>
          </div>

          {/* Right: body copy */}
          <div className="lg:col-span-6 reveal space-y-6">
            <p className="text-charcoal text-base lg:text-lg leading-relaxed font-300">
              Payledger Solutions is a US-based accounting firm built specifically for the
              transportation industry. We work with trucking companies and logistics businesses
              across the country — from single-truck owner-operators to multi-state operations.
            </p>
            <p className="text-charcoal-light text-base leading-relaxed font-300">
              We speak the language of this industry. When you call, you won&rsquo;t need to
              explain what a factoring company does, why your fuel costs spike in certain
              quarters, or how detention time affects your margins. We already know.
            </p>
            <p className="text-charcoal-light text-base leading-relaxed font-300">
              Communication is direct and in plain language. You get a real person who knows
              your account, answers when you call, and explains things without the jargon. No
              layers of intake staff, no generic templates — just responsive, knowledgeable
              support from people who understand the road.
            </p>

            <div className="pt-4">
              <div className="hairline mb-6" />
              <div className="flex flex-wrap gap-x-12 gap-y-4">
                <div>
                  <div className="text-xs uppercase tracking-label text-charcoal-light mb-1">Based in</div>
                  <div className="text-navy font-500 text-sm">Reading, Pennsylvania</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-label text-charcoal-light mb-1">Serving</div>
                  <div className="text-navy font-500 text-sm">Companies nationwide</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-label text-charcoal-light mb-1">Focus</div>
                  <div className="text-navy font-500 text-sm">Trucking & logistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
