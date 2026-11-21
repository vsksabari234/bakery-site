import test from 'node:test';
import assert from 'node:assert/strict';
import { BAKERY_PRODUCTS } from '../data/bakeryData';
import {
  addToCart,
  calculateCartTotals,
  createOrderReceipt,
  filterProducts,
  formatPrice,
  removeFromCart,
  updateCartQuantity,
  validateCustomInquiry,
  validatePreOrderForm,
} from './bakeryLogic';

test('formatPrice formats Indonesian Rupiah with thousands dots', () => {
  assert.equal(formatPrice(65000), 'Rp 65.000');
  assert.equal(formatPrice(105000), 'Rp 105.000');
  assert.equal(formatPrice(0), 'Rp 0');
});

test('filterProducts filters by category, dietary preference, and search query', () => {
  const cookies = filterProducts(BAKERY_PRODUCTS, {
    category: 'Cookies',
    dietary: 'All',
    query: '',
  });
  assert.equal(cookies.length, 4);

  const nutFreeCookies = filterProducts(BAKERY_PRODUCTS, {
    category: 'Cookies',
    dietary: 'Nut-Free',
    query: '',
  });
  assert.equal(nutFreeCookies.length, 3);

  const nastarSearch = filterProducts(BAKERY_PRODUCTS, {
    category: 'All',
    dietary: 'All',
    query: 'pineapple',
  });
  assert.equal(nastarSearch.length, 1);
  assert.equal(nastarSearch[0].id, 'nastar-pineapple');
});

test('cart add, quantity steppers, remove, and subtotal calculations work cleanly', () => {
  const nastar = BAKERY_PRODUCTS[0];
  const kastengel = BAKERY_PRODUCTS[1];

  let cart = addToCart([], nastar, nastar.variants[0], 2);
  cart = addToCart(cart, kastengel, kastengel.variants[0], 1);

  assert.equal(cart.length, 2);
  assert.equal(cart[0].quantity, 2);

  let totals = calculateCartTotals(cart);
  assert.equal(totals.itemCount, 3);
  assert.equal(totals.subtotalIdr, 2 * 65000 + 75000);
  assert.equal(totals.formattedSubtotal, 'Rp 205.000');
  assert.equal(totals.qualifiesFreeGift, true);

  cart = updateCartQuantity(cart, cart[0].key, -2);
  assert.equal(cart.length, 1);

  totals = calculateCartTotals(cart);
  assert.equal(totals.subtotalIdr, 75000);
  assert.equal(totals.qualifiesFreeGift, false);
  assert.equal(totals.remainingForFreeGiftIdr, 125000);

  cart = removeFromCart(cart, cart[0].key);
  assert.equal(cart.length, 0);
});

test('validatePreOrderForm rejects invalid inputs and accepts WhatsApp or email', () => {
  const invalid = validatePreOrderForm({
    customerName: 'A',
    contactInfo: '123',
    pickupSlot: '',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.customerName);
  assert.ok(invalid.errors.contactInfo);
  assert.ok(invalid.errors.pickupSlot);

  const validWa = validatePreOrderForm({
    customerName: 'Sari Wulandari',
    contactInfo: '0857 7316 9999',
    pickupSlot: '11:00 – 13:00',
  });
  assert.equal(validWa.valid, true);
});

test('createOrderReceipt builds structured PB order confirmation', () => {
  const nastar = BAKERY_PRODUCTS[0];
  const cart = addToCart([], nastar, nastar.variants[0], 2);
  const receipt = createOrderReceipt(
    cart,
    {
      customerName: 'Budi Santoso',
      contactInfo: '085712345678',
      pickupSlot: '09:00 – 11:00',
    },
    4082
  );

  assert.equal(receipt.orderNumber, 'PB-5082');
  assert.equal(receipt.itemCount, 2);
  assert.equal(receipt.formattedTotal, 'Rp 130.000');
});

test('validateCustomInquiry rejects past dates and empty notes', () => {
  const invalid = validateCustomInquiry(
    {
      name: 'D',
      phoneOrEmail: '123',
      pickupDate: '2026-11-10',
      occasionBox: 'Festive Cookie Hamper (4 Jars)',
      notes: 'hi',
    },
    '2026-11-21'
  );
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phoneOrEmail);
  assert.ok(invalid.errors.pickupDate);
  assert.ok(invalid.errors.notes);

  const valid = validateCustomInquiry(
    {
      name: 'Dewi Lestari',
      phoneOrEmail: '0857 7316 9999',
      pickupDate: '2026-12-10',
      occasionBox: 'Festive Cookie Hamper (4 Jars)',
      notes: 'Three hampers with Nastar, Kastengel, and Putri Salju.',
    },
    '2026-11-21'
  );
  assert.equal(valid.valid, true);
});
