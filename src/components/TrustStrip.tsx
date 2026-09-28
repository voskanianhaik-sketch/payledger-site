const ITEMS = [
  'US-based team',
  'Trucking & logistics specialists',
  'Fixed monthly pricing',
  'We chase unpaid loads',
];

export default function TrustStrip() {
  return (
    <section className="border-y border-navy/10 bg-cream-dark/50">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-5">
          {ITEMS.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-navy/15 mx-8" />}
              <span className="text-sm text-charcoal font-400 tracking-wide py-2 sm:py-0">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
