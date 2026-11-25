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

test('formatPrice formats Indian Rupees with Indian digit grouping', () => {
  assert.equal(formatPrice(280), '₹ 280');
  assert.equal(formatPrice(1020), '₹ 1,020');
  assert.equal(formatPrice(0), '₹ 0');
});

test('filterProducts filters by category, preference tag, and search query', () => {
  const chocolates = filterProducts(BAKERY_PRODUCTS, {
    category: 'Chocolates & Desserts',
    dietary: 'All',
    query: '',
  });
  assert.equal(chocolates.length, 3);

  const breadsAndCookies = filterProducts(BAKERY_PRODUCTS, {
    category: 'Artisan Breads & Cookies',
    dietary: 'All',
    query: '',
  });
  assert.equal(breadsAndCookies.length, 2);

  const hotCocoaSearch = filterProducts(BAKERY_PRODUCTS, {
    category: 'All',
    dietary: 'All',
    query: 'cocoa',
  });
  assert.equal(hotCocoaSearch.length, 3);

  const moongSearch = filterProducts(BAKERY_PRODUCTS, {
    category: 'All',
    dietary: 'All',
    query: 'moong',
  });
  assert.equal(moongSearch.length, 1);
});

test('cart add, quantity steppers, remove, and subtotal calculations work cleanly', () => {
  const moltenBowl = BAKERY_PRODUCTS[0];
  const ferreroSlab = BAKERY_PRODUCTS[4];

  let cart = addToCart([], moltenBowl, moltenBowl.variants[0], 1);
  cart = addToCart(cart, ferreroSlab, ferreroSlab.variants[1], 1);

  assert.equal(cart.length, 2);

  let totals = calculateCartTotals(cart);
  assert.equal(totals.itemCount, 2);
  assert.equal(totals.subtotalInr, 280 + 1020);
  assert.equal(totals.formattedSubtotal, '₹ 1,300');
  assert.equal(totals.qualifiesFreeGift, true);

  cart = updateCartQuantity(cart, cart[1].key, -1);
  assert.equal(cart.length, 1);

  totals = calculateCartTotals(cart);
  assert.equal(totals.subtotalInr, 280);
  assert.equal(totals.qualifiesFreeGift, false);
  assert.equal(totals.remainingForFreeGiftInr, 920);

  cart = removeFromCart(cart, cart[0].key);
  assert.equal(cart.length, 0);
});

test('validatePreOrderForm rejects invalid inputs and accepts phone or email', () => {
  const invalid = validatePreOrderForm({
    customerName: 'A',
    contactInfo: '12345',
    pickupSlot: '',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.customerName);
  assert.ok(invalid.errors.contactInfo);
  assert.ok(invalid.errors.pickupSlot);

  const validPhone = validatePreOrderForm({
    customerName: 'Kavya Ramesh',
    contactInfo: '98401 23456',
    pickupSlot: '16:00 – 19:00 (Evening Tea Batch)',
  });
  assert.equal(validPhone.valid, true);
});

test('createOrderReceipt builds structured DD order confirmation', () => {
  const cookies = BAKERY_PRODUCTS[3];
  const cart = addToCart([], cookies, cookies.variants[0], 2);
  const receipt = createOrderReceipt(
    cart,
    {
      customerName: 'Arjun Karthik',
      contactInfo: '9840123456',
      pickupSlot: '13:00 – 16:00 (Afternoon Slot)',
    },
    4082
  );

  assert.equal(receipt.orderNumber, 'DD-5082');
  assert.equal(receipt.itemCount, 2);
  assert.equal(receipt.formattedTotal, '₹ 520');
});

test('validateCustomInquiry rejects past dates and empty notes', () => {
  const invalid = validateCustomInquiry(
    {
      name: 'D',
      phoneOrEmail: '123',
      pickupDate: '2026-11-10',
      occasionBox: 'Whole Wheat Fresh Bread Loaf',
      notes: 'hi',
    },
    '2026-11-25'
  );
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phoneOrEmail);
  assert.ok(invalid.errors.pickupDate);
  assert.ok(invalid.errors.notes);

  const valid = validateCustomInquiry(
    {
      name: 'Nandhini S',
      phoneOrEmail: '98401 23456',
      pickupDate: '2026-12-10',
      occasionBox: 'Premium Chocolate Gift Box',
      notes: '2 jars of rich hot chocolate mix and 1 twin pack wheat bread.',
    },
    '2026-11-25'
  );
  assert.equal(valid.valid, true);
});
