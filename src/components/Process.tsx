import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Step {
  num: string;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'A short call to understand your operation and current setup.',
  },
  {
    num: '02',
    title: 'Onboarding',
    desc: 'We collect your records and connect your accounting software.',
  },
  {
    num: '03',
    title: 'Monthly Management',
    desc: 'Books reconciled, reports delivered, deadlines tracked.',
  },
  {
    num: '04',
    title: 'Ongoing Advisory',
    desc: 'Quarterly check-ins on tax position and profitability.',
  },
];

export default function Process() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="process" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-content px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber" />
            <span className="section-label">How it works</span>
          </div>
          <h2 className="font-serif text-navy text-3xl lg:text-5xl font-400 tracking-tight leading-tight max-w-2xl">
            A clear path from
            <span className="italic font-300"> first call </span>
            to ongoing advisory.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-px bg-navy/15" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="relative reveal">
                {/* Number circle */}
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] flex items-center justify-center bg-cream border border-navy/15 rounded-full mb-6">
                  <span className="font-serif text-navy text-lg font-500">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif text-navy text-xl font-500 mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed font-300 max-w-[16rem]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
