import { useState } from 'react';
import {
  BAKERY_PRODUCTS,
  CAKE_GALLERY_BRAND,
  CRAFT_PRINCIPLES,
  THEME_AND_WORKSHOP_SLOTS,
  WORKSHOP_POSTER_IMAGE,
  type BakeryProduct,
  type ProductVariant,
} from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';

interface CraftAndScheduleProps {
  onReserveItem: (product: BakeryProduct, variant: ProductVariant) => void;
}

export function CraftAndSchedule({ onReserveItem }: CraftAndScheduleProps) {
  const [slotKind, setSlotKind] = useState<'Custom Themes' | 'Baking Classes'>(
    'Baking Classes'
  );

  const visibleSlots = THEME_AND_WORKSHOP_SLOTS.filter(
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
      <div className="scallop-divider-up bg-[#FAF9F6]" aria-hidden="true" />
      <div className="bg-[#FDF0F4] border-b border-[#F2D9E0] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#8E2945] mb-2">
                About Cake Gallery &amp; Summer Camp
              </p>
              <h2
                className="font-display text-3xl font-semibold text-[#1C1917] tracking-tight mb-4"
                style={{ textWrap: 'balance' }}
              >
                Custom theme cakes &amp; kids baking camps in Chennai
              </h2>
              <p className="text-sm text-[#44403C] leading-relaxed max-w-lg">
                Every creation from Cake Gallery is baked from scratch in T. Nagar for birthdays, anniversaries, and hands-on weekend classes—delivering high taste at honest prices.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#F2CFD9] bg-white p-2 shadow-sm max-w-md">
              <div className="rounded-xl overflow-hidden bg-[#FDF2F5]">
                <BakeryImage
                  src={WORKSHOP_POSTER_IMAGE.url}
                  alt={WORKSHOP_POSTER_IMAGE.alt}
                  fallbackLabel="Kids Baking Summer Camp — T. Nagar, Chennai"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="divide-y divide-[#EED3DC] border-y border-[#EED3DC]">
              {CRAFT_PRINCIPLES.map((item) => (
                <div key={item.index} className="py-5 flex gap-4 items-start">
                  <span className="font-display text-base font-semibold text-[#8E2945] tabular-nums shrink-0 pt-0.5">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1C1917] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#44403C] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="schedule"
            className="scroll-mt-20 lg:col-span-6 bg-white border border-[#F2D9E0] rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-col gap-4 pb-6 border-b border-[#F2E4E8]">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#8E2945] mb-1">
                  Book Sessions &amp; Themes
                </p>
                <h2 className="font-display text-2xl font-semibold text-[#1C1917]">
                  Workshops &amp; Cake Themes
                </h2>
              </div>

              <div
                role="group"
                aria-label="Workshop and theme filter"
                className="inline-flex items-center gap-1 p-1 bg-[#F7EBEF] rounded-lg self-start"
              >
                {(['Baking Classes', 'Custom Themes'] as const).map((tab) => {
                  const active = slotKind === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setSlotKind(tab)}
                      aria-pressed={active}
                      className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                        active
                          ? 'bg-white text-[#8E2945] font-semibold shadow-xs'
                          : 'text-[#57534E] hover:text-[#1C1917]'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="divide-y divide-[#F2E4E8]">
              {visibleSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#57534E]">
                      <span className="font-semibold text-[#8E2945] tabular-nums">
                        {slot.timing}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{slot.tagLabel}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#1C1917]">
                      {slot.title}
                    </h3>
                    <p className="text-sm text-[#57534E]">{slot.notes}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleReserve(slot.productId)}
                    aria-label={`Book ${slot.title}`}
                    className="self-start sm:self-center px-4 py-2 text-xs font-medium text-[#8E2945] bg-[#FFF8FA] border border-[#EBC6D1] rounded-lg hover:bg-[#8E2945] hover:text-white hover:border-[#8E2945] transition-colors whitespace-nowrap shrink-0 min-h-[38px] cursor-pointer"
                  >
                    {slotKind === 'Baking Classes' ? 'Book Seat' : 'Add Theme'}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-5 border-t border-[#F2E4E8] text-xs text-[#57534E] leading-relaxed">
              Want to enroll your child in our next T. Nagar workshop or book a custom birthday cake? Call or message <span className="font-semibold text-[#1C1917] tabular-nums">{CAKE_GALLERY_BRAND.contactDisplay}</span> or DM <span className="font-semibold text-[#1C1917]">{CAKE_GALLERY_BRAND.handle}</span>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
