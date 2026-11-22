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
  assert.equal(formatPrice(480), '₹ 480');
  assert.equal(formatPrice(1450), '₹ 1,450');
  assert.equal(formatPrice(0), '₹ 0');
});

test('filterProducts filters by category, preference tag, and search query', () => {
  const brownies = filterProducts(BAKERY_PRODUCTS, {
    category: 'Brownies & Slabs',
    dietary: 'All',
    query: '',
  });
  assert.equal(brownies.length, 2);

  const floralOrFruit = filterProducts(BAKERY_PRODUCTS, {
    category: 'All',
    dietary: 'Fresh Fruit & Floral',
    query: '',
  });
  assert.equal(floralOrFruit.length, 4);

  const ferreroSearch = filterProducts(BAKERY_PRODUCTS, {
    category: 'All',
    dietary: 'All',
    query: 'ferrero',
  });
  assert.equal(ferreroSearch.length, 1);
  assert.equal(ferreroSearch[0].id, 'ferrero-brownie-slab');
});

test('cart add, quantity steppers, remove, and subtotal calculations work cleanly', () => {
  const lavenderCake = BAKERY_PRODUCTS[0];
  const ferreroBrownie = BAKERY_PRODUCTS[1];

  let cart = addToCart([], lavenderCake, lavenderCake.variants[0], 1);
  cart = addToCart(cart, ferreroBrownie, ferreroBrownie.variants[0], 1);

  assert.equal(cart.length, 2);

  let totals = calculateCartTotals(cart);
  assert.equal(totals.itemCount, 2);
  assert.equal(totals.subtotalInr, 1450 + 480);
  assert.equal(totals.formattedSubtotal, '₹ 1,930');
  assert.equal(totals.qualifiesFreeGift, true);

  cart = updateCartQuantity(cart, cart[0].key, -1);
  assert.equal(cart.length, 1);

  totals = calculateCartTotals(cart);
  assert.equal(totals.subtotalInr, 480);
  assert.equal(totals.qualifiesFreeGift, false);
  assert.equal(totals.remainingForFreeGiftInr, 720);

  cart = removeFromCart(cart, cart[0].key);
  assert.equal(cart.length, 0);
});

test('validatePreOrderForm rejects invalid inputs and accepts Chennai phone or email', () => {
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
    contactInfo: '72991 18863',
    pickupSlot: '15:00 – 18:00 (Evening)',
  });
  assert.equal(validPhone.valid, true);
});

test('createOrderReceipt builds structured CG order confirmation', () => {
  const brownie = BAKERY_PRODUCTS[1];
  const cart = addToCart([], brownie, brownie.variants[0], 2);
  const receipt = createOrderReceipt(
    cart,
    {
      customerName: 'Arjun Karthik',
      contactInfo: '9840123456',
      pickupSlot: '12:00 – 15:00 (Afternoon)',
    },
    4082
  );

  assert.equal(receipt.orderNumber, 'CG-5082');
  assert.equal(receipt.itemCount, 2);
  assert.equal(receipt.formattedTotal, '₹ 960');
});

test('validateCustomInquiry rejects past dates and empty notes', () => {
  const invalid = validateCustomInquiry(
    {
      name: 'D',
      phoneOrEmail: '123',
      pickupDate: '2026-11-10',
      occasionBox: 'Custom Birthday Theme Cake',
      notes: 'hi',
    },
    '2026-11-22'
  );
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phoneOrEmail);
  assert.ok(invalid.errors.pickupDate);
  assert.ok(invalid.errors.notes);

  const valid = validateCustomInquiry(
    {
      name: 'Nandhini S',
      phoneOrEmail: '72991 18863',
      pickupDate: '2026-12-10',
      occasionBox: 'Custom Birthday Theme Cake',
      notes: '1.5 kg rose gold butterfly cake, chocolate truffle flavor, name Zaara.',
    },
    '2026-11-22'
  );
  assert.equal(valid.valid, true);
});
