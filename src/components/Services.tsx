import { BookOpen, FileText, TrendingUp, Users, Fuel, BarChart3, HandCoins } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  span: string;
}

const SERVICES: Service[] = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Bookkeeping',
    desc: 'Monthly reconciliation, categorized expenses, clean books that are always audit-ready.',
    span: 'lg:col-span-4',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Tax Preparation & Filing',
    desc: 'Federal and state returns for carriers, brokers, and owner-operators.',
    span: 'lg:col-span-4',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Tax Planning',
    desc: 'Proactive strategy so you aren\u2019t surprised in April.',
    span: 'lg:col-span-4',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Payroll & Contractor Payments',
    desc: 'Drivers, W-2 and 1099, handled on schedule.',
    span: 'lg:col-span-4',
  },
  {
    icon: <Fuel className="w-5 h-5" />,
    title: 'IFTA & Fuel Tax Reporting',
    desc: 'Quarterly filings tracked and submitted correctly.',
    span: 'lg:col-span-4',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Financial Reporting',
    desc: 'P&L, cost-per-mile, and cash flow visibility you can actually act on.',
    span: 'lg:col-span-4',
  },
  {
    icon: <HandCoins className="w-5 h-5" />,
    title: 'Collections for Carriers',
    desc: 'Unpaid loads chased down. We pursue non-paying brokers and shippers on your behalf \u2014 demand letters, follow-up, and escalation \u2014 so you get paid without losing days to phone calls.',
    span: 'lg:col-span-12',
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-content px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 reveal">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-amber" />
              <span className="section-label">Accounting, tax, and collections</span>
            </div>
            <h2 className="font-serif text-navy text-3xl lg:text-5xl font-400 tracking-tight leading-tight">
              Services built around
              <br />
              the way you operate.
            </h2>
          </div>
          <p className="mt-6 sm:mt-0 text-charcoal-light text-base max-w-sm font-300 leading-relaxed">
            A complete financial back office for carriers and logistics companies — handled by
            people who understand the industry.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-navy/10 border border-navy/10">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`reveal bg-cream p-8 lg:p-10 ${service.span} group transition-colors hover:bg-cream-dark`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-navy/15 text-navy rounded-sm transition-colors group-hover:border-amber group-hover:text-amber">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-serif text-navy text-xl font-500 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed font-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
