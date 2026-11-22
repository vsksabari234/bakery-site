import { CAKE_GALLERY_BRAND } from '../data/bakeryData';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#F2D9E0] bg-[#FDF0F4] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#57534E]">
        <div className="space-y-1">
          <div className="font-display text-base font-semibold text-[#1C1917]">
            {CAKE_GALLERY_BRAND.name}
          </div>
          <p>
            Homemade Cakes, Brownies &amp; Baking Classes · {CAKE_GALLERY_BRAND.location} · {CAKE_GALLERY_BRAND.contactDisplay}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a href="#menu" className="hover:text-[#8E2945] transition-colors">
            Cake Menu
          </a>
          <a href="#schedule" className="hover:text-[#8E2945] transition-colors">
            Workshops
          </a>
          <a href="#craft" className="hover:text-[#8E2945] transition-colors">
            Custom Themes
          </a>
          <a href="#visit" className="hover:text-[#8E2945] transition-colors">
            Order &amp; Contact
          </a>
          <span className="text-[#78716C]">© 2026 {CAKE_GALLERY_BRAND.name}</span>
        </div>
      </div>
    </footer>
  );
}
