import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { PANDU_BRAND } from '../data/bakeryData';

interface NavbarProps {
  itemCount: number;
  onOpenCart: () => void;
}

const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#schedule', label: 'Bake Schedule' },
  { href: '#craft', label: 'Hampers' },
  { href: '#visit', label: 'Order & WA' },
];

export function Navbar({ itemCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E7E5E0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A2810]"
        >
          {PANDU_BRAND.name}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#1C1917] hover:underline underline-offset-4 decoration-[#4A2810]/40 transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A2810]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open pre-order bag with ${itemCount} items`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#4A2810] rounded-lg hover:bg-[#361C0A] transition-colors whitespace-nowrap shrink-0 min-h-[40px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2810]"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            <span className="tabular-nums">Bag ({itemCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E7E5E0] text-[#1C1917] bg-white hover:bg-[#F2EFE9] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#E7E5E0] bg-[#FAF9F6] px-6 py-4 flex flex-col gap-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-medium text-[#1C1917] hover:text-[#4A2810] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
