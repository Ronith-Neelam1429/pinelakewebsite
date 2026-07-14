import { images } from "./images";

export const siteConfig = {
  name: "Pinelake Pharmacy",
  shortName: "Pinelake",
  tagline: "Guiding You Along The Path To Wellness",
  location: "Pinelake",
  city: "Sammamish",
  state: "Washington",
  zip: "98075",
  address: "22833 SE 24th St, Ste 100, Sammamish, Washington, 98075",
  phone: "(425) 944-9444",
  phoneLink: "tel:+14259449444",
  email: "Pinelakepharmacy@gmail.com",
  emailLink: "mailto:Pinelakepharmacy@gmail.com",
  inboxEmail: "Pinelakepharmacy@gmail.com",
  rxLocalUrl: "https://patient.rxlocal.com/",
  topBarMessage:
    "Call us to set up a schedule to talk about your medication plan. Pinelake Pharmacy is always at your service!",
  heroImage: images.hero,
  vaccineBanner:
    "We currently have the new Flu and Pfizer covid vaccine in stock",
  hours: [
    { day: "Sunday", hours: "Closed" },
    { day: "Monday", hours: "8:30 AM - 5:00 PM" },
    { day: "Tuesday", hours: "8:30 AM - 5:00 PM" },
    { day: "Wednesday", hours: "8:30 AM - 5:00 PM" },
    { day: "Thursday", hours: "8:30 AM - 5:00 PM" },
    { day: "Friday", hours: "8:30 AM - 5:00 PM" },
    { day: "Saturday", hours: "Closed" },
  ],
  whyChooseUs: [
    {
      title: "Unmatched Professionalism",
      description:
        "At Pinelake Pharmacy, professionalism is our cornerstone. Our highly trained team ensures accurate prescriptions, expert guidance, and compassionate care, setting a standard for excellence in healthcare services. Your well-being is our top priority.",
    },
    {
      title: "Experienced Staff",
      description:
        "Trust our expertise for precise medication management and personalized healthcare solutions. Your health is in capable hands.",
    },
    {
      title: "We Are Here for You!",
      description:
        "Our customer care at Pinelake Pharmacy is exceptional. We prioritize your needs, offering friendly, efficient service, expert guidance, and a commitment to your well-being. Your satisfaction and health are our top priorities.",
    },
  ],
  features: [
    "Medication Management",
    "Exceptional Customer Service",
    "Expert Pharmacy Team",
    "Personalized Care",
    "Vaccination Services",
  ],
  reviews: [
    {
      author: "B.J. Johnson Horton",
      text: "Great pharmacy if you want professional, personal service. Excellent customer service; calls are answered and returned promptly. Overall, this pharmacy is the best!",
      date: "09.24.2023",
    },
    {
      author: "Sarah M.",
      text: "Very efficient pharmacy. Small but has a good variety of cards, medications, and drugs. Some sandwiches and coffee cakes Candies and refreshments at single-seat tables to drink coffee. Prescriptions are always ready on time.",
      date: "08.15.2023",
    },
    {
      author: "Michael T.",
      text: "In addition to a pharmacy, they have a lovely host of other knick-knacks and goodies. I love that they have a small little cafe area for refreshments while you wait- the barista is great and very attentive.",
      date: "07.02.2023",
    },
  ],
};
