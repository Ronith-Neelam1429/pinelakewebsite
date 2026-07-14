import { images } from "./images";

export const productCategories = [
  {
    name: "Diabetic Care",
    slug: "diabetic-care",
    products: [
      {
        slug: "blood-glucose-exam-kit",
        title: "Blood Glucose Exam Kit",
        image: images.products["blood-glucose-exam-kit"],
        description: `Managing diabetes effectively requires accurate monitoring of blood glucose levels. At Pinelake Pharmacy, we understand the importance of accessible and reliable tools for diabetic management. Our Blood Glucose Exam Kit is designed to empower individuals with diabetes to take control of their health.

• Precision Monitoring: Our Blood Glucose Exam Kit provides you with precise and rapid results, ensuring you can make informed decisions about your health in seconds.
• Easy to Use: We believe diabetic management should be straightforward. Our kit is user-friendly, with clear instructions that make testing your blood glucose levels a breeze.
• Compact and Portable: Designed for on-the-go convenience, our kit is compact and easy to carry. Whether you're at home, work, or traveling, you can monitor your blood glucose levels with ease.
• Memory Function: Keep track of your progress with the built-in memory function, which stores your previous readings. This helps you and your healthcare provider monitor changes in your blood glucose levels over time.
• Hygienic and Safe: The kit comes with disposable lancets and test strips, ensuring hygienic testing. Plus, it has a safety ejector for hassle-free disposal.
• Battery-Powered: No need to worry about charging or finding outlets. Our Blood Glucose Exam Kit runs on standard batteries, making it a dependable companion for everyday use.

Take charge of your diabetic management with confidence. Trust Pinelake Pharmacy for the tools you need to live a healthier, more informed life with diabetes.`,
      },
      {
        slug: "insulin-injector",
        title: "Insulin Injector",
        image: images.products["insulin-injector"],
        description: `Living with diabetes just got easier and more convenient with our cutting-edge insulin injector. At Pinelake Pharmacy, we're committed to providing innovative solutions that empower you to manage your diabetes effectively. Our insulin injector is designed with your comfort, precision, and convenience in mind.

Make insulin administration a stress-free part of your daily routine with Pinelake Pharmacy Insulin Injector. It's not just an injector; it's a tool designed to enhance your quality of life, offering precision, convenience, and peace of mind.

Choose Pinelake Pharmacy for the latest advancements in diabetes care. Order your Insulin Injector today and experience a new level of comfort and control in managing your diabetes.`,
      },
      {
        slug: "diabetic-socks",
        title: "Diabetic Socks",
        image: images.products["diabetic-socks"],
        description: `When you're living with diabetes, taking care of your feet is crucial. That's why Pinelake Pharmacy is proud to offer our specialized Diabetic Socks, designed with your comfort and well-being in mind. These socks are more than just a piece of clothing; they are an essential part of your diabetes management routine.

Don't compromise on comfort and foot health. Pinelake Pharmacy Diabetic Socks are specially designed to provide the care and protection your feet need. Whether you're relaxing at home or going about your day, our socks are your trusted companion for diabetic foot care.

Make every step a comfortable one. Experience the difference of Pinelake Pharmacy Diabetic Socks. Order your pair today and take a significant step toward better foot health.`,
      },
      {
        slug: "diabetic-shoes",
        title: "Diabetic Shoes",
        image: images.products["diabetic-shoes"],
        description: `Taking care of your feet is paramount when living with diabetes, and the right footwear can make all the difference. Pinelake Pharmacy is proud to offer our specially designed Diabetic Shoes, crafted with your comfort, safety, and style in mind. These shoes aren't just footwear; they're a crucial part of your diabetes management journey.

• Diabetic-Friendly Materials: Crafted from diabetic-friendly materials that wick away moisture and allow your feet to breathe, our shoes promote a healthy and dry environment for your feet.
• Podiatrist-Approved: Pinelake Pharmacy Diabetic Shoes are endorsed by podiatrists, ensuring they meet the highest standards of foot health and safety.

Invest in your foot health and overall well-being with Pinelake Pharmacy Diabetic Shoes. Experience the unparalleled comfort, support, and style that our shoes provide.`,
      },
    ],
  },
  {
    name: "Bathroom Safety",
    slug: "bathroom-safety",
    products: [
      {
        slug: "adjustable-back-shower-gurney",
        title: "Ajustable Back Shower Gurney",
        image: images.products["adjustable-back-shower-gurney"],
        description: `Enhance your bathroom safety with our Adjustable Back Shower Gurney. Designed for comfort and stability, this shower gurney provides secure support during bathing, reducing the risk of slips and falls. Pinelake Pharmacy offers quality bathroom safety equipment to help you maintain independence and confidence in your daily routine.`,
      },
      {
        slug: "safe-bath-seat-riser",
        title: "Safe Bath Seat Riser",
        image: images.products["safe-bath-seat-riser"],
        description: `Our Safe Bath Seat Riser makes getting in and out of the bathtub easier and safer. With sturdy construction and a comfortable design, this seat riser is an essential addition to any bathroom safety setup. Available at Pinelake Pharmacy to support your mobility and independence.`,
      },
      {
        slug: "bathtub-rail",
        title: "Bathtub Rail",
        image: images.products["bathtub-rail"],
        description: `Install our Bathtub Rail for added stability and support when entering or exiting the bathtub. This durable, easy-to-install rail provides a secure grip, helping prevent accidents in the bathroom. Pinelake Pharmacy carries a full range of bathroom safety products.`,
      },
      {
        slug: "bathtub-and-shower-transfer-bench",
        title: "Bathtub and Shower Transfer Bench",
        image: images.products["bathtub-and-shower-transfer-bench"],
        description: `Our Bathtub and Shower Transfer Bench provides a safe, comfortable seating option for bathing. The transfer bench slides easily across the tub, allowing you to enter and exit safely without standing. Trust Pinelake Pharmacy for quality mobility and safety solutions.`,
      },
    ],
  },
  {
    name: "Mobility",
    slug: "mobility",
    products: [
      {
        slug: "rollator",
        title: "Rollator",
        image: images.products.rollator,
        description: `Stay mobile and independent with our Rollator. Featuring a sturdy frame, comfortable seat, and storage basket, this rollator provides reliable support for walking and resting. Pinelake Pharmacy offers quality mobility aids to help you navigate daily life with confidence.`,
      },
      {
        slug: "transport-chair",
        title: "Transport Chair",
        image: images.products["transport-chair"],
        description: `Our Transport Chair is lightweight, foldable, and designed for easy transport. Whether for medical appointments or daily outings, this chair provides comfortable, safe mobility assistance. Available at Pinelake Pharmacy.`,
      },
      {
        slug: "walk-aid",
        title: "Walk Aid",
        image: images.products["walk-aid"],
        description: `Regain your confidence with our Walk Aid. Designed for stability and ease of use, this walking assistance device helps you maintain balance and mobility. Pinelake Pharmacy provides a range of mobility solutions tailored to your needs.`,
      },
      {
        slug: "wheelchair",
        title: "Wheelchair",
        image: images.products.wheelchair,
        description: `Our Wheelchair offers comfortable, reliable mobility for those who need assistance getting around. With durable construction and ergonomic design, this wheelchair supports your independence. Visit Pinelake Pharmacy to explore our mobility product selection.`,
      },
    ],
  },
];

export function getAllProducts() {
  return productCategories.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, category: cat.name, categorySlug: cat.slug }))
  );
}

export function getProduct(categorySlug, productSlug) {
  const category = productCategories.find((c) => c.slug === categorySlug);
  if (!category) return null;
  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return null;
  return { ...product, category: category.name, categorySlug: category.slug };
}
