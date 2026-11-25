import { useEffect, useState } from 'react';
import { DOLCE_BRAND } from '../data/bakeryData';
import { BakeryImage } from './BakeryImage';

export function OpeningLoader() {
  const [phase, setPhase] = useState<'loading' | 'exiting' | 'done'>(() => {
    if (typeof window === 'undefined') return 'done';
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') return 'done';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'done';
    }
    return 'loading';
  });

  useEffect(() => {
    if (phase === 'loading') {
      const timer = window.setTimeout(() => {
        setPhase('exiting');
      }, 1550);
      return () => window.clearTimeout(timer);
    }

    if (phase === 'exiting') {
      const timer = window.setTimeout(() => {
        setPhase('done');
      }, 550);
      return () => window.clearTimeout(timer);
    }
  }, [phase]);

  if (phase === 'done') return null;

  const isExiting = phase === 'exiting';

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Dolce Divino bakery showcase"
      data-testid="opening-loader"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#FDE6EA] via-[#FFF4F6] to-[#FFEBD6] text-[#2D2326] px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="animate-dolce-crest flex flex-col items-center text-center max-w-sm">
        <div className="relative w-32 h-32 flex items-center justify-center mb-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#F396A5]/70"
          />
          <div
            aria-hidden="true"
            className="absolute inset-1 rounded-full border-2 border-transparent border-t-[#D65A76] border-r-[#BDF2EC] animate-spin"
            style={{ animationDuration: '2.4s' }}
          />
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_28px_-6px_rgba(214,90,118,0.28)] bg-white">
            <BakeryImage
              src={DOLCE_BRAND.logoUrl}
              alt="Dolce Divino crest"
              fallbackLabel="DD"
              className="w-full h-full object-cover scale-[1.09]"
            />
          </div>
        </div>

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C84B68] mb-2">
          {DOLCE_BRAND.credential} · {DOLCE_BRAND.handle}
        </p>

        <h2 className="font-script text-4xl sm:text-5xl text-[#D04E6B] mb-2">
          {DOLCE_BRAND.name}
        </h2>

        <p className="text-xs sm:text-sm text-[#594A4E] mb-7">
          {DOLCE_BRAND.tagline}
        </p>

        <div className="w-52 h-2 rounded-full bg-white/90 border border-[#F8CFD8] overflow-hidden mb-5">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-[#F396A5] via-[#D65A76] to-[#7EE3D8] animate-dolce-progress" />
        </div>

        <button
          type="button"
          onClick={() => setPhase('exiting')}
          className="text-xs font-semibold text-[#C84B68] hover:text-[#2D2326] underline underline-offset-4 decoration-[#F396A5] transition-colors cursor-pointer py-1.5 px-3"
        >
          Enter Kitchen
        </button>
      </div>
    </div>
  );
}
