import { Minus, Plus, Search, X } from 'lucide-react';
import type { BakeryProduct, ProductVariant } from '../data/bakeryData';
import {
  formatPrice,
  type CartItem,
  type CategoryFilter,
  type DietaryFilter,
} from '../utils/bakeryLogic';
import { BakeryImage } from './BakeryImage';

interface MenuCatalogProps {
  products: BakeryProduct[];
  category: CategoryFilter;
  dietary: DietaryFilter;
  query: string;
  cart: CartItem[];
  onCategoryChange: (cat: CategoryFilter) => void;
  onDietaryChange: (diet: DietaryFilter) => void;
  onQueryChange: (q: string) => void;
  onResetFilters: () => void;
  onQuickAdd: (product: BakeryProduct, variant: ProductVariant) => void;
  onUpdateQuantity: (key: string, delta: number) => void;
  onSelectProduct: (product: BakeryProduct) => void;
}

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Chocolates & Desserts',
  'Artisan Breads & Cookies',
  'Savory & Gifting',
];

const DIETARY_OPTIONS: DietaryFilter[] = [
  'All',
  'Premium Chocolate',
  'Homemade & Eggless',
];

export function MenuCatalog({
  products,
  category,
  dietary,
  query,
  cart,
  onCategoryChange,
  onDietaryChange,
  onQueryChange,
  onResetFilters,
  onQuickAdd,
  onUpdateQuantity,
  onSelectProduct,
}: MenuCatalogProps) {
  const getDefaultCartItem = (product: BakeryProduct) => {
    const defaultVariant = product.variants[0];
    return cart.find(
      (item) =>
        item.productId === product.id && item.variantId === defaultVariant.id
    );
  };

  return (
    <section
      id="menu"
      className="scroll-mt-20 py-14 lg:py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C84B68] mb-2">
              Dolce Divino Menu
            </p>
            <h2
              className="font-display text-3xl lg:text-4xl font-bold text-[#221A1D] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Homemade chocolates, wheat loaves &amp; butter cookies
            </h2>
          </div>
          <p className="text-sm text-[#594A4E] max-w-sm">
            Pick an item to choose pack size or serving count, or add directly to your order bag.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#FCE4E9]">
          <div className="relative w-full lg:w-80">
            <label htmlFor="menu-search" className="sr-only">
              Search chocolates, wheat loaves, cookies, or snacks
            </label>
            <Search
              className="w-4 h-4 text-[#8A767C] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search cocoa, bread & cookies"
              className="w-full pl-11 pr-9 py-2.5 text-sm bg-[#FFF9FA] border border-[#F8D6DF] rounded-full text-[#2D2326] placeholder:text-[#8A767C] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA] transition-colors min-h-[44px]"
            />
            {query.length > 0 && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search query"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8A767C] hover:text-[#2D2326] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="bg-[#FFF9FA] border border-[#FCE4E9] rounded-[28px] py-14 px-6 text-center max-w-lg mx-auto">
            <h3 className="font-display text-xl font-bold text-[#2D2326] mb-2">
              No items match your current filters
            </h3>
            <p className="text-sm text-[#594A4E] mb-6">
              Try clearing your search or switching back to all bakery categories.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors cursor-pointer min-h-[44px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            data-testid="menu-product-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {products.map((product) => {
              const primaryVariant = product.variants[0];
              const inCart = getDefaultCartItem(product);

              return (
                <article
                  key={product.id}
                  data-testid={`product-card-${product.id}`}
                  className="group bg-white border border-[#FCE4E9] rounded-[28px] overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 shadow-[0_12px_30px_-14px_rgba(208,78,107,0.16)]"
                >
                  <div className="p-2.5 pb-0">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      aria-label={`View details for ${product.name}`}
                      className="block w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#FDE6EA] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D65A76]"
                    >
                      <BakeryImage
                        src={product.imageUrl}
                        alt={product.imageAlt}
                        fallbackLabel={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#594A4E] mb-1.5">
                        <span className="font-semibold text-[#C84B68] whitespace-nowrap">
                          {product.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="whitespace-nowrap">{product.prepLead}</span>
                        <span aria-hidden="true">·</span>
                        <span className="whitespace-nowrap">{product.availabilityNote}</span>
                      </div>

                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="font-display text-base font-bold text-[#2D2326]">
                          <button
                            type="button"
                            onClick={() => onSelectProduct(product)}
                            className="text-left hover:text-[#C84B68] transition-colors cursor-pointer"
                          >
                            {product.name}
                          </button>
                        </h3>
                        <span className="text-[15px] font-bold text-[#C84B68] tabular-nums shrink-0 whitespace-nowrap">
                          {formatPrice(primaryVariant.priceInr)}
                        </span>
                      </div>

                      <p className="text-sm text-[#594A4E] leading-relaxed line-clamp-2">
                        {product.shortNote}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#FCE4E9] flex items-center justify-between gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="min-w-0 truncate text-xs font-medium text-[#594A4E] hover:text-[#C84B68] underline underline-offset-4 decoration-[#F396A5] cursor-pointer py-2 text-left"
                      >
                        {primaryVariant.label} · Sizes
                      </button>

                      {inCart ? (
                        <div className="inline-flex items-center border border-[#D65A76] rounded-full overflow-hidden bg-[#FFF5F7]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(inCart.key, -1)}
                            aria-label={`Decrease quantity of ${product.name}`}
                            className="w-9 h-9 flex items-center justify-center text-[#C84B68] hover:bg-[#FDE6EA] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                          <span
                            aria-label={`${inCart.quantity} in bag`}
                            className="px-2.5 text-xs font-bold text-[#2D2326] tabular-nums"
                          >
                            {inCart.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(inCart.key, 1)}
                            aria-label={`Increase quantity of ${product.name}`}
                            className="w-9 h-9 flex items-center justify-center text-[#C84B68] hover:bg-[#FDE6EA] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onQuickAdd(product, primaryVariant)}
                          aria-label={`Add ${product.name} to bag`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors whitespace-nowrap shrink-0 min-h-[38px] cursor-pointer shadow-[0_6px_16px_-8px_rgba(214,90,118,0.45)]"
                        >
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Add to Bag</span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
