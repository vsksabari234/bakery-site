import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PANDU_BRAND } from '../data/bakeryData';
import { validateCustomInquiry } from '../utils/bakeryLogic';

const OCCASION_OPTIONS = [
  'Festive Cookie Hamper (4 Jars)',
  'Lebaran / Celebration Parcel Box',
  'Tea-Time Bread & Madeleine Box (20 pcs)',
  'Custom Birthday Cake & Cookie Set',
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
    <section id="visit" className="scroll-mt-20 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#57534E] mb-2">
              Order &amp; Contact
            </p>
            <h2
              className="font-display text-3xl font-normal text-[#1C1917] tracking-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Direct WhatsApp orders &amp; homemade pickup
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Reach out via WhatsApp or SMS for daily bread availability, custom cake inquiries, and seasonal cookie hamper bookings.
            </p>
          </div>

          <div className="divide-y divide-[#E7E5E0] border-y border-[#E7E5E0] text-sm">
            <div className="py-4 flex justify-between gap-4">
              <span className="font-medium text-[#1C1917]">WA / SMS</span>
              <span className="text-[#57534E] tabular-nums font-medium">
                {PANDU_BRAND.whatsappDisplay}
              </span>
            </div>
            <div className="py-4 flex justify-between gap-4">
              <span className="font-medium text-[#1C1917]">Instagram</span>
              <span className="text-[#57534E]">{PANDU_BRAND.handle}</span>
            </div>
            <div className="py-4 flex justify-between gap-4">
              <span className="font-medium text-[#1C1917]">Specialties</span>
              <span className="text-[#57534E]">Cookies · Cake · Bread</span>
            </div>
            <div className="py-4 flex justify-between gap-4">
              <span className="font-medium text-[#1C1917]">Daily Hours</span>
              <span className="text-[#57534E] tabular-nums">08:00 – 19:00</span>
            </div>
            <div className="py-4 flex justify-between gap-4">
              <span className="font-medium text-[#1C1917]">Registration</span>
              <span className="text-[#57534E] tabular-nums text-right">
                {PANDU_BRAND.pirtCode}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-[#E7E5E0] rounded-xl p-6 sm:p-8">
          <div className="mb-6">
            <p className="text-xs font-medium tracking-wide text-[#57534E] mb-1">
              Hampers &amp; Celebration Parcels
            </p>
            <h3 className="font-display text-2xl font-normal text-[#1C1917]">
              Request a Custom Hamper or Event Box
            </h3>
          </div>

          {submittedDetails ? (
            <div
              data-testid="inquiry-confirmation"
              className="py-8 px-6 bg-[#FAF9F6] border border-[#E7E5E0] rounded-xl space-y-4"
            >
              <div className="flex items-center gap-2.5 text-[#4A2810]">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-semibold">
                  Inquiry Logged — Pandu Bakery will reply via WA/Email
                </span>
              </div>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Thank you, <span className="font-medium text-[#1C1917]">{submittedDetails.name}</span>. We have noted your request for{' '}
                <span className="font-medium text-[#1C1917]">{submittedDetails.occasionBox}</span> for{' '}
                <span className="font-medium text-[#1C1917] tabular-nums">{submittedDetails.pickupDate}</span>. For urgent orders, message WA{' '}
                <span className="font-medium text-[#1C1917] tabular-nums">{PANDU_BRAND.whatsappDisplay}</span>.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs font-medium text-[#1C1917] bg-white border border-[#E7E5E0] rounded-lg hover:border-[#4A2810] transition-colors cursor-pointer"
              >
                Send Another Inquiry
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
                    placeholder="Dewi Lestari"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#4A2810] min-h-[42px]"
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
                    WhatsApp or Email
                  </label>
                  <input
                    id="inquiry-contact"
                    type="text"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="0857 7316 9999 or email"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#4A2810] min-h-[42px]"
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
                    Requested Pickup Date
                  </label>
                  <input
                    id="inquiry-date"
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#4A2810] min-h-[42px] tabular-nums"
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
                    Hamper / Box Format
                  </label>
                  <select
                    id="inquiry-box"
                    value={occasionBox}
                    onChange={(e) => setOccasionBox(e.target.value)}
                    className="w-full pl-3.5 pr-8 py-2.5 text-sm bg-[#FAF9F6] border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#4A2810] min-h-[42px]"
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
                  Jar Flavors &amp; Greeting Card Notes
                </label>
                <textarea
                  id="inquiry-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share preferred cookie jars (Nastar, Kastengel, Putri Salju), ribbon theme, or greeting card message..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E7E5E0] rounded-lg focus:outline-none focus:border-[#4A2810]"
                />
                {errors.notes && (
                  <p className="text-xs text-[#991B1B] mt-1" role="alert">
                    {errors.notes}
                  </p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-[#57534E]">
                  2-day advance booking for ribbon hampers.
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-[#4A2810] rounded-lg hover:bg-[#361C0A] transition-colors whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
