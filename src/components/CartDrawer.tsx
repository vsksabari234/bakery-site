import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Minus, Plus, Trash2, X } from 'lucide-react';
import { PANDU_BRAND, PICKUP_TIME_SLOTS } from '../data/bakeryData';
import {
  calculateCartTotals,
  createOrderReceipt,
  formatPrice,
  validatePreOrderForm,
  type CartItem,
  type OrderReceipt,
} from '../utils/bakeryLogic';
import { BakeryImage } from './BakeryImage';

interface CartDrawerProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (key: string, delta: number) => void;
  onRemoveItem: (key: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [pickupSlot, setPickupSlot] = useState<string>(PICKUP_TIME_SLOTS[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [receipt, setReceipt] = useState<OrderReceipt | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totals = calculateCartTotals(cart);

  const handleCheckout = (e: FormEvent) => {
    e.preventDefault();
    const validation = validatePreOrderForm({
      customerName,
      contactInfo,
      pickupSlot,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const confirmedReceipt = createOrderReceipt(cart, {
      customerName,
      contactInfo,
      pickupSlot,
    });
    setReceipt(confirmedReceipt);
    onClearCart();
  };

  const handleStartNewOrder = () => {
    setReceipt(null);
    setCustomerName('');
    setContactInfo('');
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pre-order bag"
      className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF9F6] h-full shadow-2xl border-l border-[#E7E5E0] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#E7E5E0] bg-white flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl text-[#1C1917]">
              {receipt ? 'Order Confirmed' : 'Pandu Bakery Order Bag'}
            </h2>
            {!receipt && (
              <p className="text-xs text-[#57534E] tabular-nums">
                {totals.itemCount} {totals.itemCount === 1 ? 'item' : 'items'} selected
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close bag drawer"
            className="p-2 -mr-2 rounded-lg text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EFE9] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {receipt ? (
          <div
            data-testid="order-receipt"
            className="flex-1 overflow-y-auto p-6 space-y-6"
          >
            <div className="p-5 bg-white border border-[#E7E5E0] rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-[#4A2810]">
                <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold">
                  Order #{receipt.orderNumber} Confirmed — Preparing Fresh
                </span>
              </div>
              <p className="text-sm text-[#57534E]">
                Reserved for{' '}
                <span className="font-medium text-[#1C1917]">
                  {receipt.customerName}
                </span>{' '}
                in the{' '}
                <span className="font-medium text-[#1C1917] tabular-nums">
                  {receipt.pickupSlot}
                </span>{' '}
                window. Questions? Message WA{' '}
                <span className="font-medium text-[#1C1917] tabular-nums">
                  {PANDU_BRAND.whatsappDisplay}
                </span>.
              </p>
            </div>

            <div className="bg-white border border-[#E7E5E0] rounded-xl divide-y divide-[#E7E5E0]">
              {receipt.items.map((item) => (
                <div
                  key={item.key}
                  className="px-4 py-3 flex items-center justify-between gap-3 text-sm"
                >
                  <div>
                    <div className="font-medium text-[#1C1917]">
                      {item.quantity} × {item.productName}
                    </div>
                    <div className="text-xs text-[#57534E]">
                      {item.variantLabel} ({item.weightOrCount})
                    </div>
                  </div>
                  <span className="font-medium text-[#1C1917] tabular-nums whitespace-nowrap">
                    {formatPrice(item.unitPriceIdr * item.quantity)}
                  </span>
                </div>
              ))}
              <div className="px-4 py-3.5 flex items-center justify-between text-sm font-semibold text-[#1C1917]">
                <span>Total (Pay on Pickup / Transfer)</span>
                <span className="tabular-nums">{receipt.formattedTotal}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleStartNewOrder}
              className="w-full py-3 px-4 text-sm font-medium text-white bg-[#4A2810] rounded-lg hover:bg-[#361C0A] transition-colors cursor-pointer min-h-[44px]"
            >
              Done &amp; Return to Bakery
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-display text-xl text-[#1C1917] mb-2">
              Your order bag is empty
            </h3>
            <p className="text-sm text-[#57534E] max-w-xs mb-6">
              Add Nastar jars, Kastengel cheese sticks, shell madeleines, or warm sesame buns to book your batch.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#4A2810] rounded-lg hover:bg-[#361C0A] transition-colors cursor-pointer"
            >
              Browse Homemade Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              <div className="px-4 py-3 bg-[#EFECE6] rounded-lg text-xs text-[#1C1917]">
                {totals.qualifiesFreeGift ? (
                  <span className="font-medium text-[#4A2810]">
                    Included: Complimentary Pandu Bakery gift ribbon &amp; greeting tag.
                  </span>
                ) : (
                  <span>
                    Add{' '}
                    <span className="font-semibold tabular-nums">
                      {formatPrice(totals.remainingForFreeGiftIdr)}
                    </span>{' '}
                    more for complimentary gift ribbon wrapping.
                  </span>
                )}
              </div>

              <div className="divide-y divide-[#E7E5E0] bg-white border border-[#E7E5E0] rounded-xl">
                {cart.map((item) => (
                  <div key={item.key} className="p-4 flex gap-3.5 items-start">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#F2EFE9] shrink-0">
                      <BakeryImage
                        src={item.imageUrl}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-[#1C1917] truncate">
                          {item.productName}
                        </h3>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.key)}
                          aria-label={`Remove ${item.productName} (${item.variantLabel})`}
                          className="text-[#78716C] hover:text-[#991B1B] p-1 -mr-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      <p className="text-xs text-[#57534E] mb-2.5">
                        {item.variantLabel} · {item.weightOrCount}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-[#E7E5E0] rounded-md">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.key, -1)}
                            aria-label={`Decrease quantity of ${item.productName}`}
                            className="w-7 h-7 flex items-center justify-center text-[#1C1917] hover:bg-[#F2EFE9] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" aria-hidden="true" />
                          </button>
                          <span className="px-2 text-xs font-semibold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.key, 1)}
                            aria-label={`Increase quantity of ${item.productName}`}
                            className="w-7 h-7 flex items-center justify-center text-[#1C1917] hover:bg-[#F2EFE9] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" aria-hidden="true" />
                          </button>
                        </div>

                        <span className="text-sm font-semibold text-[#1C1917] tabular-nums whitespace-nowrap">
                          {formatPrice(item.unitPriceIdr * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <form
                id="preorder-checkout-form"
                onSubmit={handleCheckout}
                noValidate
                className="space-y-3.5 pt-2"
              >
                <h3 className="text-xs font-semibold tracking-wide text-[#57534E]">
                  Pickup &amp; WhatsApp Details
                </h3>

                <div>
                  <label
                    htmlFor="checkout-name"
                    className="block text-xs font-medium text-[#1C1917] mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Budi Santoso"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#4A2810] min-h-[40px]"
                  />
                  {errors.customerName && (
                    <p className="text-xs text-[#991B1B] mt-1" role="alert">
                      {errors.customerName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="checkout-contact"
                    className="block text-xs font-medium text-[#1C1917] mb-1"
                  >
                    WhatsApp Number or Email
                  </label>
                  <input
                    id="checkout-contact"
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="0857 7316 9999 or email"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#4A2810] min-h-[40px]"
                  />
                  {errors.contactInfo && (
                    <p className="text-xs text-[#991B1B] mt-1" role="alert">
                      {errors.contactInfo}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="checkout-slot"
                    className="block text-xs font-medium text-[#1C1917] mb-1"
                  >
                    Preferred Pickup Window
                  </label>
                  <select
                    id="checkout-slot"
                    value={pickupSlot}
                    onChange={(e) => setPickupSlot(e.target.value)}
                    className="w-full pl-3 pr-8 py-2 text-sm bg-white border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#4A2810] min-h-[40px] tabular-nums"
                  >
                    {PICKUP_TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>

            <div className="p-6 bg-white border-t border-[#E7E5E0] space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#57534E]">Estimated Subtotal</span>
                <span
                  data-testid="cart-subtotal"
                  className="text-base font-semibold text-[#1C1917] tabular-nums"
                >
                  {totals.formattedSubtotal}
                </span>
              </div>
              <button
                type="submit"
                form="preorder-checkout-form"
                className="w-full py-3 px-5 text-sm font-medium text-white bg-[#4A2810] rounded-lg hover:bg-[#361C0A] transition-colors cursor-pointer min-h-[44px]"
              >
                Confirm Pre-Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
