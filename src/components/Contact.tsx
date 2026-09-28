import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PHONE = '747-347-7198';
const PHONE_HREF = 'tel:+17473477198';
const EMAIL = 'info@payledgersolutions.com';
const EMAIL_HREF = 'mailto:info@payledgersolutions.com';

const CONTACT_DETAILS = [
  {
    icon: <Phone className="w-4 h-4" />,
    label: 'Phone',
    value: PHONE,
    href: PHONE_HREF,
  },
  {
    icon: <Mail className="w-4 h-4" />,
    label: 'Email',
    value: EMAIL,
    href: EMAIL_HREF,
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: 'Address',
    value: '2395 Lancaster Pike, Suite 4122, Reading, PA 19607',
    href: undefined,
  },
  {
    icon: <Clock className="w-4 h-4" />,
    label: 'Hours',
    value: 'Monday\u2013Friday, 9:00 AM \u2013 6:00 PM EST',
    href: undefined,
  },
];

const FIELD_STYLE =
  'w-full bg-transparent border-b border-navy/20 py-3 px-0 text-navy text-base font-400 placeholder-charcoal-light/60 focus:outline-none focus:border-amber transition-colors';

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-content px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber" />
            <span className="section-label">Contact</span>
          </div>
          <h2 className="font-serif text-navy text-3xl lg:text-5xl font-400 tracking-tight leading-tight max-w-2xl">
            Let&rsquo;s start a conversation.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: form */}
          <div className="lg:col-span-7 reveal">
            {submitted ? (
              <div className="border border-navy/15 p-12 text-center">
                <CheckCircle2 className="w-10 h-10 text-amber mx-auto mb-4" />
                <h3 className="font-serif text-navy text-2xl font-500 mb-2">
                  Message received.
                </h3>
                <p className="text-charcoal-light text-base font-300">
                  Thank you for reaching out. We&rsquo;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-label text-charcoal-light mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={FIELD_STYLE}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-label text-charcoal-light mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={FIELD_STYLE}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-label text-charcoal-light mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={FIELD_STYLE}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs uppercase tracking-label text-charcoal-light mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className={FIELD_STYLE}
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-label text-charcoal-light mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${FIELD_STYLE} resize-none`}
                    placeholder="Tell us about your operation and what you need help with."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-navy text-cream font-500 text-sm tracking-wide rounded-sm transition-all hover:bg-amber hover:text-navy"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Right: contact details */}
          <div className="lg:col-span-5 reveal">
            <div className="hairline mb-8" />
            <div className="space-y-8">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-navy/15 text-navy rounded-sm">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-label text-charcoal-light mb-1">
                      {detail.label}
                    </div>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-navy text-base font-400 hover:text-amber transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <div className="text-navy text-base font-400">
                        {detail.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
