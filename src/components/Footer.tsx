import { DOLCE_BRAND } from '../data/bakeryData';

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#FDE6EA] border-t border-[#F8CFD8] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#594A4E]">
        <div className="space-y-1">
          <div className="font-script text-xl text-[#D04E6B]">
            {DOLCE_BRAND.name}
          </div>
          <p>
            {DOLCE_BRAND.tagline} · {DOLCE_BRAND.credential} · {DOLCE_BRAND.handle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-medium">
          <a href="#menu" className="hover:text-[#D04E6B] transition-colors">
            Menu
          </a>
          <a href="#craft" className="hover:text-[#D04E6B] transition-colors">
            Our Story
          </a>
          <a href="#schedule" className="hover:text-[#D04E6B] transition-colors">
            Bake Schedule
          </a>
          <a href="#visit" className="hover:text-[#D04E6B] transition-colors">
            DM to Order
          </a>
          <span className="text-[#8A767C]">© 2026 {DOLCE_BRAND.name}</span>
        </div>
      </div>
    </footer>
  );
}
