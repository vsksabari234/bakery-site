import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { CAKE_GALLERY_BRAND } from '../data/bakeryData';

interface NavbarProps {
  itemCount: number;
  onOpenCart: () => void;
}

const NAV_LINKS = [
  { href: '#menu', label: 'Cake Menu' },
  { href: '#craft', label: 'About & Camp' },
  { href: '#schedule', label: 'Workshops' },
  { href: '#visit', label: 'Contact Us' },
];

export function Navbar({ itemCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9FA]/95 backdrop-blur-sm border-b border-[#F2D9E0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E2945]"
        >
          {CAKE_GALLERY_BRAND.name}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#8E2945] hover:underline underline-offset-4 decoration-[#8E2945]/50 transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E2945]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open order bag with ${itemCount} items`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#8E2945] rounded-lg hover:bg-[#711E35] transition-colors whitespace-nowrap shrink-0 min-h-[40px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E2945]"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            <span className="tabular-nums">Bag ({itemCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#F2D9E0] text-[#1C1917] bg-white hover:bg-[#FCE8EE] transition-colors cursor-pointer"
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
          className="md:hidden border-t border-[#F2D9E0] bg-[#FFF9FA] px-6 py-4 flex flex-col gap-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-medium text-[#1C1917] hover:text-[#8E2945] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
