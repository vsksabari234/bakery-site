import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { DOLCE_BRAND } from '../data/bakeryData';

interface NavbarProps {
  itemCount: number;
  onOpenCart: () => void;
}

const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#craft', label: 'Our Story' },
  { href: '#schedule', label: 'Bake Schedule' },
  { href: '#visit', label: 'DM & Order' },
];

export function Navbar({ itemCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#FCE4E9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 md:gap-8">
        <a
          href="#top"
          className="font-script text-xl sm:text-2xl tracking-normal text-[#D04E6B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D65A76]"
        >
          {DOLCE_BRAND.name}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#594A4E]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#D04E6B] transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D65A76]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open order bag with ${itemCount} items`}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-sm font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors whitespace-nowrap shrink-0 min-h-[40px] shadow-[0_6px_16px_-6px_rgba(214,90,118,0.5)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D65A76]"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            <span className="tabular-nums">Bag ({itemCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#FCE4E9] text-[#2D2326] bg-white hover:bg-[#FDE6EA] transition-colors cursor-pointer"
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
          className="md:hidden border-t border-[#FCE4E9] bg-white px-6 py-4 flex flex-col gap-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-medium text-[#2D2326] hover:text-[#D04E6B] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
