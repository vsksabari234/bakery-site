export type BakeryCategory =
  | 'Chocolates & Desserts'
  | 'Artisan Breads & Cookies'
  | 'Savory & Gifting';

export type DietaryTag = 'Premium Chocolate' | 'Homemade & Eggless';

export interface ProductVariant {
  id: string;
  label: string;
  weightOrCount: string;
  priceInr: number;
}

export interface BakeryProduct {
  id: string;
  name: string;
  category: BakeryCategory;
  prepLead: string;
  shortNote: string;
  description: string;
  ingredientsAndMethod: string;
  allergens: string[];
  dietary: DietaryTag[];
  imageUrl: string;
  imageAlt: string;
  availabilityNote: string;
  variants: ProductVariant[];
}

export interface BatchScheduleSlot {
  id: string;
  kind: 'Fresh Bake Schedule' | 'Bake & Vlog Features';
  timing: string;
  tagLabel: string;
  title: string;
  notes: string;
  productId: string;
}

export const DOLCE_BRAND = {
  name: 'Dolce Divino',
  tagline: 'Crafted with Love & Premium Chocolate',
  subTagline: 'Baker & Vlogger · Baking • Lifestyle • Travel',
  handle: '@dolce81981',
  credential: 'FSSAI Registered',
  location: 'Homemade Fresh · DM to Order',
  contactDisplay: '@dolce81981',
  logoUrl: '/assets/dolce-divino/dolce_logo_seal.jpg',
};

export const HERO_MOSAIC_ITEMS = [
  {
    url: '/assets/dolce-divino/dolce_chocolate_sundae.jpg',
    title: 'Molten Brownie Sundae',
    subtitle: 'Warm ganache & vanilla scoop',
    price: '₹ 280',
    productId: 'molten-brownie-sundae',
  },
  {
    url: '/assets/dolce-divino/dolce_hot_chocolate.jpg',
    title: 'Rich Hot Chocolate',
    subtitle: 'Thick real cocoa blend',
    price: '₹ 360',
    productId: 'rich-hot-chocolate',
  },
  {
    url: '/assets/dolce-divino/dolce_wheat_bread.jpg',
    title: 'Homemade Wheat Bread',
    subtitle: 'Fresh order packed warm',
    price: '₹ 160',
    productId: 'wheat-bread-loaves',
  },
  {
    url: '/assets/dolce-divino/dolce_jam_cookies.jpg',
    title: 'Butter Jam Thumbprints',
    subtitle: 'Crisp shortbread & berry jam',
    price: '₹ 260',
    productId: 'jam-thumbprint-cookies',
  },
];

export const STUDIO_FEATURE_IMAGE = {
  url: '/assets/dolce-divino/dolce_hot_chocolate.jpg',
  alt: 'Dolce Divino rich homemade hot chocolate served with pure chocolate drops',
};

export const BAKERY_PRODUCTS: BakeryProduct[] = [
  {
    id: 'molten-brownie-sundae',
    name: 'Molten Dark Chocolate Brownie Bowl',
    category: 'Chocolates & Desserts',
    prepLead: 'Fresh on Order',
    shortNote:
      'Decadent warm cocoa fudge cake bowl topped with vanilla cream scoop and velvety chocolate sauce.',
    description:
      'Rich homemade dark chocolate brookie dessert baked until crisp at the edges with a gooey molten center—served warm with creamy vanilla ice cream and ganache drizzle.',
    ingredientsAndMethod:
      'Premium Dark Couverture · Homemade Cocoa Fudge · Warm Chocolate Sauce',
    allergens: ['Wheat', 'Dairy'],
    dietary: ['Premium Chocolate', 'Homemade & Eggless'],
    imageUrl: '/assets/dolce-divino/dolce_chocolate_sundae.jpg',
    imageAlt: 'Rich dark chocolate brownie bowl topped with melting ice cream and cocoa drizzle',
    availabilityNote: 'Signature Indulgence',
    variants: [
      { id: 'bowl-single', label: 'Single Dessert Tub', weightOrCount: 'Serves 1–2', priceInr: 280 },
      { id: 'bowl-duo', label: 'Family Warm Pan', weightOrCount: 'Serves 4', priceInr: 520 },
    ],
  },
  {
    id: 'rich-hot-chocolate',
    name: 'Rich in Chocolate Artisan Cocoa Mix',
    category: 'Chocolates & Desserts',
    prepLead: 'Ready to Ship',
    shortNote:
      'Thick, silky Parisian-style drinking chocolate crafted with real melted chocolate callets.',
    description:
      'Brew café-grade velvety hot chocolate at home in two minutes—blended from premium dark cocoa and pure chocolate drops with zero artificial thickeners.',
    ingredientsAndMethod:
      'Belgian-Style Chocolate Drops · Dutch-Processed Cocoa · Low Refined Sugar',
    allergens: ['Dairy', 'Soy'],
    dietary: ['Premium Chocolate', 'Homemade & Eggless'],
    imageUrl: '/assets/dolce-divino/dolce_hot_chocolate.jpg',
    imageAlt: 'Double-walled mug of thick rich hot chocolate beside a ramekin of chocolate drops',
    availabilityNote: 'Bestseller',
    variants: [
      { id: 'cocoa-250g', label: '250g Glass Jar', weightOrCount: '8–10 Mugs', priceInr: 360 },
      { id: 'cocoa-500g', label: '500g Connoisseur Tin', weightOrCount: '18–20 Mugs', priceInr: 680 },
    ],
  },
  {
    id: 'wheat-bread-loaves',
    name: '100% Whole Wheat Homemade Bread Loaf',
    category: 'Artisan Breads & Cookies',
    prepLead: 'Baked Morning Fresh',
    shortNote:
      'Soft, golden-brown 100% whole wheat sandwich loaves baked to order with zero preservatives.',
    description:
      'Wholesome daily sandwich and toast bread kneaded fresh in our FSSAI-registered kitchen using stoneground wheat, cold-pressed oil, and gentle slow proofing.',
    ingredientsAndMethod:
      '100% Whole Wheat Flour · Slow Fermentation · Packed Fresh on Order',
    allergens: ['Wheat'],
    dietary: ['Homemade & Eggless'],
    imageUrl: '/assets/dolce-divino/dolce_wheat_bread.jpg',
    imageAlt: 'Two golden freshly baked whole wheat bread loaves in baking tins',
    availabilityNote: 'Zero Preservatives',
    variants: [
      { id: 'loaf-single', label: 'Single Loaf (450g)', weightOrCount: '12 Slices', priceInr: 160 },
      { id: 'loaf-twin', label: 'Twin Loaf Pack', weightOrCount: '2 × 450g', priceInr: 300 },
    ],
  },
  {
    id: 'jam-thumbprint-cookies',
    name: 'Pure Butter Ruby Jam Cookies',
    category: 'Artisan Breads & Cookies',
    prepLead: '1-Day Notice',
    shortNote:
      'Delicate fluted butter shortbread cookies crowned with glossy ruby fruit jam centers.',
    description:
      'Crisp, melt-in-the-mouth piped butter cookies delicately baked golden and jewel-filled with mixed berry preserve—ideal for evening tea or festive gift boxes.',
    ingredientsAndMethod:
      'Cultured Dairy Butter · Hand-Piped Rosettes · Fruit Jam Centers',
    allergens: ['Wheat', 'Dairy'],
    dietary: ['Homemade & Eggless'],
    imageUrl: '/assets/dolce-divino/dolce_jam_cookies.jpg',
    imageAlt: 'Crystal platter of fluted golden butter cookies with red fruit jam centers',
    availabilityNote: 'Tea-Time Classic',
    variants: [
      { id: 'cookies-8', label: 'Box of 8 Cookies', weightOrCount: '220g Box', priceInr: 260 },
      { id: 'cookies-16', label: 'Festive Tin (16 pcs)', weightOrCount: '440g Tin', priceInr: 490 },
    ],
  },
  {
    id: 'ferrero-chocolate-slab',
    name: 'Triple Chocolate & Praline Fudge Slab',
    category: 'Chocolates & Desserts',
    prepLead: '1-Day Notice',
    shortNote:
      'Decadent dark fudge brownie slab swirled with three chocolates, almonds, and Ferrero truffles.',
    description:
      'Our signature celebration fudge slab celebrating Dolce Divino’s love for premium chocolate—rich cocoa crumb drizzled in white, milk, and dark ganache.',
    ingredientsAndMethod:
      'Dark Cocoa Base · Triple Couverture Drizzle · Roasted Almonds & Pralines',
    allergens: ['Wheat', 'Dairy', 'Tree Nuts', 'Soy'],
    dietary: ['Premium Chocolate', 'Homemade & Eggless'],
    imageUrl: '/assets/dolce-divino/dolce_ferrero_slab.jpg',
    imageAlt: 'Triple chocolate brownie fudge slab topped with truffles and roasted almonds',
    availabilityNote: 'Gift Hit',
    variants: [
      { id: 'slab-500g', label: '500g Gift Slab', weightOrCount: '6–8 Slices', priceInr: 540 },
      { id: 'slab-1kg', label: '1 kg Celebration Slab', weightOrCount: '12–16 Slices', priceInr: 1020 },
    ],
  },
  {
    id: 'airfried-moong-dal',
    name: 'Crispy Air-Fried Golden Moong Dal',
    category: 'Savory & Gifting',
    prepLead: 'Same-Day Fresh',
    shortNote:
      'Light, oil-free air-fried moong dal roasted crisp with mild sea salt for guilt-free snacking.',
    description:
      'Wholesome homemade savory crunch prepared with soaked split yellow moong dal and air-fried to light golden crispness—zero deep frying.',
    ingredientsAndMethod:
      'Split Yellow Moong Dal · Oil-Free Air Frying · Light Sea Salt',
    allergens: [],
    dietary: ['Homemade & Eggless'],
    imageUrl: '/assets/dolce-divino/dolce_moong_dal.jpg',
    imageAlt: 'Crisp golden air-fried yellow moong dal batch resting on parchment',
    availabilityNote: 'Oil-Free Crunch',
    variants: [
      { id: 'dal-250g', label: '250g Snack Pack', weightOrCount: '1 Pouch', priceInr: 150 },
      { id: 'dal-500g', label: '500g Family Jar', weightOrCount: '2 Pouches', priceInr: 280 },
    ],
  },
];

export const BATCH_AND_VLOG_SLOTS: BatchScheduleSlot[] = [
  {
    id: 'bake-bread-morning',
    kind: 'Fresh Bake Schedule',
    timing: 'Morning Batch',
    tagLabel: 'Packed Warm',
    title: '100% Whole Wheat Bread Loaves',
    notes: 'Slow-proofed loaves baked to order with zero preservatives; packed fresh.',
    productId: 'wheat-bread-loaves',
  },
  {
    id: 'bake-chocolate-evening',
    kind: 'Fresh Bake Schedule',
    timing: 'Daily Batch',
    tagLabel: 'Premium Cocoa',
    title: 'Molten Brownie Bowl & Triple Choco Slab',
    notes: 'Crafted fresh with dark couverture chocolate and roasted nut toppings.',
    productId: 'molten-brownie-sundae',
  },
  {
    id: 'bake-cookies-snack',
    kind: 'Fresh Bake Schedule',
    timing: 'Tea-Time Dispatch',
    tagLabel: 'Pure Butter · Eggless',
    title: 'Ruby Jam Butter Cookies & Air-Fried Moong Dal',
    notes: 'Crisp tea-time sweet and savory jars sealed fresh for home delivery.',
    productId: 'jam-thumbprint-cookies',
  },
  {
    id: 'vlog-hot-cocoa',
    kind: 'Bake & Vlog Features',
    timing: 'Instagram Reel',
    tagLabel: '@dolce81981 · Baking',
    title: 'How We Blend Rich in Chocolate Hot Cocoa',
    notes: 'Behind-the-scenes tempering real chocolate drops for thick café texture.',
    productId: 'rich-hot-chocolate',
  },
  {
    id: 'vlog-wheat-bread',
    kind: 'Bake & Vlog Features',
    timing: 'Fresh Order Vlog',
    tagLabel: 'FSSAI Registered Kitchen',
    title: 'From Mixing Bowl to Golden Whole Wheat Crust',
    notes: 'See how our wholesome everyday bread is kneaded, proofed, and packed.',
    productId: 'wheat-bread-loaves',
  },
  {
    id: 'vlog-healthy-snacks',
    kind: 'Bake & Vlog Features',
    timing: 'Lifestyle Feature',
    tagLabel: 'Air-Fried Series',
    title: 'Guilt-Free Homemade Air-Fried Moong Dal Crunch',
    notes: 'Oil-free kitchen technique featured on our Baking & Lifestyle feed.',
    productId: 'airfried-moong-dal',
  },
];

export const PICKUP_TIME_SLOTS = [
  '10:00 – 13:00 (Morning Fresh Dispatch)',
  '13:00 – 16:00 (Afternoon Slot)',
  '16:00 – 19:00 (Evening Tea Batch)',
  '19:00 – 21:00 (Dinner Dessert Slot)',
] as const;

export const CRAFT_PRINCIPLES = [
  {
    index: '01.',
    title: 'Crafted with Love & Premium Chocolate',
    detail:
      'Every brownie bowl, hot cocoa jar, and chocolate slab is prepared in small batches using rich dark couverture and real cocoa butter.',
  },
  {
    index: '02.',
    title: 'FSSAI Registered Home Bakery',
    detail:
      'Clean, certified home-kitchen standards with fresh-on-order whole wheat loaves, cultured butter cookies, and zero chemical preservatives.',
  },
  {
    index: '03.',
    title: 'Baking, Lifestyle & Everyday Joy',
    detail:
      'Follow @dolce81981 for behind-the-scenes kitchen reels, healthy air-fried snacks, travel stories, and quick DM ordering.',
  },
];
