/** Konten statis untuk bagian-bagian halaman beranda. */

export interface HomeHero {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface HomeIntro {
  heading: string;
  lead: string;
  paragraphs: string[];
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface FeatureCardData {
  eyebrow: string;
  pill: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface EssentialTip {
  title: string;
  description: string;
}

export interface CommonMistake {
  title: string;
  description: string;
}

export const homeHero: HomeHero = {
  eyebrow: "Edukasi Pertanian Organik",
  title: "Buat Pupuk Organik Cair",
  highlight: "dari Limbah Dapur Anda",
  description:
    "Panduan praktis dan terstruktur untuk membuat POC (Pupuk Organik Cair) sendiri di rumah — dari pemilihan bahan, fermentasi, hingga aplikasi yang aman bagi tanaman.",
  primaryCtaLabel: "Mulai Panduan",
  primaryCtaHref: "/panduan",
  secondaryCtaLabel: "Lihat Resep POC",
  secondaryCtaHref: "/resep",
};

export const homeIntro: HomeIntro = {
  heading: "Apa Itu POC dan Mengapa Perlu Dipelajari",
  lead:
    "Pupuk Organik Cair adalah larutan nutrisi hasil fermentasi bahan organik yang dapat diaplikasikan ke daun maupun tanah.",
  paragraphs: [
    "POC berbeda dengan pupuk organik padat:aktif pembentukannya lebih cepat, larutannya lebih mudah diserap tanaman, dan biasa digunakan sebagai pupuk daun. Akan tetapi, POC bukan pupuk lengkap — kandungan nutrisinya bergantung pada bahan dasar dan perlu didampingi dengan pupuk lain untuk nutrisi menyeluruh.",
    "Membuat POC sendiri memberi beberapa manfaat: mengurangi limbah dapur, menambah nutrisi tanaman, dan menekan biaya pemupukan. Namun ada juga batasan: hasil fermentasi bisa berbeda-beda dan perlu dievaluasi sebelum dipakai masal.",
  ],
};

export const howItWorks: HowItWorksStep[] = [
  {
    number: "01",
    title: "Persiapan Bahan",
    description: "Pilih bahan organik segar, cuci, dan cacah agar permukaan kontak mikroorganisme lebih besar.",
  },
  {
    number: "02",
    title: "Pencampuran",
    description: "Larutkan molase dan EM4 ke air, lalu campur dengan bahan organik di wadah kedap udara.",
  },
  {
    number: "03",
    title: "Fermentasi",
    description: "Simpan wadah di tempat gelap 7-14 hari, lepas gas fermentasi secara berkala.",
  },
  {
    number: "04",
    title: "Pemeriksaan Hasil",
    description: "Pastikan aroma segar-asam dan larutan bebas kontaminasi sebelum dipakai.",
  },
  {
    number: "05",
    title: "Pengenceran dan Aplikasi",
    description: "Encerkan sesuai dosis, semprot atau siram pada pagi atau sore hari.",
  },
];

export const featureCardData: FeatureCardData = {
  eyebrow: "Resep Unggulan",
  pill: "Limbah Buah",
  title: "POC dari Limbah Buah",
  description:
    "Resep dasar POC yang memanfaatkan sisa buah segar untuk pupuk daun. Cocok untuk pemula yang baru memulai fermentasi pertama.",
  ctaLabel: "Baca Resep",
  ctaHref: "/resep/poc-limbah-buah",
};

export const essentialTips: EssentialTip[] = [
  {
    title: "Kebersihan Alat",
    description: "Cuci jerigen, tutup, dan alat pencampur hingga bersih. Sisa bahan lama bisa memicu kontaminasi mikroba liar.",
  },
  {
    title: "Pengelolaan Wadah Fermentasi",
    description: "Sisakan ruang gas di atas wadah (sekitar 10%) dan lepas gas berkala selama 1-3 hari pertama.",
  },
  {
    title: "Pengamatan Kondisi Fermentasi",
    description: "Cek aroma dan warna setiap pelepasan gas. Aroma segar-asam normal, bau busuk atau amoniak berbahaya.",
  },
  {
    title: "Penggunaan POC Secara Tepat",
    description: "Selalu encerkan sebelum aplikasi. Mulai dengan dosis rendah saat pertama mencoba pada jenis tanaman baru.",
  },
];

export const commonMistakes: CommonMistake[] = [
  {
    title: "Wadah Terlalu Penuh",
    description: "Mengisi jerigen 100% penuh membuat gas fermentasi tidak punya ruang, wadah bisa mengembang pecah.",
  },
  {
    title: "Komposisi Bahan Tidak Konsisten",
    description: "Takaran yang berubah-ubah membuat hasil fermentasi sulit diprediksi dan dibandingkan.",
  },
  {
    title: "Fermentasi Tidak Terkontrol",
    description: "Lupa melepas gas atau membiarkan wadah terkena panas memicu tekanan berlebih dan kontaminasi.",
  },
  {
    title: "Penggunaan Larutan Terlalu Pekat",
    description: "Dosis berlebih dapat membakar daun dan merusak tanaman, terutama pada tanaman muda.",
  },
  {
    title: "Menganggap Hasil Fermentasi Selalu Aman",
    description: "Aroma dan warna saja tidak menjamin POC bebas patogen. Wadah yang terkontaminasi harus dibuang.",
  },
];

export const homeClosingCta = {
  eyebrow: "Siap Memulai?",
  title: "Mulai Buat POC Pertama Anda Hari Ini",
  description:
    "Ikuti panduan lengkap atau lihat koleksi resep yang sudah kami siapkan untuk berbagai jenis bahan organik.",
  primaryCtaLabel: "Mulai Panduan",
  primaryCtaHref: "/panduan",
  secondaryCtaLabel: "Lihat Resep",
  secondaryCtaHref: "/resep",
};