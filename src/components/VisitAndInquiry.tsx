import { useState, type FormEvent } from 'react';
import { CheckCircle2, Instagram, ShieldCheck, Sparkles } from 'lucide-react';
import { DOLCE_BRAND } from '../data/bakeryData';
import { validateCustomInquiry } from '../utils/bakeryLogic';
import { BakeryImage } from './BakeryImage';

const OCCASION_OPTIONS = [
  'Molten Chocolate Bowl / Fudge Slab',
  'Rich in Chocolate Hot Cocoa Mix',
  'Fresh Whole Wheat Bread Loaves',
  'Butter Jam Cookies & Gift Hamper',
];

export function VisitAndInquiry() {
  const [name, setName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [occasionBox, setOccasionBox] = useState(OCCASION_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedDetails, setSubmittedDetails] = useState<{
    name: string;
    pickupDate: string;
    occasionBox: string;
  } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateCustomInquiry({
      name,
      phoneOrEmail,
      pickupDate,
      occasionBox,
      notes,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedDetails({ name: name.trim(), pickupDate, occasionBox });
  };

  const handleReset = () => {
    setName('');
    setPhoneOrEmail('');
    setPickupDate('');
    setNotes('');
    setErrors({});
    setSubmittedDetails(null);
  };

  return (
    <section id="visit" className="scroll-mt-20 py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-5 space-y-5 min-w-0">
          <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden border-4 border-white shadow-[0_14px_34px_-12px_rgba(208,78,107,0.2)] bg-[#FDE6EA]">
            <div className="aspect-[4/3] overflow-hidden">
              <BakeryImage
                src="/assets/dolce-divino/dolce_ferrero_slab.jpg"
                alt="Dolce Divino triple chocolate and praline fudge slab"
                fallbackLabel="Triple Chocolate & Praline Fudge Slab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-3xl bg-[#FFF7F9] border border-[#FCE4E9]">
              <div className="w-11 h-11 rounded-full bg-[#F9BAC6] text-[#2E131B] flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-medium text-[#594A4E]">
                  Instagram DM to Order
                </div>
                <div className="text-sm font-semibold text-[#2D2326]">
                  {DOLCE_BRAND.handle} · {DOLCE_BRAND.name}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-3xl bg-[#FFF7F9] border border-[#FCE4E9]">
              <div className="w-11 h-11 rounded-full bg-[#BDF2EC] text-[#123834] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-medium text-[#594A4E]">
                  Kitchen Certification
                </div>
                <div className="text-sm font-semibold text-[#2D2326]">
                  {DOLCE_BRAND.credential} · Clean Home Kitchen
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-3xl bg-[#FFF7F9] border border-[#FCE4E9]">
              <div className="w-11 h-11 rounded-full bg-[#FFEBD6] text-[#5E3A1E] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-medium text-[#594A4E]">
                  Creator &amp; Specialties
                </div>
                <div className="text-sm font-semibold text-[#2D2326]">
                  Baker &amp; Vlogger · Baking · Lifestyle · Travel
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#FFF7F9] border border-[#FCE4E9] rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-[0_14px_34px_-14px_rgba(208,78,118,0.16)] min-w-0">
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C84B68] mb-1.5">
              DM to Order
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold text-[#221A1D] tracking-tight mb-2"
              style={{ textWrap: 'balance' }}
            >
              Please fill the details to reach us
            </h2>
            <p className="text-sm text-[#594A4E]">
              Reserve fresh whole wheat loaves, rich chocolate jars, butter jam cookies, or curated gift packs baked to order.
            </p>
          </div>

          {submittedDetails ? (
            <div
              data-testid="inquiry-confirmation"
              className="py-8 px-6 bg-white border border-[#FCE4E9] rounded-3xl space-y-4"
            >
              <div className="flex items-center gap-2.5 text-[#C84B68]">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-semibold">
                  Request Received — Dolce Divino will reply shortly
                </span>
              </div>
              <p className="text-sm text-[#594A4E] leading-relaxed">
                Thank you,{' '}
                <span className="font-semibold text-[#2D2326]">
                  {submittedDetails.name}
                </span>
                . We noted your request for{' '}
                <span className="font-semibold text-[#2D2326]">
                  {submittedDetails.occasionBox}
                </span>{' '}
                on{' '}
                <span className="font-semibold text-[#2D2326] tabular-nums">
                  {submittedDetails.pickupDate}
                </span>
                . We typically reply within a day on{' '}
                <span className="font-semibold text-[#2D2326]">
                  {DOLCE_BRAND.handle}
                </span>
                .
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2 text-xs font-semibold text-[#C84B68] bg-[#FFF5F7] border border-[#F5C5CF] rounded-full hover:border-[#D65A76] transition-colors cursor-pointer"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="block text-xs font-semibold text-[#2D2326] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ananya R"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F5D6DF] rounded-xl text-[#2D2326] placeholder:text-[#8A767C] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA] min-h-[44px]"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#991B1B] mt-1" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-contact"
                    className="block text-xs font-semibold text-[#2D2326] mb-1.5"
                  >
                    Phone / WhatsApp or Email
                  </label>
                  <input
                    id="inquiry-contact"
                    type="text"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="98401 23456 or email"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F5D6DF] rounded-xl text-[#2D2326] placeholder:text-[#8A767C] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA] min-h-[44px]"
                  />
                  {errors.phoneOrEmail && (
                    <p className="text-xs text-[#991B1B] mt-1" role="alert">
                      {errors.phoneOrEmail}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-date"
                    className="block text-xs font-semibold text-[#2D2326] mb-1.5"
                  >
                    Preferred Bake / Delivery Date
                  </label>
                  <input
                    id="inquiry-date"
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F5D6DF] rounded-xl text-[#2D2326] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA] min-h-[44px] tabular-nums"
                  />
                  {errors.pickupDate && (
                    <p className="text-xs text-[#991B1B] mt-1" role="alert">
                      {errors.pickupDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-box"
                    className="block text-xs font-semibold text-[#2D2326] mb-1.5"
                  >
                    Creation Type
                  </label>
                  <select
                    id="inquiry-box"
                    value={occasionBox}
                    onChange={(e) => setOccasionBox(e.target.value)}
                    className="w-full pl-3.5 pr-8 py-2.5 text-sm bg-white border border-[#F5D6DF] rounded-xl text-[#2D2326] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA] min-h-[44px]"
                  >
                    {OCCASION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry-notes"
                  className="block text-xs font-semibold text-[#2D2326] mb-1.5"
                >
                  Quantities, Chocolate Preferences &amp; Gift Notes
                </label>
                <textarea
                  id="inquiry-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share pack quantities (e.g., 2 whole wheat loaves, 1 hot cocoa jar, 1 jam cookie box) or gifting message..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#F5D6DF] rounded-xl text-[#2D2326] placeholder:text-[#8A767C] focus:outline-none focus:border-[#D65A76] focus:ring-2 focus:ring-[#FDE6EA]"
                />
                {errors.notes && (
                  <p className="text-xs text-[#991B1B] mt-1" role="alert">
                    {errors.notes}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <span className="text-xs text-[#594A4E]">
                  Baked fresh on order in small homemade batches.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-2.5 text-sm font-semibold text-white bg-[#D65A76] rounded-full hover:bg-[#BF4863] transition-colors whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer shadow-[0_8px_20px_-10px_rgba(214,90,118,0.5)]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
