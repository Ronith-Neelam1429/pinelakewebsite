// Image URLs from easternspharmacy.com (UENI CDN)
const CDN = "https://img77.uenicdn.com/image/upload";

export const images = {
  hero: "/images/hero-banner.png",

  about: [
    "/images/about-pharmacy.jpg",
    "/images/about-community-care.png",
    "/images/about-immunization.png",
  ],

  services: {
    "auto-refills": "/images/auto-refills.png",
    "prescription-mail-out": "/images/prescription-mail-out.png",
    "pharmacy-delivery": `${CDN}/v1695569869/business/8f9117fc163d4b57ba2b508f485f131e.jpg`,
    "special-packaging": `${CDN}/v1695569902/business/f0c29b28faea495fb571173b23ef3420.jpg`,
    immunization: `${CDN}/v1695569967/business/2ece7805f6464c2a946dbf8700ffe3e5.jpg`,
    "pets-medications": `${CDN}/v1695569990/business/f7864ea20d4b4ea19b1135c630371a0c.jpg`,
    "vitamins-otc": `${CDN}/v1695570009/business/c7be56490ba6457883d067ad3076d6c0.jpg`,
  },

  products: {
    "diabetic-shoes": `${CDN}/v1695565464/business/c12db69b249d4e8bb5c866afd5508eef.png`,
    "diabetic-socks": `${CDN}/v1695565000/business/296165f38c4046d7bba159c8c11fa618.png`,
    "insulin-injector": `${CDN}/v1695564867/business/071d6a152e984ef2b93cab78427669b9.png`,
    "blood-glucose-exam-kit": `${CDN}/v1695564944/business/8c7fa62e7517497484cea70f42dc7a9b.png`,
    "adjustable-back-shower-gurney": `${CDN}/v1695565753/business/7d28a34389e145119ee55bf05c54e4e3.png`,
    "safe-bath-seat-riser": `${CDN}/v1695566380/business/661270e8b85f48f791a6542382a3759c.png`,
    "bathtub-rail": `${CDN}/v1695566438/business/6722c656582040b3be1adbaa76931e52.png`,
    "bathtub-and-shower-transfer-bench": `${CDN}/v1695566512/business/98c7c5cb671c4785a62931591dfdce2c.png`,
    rollator: `${CDN}/v1695566560/business/fd8a96cf4360410dbbc70008fae26c6d.png`,
    "transport-chair": `${CDN}/v1695566657/business/d1b9cc1a6e714234a79cf62d44529e82.png`,
    "walk-aid": `${CDN}/v1695566761/business/88f1acadfa2d43e2b6914b4ee00ffc64.png`,
    wheelchair: `${CDN}/v1695566837/business/5f35fa8e38aa40d6bb97cf4810e53008.png`,
  },

  blog: {
    "how-to-choose-the-right-vitamins-and-supplements-for-your-health": `${CDN}/v1695571226/business/88ff72baae0d4644b1aa6fea56ab9a27.jpg`,
    "vitamin-d-and-immunity-what-you-need-to-know": `${CDN}/v1663237818/service_images/shutterstock_2038354247.jpg`,
  },
};

// Human-friendly labels for the images above. Kept as a separate export
// to avoid breaking existing imports that expect string URLs.
export const imageLabels = {
  hero: 'Hero Image',

  about: ['About image 1', 'About image 2', 'About image 3'],

  services: {
    'auto-refills': 'Auto Refills',
    'prescription-mail-out': 'Prescription Mail-Out',
    'pharmacy-delivery': 'Pharmacy Delivery',
    'special-packaging': 'Special Packaging',
    immunization: 'Immunization',
    'pets-medications': "Pet Medications",
    'vitamins-otc': 'Vitamins & OTC',
  },

  products: {
    'diabetic-shoes': 'Diabetic Shoes',
    'insulin-injector': 'Insulin Injector',
    'walk-aid': 'Walking Aid',
    'blood-glucose-exam-kit': 'Blood Glucose Exam Kit',
    'adjustable-back-shower-gurney': 'Adjustable Back Shower Gurney',
    'safe-bath-seat-riser': 'Safe Bath Seat Riser',
    'bathtub-rail': 'Bathtub Rail',
    'bathtub-and-shower-transfer-bench': 'Bathtub & Shower Transfer Bench',
    rollator: 'Rollator',
    'transport-chair': 'Transport Chair',
    'diabetic-socks': 'Diabetic Socks',
    wheelchair: 'Wheelchair',
  },

  blog: {
    'how-to-choose-the-right-vitamins-and-supplements-for-your-health': 'How to Choose the Right Vitamins and Supplements for Your Health',
    'vitamin-d-and-immunity-what-you-need-to-know': 'Vitamin D and Immunity: What You Need to Know',
  },
};
