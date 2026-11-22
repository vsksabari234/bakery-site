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
  'Custom Cakes',
  'Brownies & Slabs',
  'Cupcakes & Events',
];

const DIETARY_OPTIONS: DietaryFilter[] = [
  'All',
  'Eggless Option',
  'Fresh Fruit & Floral',
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
      className="scroll-mt-20 py-16 lg:py-20 border-b border-[#E7E5E0]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-wide text-[#57534E] mb-2">
              Cake Gallery Menu
            </p>
            <h2
              className="font-display text-3xl lg:text-4xl font-normal text-[#1C1917] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Custom theme cakes, brownie slabs &amp; workshops
            </h2>
          </div>
          <p className="text-sm text-[#57534E] max-w-sm">
            Pick a creation to customize weight and serving size, or add straight to your order bag.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#E7E5E0]">
          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label="Category filter"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFECE6] rounded-lg"
            >
              {CATEGORIES.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onCategoryChange(cat)}
                    aria-pressed={active}
                    className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                      active
                        ? 'bg-white text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div
              role="group"
              aria-label="Preference filter"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFECE6] rounded-lg"
            >
              {DIETARY_OPTIONS.map((opt) => {
                const active = dietary === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onDietaryChange(opt)}
                    aria-pressed={active}
                    className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[36px] ${
                      active
                        ? 'bg-white text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {opt === 'All' ? 'All Options' : opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative w-full lg:w-72">
            <label htmlFor="menu-search" className="sr-only">
              Search cakes, brownies, or baking workshops
            </label>
            <Search
              className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search brownie, floral, cake..."
              className="w-full pl-10 pr-9 py-2.5 text-sm bg-white border border-[#E7E5E0] rounded-lg text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#8E2945] transition-colors min-h-[42px]"
            />
            {query.length > 0 && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#78716C] hover:text-[#1C1917] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="bg-white border border-[#E7E5E0] rounded-xl py-14 px-6 text-center max-w-lg mx-auto">
            <h3 className="font-display text-xl text-[#1C1917] mb-2">
              No cakes match your current filters
            </h3>
            <p className="text-sm text-[#57534E] mb-6">
              Try clearing your search or switching back to all cake categories.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#8E2945] rounded-lg hover:bg-[#711E35] transition-colors cursor-pointer min-h-[42px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            data-testid="menu-product-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => {
              const primaryVariant = product.variants[0];
              const inCart = getDefaultCartItem(product);

              return (
                <article
                  key={product.id}
                  data-testid={`product-card-${product.id}`}
                  className="group bg-white border border-[#EFE3E6] rounded-2xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5 shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    aria-label={`View details for ${product.name}`}
                    className="block w-full aspect-[4/3] overflow-hidden bg-[#FDF2F5] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#8E2945]"
                  >
                    <BakeryImage
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fallbackLabel={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </button>

                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#57534E] mb-1.5">
                        <span className="font-semibold text-[#8E2945] whitespace-nowrap">
                          {product.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="whitespace-nowrap">{product.prepLead}</span>
                        <span aria-hidden="true">·</span>
                        <span className="whitespace-nowrap">{product.availabilityNote}</span>
                      </div>

                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="text-base font-semibold text-[#1C1917]">
                          <button
                            type="button"
                            onClick={() => onSelectProduct(product)}
                            className="text-left hover:text-[#8E2945] transition-colors cursor-pointer"
                          >
                            {product.name}
                          </button>
                        </h3>
                        <span className="text-[15px] font-semibold text-[#1C1917] tabular-nums shrink-0 whitespace-nowrap">
                          {formatPrice(primaryVariant.priceInr)}
                        </span>
                      </div>

                      <p className="text-sm text-[#57534E] leading-relaxed line-clamp-2">
                        {product.shortNote}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F4E9EC] flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="text-xs font-medium text-[#57534E] hover:text-[#8E2945] underline underline-offset-4 decoration-[#E5CBD3] cursor-pointer py-2 whitespace-nowrap shrink-0"
                      >
                        {primaryVariant.label} · Sizes
                      </button>

                      {inCart ? (
                        <div className="inline-flex items-center border border-[#8E2945] rounded-lg overflow-hidden bg-[#FFF9FA]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(inCart.key, -1)}
                            aria-label={`Decrease quantity of ${product.name}`}
                            className="w-9 h-9 flex items-center justify-center text-[#8E2945] hover:bg-[#FCE8EE] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                          <span
                            aria-label={`${inCart.quantity} in bag`}
                            className="px-2.5 text-xs font-semibold text-[#1C1917] tabular-nums"
                          >
                            {inCart.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(inCart.key, 1)}
                            aria-label={`Increase quantity of ${product.name}`}
                            className="w-9 h-9 flex items-center justify-center text-[#8E2945] hover:bg-[#FCE8EE] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onQuickAdd(product, primaryVariant)}
                          aria-label={`Add ${product.name} to bag`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#8E2945] rounded-lg hover:bg-[#711E35] transition-colors whitespace-nowrap shrink-0 min-h-[38px] cursor-pointer"
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
