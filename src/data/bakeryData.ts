export type BakeryCategory = 'Cookies' | 'Cake' | 'Bread';

export type DietaryTag = 'Nut-Free' | 'Cheese-Free';

export interface ProductVariant {
  id: string;
  label: string;
  weightOrCount: string;
  priceIdr: number;
}

export interface BakeryProduct {
  id: string;
  name: string;
  category: BakeryCategory;
  pullTime: string;
  pullPeriod: 'Morning' | 'Afternoon';
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

export interface OvenPullSlot {
  id: string;
  time: string;
  period: 'Morning' | 'Afternoon';
  batchTitle: string;
  notes: string;
  productId: string;
  productName: string;
}

export const PANDU_BRAND = {
  name: 'Pandu Bakery',
  tagline: 'Homemade Cookies, Cake & Bread',
  handle: '@pandu_bakery',
  whatsappDisplay: '0857 7316 9999',
  pirtCode: 'P-IRT: 2.06.3308.01.1626.20',
  logoUrl: '/src/assets/images/pandu_logo_seal_1795282563708.jpg',
};

export const HERO_IMAGE = {
  url: '/src/assets/images/pandu_nastar_jar_1795282565687.jpg',
  alt: 'Homemade Pandu Bakery Nastar pineapple lattice cookie jar sealed fresh',
};

export const HAMPERS_IMAGE = {
  url: '/src/assets/images/pandu_festive_hampers_1795282565617.jpg',
  alt: 'Pandu Bakery festive ribbon-wrapped gift hampers filled with assorted cookie jars',
};

export const BAKERY_PRODUCTS: BakeryProduct[] = [
  {
    id: 'nastar-pineapple',
    name: 'Nastar Pineapple Lattice Jar',
    category: 'Cookies',
    pullTime: '08:00',
    pullPeriod: 'Morning',
    shortNote: 'Melt-in-your-mouth butter pastry with slow-cooked sweet pineapple jam.',
    description:
      'Our signature homemade Nastar topped with hand-woven golden pastry lattice and baked with caramelized spiced pineapple filling.',
    ingredientsAndMethod: 'Cultured Butter · Fresh Grated Pineapple · Clove & Cinnamon Reduction',
    allergens: ['Wheat', 'Dairy', 'Egg'],
    dietary: ['Nut-Free', 'Cheese-Free'],
    imageUrl: '/src/assets/images/pandu_nastar_jar_1795282565687.jpg',
    imageAlt: 'Clear jar of Pandu Bakery golden pineapple Nastar cookies',
    availabilityNote: 'Bestseller',
    variants: [
      { id: 'jar-350', label: 'Medium Jar', weightOrCount: '350g', priceIdr: 65000 },
      { id: 'jar-500', label: 'Large Jar', weightOrCount: '500g', priceIdr: 90000 },
    ],
  },
  {
    id: 'kastengel-cheese',
    name: 'Kastengel Aged Cheese Sticks',
    category: 'Cookies',
    pullTime: '09:00',
    pullPeriod: 'Morning',
    shortNote: 'Crisp savory butter batons topped with toasted grated cheddar and Edam.',
    description:
      'Rich, flaky savory cheese sticks made with generous aged Edam inside the dough and finished with an egg-washed cheddar crust.',
    ingredientsAndMethod: 'Aged Edam & Cheddar · Golden Egg Glaze · Zero Preservatives',
    allergens: ['Wheat', 'Dairy', 'Egg'],
    dietary: ['Nut-Free'],
    imageUrl: '/src/assets/images/pandu_kastengel_jar_1795282564334.jpg',
    imageAlt: 'Jar of golden baked Kastengel cheese sticks topped with grated cheese',
    availabilityNote: 'Savory Favorite',
    variants: [
      { id: 'jar-350', label: 'Medium Jar', weightOrCount: '350g', priceIdr: 75000 },
      { id: 'jar-500', label: 'Large Jar', weightOrCount: '500g', priceIdr: 105000 },
    ],
  },
  {
    id: 'putri-salju',
    name: 'Putri Salju Snow Hearts',
    category: 'Cookies',
    pullTime: '09:30',
    pullPeriod: 'Morning',
    shortNote: 'Delicate heart-shaped butter cookies generously coated in cool snow sugar.',
    description:
      'Tender shortbread hearts baked at low temperature for a crumbly finish and rolled warm in fine cooling icing sugar.',
    ingredientsAndMethod: 'Roasted Cashew Crumb · Sweet Cream Butter · Fine Snow Sugar',
    allergens: ['Wheat', 'Dairy', 'Tree Nuts'],
    dietary: ['Cheese-Free'],
    imageUrl: '/src/assets/images/pandu_putri_salju_1795282563965.jpg',
    imageAlt: 'Heart-shaped Putri Salju cookies dusted in white powdered sugar',
    availabilityNote: 'Fresh Batch',
    variants: [
      { id: 'jar-350', label: 'Medium Jar', weightOrCount: '350g', priceIdr: 60000 },
      { id: 'jar-500', label: 'Large Jar', weightOrCount: '500g', priceIdr: 85000 },
    ],
  },
  {
    id: 'choco-crescents',
    name: 'Choco-Dipped Butter Crescents',
    category: 'Cookies',
    pullTime: '13:30',
    pullPeriod: 'Afternoon',
    shortNote: 'Golden almond-butter crescent cookies hand-dipped in dark chocolate.',
    description:
      'Crisp baked butter crescents finished by hand in tempered dark chocolate for a balanced bittersweet snap.',
    ingredientsAndMethod: 'Whipped Butter Shortbread · Dark Couverture Dip · Vanilla Bean',
    allergens: ['Wheat', 'Dairy', 'Egg', 'Soy'],
    dietary: ['Nut-Free', 'Cheese-Free'],
    imageUrl: '/src/assets/images/pandu_choco_crescents_1795282564628.jpg',
    imageAlt: 'Crescent-shaped butter cookies dipped in glossy dark chocolate',
    availabilityNote: 'Afternoon Batch',
    variants: [
      { id: 'jar-350', label: 'Medium Jar', weightOrCount: '350g', priceIdr: 65000 },
      { id: 'jar-500', label: 'Large Jar', weightOrCount: '500g', priceIdr: 90000 },
    ],
  },
  {
    id: 'shell-madeleines',
    name: 'Classic Shell Madeleines',
    category: 'Cake',
    pullTime: '10:30',
    pullPeriod: 'Morning',
    shortNote: 'Fluted golden sponge cakes with tender citrus crumb and browned butter.',
    description:
      'Baked fresh in scalloped shell tins until the edges turn crisp caramel while the center stays light, airy, and fragrant.',
    ingredientsAndMethod: 'Browned Butter · Farm Eggs · Light Lemon Zest',
    allergens: ['Wheat', 'Dairy', 'Egg'],
    dietary: ['Nut-Free', 'Cheese-Free'],
    imageUrl: '/src/assets/images/pandu_madeleines_1795282564620.jpg',
    imageAlt: 'Golden shell-shaped madeleine cakes stacked in a white ceramic bowl',
    availabilityNote: 'Baked Daily',
    variants: [
      { id: 'box-8', label: 'Box of 8', weightOrCount: '8 pcs', priceIdr: 48000 },
      { id: 'box-16', label: 'Sharing Box of 16', weightOrCount: '16 pcs', priceIdr: 90000 },
    ],
  },
  {
    id: 'sesame-buns',
    name: 'Sesame Filled Sweet Buns',
    category: 'Bread',
    pullTime: '07:00',
    pullPeriod: 'Morning',
    shortNote: 'Pillowy golden milk bread rolls brushed with glaze and toasted sesame seeds.',
    description:
      'Soft pull-apart homemade buns cupped in black baking liners, stuffed with savory-sweet filling and crowned with white sesame.',
    ingredientsAndMethod: 'Soft Milk Dough · Egg Wash Glaze · Toasted White Sesame',
    allergens: ['Wheat', 'Dairy', 'Egg', 'Sesame'],
    dietary: ['Nut-Free', 'Cheese-Free'],
    imageUrl: '/src/assets/images/pandu_sesame_buns_1795282564585.jpg',
    imageAlt: 'Warm golden sesame-topped sweet buns in black pleated paper cups',
    availabilityNote: 'Morning Oven',
    variants: [
      { id: 'box-6', label: 'Box of 6', weightOrCount: '6 pcs', priceIdr: 42000 },
      { id: 'box-12', label: 'Family Box of 12', weightOrCount: '12 pcs', priceIdr: 80000 },
    ],
  },
];

export const OVEN_PULL_SCHEDULE: OvenPullSlot[] = [
  {
    id: 'pull-0700',
    time: '07:00',
    period: 'Morning',
    batchTitle: 'Warm Bread Tray',
    notes: 'Soft milk-bread buns pulled fresh with golden sesame glaze.',
    productId: 'sesame-buns',
    productName: 'Sesame Filled Sweet Buns',
  },
  {
    id: 'pull-0800',
    time: '08:00',
    period: 'Morning',
    batchTitle: 'Pineapple Cookie Batch',
    notes: 'Sealed fresh in airtight jars for crisp pastry and warm jam aroma.',
    productId: 'nastar-pineapple',
    productName: 'Nastar Pineapple Lattice Jar',
  },
  {
    id: 'pull-0900',
    time: '09:00',
    period: 'Morning',
    batchTitle: 'Savory Cheese Oven',
    notes: 'Crisp Edam and cheddar batons cooled and packed to order.',
    productId: 'kastengel-cheese',
    productName: 'Kastengel Aged Cheese Sticks',
  },
  {
    id: 'pull-1030',
    time: '10:30',
    period: 'Morning',
    batchTitle: 'Tea Cake Tin Pull',
    notes: 'Fluted shell madeleines released warm for tea-time boxes.',
    productId: 'shell-madeleines',
    productName: 'Classic Shell Madeleines',
  },
  {
    id: 'pull-1330',
    time: '13:30',
    period: 'Afternoon',
    batchTitle: 'Chocolate Dipping Bench',
    notes: 'Crisp butter crescents hand-dipped in dark couverture chocolate.',
    productId: 'choco-crescents',
    productName: 'Choco-Dipped Butter Crescents',
  },
  {
    id: 'pull-1500',
    time: '15:00',
    period: 'Afternoon',
    batchTitle: 'Snow Sugar Finishing',
    notes: 'Heart shortbreads dusted with fine cooling sugar for evening pickup.',
    productId: 'putri-salju',
    productName: 'Putri Salju Snow Hearts',
  },
];

export const PICKUP_TIME_SLOTS = [
  '09:00 – 11:00',
  '11:00 – 13:00',
  '14:00 – 16:00',
  '16:00 – 18:00',
] as const;

export const CRAFT_PRINCIPLES = [
  {
    index: '01.',
    title: 'Small-Batch Homemade Kitchen',
    detail:
      'Every jar of Nastar, Kastengel, and Putri Salju is mixed, shaped, and baked by hand in our licensed home bakery without artificial preservatives.',
  },
  {
    index: '02.',
    title: 'Registered Quality & Sealed Freshness',
    detail:
      'Prepared under P-IRT: 2.06.3308.01.1626.20 food safety standards and packed immediately after cooling in tamper-sealed jars to lock in crispness.',
  },
  {
    index: '03.',
    title: 'Festive Parcels & Made-to-Order Boxes',
    detail:
      'From daily tea-time bread boxes to multi-tier ribbon hampers for Idul Fitri, birthdays, and family gatherings, each order is packed fresh for pickup.',
  },
];
