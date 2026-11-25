import { ArrowRight, CakeSlice, Heart, Instagram } from 'lucide-react';
import {
  BAKERY_PRODUCTS,
  DOLCE_BRAND,
  HERO_MOSAIC_ITEMS,
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
    id: 'spotlight-chocolate',
    title: 'Premium Chocolates & Bowls',
    description:
      'Molten dark chocolate brownie bowls, triple fudge slabs, and thick café-style hot cocoa.',
    imageUrl: '/assets/dolce-divino/dolce_chocolate_sundae.jpg',
    bgClass:
      'bg-white border-[#F2E7EA] shadow-[0_14px_34px_-12px_rgba(0,0,0,0.09)]',
    titleClass: 'text-[#2D2326]',
    descClass: 'text-[#594A4E]',
    ctaClass: 'text-[#C84B68]',
    category: 'Chocolates & Desserts' as CategoryFilter,
    dietary: 'Premium Chocolate' as DietaryFilter,
  },
  {
    id: 'spotlight-breads',
    title: 'Whole Wheat Loaves',
    description:
      '100% homemade golden whole wheat breads kneaded fresh on order with zero preservatives.',
    imageUrl: '/assets/dolce-divino/dolce_wheat_bread.jpg',
    bgClass:
      'bg-[#F9BAC6] border-[#F2A3B3] shadow-[0_14px_34px_-12px_rgba(214,90,118,0.28)]',
    titleClass: 'text-[#2E131B]',
    descClass: 'text-[#4A222E]',
    ctaClass: 'text-[#2E131B]',
    category: 'Artisan Breads & Cookies' as CategoryFilter,
    dietary: 'All' as DietaryFilter,
  },
  {
    id: 'spotlight-cookies',
    title: 'Butter Jam Cookies',
    description:
      'Crisp, melt-in-mouth pure butter shortbread blossoms filled with sweet ruby berry jam.',
    imageUrl: '/assets/dolce-divino/dolce_jam_cookies.jpg',
    bgClass:
      'bg-[#FFEBD6] border-[#F7D7B5] shadow-[0_14px_34px_-12px_rgba(194,133,92,0.22)]',
    titleClass: 'text-[#2D2326]',
    descClass: 'text-[#594A4E]',
    ctaClass: 'text-[#B3435E]',
    category: 'Artisan Breads & Cookies' as CategoryFilter,
    dietary: 'Homemade & Eggless' as DietaryFilter,
  },
  {
    id: 'spotlight-savory',
    title: 'Air-Fried & Gift Bites',
    description:
      'Light oil-free air-fried golden moong dal crunch and curated sweet-savory tasting jars.',
    imageUrl: '/assets/dolce-divino/dolce_moong_dal.jpg',
    bgClass:
      'bg-[#BDF2EC] border-[#96E2D9] shadow-[0_14px_34px_-12px_rgba(72,214,199,0.28)]',
    titleClass: 'text-[#123834]',
    descClass: 'text-[#22544E]',
    ctaClass: 'text-[#123834]',
    category: 'Savory & Gifting' as CategoryFilter,
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
    <section id="top" className="bg-white">
      <div className="bg-[#FDE6EA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-14 lg:pt-14 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-3 bg-white rounded-full pl-2 pr-4 sm:pr-5 py-1.5 shadow-[0_8px_24px_-8px_rgba(208,78,107,0.22)] mb-5 sm:mb-6 max-w-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#FDE6EA] shrink-0 bg-white">
                    <BakeryImage
                      src={DOLCE_BRAND.logoUrl}
                      alt="Dolce Divino crest"
                      fallbackLabel="DD"
                      className="w-full h-full object-cover scale-[1.09]"
                    />
                  </div>
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="font-script text-lg sm:text-xl text-[#D04E6B] truncate">
                      {DOLCE_BRAND.name}
                    </span>
                    <span className="text-xs font-medium text-[#6B5A5F] whitespace-nowrap">
                      {DOLCE_BRAND.handle}
                    </span>
                  </div>
                </div>

                <h1
                  className="font-display text-[#221A1D] font-bold tracking-tight leading-[1.1] mb-4 sm:mb-5"
                  style={{
                    fontSize: 'clamp(2.1rem, 4.1vw, 3.4rem)',
                    textWrap: 'balance',
                  }}
                >
                  Crafted with Love &amp;{' '}
                  <span className="text-[#C84B68]">Premium Chocolate</span>
                </h1>

                <p className="text-sm sm:text-base text-[#594A4E] leading-relaxed max-w-xl mb-7 sm:mb-8">
                  Freshly baked homemade whole wheat loaves, velvety hot chocolate, ruby jam butter cookies, and molten cocoa treats crafted in our FSSAI-registered home kitchen.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-sm font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors whitespace-nowrap shrink-0 min-h-[46px] shadow-[0_10px_22px_-10px_rgba(214,90,118,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D65A76]"
                  >
                    <span>Explore Menu</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <a
                    href="#visit"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-sm font-semibold text-[#C84B68] bg-white border border-[#F5C5CF] rounded-full hover:border-[#D65A76] hover:bg-[#FFF5F7] transition-colors whitespace-nowrap shrink-0 min-h-[46px] shadow-[0_6px_18px_-10px_rgba(214,90,118,0.2)]"
                  >
                    <Instagram className="w-4 h-4" aria-hidden="true" />
                    <span>DM {DOLCE_BRAND.handle}</span>
                  </a>

                  <a
                    href="#schedule"
                    className="inline-flex items-center px-2 py-2.5 text-sm font-semibold text-[#2D2326] hover:text-[#C84B68] underline underline-offset-4 decoration-[#F396A5] transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
                  >
                    Bake Schedule
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative sm:pb-8">
              <div className="bg-white/95 rounded-[28px] sm:rounded-[32px] p-3 sm:p-4 sm:pb-11 border-2 border-white shadow-[0_18px_42px_-14px_rgba(208,78,107,0.22)]">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {HERO_MOSAIC_ITEMS.map((item) => (
                    <button
                      key={item.productId}
                      type="button"
                      onClick={() => openProductById(item.productId)}
                      aria-label={`Inspect ${item.title}`}
                      className="group text-left bg-[#FFF8FA] hover:bg-[#FDE6EA]/60 border border-[#FCE4E9] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 transition-colors cursor-pointer"
                    >
                      <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#FDE6EA] mb-1.5 sm:mb-2">
                        <BakeryImage
                          src={item.url}
                          alt={item.title}
                          fallbackLabel={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-2">
                        <div className="min-w-0">
                          <div className="text-xs sm:text-[13px] font-semibold text-[#2D2326] truncate">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-[#594A4E] truncate">
                            {item.subtitle}
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#C84B68] tabular-nums whitespace-nowrap shrink-0">
                          {item.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3 sm:mt-0 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:justify-between sm:gap-3 sm:absolute sm:bottom-0 sm:left-4 sm:right-4 pointer-events-none">
                <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white rounded-2xl px-3 sm:px-4 py-2.5 shadow-[0_10px_28px_-8px_rgba(0,0,0,0.14)] border border-[#FCE4E9] min-w-0">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F9BAC6] text-[#2E131B] flex items-center justify-center shrink-0">
                    <CakeSlice className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div className="leading-tight min-w-0">
                    <div className="font-display text-xs sm:text-sm font-bold text-[#2D2326] tabular-nums truncate">
                      148+ Bakes
                    </div>
                    <div className="text-[11px] text-[#594A4E] truncate">
                      Fresh on Order
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white rounded-2xl px-3 sm:px-4 py-2.5 shadow-[0_10px_28px_-8px_rgba(0,0,0,0.14)] border border-[#FCE4E9] min-w-0">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#BDF2EC] text-[#123834] flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div className="leading-tight min-w-0">
                    <div className="font-display text-xs sm:text-sm font-bold text-[#2D2326] truncate">
                      FSSAI Registered
                    </div>
                    <div className="text-[11px] text-[#594A4E] truncate">
                      680+ Followers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scallop-divider-down bg-white" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C84B68] mb-1.5">
            HOMEMADE
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-[#221A1D] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Our Signature Creations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
              className={`group text-left rounded-[24px] sm:rounded-[28px] border p-5 sm:p-6 transition-transform duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between gap-4 ${card.bgClass}`}
            >
              <div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-sm mb-4 bg-white">
                  <BakeryImage
                    src={card.imageUrl}
                    alt={card.title}
                    fallbackLabel={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className={`font-display text-lg font-bold mb-1.5 ${card.titleClass}`}>
                  {card.title}
                </h3>
                <p className={`text-xs sm:text-[13px] leading-relaxed ${card.descClass}`}>
                  {card.description}
                </p>
              </div>
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap ${card.ctaClass}`}>
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
