import { ArrowRight, Phone } from 'lucide-react';
import {
  BAKERY_PRODUCTS,
  CAKE_GALLERY_BRAND,
  HERO_IMAGE,
  HERO_SHOWCASE_ACCENTS,
  type BakeryProduct,
} from '../data/bakeryData';
import type { CategoryFilter, DietaryFilter } from '../utils/bakeryLogic';
import { BakeryImage } from './BakeryImage';

interface HeroProps {
  onSelectCategoryCard: (category: CategoryFilter, dietary?: DietaryFilter) => void;
  onSelectProduct: (product: BakeryProduct) => void;
}

const SIGNATURE_HIGHLIGHTS = [
  {
    id: 'spotlight-custom',
    title: 'Custom Theme Cakes',
    description:
      'Two-tier butterfly, unicorn, floral & milestone cakes crafted for birthdays and weddings.',
    imageUrl: '/src/assets/images/cg_lavender_tier_1795329956750.jpg',
    bgClass: 'bg-white border-[#F2D9E0]',
    category: 'Custom Cakes' as CategoryFilter,
    dietary: 'All' as DietaryFilter,
  },
  {
    id: 'spotlight-brownies',
    title: 'Brownies & Gift Slabs',
    description:
      'Fudgy triple-chocolate Ferrero, KitKat & fresh strawberry brownie slabs baked fresh.',
    imageUrl: '/src/assets/images/cg_strawberry_brownie_1795330036874.jpg',
    bgClass: 'bg-[#FCE3EA] border-[#F4C4D2]',
    category: 'Brownies & Slabs' as CategoryFilter,
    dietary: 'All' as DietaryFilter,
  },
  {
    id: 'spotlight-fruit',
    title: 'Fresh Fruit & Florals',
    description:
      '100% carved fresh watermelon fruit towers & real gerbera flower buttercream cakes.',
    imageUrl: '/src/assets/images/cg_watermelon_fruit_1795329957013.jpg',
    bgClass: 'bg-[#FFF3DF] border-[#F3DEC0]',
    category: 'All' as CategoryFilter,
    dietary: 'Fresh Fruit & Floral' as DietaryFilter,
  },
  {
    id: 'spotlight-workshops',
    title: 'Kids Baking Camp',
    description:
      'Hands-on weekend sessions in T. Nagar covering cupcakes, popsicles & mousse cups.',
    imageUrl: '/src/assets/images/cg_kids_workshop_1795329958203.jpg',
    bgClass: 'bg-[#E1F4EF] border-[#BBE5DA]',
    category: 'Cupcakes & Events' as CategoryFilter,
    dietary: 'All' as DietaryFilter,
  },
];

export function Hero({ onSelectCategoryCard, onSelectProduct }: HeroProps) {
  const openProductById = (productId: string) => {
    const match = BAKERY_PRODUCTS.find((p) => p.id === productId);
    if (match) {
      onSelectProduct(match);
    }
  };

  return (
    <section id="top" className="border-b border-[#E7E5E0] bg-white">
      <div className="bg-gradient-to-br from-[#FCE8EE] via-[#FDF2F5] to-[#FFF9FA]">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-3.5 bg-white/95 border border-[#F2D9E0] rounded-2xl px-4 py-2.5 shadow-xs mb-6">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#F3D3DC] shrink-0 bg-[#FDE047]">
                    <BakeryImage
                      src={CAKE_GALLERY_BRAND.logoUrl}
                      alt="Cake Gallery homemade cakes seal"
                      fallbackLabel="CG"
                      className="w-full h-full object-cover scale-[1.18]"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="font-display italic text-base font-semibold text-[#1C1917]">
                      Cake Gallery · Love at First Bite
                    </div>
                    <div className="text-xs text-[#57534E]">
                      {CAKE_GALLERY_BRAND.handle} · {CAKE_GALLERY_BRAND.location}
                    </div>
                  </div>
                </div>

                <h1
                  className="font-display text-[#1C1917] font-semibold tracking-tight leading-[1.06] mb-5"
                  style={{
                    fontSize: 'clamp(2.35rem, 4.2vw, 3.65rem)',
                    textWrap: 'balance',
                  }}
                >
                  Turning Celebrations Into{' '}
                  <span className="italic font-normal text-[#8E2945]">
                    Sweet Memories.
                  </span>
                </h1>

                <p className="text-base text-[#44403C] leading-relaxed max-w-xl mb-8">
                  Low price with high taste homemade cakes crafted fresh in T. Nagar, Chennai. From two-tier butterfly and unicorn theme cakes to Ferrero brownie slabs and kids baking classes.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#8E2945] rounded-xl hover:bg-[#711E35] transition-colors whitespace-nowrap shrink-0 min-h-[46px] shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E2945]"
                  >
                    <span>Explore Cake Menu</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <a
                    href="#visit"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#8E2945] bg-white border border-[#EBC6D1] rounded-xl hover:border-[#8E2945] hover:bg-[#FFF5F7] transition-colors whitespace-nowrap shrink-0 min-h-[46px] shadow-xs"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span className="tabular-nums">
                      Order · {CAKE_GALLERY_BRAND.contactDisplay}
                    </span>
                  </a>

                  <a
                    href="#schedule"
                    className="inline-flex items-center px-2 py-2.5 text-sm font-medium text-[#1C1917] hover:text-[#8E2945] underline underline-offset-4 decoration-[#D6B8C1] hover:decoration-[#8E2945] transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
                  >
                    Kids Baking Classes
                  </a>
                </div>
              </div>

              <div className="mt-9 pt-6 border-t border-[#EED3DC] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#57534E]">
                <div>
                  <div className="font-display text-lg font-semibold text-[#1C1917] tabular-nums">
                    220+ Cakes
                  </div>
                  <div>Crafted fresh in Chennai</div>
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-[#1C1917] tabular-nums">
                    ₹ 480 Onward
                  </div>
                  <div>Low price · High taste</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="font-display text-lg font-semibold text-[#8E2945]">
                    Eggless Ready
                  </div>
                  <div>On every custom tier</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/95 rounded-[28px] p-3.5 sm:p-4 border border-[#F2CFD9] shadow-lg">
                <div className="rounded-[20px] overflow-hidden bg-[#FDF2F5] aspect-[4/3]">
                  <BakeryImage
                    src={HERO_IMAGE.url}
                    alt={HERO_IMAGE.alt}
                    fallbackLabel="Cake Gallery Two-Tier Butterfly Cake"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mt-3">
                  {HERO_SHOWCASE_ACCENTS.map((accent) => (
                    <button
                      key={accent.productId}
                      type="button"
                      onClick={() => openProductById(accent.productId)}
                      aria-label={`Inspect ${accent.title}`}
                      className="group text-left bg-[#FFF9FA] hover:bg-[#FCE8EE]/60 border border-[#F3DCE3] rounded-xl p-1.5 transition-colors cursor-pointer"
                    >
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#F2EFE9] mb-1.5">
                        <BakeryImage
                          src={accent.url}
                          alt={accent.title}
                          fallbackLabel={accent.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="px-1">
                        <div className="text-[11px] font-semibold text-[#1C1917] truncate">
                          {accent.title}
                        </div>
                        <div className="text-[11px] font-medium text-[#8E2945] tabular-nums">
                          {accent.price}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scallop-divider-down bg-white" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-14">
        <div className="text-center max-w-xl mx-auto mb-9">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8E2945] mb-1.5">
            Homemade in T. Nagar
          </p>
          <h2
            className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1917] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Our Signature Cake Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SIGNATURE_HIGHLIGHTS.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => {
                onSelectCategoryCard(card.category, card.dietary);
                document
                  .getElementById('menu')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group text-left rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer flex flex-col justify-between gap-4 ${card.bgClass}`}
            >
              <div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm mb-4 bg-[#FAF9F6]">
                  <BakeryImage
                    src={card.imageUrl}
                    alt={card.title}
                    fallbackLabel={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#1C1917] mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E2945] whitespace-nowrap">
                <span>Browse Collection</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
