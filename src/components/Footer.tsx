import { PANDU_BRAND } from '../data/bakeryData';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#E7E5E0] bg-[#F2EFE9]/95 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#57534E]">
        <div className="space-y-1">
          <div className="font-display text-base font-semibold text-[#1C1917]">
            {PANDU_BRAND.name}
          </div>
          <p>
            Homemade Cookies, Cake &amp; Bread · WA / SMS {PANDU_BRAND.whatsappDisplay}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a href="#menu" className="hover:text-[#1C1917] transition-colors">
            Daily Menu
          </a>
          <a href="#schedule" className="hover:text-[#1C1917] transition-colors">
            Bake Schedule
          </a>
          <a href="#craft" className="hover:text-[#1C1917] transition-colors">
            Hampers
          </a>
          <a href="#visit" className="hover:text-[#1C1917] transition-colors">
            Custom Orders
          </a>
          <span className="text-[#78716C]">© 2026 {PANDU_BRAND.name}</span>
        </div>
      </div>
    </footer>
  );
}
