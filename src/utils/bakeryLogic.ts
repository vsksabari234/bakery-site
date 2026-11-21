import type {
  BakeryCategory,
  BakeryProduct,
  DietaryTag,
  ProductVariant,
} from '../data/bakeryData';

export type CategoryFilter = 'All' | BakeryCategory;
export type DietaryFilter = 'All' | DietaryTag;

export interface MenuFilterCriteria {
  category: CategoryFilter;
  dietary: DietaryFilter;
  query: string;
}

export interface CartItem {
  key: string;
  productId: string;
  productName: string;
  imageUrl: string;
  variantId: string;
  variantLabel: string;
  weightOrCount: string;
  unitPriceIdr: number;
  quantity: number;
}

export interface CartTotals {
  itemCount: number;
  subtotalIdr: number;
  formattedSubtotal: string;
  freeGiftThresholdIdr: number;
  qualifiesFreeGift: boolean;
  remainingForFreeGiftIdr: number;
}

export interface PreOrderFormInput {
  customerName: string;
  contactInfo: string;
  pickupSlot: string;
  notes?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export interface OrderReceipt {
  orderNumber: string;
  customerName: string;
  contactInfo: string;
  pickupSlot: string;
  itemCount: number;
  formattedTotal: string;
  items: CartItem[];
}

export interface CustomInquiryInput {
  name: string;
  phoneOrEmail: string;
  pickupDate: string;
  occasionBox: string;
  notes: string;
}

export const FREE_GIFT_THRESHOLD_IDR = 200000;

export function formatPrice(amountIdr: number): string {
  const rounded = Math.round(amountIdr);
  const formatted = rounded
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `Rp ${formatted}`;
}

export function filterProducts(
  products: BakeryProduct[],
  criteria: MenuFilterCriteria
): BakeryProduct[] {
  const normalizedQuery = criteria.query.trim().toLowerCase();

  return products.filter((product) => {
    if (criteria.category !== 'All' && product.category !== criteria.category) {
      return false;
    }

    if (
      criteria.dietary !== 'All' &&
      !product.dietary.includes(criteria.dietary)
    ) {
      return false;
    }

    if (normalizedQuery.length > 0) {
      const searchable = [
        product.name,
        product.category,
        product.shortNote,
        product.ingredientsAndMethod,
      ]
        .join(' ')
        .toLowerCase();

      if (!searchable.includes(normalizedQuery)) {
        return false;
      }
    }

    return true;
  });
}

export function buildCartItemKey(productId: string, variantId: string): string {
  return `${productId}::${variantId}`;
}

export function addToCart(
  cart: CartItem[],
  product: BakeryProduct,
  variant: ProductVariant,
  quantity = 1
): CartItem[] {
  const safeQuantity = Math.max(1, Math.floor(quantity));
  const key = buildCartItemKey(product.id, variant.id);
  const existingIndex = cart.findIndex((item) => item.key === key);

  if (existingIndex === -1) {
    return [
      ...cart,
      {
        key,
        productId: product.id,
        productName: product.name,
        imageUrl: product.imageUrl,
        variantId: variant.id,
        variantLabel: variant.label,
        weightOrCount: variant.weightOrCount,
        unitPriceIdr: variant.priceIdr,
        quantity: safeQuantity,
      },
    ];
  }

  return cart.map((item, idx) =>
    idx === existingIndex
      ? { ...item, quantity: item.quantity + safeQuantity }
      : item
  );
}

export function updateCartQuantity(
  cart: CartItem[],
  itemKey: string,
  delta: number
): CartItem[] {
  return cart
    .map((item) => {
      if (item.key !== itemKey) return item;
      const nextQty = item.quantity + delta;
      return nextQty <= 0 ? null : { ...item, quantity: nextQty };
    })
    .filter((item): item is CartItem => item !== null);
}

export function removeFromCart(cart: CartItem[], itemKey: string): CartItem[] {
  return cart.filter((item) => item.key !== itemKey);
}

export function calculateCartTotals(cart: CartItem[]): CartTotals {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalIdr = cart.reduce(
    (sum, item) => sum + item.unitPriceIdr * item.quantity,
    0
  );
  const qualifiesFreeGift = subtotalIdr >= FREE_GIFT_THRESHOLD_IDR;
  const remainingForFreeGiftIdr = Math.max(
    0,
    FREE_GIFT_THRESHOLD_IDR - subtotalIdr
  );

  return {
    itemCount,
    subtotalIdr,
    formattedSubtotal: formatPrice(subtotalIdr),
    freeGiftThresholdIdr: FREE_GIFT_THRESHOLD_IDR,
    qualifiesFreeGift,
    remainingForFreeGiftIdr,
  };
}

export function validatePreOrderForm(input: PreOrderFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (input.customerName.trim().length < 2) {
    errors.customerName = 'Please enter your name for pickup or WA confirmation.';
  }

  const contact = input.contactInfo.trim();
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const digits = contact.replace(/\D/g, '');
  const looksLikePhone = digits.length >= 8;

  if (!looksLikeEmail && !looksLikePhone) {
    errors.contactInfo = 'Enter a valid WhatsApp/phone number or email.';
  }

  if (!input.pickupSlot.trim()) {
    errors.pickupSlot = 'Select a pickup window.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createOrderReceipt(
  cart: CartItem[],
  input: PreOrderFormInput,
  seed = Date.now()
): OrderReceipt {
  const totals = calculateCartTotals(cart);
  const code = 1000 + (Math.abs(seed) % 9000);

  return {
    orderNumber: `PB-${code}`,
    customerName: input.customerName.trim(),
    contactInfo: input.contactInfo.trim(),
    pickupSlot: input.pickupSlot,
    itemCount: totals.itemCount,
    formattedTotal: totals.formattedSubtotal,
    items: cart.map((item) => ({ ...item })),
  };
}

export function validateCustomInquiry(
  input: CustomInquiryInput,
  todayIso = new Date().toISOString().slice(0, 10)
): ValidationResult {
  const errors: Record<string, string> = {};

  if (input.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  const contact = input.phoneOrEmail.trim();
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const digits = contact.replace(/\D/g, '');
  const looksLikePhone = digits.length >= 8;

  if (!looksLikeEmail && !looksLikePhone) {
    errors.phoneOrEmail = 'Please enter a valid WhatsApp number or email.';
  }

  if (!input.pickupDate) {
    errors.pickupDate = 'Please choose a requested delivery or pickup date.';
  } else if (input.pickupDate < todayIso) {
    errors.pickupDate = 'Pickup date cannot be in the past.';
  }

  if (input.notes.trim().length < 8) {
    errors.notes = 'Share jar counts, hamper theme, or cake details.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
