import { useState } from 'react';
import {
  BAKERY_PRODUCTS,
  CRAFT_PRINCIPLES,
  HAMPERS_IMAGE,
  OVEN_PULL_SCHEDULE,
  type BakeryProduct,
  type ProductVariant,
} from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';

interface CraftAndScheduleProps {
  onReserveItem: (product: BakeryProduct, variant: ProductVariant) => void;
}

export function CraftAndSchedule({ onReserveItem }: CraftAndScheduleProps) {
  const [period, setPeriod] = useState<'Morning' | 'Afternoon'>('Morning');

  const visiblePulls = OVEN_PULL_SCHEDULE.filter(
    (slot) => slot.period === period
  );

  const handleReserve = (productId: string) => {
    const product = BAKERY_PRODUCTS.find((p) => p.id === productId);
    if (product) {
      onReserveItem(product, product.variants[0]);
    }
  };

  return (
    <section
      id="craft"
      className="scroll-mt-20 py-16 lg:py-20 border-b border-[#E7E5E0]"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        <div className="lg:col-span-6 space-y-8">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#57534E] mb-2">
              Homemade Kitchen &amp; Hampers
            </p>
            <h2
              className="font-display text-3xl font-normal text-[#1C1917] tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Sealed cookie jars &amp; festive ribbon parcels
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-lg">
              Every Pandu Bakery batch is baked fresh in our home kitchen—combining classic Indonesian kue kering recipes with clean P-IRT sealed packaging.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#E7E5E0] bg-[#F2EFE9]">
            <BakeryImage
              src={HAMPERS_IMAGE.url}
              alt={HAMPERS_IMAGE.alt}
              fallbackLabel="Pandu Bakery Festive Gift Hampers"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="divide-y divide-[#E7E5E0] border-y border-[#E7E5E0]">
            {CRAFT_PRINCIPLES.map((item) => (
              <div key={item.index} className="py-5 flex gap-4 items-start">
                <span className="font-display text-base font-semibold text-[#4A2810] tabular-nums shrink-0 pt-0.5">
                  {item.index}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#1C1917] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="schedule"
          className="scroll-mt-20 lg:col-span-6 bg-white border border-[#E7E5E0] rounded-xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E5E0]">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#57534E] mb-1">
                Daily Kitchen Timing
              </p>
              <h2 className="font-display text-2xl font-normal text-[#1C1917] whitespace-nowrap">
                Oven Bake Schedule
              </h2>
            </div>

            <div
              role="group"
              aria-label="Oven schedule period"
              className="inline-flex items-center gap-1 p-1 bg-[#EFECE6] rounded-lg self-start sm:self-auto"
            >
              {(['Morning', 'Afternoon'] as const).map((tab) => {
                const active = period === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setPeriod(tab)}
                    aria-pressed={active}
                    className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                      active
                        ? 'bg-white text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {tab} Pulls
                  </button>
                );
              })}
            </div>
          </div>

          <div className="divide-y divide-[#E7E5E0]">
            {visiblePulls.map((slot) => (
              <div
                key={slot.id}
                className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 text-xs text-[#57534E]">
                    <span className="font-semibold text-[#4A2810] tabular-nums">
                      {slot.time}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{slot.batchTitle}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#1C1917]">
                    {slot.productName}
                  </h3>
                  <p className="text-sm text-[#57534E]">{slot.notes}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleReserve(slot.productId)}
                  aria-label={`Reserve ${slot.productName} from ${slot.time} pull`}
                  className="self-start sm:self-center px-4 py-2 text-xs font-medium text-[#1C1917] bg-[#FAF9F6] border border-[#E7E5E0] rounded-lg hover:border-[#4A2810] hover:text-[#4A2810] transition-colors whitespace-nowrap shrink-0 min-h-[38px] cursor-pointer"
                >
                  Reserve Batch
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-5 border-t border-[#E7E5E0] text-xs text-[#57534E] leading-relaxed">
            Need same-day cookie jars or custom hampers? Message WA / SMS <span className="font-medium text-[#1C1917] tabular-nums">0857 7316 9999</span> to confirm courier or pickup readiness.
          </div>
        </div>
      </div>
    </section>
  );
}
