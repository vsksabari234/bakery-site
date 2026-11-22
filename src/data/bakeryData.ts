export type BakeryCategory =
  | 'Custom Cakes'
  | 'Brownies & Slabs'
  | 'Cupcakes & Events';

export type DietaryTag = 'Eggless Option' | 'Fresh Fruit & Floral';

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

export interface WorkshopOrThemeSlot {
  id: string;
  kind: 'Custom Themes' | 'Baking Classes';
  timing: string;
  tagLabel: string;
  title: string;
  notes: string;
  productId: string;
}

export const CAKE_GALLERY_BRAND = {
  name: 'Cake Gallery',
  tagline: 'Love at First Bite · Homemade Cakes',
  subTagline: 'Low price with High taste cakes',
  handle: '@cake_gallery_affrin_affi',
  location: 'T. Nagar, Chennai',
  contactDisplay: '72991 18863',
  logoUrl: '/src/assets/images/cg_logo_seal_1795329956273.jpg',
};

export const HERO_IMAGE = {
  url: '/src/assets/images/cg_pink_butterfly_1795329957463.jpg',
  alt: 'Cake Gallery two-tier blush pink and gold butterfly celebration cake',
};

export const HERO_SHOWCASE_ACCENTS = [
  {
    url: '/src/assets/images/cg_rosegold_butterfly_1795329956670.jpg',
    title: 'Rose Gold Custom Tier',
    price: '₹ 1,050',
    productId: 'rosegold-butterfly-cake',
  },
  {
    url: '/src/assets/images/cg_ferrero_brownie_1795329956813.jpg',
    title: 'Ferrero & KitKat Slab',
    price: '₹ 480',
    productId: 'ferrero-brownie-slab',
  },
  {
    url: '/src/assets/images/cg_donut_drip_1795329957088.jpg',
    title: 'Donut Drip Tower',
    price: '₹ 1,400',
    productId: 'donut-drip-tier',
  },
];

export const WORKSHOP_POSTER_IMAGE = {
  url: '/src/assets/images/cg_kids_workshop_1795329958203.jpg',
  alt: 'Cake Gallery Kids Baking Summer Camp poster in T. Nagar Chennai for cupcakes, popsicles and mousse',
};

export const BAKERY_PRODUCTS: BakeryProduct[] = [
  {
    id: 'lavender-one-tier',
    name: 'Lavender & White Rose Two-Tier Cake',
    category: 'Custom Cakes',
    prepLead: '2-Day Notice',
    shortNote:
      'Quilted pastel lavender buttercream finished with satin bows and fresh cream roses.',
    description:
      'Hand-piped two-tier milestone birthday cake featuring diamond quilting, pearl accents, delicate satin ribbons, and fresh garden roses.',
    ingredientsAndMethod:
      'Soft Vanilla or Chocolate Sponge · Whipped Cream Frosting · Fresh Roses & Satin Ribbons',
    allergens: ['Wheat', 'Dairy'],
    dietary: ['Eggless Option', 'Fresh Fruit & Floral'],
    imageUrl: '/src/assets/images/cg_lavender_tier_1795329956750.jpg',
    imageAlt: 'Two-tier lavender and white buttercream cake topped with roses and satin bows',
    availabilityNote: 'Milestone Favorite',
    variants: [
      { id: 'tier-15kg', label: '1.5 kg Two-Tier', weightOrCount: 'Serves 15–18', priceInr: 1450 },
      { id: 'tier-25kg', label: '2.5 kg Grand Tier', weightOrCount: 'Serves 25–30', priceInr: 2300 },
    ],
  },
  {
    id: 'ferrero-brownie-slab',
    name: 'Ferrero & KitKat Triple Choco Brownie',
    category: 'Brownies & Slabs',
    prepLead: 'Same-Day Fresh',
    shortNote:
      'Fudgy homemade brownie loaded with triple chocolate swirls, Ferrero Rocher, and toasted almonds.',
    description:
      'Our signature rich cocoa fudge brownie slab drizzled with white, milk, and dark Belgian-style chocolate ganache and crowned with Ferrero Rocher and KitKat.',
    ingredientsAndMethod:
      'Dark Cocoa Fudge Base · Triple Chocolate Ganache · Ferrero Rocher & Roasted Almonds',
    allergens: ['Wheat', 'Dairy', 'Tree Nuts', 'Soy'],
    dietary: ['Eggless Option'],
    imageUrl: '/src/assets/images/cg_ferrero_brownie_1795329956813.jpg',
    imageAlt: 'Square brownie slab topped with Ferrero Rocher chocolates, KitKat bars, and almonds',
    availabilityNote: 'Bestseller',
    variants: [
      { id: 'box-500g', label: '500g Gift Slab', weightOrCount: '6–8 Slices', priceInr: 480 },
      { id: 'slab-1kg', label: '1 kg Party Slab', weightOrCount: '12–16 Slices', priceInr: 920 },
    ],
  },
  {
    id: 'donut-drip-tier',
    name: 'Donut & Cupcake Chocolate Drip Tower',
    category: 'Custom Cakes',
    prepLead: '2-Day Notice',
    shortNote:
      'Two-tier celebration cake overflowing with glazed donuts, mini cupcakes, and chocolate drips.',
    description:
      'A joyful two-tier party centerpiece coated in silky dark ganache drips and decorated with hand-glazed donuts, rosette cupcakes, and ice-cream cone toppers.',
    ingredientsAndMethod:
      'Rich Chocolate Truffle Sponge · Silky Dark Drip · Mini Donuts & Frosted Cupcakes',
    allergens: ['Wheat', 'Dairy'],
    dietary: ['Eggless Option'],
    imageUrl: '/src/assets/images/cg_donut_drip_1795329957088.jpg',
    imageAlt: 'Two-tier white cream cake with dark chocolate drip, pastel donuts, and cupcakes',
    availabilityNote: 'Kids Party Hit',
    variants: [
      { id: 'tier-15kg', label: '1.5 kg Two-Tier', weightOrCount: 'Serves 15–18', priceInr: 1400 },
      { id: 'tier-25kg', label: '2.5 kg Grand Tier', weightOrCount: 'Serves 25–30', priceInr: 2250 },
    ],
  },
  {
    id: 'strawberry-brownie-slab',
    name: 'Fresh Strawberry & Truffle Brownie Slab',
    category: 'Brownies & Slabs',
    prepLead: '1-Day Notice',
    shortNote:
      'Rich chocolate brownie slab crowned with fresh red strawberries, truffles, and custom message plaque.',
    description:
      'Baked fresh for anniversaries and surprise boxes—pairing moist homemade chocolate brownie with juicy hand-picked strawberries, mint leaves, and chocolate truffles.',
    ingredientsAndMethod:
      'Moist Chocolate Brownie · Fresh Strawberries · Chocolate Truffles & Custom Plaque',
    allergens: ['Wheat', 'Dairy', 'Soy'],
    dietary: ['Eggless Option', 'Fresh Fruit & Floral'],
    imageUrl: '/src/assets/images/cg_strawberry_brownie_1795330036874.jpg',
    imageAlt: 'Chocolate brownie slab garnished with fresh strawberries, mint, chocolate balls, and message',
    availabilityNote: 'Anniversary Pick',
    variants: [
      { id: 'box-500g', label: '500g Surprise Slab', weightOrCount: '6–8 Slices', priceInr: 520 },
      { id: 'slab-1kg', label: '1 kg Celebration Slab', weightOrCount: '12–16 Slices', priceInr: 980 },
    ],
  },
  {
    id: 'blue-floral-cake',
    name: 'Sky Blue & Fresh Gerbera Floral Cake',
    category: 'Custom Cakes',
    prepLead: '1-Day Notice',
    shortNote:
      'Pastel sky-blue piped buttercream topped with vibrant yellow, white, and red fresh blooms.',
    description:
      'Clean, elegant floral cake crafted with light homemade sponge, smooth textured blue cream, pearl piping, and hand-arranged fresh gerbera daisies and baby’s breath.',
    ingredientsAndMethod:
      'Light Vanilla or Choco Sponge · Pastel Whipped Cream · Food-Safe Wrapped Fresh Flowers',
    allergens: ['Wheat', 'Dairy'],
    dietary: ['Eggless Option', 'Fresh Fruit & Floral'],
    imageUrl: '/src/assets/images/cg_blue_floral_1795329956633.jpg',
    imageAlt: 'Sky blue buttercream cake topped with yellow, white, and red fresh gerbera flowers',
    availabilityNote: 'Fresh Floral',
    variants: [
      { id: 'cake-500g', label: '500g Classic', weightOrCount: 'Serves 6–8', priceInr: 550 },
      { id: 'cake-1kg', label: '1 kg Celebration', weightOrCount: 'Serves 10–14', priceInr: 950 },
    ],
  },
  {
    id: 'rosegold-butterfly-cake',
    name: 'Rose Gold Butterfly Celebration Cake',
    category: 'Custom Cakes',
    prepLead: '1-Day Notice',
    shortNote:
      'Lustrous rose-gold shimmer finish adorned with gold filigree butterflies and chocolate spheres.',
    description:
      'Custom metallic rose-gold celebration cake personalized with custom name lettering, edible gold pearl sprinkles, hollow chocolate spheres, and 3D butterflies.',
    ingredientsAndMethod:
      'Butterscotch or Choco-Hazelnut Filling · Rose-Gold Frosting · 3D Butterfly Toppers',
    allergens: ['Wheat', 'Dairy'],
    dietary: ['Eggless Option'],
    imageUrl: '/src/assets/images/cg_rosegold_butterfly_1795329956670.jpg',
    imageAlt: 'Metallic rose-gold cake with gold butterfly accents and golden chocolate spheres',
    availabilityNote: 'Custom Name',
    variants: [
      { id: 'cake-1kg', label: '1 kg Single Tier', weightOrCount: 'Serves 10–14', priceInr: 1050 },
      { id: 'cake-15kg', label: '1.5 kg Tall Cake', weightOrCount: 'Serves 16–20', priceInr: 1550 },
    ],
  },
  {
    id: 'watermelon-fruit-cake',
    name: 'Carved Watermelon & Exotic Fruit Cake',
    category: 'Custom Cakes',
    prepLead: '2-Day Notice',
    shortNote:
      'Refreshing two-tier carved fresh watermelon tower cascading with dragonfruit hearts, kiwi, and berries.',
    description:
      'Zero-flour, 100% fresh carved fruit centerpiece crafted from sweet red watermelon cylinders decorated with heart-cut dragonfruit, mandarin segments, blueberries, and kiwi.',
    ingredientsAndMethod:
      'Fresh Carved Watermelon · Heart-Cut Dragonfruit · Kiwi, Mandarin & Blueberries',
    allergens: [],
    dietary: ['Eggless Option', 'Fresh Fruit & Floral'],
    imageUrl: '/src/assets/images/cg_watermelon_fruit_1795329957013.jpg',
    imageAlt: 'Two-tier fresh watermelon cake decorated with heart-shaped dragonfruit, kiwi, oranges, and blueberries',
    availabilityNote: '100% Fresh Fruit',
    variants: [
      { id: 'fruit-15kg', label: '1.5 kg Two-Tier', weightOrCount: 'Serves 12–16', priceInr: 1250 },
      { id: 'fruit-25kg', label: '2.5 kg Family Tier', weightOrCount: 'Serves 22–28', priceInr: 2100 },
    ],
  },
  {
    id: 'unicorn-rainbow-cake',
    name: 'Pastel Rainbow Unicorn Theme Cake',
    category: 'Custom Cakes',
    prepLead: '2-Day Notice',
    shortNote:
      'Blush-pink and lavender ombré cream cake topped with a bright rainbow arch and unicorn horn.',
    description:
      'Tall homemade layered sponge frosted in dreamy pastel pink and lilac ridges, finished with sugar stars, rainbow topper, and crisp unicorn character art.',
    ingredientsAndMethod:
      'Strawberry or Vanilla Sponge · Blush & Lilac Cream · Rainbow & Star Toppers',
    allergens: ['Wheat', 'Dairy'],
    dietary: ['Eggless Option'],
    imageUrl: '/src/assets/images/cg_unicorn_rainbow_1795329957491.jpg',
    imageAlt: 'Tall pink and lavender ombre unicorn birthday cake with rainbow topper',
    availabilityNote: 'Kids Favorite',
    variants: [
      { id: 'cake-1kg', label: '1 kg Tall Cake', weightOrCount: 'Serves 10–14', priceInr: 1100 },
      { id: 'cake-15kg', label: '1.5 kg Party Cake', weightOrCount: 'Serves 16–20', priceInr: 1600 },
    ],
  },
  {
    id: 'kids-baking-workshop',
    name: 'Kids Baking Workshop Pass (T. Nagar)',
    category: 'Cupcakes & Events',
    prepLead: 'Weekend Batches',
    shortNote:
      'Hands-on 3-hour kids workshop making cupcakes, chocolate popsicles, and creamy mousse.',
    description:
      'Fun, guided homemade baking session in T. Nagar, Chennai for ages 6–12 years (2:00 PM – 5:00 PM). Includes all baking ingredients, chef aprons, and take-home treats.',
    ingredientsAndMethod:
      'Cupcake Piping · Chocolate Popsicles · No-Bake Mousse Cups · All Supplies Included',
    allergens: ['Wheat', 'Dairy'],
    dietary: ['Eggless Option'],
    imageUrl: '/src/assets/images/cg_kids_workshop_1795329958203.jpg',
    imageAlt: 'Cake Gallery Kids Baking Summer Camp in T. Nagar Chennai featuring cupcakes, popsicles and mousse',
    availabilityNote: 'Ages 6–12 Yrs',
    variants: [
      { id: 'seat-1', label: 'Single Kid Pass', weightOrCount: '3-Hr Session', priceInr: 750 },
      { id: 'seat-2', label: '2 Siblings / Friends', weightOrCount: '2 Seats', priceInr: 1400 },
    ],
  },
];

export const THEME_AND_WORKSHOP_SLOTS: WorkshopOrThemeSlot[] = [
  {
    id: 'theme-butterfly',
    kind: 'Custom Themes',
    timing: 'Custom Colors',
    tagLabel: 'Two-Tier Celebration',
    title: 'Blush Pink & Gold Butterfly Tiered Cake',
    notes: 'Acrylic spacer or stacked tier with custom name banner & metallic spheres.',
    productId: 'lavender-one-tier',
  },
  {
    id: 'theme-brownie',
    kind: 'Custom Themes',
    timing: 'Same-Day Option',
    tagLabel: 'Brownie Gift Slab',
    title: 'Ferrero, KitKat & Strawberry Brownie Slabs',
    notes: 'Triple-chocolate fudge brownies packed fresh with custom handwritten plaques.',
    productId: 'ferrero-brownie-slab',
  },
  {
    id: 'theme-fruit',
    kind: 'Custom Themes',
    timing: 'No-Bake Healthy',
    tagLabel: 'Carved Fruit Centerpiece',
    title: 'Watermelon, Dragonfruit & Kiwi Fruit Cake',
    notes: 'Naturally sweet carved watermelon tiers ideal for health-conscious celebrations.',
    productId: 'watermelon-fruit-cake',
  },
  {
    id: 'class-kids-camp',
    kind: 'Baking Classes',
    timing: '2:00 – 5:00 PM',
    tagLabel: 'Ages 6–12 · T. Nagar',
    title: 'Kids Baking Camp: Cupcakes, Popsicles & Mousse',
    notes: 'Beginner-friendly group session; kids take home their own freshly frosted box.',
    productId: 'kids-baking-workshop',
  },
  {
    id: 'class-cupcake-brownie',
    kind: 'Baking Classes',
    timing: 'Weekend Batch',
    tagLabel: 'Home Bakers · Chennai',
    title: 'Eggless Fudge Brownie & Cupcake Piping Class',
    notes: 'Learn crackle-top brownies, ganache drips, and clean buttercream frosting.',
    productId: 'strawberry-brownie-slab',
  },
  {
    id: 'class-cake-decor',
    kind: 'Baking Classes',
    timing: '1-on-1 or Group',
    tagLabel: 'Custom Cake Craft',
    title: 'Beginner Sponge & Sharp-Edge Frosting Session',
    notes: 'Hands-on training in baking sponge, layering fillings, and theme decorating.',
    productId: 'rosegold-butterfly-cake',
  },
];

export const PICKUP_TIME_SLOTS = [
  '10:00 – 12:00 (Morning)',
  '12:00 – 15:00 (Afternoon)',
  '15:00 – 18:00 (Evening)',
  '18:00 – 20:30 (Night)',
] as const;

export const CRAFT_PRINCIPLES = [
  {
    index: '01.',
    title: '100% Homemade Fresh to Order',
    detail:
      'Every sponge, fudge brownie slab, and buttercream swirl is baked fresh in our Chennai kitchen—never frozen, with eggless options available on request.',
  },
  {
    index: '02.',
    title: 'Low Price with High Taste Promise',
    detail:
      'Custom tiered theme cakes, fresh gerbera florals, and Belgian-style chocolate slabs priced honestly for family birthdays, anniversaries, and surprises.',
  },
  {
    index: '03.',
    title: 'Baking Classes & Kids Workshops',
    detail:
      'Regular hands-on baking sessions in T. Nagar, Chennai for kids (ages 6–12) and aspiring home bakers covering cupcakes, brownies, popsicles, and mousse.',
  },
];
