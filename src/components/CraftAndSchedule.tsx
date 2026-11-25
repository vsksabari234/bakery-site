import { useState } from 'react';
import { ChefHat } from 'lucide-react';
import {
  BAKERY_PRODUCTS,
  BATCH_AND_VLOG_SLOTS,
  CRAFT_PRINCIPLES,
  DOLCE_BRAND,
  STUDIO_FEATURE_IMAGE,
  type BakeryProduct,
  type ProductVariant,
} from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';

interface CraftAndScheduleProps {
  onReserveItem: (product: BakeryProduct, variant: ProductVariant) => void;
}

export function CraftAndSchedule({ onReserveItem }: CraftAndScheduleProps) {
  const [slotKind, setSlotKind] = useState<
    'Fresh Bake Schedule' | 'Bake & Vlog Features'
  >('Fresh Bake Schedule');

  const visibleSlots = BATCH_AND_VLOG_SLOTS.filter(
    (slot) => slot.kind === slotKind
  );

  const handleReserve = (productId: string) => {
    const product = BAKERY_PRODUCTS.find((p) => p.id === productId);
    if (product) {
      onReserveItem(product, product.variants[0]);
    }
  };

  return (
    <section id="craft" className="scroll-mt-20">
      <div className="scallop-divider-up bg-white" aria-hidden="true" />
      <div className="bg-[#FDE6EA] py-14 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C84B68] mb-2">
                About Us · {DOLCE_BRAND.credential}
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-[#221A1D] tracking-tight mb-4"
                style={{ textWrap: 'balance' }}
              >
                Homemade loaves, artisanal cocoa &amp; lifestyle vlogs
              </h2>
              <p className="text-sm text-[#594A4E] leading-relaxed max-w-lg">
                Every creation from Dolce Divino is baked fresh in our FSSAI-registered kitchen—combining slow-fermented whole wheat loaves, crisp butter cookies, and molten dark chocolate desserts.
              </p>
            </div>

            <div className="relative pt-4 max-w-sm">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#48D6C7] text-[#0E3A35] border-4 border-white shadow-md mb-[-18px] relative z-10 ml-2 max-w-[calc(100%-1rem)]">
                <span className="w-7 h-7 rounded-full bg-[#F9BAC6] text-[#2E131B] flex items-center justify-center shrink-0">
                  <ChefHat className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-wide uppercase truncate">
                  Kitchen by {DOLCE_BRAND.name}
                </span>
              </div>

              <div className="rounded-t-full rounded-b-[28px] sm:rounded-b-[32px] overflow-hidden border-4 border-white bg-white shadow-[0_14px_34px_-12px_rgba(208,78,107,0.25)]">
                <div className="aspect-[4/3] bg-[#FDE6EA] overflow-hidden">
                  <BakeryImage
                    src={STUDIO_FEATURE_IMAGE.url}
                    alt={STUDIO_FEATURE_IMAGE.alt}
                    fallbackLabel="Dolce Divino — Rich in Chocolate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-3 px-4 flex items-center justify-between gap-2 text-xs text-[#594A4E] bg-white">
                  <span className="font-semibold text-[#2D2326] truncate">
                    Rich in Chocolate · Café Blend
                  </span>
                  <span className="text-[#C84B68] font-semibold whitespace-nowrap shrink-0">
                    {DOLCE_BRAND.handle}
                  </span>
                </div>
              </div>
            </div>

            <div className="divide-y divide-[#F6C8D3] border-y border-[#F6C8D3]">
              {CRAFT_PRINCIPLES.map((item) => (
                <div key={item.index} className="py-5 flex gap-4 items-start">
                  <span className="font-display text-base font-bold text-[#C84B68] tabular-nums shrink-0 pt-0.5">
                    {item.index}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-[#2D2326] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#594A4E] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="schedule"
            className="scroll-mt-20 lg:col-span-6 bg-white border-2 border-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-[0_14px_38px_-14px_rgba(208,78,107,0.22)] min-w-0"
          >
            <div className="flex flex-col gap-4 pb-6 border-b border-[#FCE4E9]">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#C84B68] mb-1">
                  Kitchen Rhythm &amp; Reels
                </p>
                <h2 className="font-display text-2xl font-bold text-[#221A1D]">
                  Daily Bakes &amp; Vlog Highlights
                </h2>
              </div>

              <div
                role="group"
                aria-label="Schedule and vlog filter"
                className="flex flex-wrap sm:inline-flex items-center gap-1 p-1 bg-[#FDE6EA] rounded-2xl sm:rounded-full self-stretch sm:self-start max-w-full"
              >
                {(
                  ['Fresh Bake Schedule', 'Bake & Vlog Features'] as const
                ).map((tab) => {
                  const active = slotKind === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setSlotKind(tab)}
                      aria-pressed={active}
                      className={`flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer min-h-[36px] ${
                        active
                          ? 'bg-white text-[#C84B68] shadow-xs'
                          : 'text-[#594A4E] hover:text-[#2D2326]'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="divide-y divide-[#FCE4E9]">
              {visibleSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#594A4E]">
                      <span className="font-semibold text-[#C84B68] tabular-nums">
                        {slot.timing}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{slot.tagLabel}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-[#2D2326]">
                      {slot.title}
                    </h3>
                    <p className="text-sm text-[#594A4E]">{slot.notes}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleReserve(slot.productId)}
                    aria-label={`Order ${slot.title}`}
                    className="self-start sm:self-center px-5 py-2 text-xs font-semibold text-[#C84B68] bg-[#FFF5F7] border border-[#F5C5CF] rounded-full hover:bg-[#D65A76] hover:text-white hover:border-[#D65A76] transition-colors whitespace-nowrap shrink-0 min-h-[38px] cursor-pointer"
                  >
                    Order Batch
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-5 border-t border-[#FCE4E9] text-xs text-[#594A4E] leading-relaxed">
              Want fresh whole wheat loaves or warm chocolate packs baked for your family? Send a DM on Instagram to{' '}
              <span className="font-semibold text-[#2D2326]">
                {DOLCE_BRAND.handle}
              </span>{' '}
              or submit your request below.
            </div>
          </div>
        </div>
      </div>
      <div className="scallop-divider-down bg-white" aria-hidden="true" />
    </section>
  );
}
