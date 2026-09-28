import { Phone, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const PHONE = '747-347-7198';
const PHONE_HREF = 'tel:+17473477198';
const EMAIL = 'info@payledgersolutions.com';
const EMAIL_HREF = 'mailto:info@payledgersolutions.com';
const ADDRESS = '2395 Lancaster Pike, Suite 4122, Reading, PA 19607';

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 ledger-grid-navy pointer-events-none opacity-50" />
      <div className="relative mx-auto max-w-content px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Wordmark + blurb */}
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-serif text-xl font-600 text-cream tracking-tight">
                Payledger
              </span>
              <span className="font-sans text-sm font-300 text-cream/50 tracking-wide">
                Solutions
              </span>
            </div>
            <p className="text-cream/50 text-sm font-300 leading-relaxed max-w-sm">
              US-based accounting, bookkeeping, payroll, and tax services built for trucking,
              logistics, and freight companies.
            </p>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-label text-cream/40 mb-4">Navigate</div>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/70 text-sm font-400 hover:text-amber transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-label text-cream/40 mb-4">Contact</div>
            <div className="space-y-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 text-cream/70 text-sm font-400 hover:text-amber transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE}
              </a>
              <a
                href={EMAIL_HREF}
                className="flex items-center gap-3 text-cream/70 text-sm font-400 hover:text-amber transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-3 text-cream/70 text-sm font-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {ADDRESS}
              </div>
            </div>
          </div>
        </div>

        {/* Hairline */}
        <div className="h-px w-full bg-cream/10 mt-12 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-cream/40 text-xs font-400">
            &copy; 2026 Payledger Solutions. All rights reserved.
          </div>
          <div className="text-cream/30 text-xs font-300 max-w-md leading-relaxed">
            Information on this site is for general purposes only and does not constitute tax,
            legal, or accounting advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
