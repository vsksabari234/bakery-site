import { useEffect, useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import type { BakeryProduct, ProductVariant } from '../data/bakeryData';
import { formatPrice } from '../utils/bakeryLogic';
import { BakeryImage } from './BakeryImage';

interface ProductModalProps {
  product: BakeryProduct | null;
  onClose: () => void;
  onAddToBag: (
    product: BakeryProduct,
    variant: ProductVariant,
    quantity: number
  ) => void;
}

export function ProductModal({
  product,
  onClose,
  onAddToBag,
}: ProductModalProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (product) {
      setSelectedVariantId(product.variants[0].id);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const activeVariant =
    product.variants.find((v) => v.id === selectedVariantId) ||
    product.variants[0];
  const lineTotalInr = activeVariant.priceInr * quantity;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D2326]/35 backdrop-blur-[3px]"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#FCE4E9] rounded-[32px] max-w-3xl w-full overflow-hidden shadow-[0_24px_60px_-15px_rgba(45,35,38,0.28)] grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:col-span-6 p-3 md:pr-0 bg-white">
          <div className="h-full rounded-2xl overflow-hidden bg-[#FDE6EA]">
            <BakeryImage
              src={product.imageUrl}
              alt={product.imageAlt}
              fallbackLabel={product.name}
              className="w-full h-full object-cover aspect-[4/3] md:aspect-auto min-h-[260px]"
            />
          </div>
        </div>

        <div className="md:col-span-6 p-6 sm:p-7 flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="text-xs text-[#594A4E] flex flex-wrap items-center gap-2">
                <span className="font-semibold text-[#C84B68]">
                  {product.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{product.prepLead}</span>
                <span aria-hidden="true">·</span>
                <span>{product.availabilityNote}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close product details"
                className="p-1.5 -mr-1.5 -mt-1.5 rounded-full text-[#594A4E] hover:text-[#2D2326] hover:bg-[#FDE6EA] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <h2
              id="pdp-modal-title"
              className="font-display text-2xl font-bold text-[#221A1D] mb-2"
            >
              {product.name}
            </h2>

            <p className="text-lg font-bold text-[#C84B68] tabular-nums mb-4">
              {formatPrice(activeVariant.priceInr)}
            </p>

            <p className="text-sm text-[#594A4E] leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="py-3 border-y border-[#FCE4E9] space-y-2 text-xs text-[#594A4E] mb-5">
              <div>
                <span className="font-semibold text-[#2D2326]">Layers &amp; Craft: </span>
                <span>{product.ingredientsAndMethod}</span>
              </div>
              <div>
                <span className="font-semibold text-[#2D2326]">Allergens: </span>
                <span>
                  {product.allergens.length > 0
                    ? product.allergens.join(', ')
                    : 'Zero Common Allergens Listed'}
                </span>
              </div>
            </div>

            <div>
              <span className="block text-xs font-semibold text-[#2D2326] mb-2">
                Select Weight / Serving Option
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {product.variants.map((variant) => {
                  const selected = variant.id === activeVariant.id;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariantId(variant.id)}
                      aria-pressed={selected}
                      className={`p-3 rounded-2xl border text-left transition-colors cursor-pointer ${
                        selected
                          ? 'border-[#D65A76] bg-[#FFF5F7] ring-1 ring-[#D65A76]'
                          : 'border-[#F5D6DF] bg-white hover:border-[#F396A5]'
                      }`}
                    >
                      <div className="text-xs font-semibold text-[#2D2326]">
                        {variant.label}
                      </div>
                      <div className="text-xs text-[#594A4E] tabular-nums mt-0.5">
                        {variant.weightOrCount} · {formatPrice(variant.priceInr)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2">
            <div className="inline-flex items-center border border-[#F5D6DF] bg-white rounded-full overflow-hidden shrink-0">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="w-10 h-11 flex items-center justify-center text-[#C84B68] hover:bg-[#FDE6EA] transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" aria-hidden="true" />
              </button>
              <span
                aria-label={`Quantity ${quantity}`}
                className="w-8 text-center text-sm font-bold text-[#2D2326] tabular-nums"
              >
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="w-10 h-11 flex items-center justify-center text-[#C84B68] hover:bg-[#FDE6EA] transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onAddToBag(product, activeVariant, quantity);
                onClose();
              }}
              className="flex-1 min-w-[180px] py-3 px-5 text-sm font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors whitespace-nowrap min-h-[44px] cursor-pointer tabular-nums shadow-[0_8px_20px_-10px_rgba(214,90,118,0.5)]"
            >
              Add to Bag — {formatPrice(lineTotalInr)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
