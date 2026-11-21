import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE, PANDU_BRAND } from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';

const STUDIO_METRICS = [
  { value: 'Cookies · Cake · Bread', label: 'Homemade daily categories' },
  { value: '0857 7316 9999', label: 'WhatsApp & SMS order line' },
  { value: '100% Homemade', label: 'No artificial preservatives' },
  { value: 'Free Ribbon Wrap', label: 'On jar orders Rp 200.000+' },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-[#E7E5E0]">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E7E5E0] shrink-0 bg-[#4A2810]">
                  <BakeryImage
                    src={PANDU_BRAND.logoUrl}
                    alt="Homemade Pandu Bakery seal"
                    fallbackLabel="Pandu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs font-medium tracking-wide text-[#57534E]">
                  Homemade Pandu Bakery · {PANDU_BRAND.handle}
                </p>
              </div>

              <h1
                className="font-display text-[#1C1917] font-normal tracking-tight leading-[1.08] mb-6"
                style={{
                  fontSize: 'clamp(2.35rem, 4vw, 3.6rem)',
                  textWrap: 'balance',
                }}
              >
                Homemade cookies, cakes &amp; warm bread, sealed fresh.
              </h1>
              <p className="text-base text-[#57534E] leading-relaxed max-w-xl mb-8">
                From golden pineapple Nastar lattice jars and aged-cheese Kastengel to soft sesame milk buns and festive gift hampers. Crafted in small batches and packed fresh for counter pickup or WhatsApp delivery.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#4A2810] rounded-lg hover:bg-[#361C0A] transition-colors whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2810]"
                >
                  <span>Explore Daily Menu</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#schedule"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1C1917] hover:text-[#4A2810] underline underline-offset-4 decoration-[#D6D3CD] hover:decoration-[#4A2810] transition-colors whitespace-nowrap shrink-0 min-h-[44px] px-1"
                >
                  View Bake Schedule
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E7E5E0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#57534E]">
              <div>
                <span className="font-medium text-[#1C1917]">WA / SMS</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="tabular-nums">{PANDU_BRAND.whatsappDisplay}</span>
              </div>
              <span className="tabular-nums">{PANDU_BRAND.pirtCode}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[320px] lg:min-h-[450px] rounded-xl overflow-hidden border border-[#E7E5E0] bg-[#F2EFE9]">
              <BakeryImage
                src={HERO_IMAGE.url}
                alt={HERO_IMAGE.alt}
                fallbackLabel="Pandu Bakery Nastar Jar"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E7E5E0] grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="font-display text-xl lg:text-2xl font-semibold text-[#1C1917] tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs text-[#57534E]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
