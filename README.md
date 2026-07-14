# Pinelake Pharmacy Website

A React UI replica of [Eastern's Pharmacy](https://easternspharmacy.com/), rebranded for the new **Pinelake** location.

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Services | `/services` |
| Service Detail (×7) | `/services/:slug` |
| Products / Store | `/products` |
| Product Detail (×12) | `/products/:category/:product` |
| Resources | `/resources` |
| Blog | `/blog` |
| Blog Post (×2) | `/blog/:slug` |
| Contact Us | `/contact-us` |
| Request Refill | `/request-refill` |
| About Us | `/about-us` |
| About Article (×3) | `/about-us/:slug` |
| Merchant Policies | `/merchant-policies` |
| Legal Notice | `/legal-notice` |

## Getting Started

```bash
cd pinelake-pharmacy
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- React 19
- React Router 7
- Vite 6
- CSS (no UI framework — matches original site styling)

## Notes

- UI only — no backend, forms show alerts on submit
- Contact info uses Pinelake branding (update address/phone in `src/data/siteConfig.js`)
- Images use Unsplash placeholders matching the original layout
