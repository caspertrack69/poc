/** Konten edukatif untuk halaman /tentang-poc. */

export interface EducationSection {
  id: string;
  heading: string;
  body: string[];
}

export const aboutContent: EducationSection[] = [
  {
    id: "definisi",
    heading: "Apa Itu Pupuk Organik Cair?",
    body: [
      "Pupuk Organik Cair (POC) adalah pupuk berbentuk cairan yang dihasilkan dari bahan organik seperti sisa buah, sayur, atau kotoran ternak, yang diurai menjadi larutan nutrisi melalui bantuan mikroorganisme.",
      "Berbeda dengan pupuk organik padat yang butuh waktu dekomposisi lebih lama, POC mengandung nutrisi dalam bentuk yang lebih cepat tersedia bagi tanaman, sehingga sering dipakai sebagai pupuk daun.",
    ],
  },
  {
    id: "bahan-organik",
    heading: "Bahan Organik yang Berpotensi Digunakan",
    body: [
      "Hampir semua sisa tumbuhan segar dapat dijadikan bahan dasar POC, namun kandungan nutrisi akhir berbeda-beda tergantung bahan awal.",
      "Beberapa bahan yang umum: limbah buah (kulit semangka, pangkal nanas, kulit pisang), limbah sayur (tangkai bayam, pucuk wortel), limbah dapur nabati lain, dan kotoran ternak yang sudah ditreatment.",
      "Hindari bahan yang berminyak, berlemak, berbau menyengat, atau sudah terkontaminasi bahan kimia sintetik.",
    ],
  },
  {
    id: "prinsip-fermentasi",
    heading: "Prinsip Dasar Fermentasi",
    body: [
      "Fermentasi POC umumnya berjalan dalam kondisi anaerob (tanpa oksigen). Mikroorganisme pada EM4 mengurai gula molase menjadi asam organik yang jadi senyawa pembawa nutrisi.",
      "Selama fermentasi, gas terbentuk sebagai produk samping. Wadah harus kedap udara tetapi dilepas gasnya secara berkala untuk mencegah jerigen mengembang berlebih.",
      "Suhu stabil 25-32°C ideal untuk aktivitas mikroorganisme. Suhu terlalu rendah memperlambat fermentasi; terlalu tinggi dapat membunuh kultur.",
    ],
  },
  {
    id: "faktor-fermentasi",
    heading: "Faktor yang Memengaruhi Proses Fermentasi",
    body: [
      "Kebersihan bahan dan alat: kotoran sisa dapat memicu kontaminasi mikroba liar.",
      "Kedap udara wadah: fermentasi anaerob butuh lingkungan rendah oksigen.",
      "Suhu tempat penyimpanan: perubahan ekstrem menghambat konsistensi.",
      "Komposisi molase: terlalu sedikit memperlambat fermentasi, terlalu banyak membuat dominasi ragi.",
    ],
  },
  {
    id: "keterbatasan",
    heading: "Keterbatasan POC",
    body: [
      "POC bukan pupuk lengkap. Kandungan nutrisi tinggi pada satu unsur (mis. kalium pada kulit pisang) belum tentu diimbangi unsur lain (N, P).",
      "Tanpa analisis laboratorium, klaim kandungan nutrisi spesifik tidak bisa dipastikan.",
      "POC dapat membantu memperbaiki biologi tanah dan menyediakan nutrisi cepat, tetapi tanaman tetap butuh nutrisi dasar dari kompos atau pupuk lainnya.",
    ],
  },
];