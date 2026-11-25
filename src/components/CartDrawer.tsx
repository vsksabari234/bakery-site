import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Minus, Plus, Trash2, X } from 'lucide-react';
import { DOLCE_BRAND, PICKUP_TIME_SLOTS } from '../data/bakeryData';
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
      aria-label="Dolce Divino order bag"
      className="fixed inset-0 z-50 flex justify-end bg-[#2D2326]/35 backdrop-blur-[3px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl border-l border-[#FCE4E9] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#FCE4E9] bg-[#FDE6EA] flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-[#221A1D]">
              {receipt ? 'Order Confirmed' : 'Dolce Divino Order Bag'}
            </h2>
            {!receipt && (
              <p className="text-xs text-[#594A4E] tabular-nums">
                {totals.itemCount} {totals.itemCount === 1 ? 'item' : 'items'} selected
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close bag drawer"
            className="p-2 -mr-2 rounded-full text-[#594A4E] hover:text-[#2D2326] hover:bg-white/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {receipt ? (
          <div
            data-testid="order-receipt"
            className="flex-1 overflow-y-auto p-6 space-y-6"
          >
            <div className="p-5 bg-[#FFF7F9] border border-[#FCE4E9] rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-[#C84B68]">
                <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span className="text-sm font-bold">
                  Order #{receipt.orderNumber} Confirmed — Preparing Fresh
                </span>
              </div>
              <p className="text-sm text-[#594A4E]">
                Booked for{' '}
                <span className="font-semibold text-[#2D2326]">
                  {receipt.customerName}
                </span>{' '}
                during{' '}
                <span className="font-semibold text-[#2D2326] tabular-nums">
                  {receipt.pickupSlot}
                </span>{' '}
                ({DOLCE_BRAND.credential}). Need custom notes? DM{' '}
                <span className="font-semibold text-[#2D2326]">
                  {DOLCE_BRAND.handle}
                </span>.
              </p>
            </div>

            <div className="bg-white border border-[#FCE4E9] rounded-3xl divide-y divide-[#FCE4E9]">
              {receipt.items.map((item) => (
                <div
                  key={item.key}
                  className="px-4 py-3 flex items-center justify-between gap-3 text-sm"
                >
                  <div>
                    <div className="font-semibold text-[#2D2326]">
                      {item.quantity} × {item.productName}
                    </div>
                    <div className="text-xs text-[#594A4E]">
                      {item.variantLabel} ({item.weightOrCount})
                    </div>
                  </div>
                  <span className="font-semibold text-[#2D2326] tabular-nums whitespace-nowrap">
                    {formatPrice(item.unitPriceInr * item.quantity)}
                  </span>
                </div>
              ))}
              <div className="px-4 py-3.5 flex items-center justify-between text-sm font-bold text-[#2D2326]">
                <span>Estimated Total</span>
                <span className="tabular-nums text-[#C84B68]">{receipt.formattedTotal}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleStartNewOrder}
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors cursor-pointer min-h-[44px]"
            >
              Done &amp; Return to Dolce Divino
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-display text-xl font-bold text-[#221A1D] mb-2">
              Your bake bag is empty
            </h3>
            <p className="text-sm text-[#594A4E] max-w-xs mb-6">
              Add molten chocolate brownie bowls, rich hot chocolate jars, whole wheat loaves, or butter jam cookies.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors cursor-pointer"
            >
              Browse Dolce Divino Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              <div className="px-4 py-3 bg-[#BDF2EC]/60 rounded-2xl text-xs text-[#123834] border border-[#96E2D9]">
                {totals.qualifiesFreeGift ? (
                  <span className="font-semibold">
                    Included: Complimentary handcrafted dark choco mini bites.
                  </span>
                ) : (
                  <span>
                    Add{' '}
                    <span className="font-bold tabular-nums">
                      {formatPrice(totals.remainingForFreeGiftInr)}
                    </span>{' '}
                    more for complimentary handcrafted choco mini bites.
                  </span>
                )}
              </div>

              <div className="divide-y divide-[#FCE4E9] bg-[#FFF9FA] border border-[#FCE4E9] rounded-3xl">
                {cart.map((item) => (
                  <div key={item.key} className="p-4 flex gap-3.5 items-start">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#FDE6EA] shrink-0">
                      <BakeryImage
                        src={item.imageUrl}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-[#2D2326] truncate">
                          {item.productName}
                        </h3>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.key)}
                          aria-label={`Remove ${item.productName} (${item.variantLabel})`}
                          className="text-[#8A767C] hover:text-[#991B1B] p-1 -mr-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      <p className="text-xs text-[#594A4E] mb-2.5">
                        {item.variantLabel} · {item.weightOrCount}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-[#F5D6DF] rounded-full overflow-hidden bg-white">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.key, -1)}
                            aria-label={`Decrease quantity of ${item.productName}`}
                            className="w-7 h-7 flex items-center justify-center text-[#C84B68] hover:bg-[#FDE6EA] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" aria-hidden="true" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#2D2326] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.key, 1)}
                            aria-label={`Increase quantity of ${item.productName}`}
                            className="w-7 h-7 flex items-center justify-center text-[#C84B68] hover:bg-[#FDE6EA] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" aria-hidden="true" />
                          </button>
                        </div>

                        <span className="text-sm font-bold text-[#2D2326] tabular-nums whitespace-nowrap">
                          {formatPrice(item.unitPriceInr * item.quantity)}
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
                <h3 className="text-xs font-semibold tracking-wide text-[#594A4E]">
                  Dispatch &amp; Pickup Details
                </h3>

                <div>
                  <label
                    htmlFor="checkout-name"
                    className="block text-xs font-semibold text-[#2D2326] mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ananya Sharma"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#F5D6DF] rounded-xl text-[#2D2326] placeholder:text-[#8A767C] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA] min-h-[42px]"
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
                    className="block text-xs font-semibold text-[#2D2326] mb-1"
                  >
                    Phone / WhatsApp or Email
                  </label>
                  <input
                    id="checkout-contact"
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="98401 23456 or email"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#F5D6DF] rounded-xl text-[#2D2326] placeholder:text-[#8A767C] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA] min-h-[42px]"
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
                    className="block text-xs font-semibold text-[#2D2326] mb-1"
                  >
                    Preferred Pickup / Slot Window
                  </label>
                  <select
                    id="checkout-slot"
                    value={pickupSlot}
                    onChange={(e) => setPickupSlot(e.target.value)}
                    className="w-full pl-3.5 pr-8 py-2 text-sm bg-white border border-[#F5D6DF] rounded-xl text-[#2D2326] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA] min-h-[42px] tabular-nums"
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

            <div className="p-6 bg-[#FFF7F9] border-t border-[#FCE4E9] space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#594A4E]">Estimated Subtotal</span>
                <span
                  data-testid="cart-subtotal"
                  className="text-base font-bold text-[#2D2326] tabular-nums"
                >
                  {totals.formattedSubtotal}
                </span>
              </div>
              <button
                type="submit"
                form="preorder-checkout-form"
                className="w-full py-3 px-5 text-sm font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors cursor-pointer min-h-[44px] shadow-[0_8px_20px_-10px_rgba(214,90,118,0.5)]"
              >
                Confirm Fresh Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
