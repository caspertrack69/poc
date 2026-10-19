/** Site-wide configuration: brand, navigation, contact, social links. */
export const siteConfig = {
  name: "Panduan POC",
  tagline: "Pusat Edukasi Pembuatan Pupuk Organik Cair",
  description:
    "Panduan praktis pembuatan Pupuk Organik Cair (POC) dari persiapan bahan, fermentasi, hingga aplikasi yang aman dan tepat untuk tanaman.",
  url: "https://panduan-poc.example",
  locale: "id_ID",
  author: {
    name: "Tim Panduan POC",
    description: "Sumber belajar mandiri untuk petani, pekebun, dan pemula pertanian organik.",
  },
  contact: {
    email: "halo@panduan-poc.example",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "X", href: "https://x.com/" },
  ],
  navigation: [
    { label: "Beranda", href: "/" },
    { label: "Panduan", href: "/panduan" },
    { label: "Resep", href: "/resep" },
    { label: "Tentang POC", href: "/tentang-poc" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;