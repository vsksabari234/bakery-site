import { useState, type FormEvent } from 'react';
import { CheckCircle2, Instagram, MapPin, Phone } from 'lucide-react';
import { CAKE_GALLERY_BRAND } from '../data/bakeryData';
import { validateCustomInquiry } from '../utils/bakeryLogic';

const OCCASION_OPTIONS = [
  'Custom Two-Tier Birthday Cake',
  'Ferrero / Strawberry Brownie Slab',
  'Kids Baking Workshop Registration (T. Nagar)',
  'Anniversary / Surprise Gift Cake',
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
    <section id="visit" className="scroll-mt-20 py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8E2945] mb-2">
              Get In Touch
            </p>
            <h2
              className="font-display text-3xl font-semibold text-[#1C1917] tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Feel free to contact &amp; order your dream cake
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Have questions or ready to place a custom cake order? Reach out for theme designs, eggless requests, or kids baking workshop seats in T. Nagar, Chennai.
            </p>
          </div>

          <div className="space-y-3.5">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF9FA] border border-[#F2D9E0]">
              <div className="w-11 h-11 rounded-full bg-[#FCE3EA] text-[#8E2945] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-medium text-[#57534E]">
                  Phone &amp; WhatsApp
                </div>
                <div className="text-sm font-semibold text-[#1C1917] tabular-nums">
                  +91 {CAKE_GALLERY_BRAND.contactDisplay}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF9FA] border border-[#F2D9E0]">
              <div className="w-11 h-11 rounded-full bg-[#FCE3EA] text-[#8E2945] flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-medium text-[#57534E]">
                  Instagram DM
                </div>
                <div className="text-sm font-semibold text-[#1C1917]">
                  {CAKE_GALLERY_BRAND.handle}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF9FA] border border-[#F2D9E0]">
              <div className="w-11 h-11 rounded-full bg-[#FCE3EA] text-[#8E2945] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-medium text-[#57534E]">
                  Studio Location
                </div>
                <div className="text-sm font-semibold text-[#1C1917]">
                  {CAKE_GALLERY_BRAND.location} · Homemade Fresh
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#FFF9FA] border border-[#F2D9E0] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-wide text-[#8E2945] mb-1">
              Custom Theme &amp; Workshop Request
            </p>
            <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
              Request a Custom Cake or Class Slot
            </h3>
          </div>

          {submittedDetails ? (
            <div
              data-testid="inquiry-confirmation"
              className="py-8 px-6 bg-white border border-[#F2D9E0] rounded-xl space-y-4"
            >
              <div className="flex items-center gap-2.5 text-[#8E2945]">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-semibold">
                  Enquiry Received — Cake Gallery will reply shortly
                </span>
              </div>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Thank you, <span className="font-medium text-[#1C1917]">{submittedDetails.name}</span>. We noted your request for{' '}
                <span className="font-medium text-[#1C1917]">{submittedDetails.occasionBox}</span> on{' '}
                <span className="font-medium text-[#1C1917] tabular-nums">{submittedDetails.pickupDate}</span>. For faster custom cake quotes, call or WhatsApp{' '}
                <span className="font-medium text-[#1C1917] tabular-nums">{CAKE_GALLERY_BRAND.contactDisplay}</span>.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs font-medium text-[#8E2945] bg-[#FFF9FA] border border-[#EBC6D1] rounded-lg hover:border-[#8E2945] transition-colors cursor-pointer"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="block text-xs font-medium text-[#1C1917] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nandhini S"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#8E2945] min-h-[42px]"
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
                    className="block text-xs font-medium text-[#1C1917] mb-1.5"
                  >
                    Phone / WhatsApp or Email
                  </label>
                  <input
                    id="inquiry-contact"
                    type="text"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="98401 23456 or email"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#8E2945] min-h-[42px]"
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
                    className="block text-xs font-medium text-[#1C1917] mb-1.5"
                  >
                    Event or Workshop Date
                  </label>
                  <input
                    id="inquiry-date"
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#8E2945] min-h-[42px] tabular-nums"
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
                    className="block text-xs font-medium text-[#1C1917] mb-1.5"
                  >
                    Order or Class Type
                  </label>
                  <select
                    id="inquiry-box"
                    value={occasionBox}
                    onChange={(e) => setOccasionBox(e.target.value)}
                    className="w-full pl-3.5 pr-8 py-2.5 text-sm bg-white border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#8E2945] min-h-[42px]"
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
                  className="block text-xs font-medium text-[#1C1917] mb-1.5"
                >
                  Cake Theme, Weight, Flavor &amp; Name on Cake
                </label>
                <textarea
                  id="inquiry-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share weight (500g / 1.5 kg), eggless preference, theme colors, flavor (Choco Truffle / Butterscotch / Rasmalai), or child age for workshop..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#8E2945]"
                />
                {errors.notes && (
                  <p className="text-xs text-[#991B1B] mt-1" role="alert">
                    {errors.notes}
                  </p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-[#57534E]">
                  1–2 days advance booking for two-tier theme cakes.
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-sm font-medium text-white bg-[#8E2945] rounded-lg hover:bg-[#711E35] transition-colors whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
