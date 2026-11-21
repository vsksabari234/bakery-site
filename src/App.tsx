/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from 'react';
import {
  BAKERY_PRODUCTS,
  type BakeryProduct,
  type ProductVariant,
} from './data/bakeryData';
import {
  addToCart,
  calculateCartTotals,
  filterProducts,
  removeFromCart,
  updateCartQuantity,
  type CartItem,
  type CategoryFilter,
  type DietaryFilter,
} from './utils/bakeryLogic';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuCatalog } from './components/MenuCatalog';
import { CraftAndSchedule } from './components/CraftAndSchedule';
import { VisitAndInquiry } from './components/VisitAndInquiry';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { BakeryBackdrop } from './components/BakeryBackdrop';

export default function App() {
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [dietary, setDietary] = useState<DietaryFilter>('All');
  const [query, setQuery] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<BakeryProduct | null>(
    null
  );
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const filteredProducts = useMemo(
    () =>
      filterProducts(BAKERY_PRODUCTS, {
        category,
        dietary,
        query,
      }),
    [category, dietary, query]
  );

  const cartTotals = useMemo(() => calculateCartTotals(cart), [cart]);

  const handleAddToCart = (
    product: BakeryProduct,
    variant: ProductVariant,
    quantity = 1
  ) => {
    setCart((prev) => addToCart(prev, product, variant, quantity));
    setAddedNotice(
      `Added ${quantity} × ${product.name} (${variant.label}) to bag`
    );
  };

  const handleOpenCart = () => {
    setAddedNotice(null);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (key: string, delta: number) => {
    setCart((prev) => updateCartQuantity(prev, key, delta));
  };

  const handleRemoveItem = (key: string) => {
    setCart((prev) => removeFromCart(prev, key));
  };

  const handleResetFilters = () => {
    setCategory('All');
    setDietary('All');
    setQuery('');
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAF9F6] text-[#1C1917]">
      <BakeryBackdrop />

      <Navbar
        itemCount={cartTotals.itemCount}
        onOpenCart={handleOpenCart}
      />

      <main className="relative z-10 flex-1">
        <Hero />

        <MenuCatalog
          products={filteredProducts}
          category={category}
          dietary={dietary}
          query={query}
          cart={cart}
          onCategoryChange={setCategory}
          onDietaryChange={setDietary}
          onQueryChange={setQuery}
          onResetFilters={handleResetFilters}
          onQuickAdd={(product, variant) =>
            handleAddToCart(product, variant, 1)
          }
          onUpdateQuantity={handleUpdateQuantity}
          onSelectProduct={setSelectedProduct}
        />

        <CraftAndSchedule
          onReserveItem={(product, variant) => {
            handleAddToCart(product, variant, 1);
            handleOpenCart();
          }}
        />

        <VisitAndInquiry />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToBag={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => {
          setCart([]);
          setAddedNotice(null);
        }}
      />

      {addedNotice && !isCartOpen && cartTotals.itemCount > 0 && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 z-30 bg-[#18181B] text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between gap-4 text-xs sm:max-w-sm"
        >
          <span className="truncate">{addedNotice}</span>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleOpenCart}
              className="font-semibold underline underline-offset-4 whitespace-nowrap cursor-pointer"
            >
              View Bag ({cartTotals.itemCount})
            </button>
            <button
              type="button"
              onClick={() => setAddedNotice(null)}
              aria-label="Dismiss notification"
              className="text-zinc-400 hover:text-white whitespace-nowrap cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
