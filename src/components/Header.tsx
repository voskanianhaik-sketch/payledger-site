import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Collections', href: '#collections' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const PHONE = '484-878-5303';
const PHONE_HREF = 'tel:+14848785303';

function Wordmark({ light }: { light: boolean }) {
  return (
    <a href="#top" className="flex flex-col group" aria-label="Payledger Solutions home">
      <div className="flex items-baseline gap-2">
        <span
          className={`font-serif text-xl font-600 tracking-tight transition-colors ${
            light ? 'text-cream' : 'text-navy'
          }`}
        >
          Payledger
        </span>
        <span
          className={`font-sans text-sm font-300 tracking-wide transition-colors ${
            light ? 'text-cream/60' : 'text-charcoal-light'
          }`}
        >
          Solutions
        </span>
      </div>
      <span
        className={`font-sans text-[0.625rem] font-400 uppercase tracking-[0.15em] mt-0.5 transition-colors ${
          light ? 'text-cream/40' : 'text-charcoal-light/50'
        }`}
      >
        Accounting & Collections for Trucking
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isSolid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'bg-navy shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isSolid ? 'h-16' : 'h-20'
          }`}
        >
          <Wordmark light={isSolid} />

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-400 transition-colors hover:text-amber ${
                  isSolid ? 'text-cream/80' : 'text-navy/70'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className={`w-px h-5 ${isSolid ? 'bg-cream/20' : 'bg-navy/20'}`} />
            <a
              href={PHONE_HREF}
              className={`flex items-center gap-2 text-sm font-500 transition-colors hover:text-amber ${
                isSolid ? 'text-cream' : 'text-navy'
              }`}
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </nav>

          <button
            className={`lg:hidden p-2 -mr-2 transition-colors ${isSolid ? 'text-cream' : 'text-navy'}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-screen border-t border-cream/10' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6 bg-navy">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-cream/80 text-base font-400 border-b border-cream/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 py-4 text-cream text-base font-500"
          >
            <Phone className="w-5 h-5" />
            {PHONE}
          </a>
        </nav>
      </div>
    </header>
  );
}
