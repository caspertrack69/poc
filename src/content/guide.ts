/** Panduan pembuatan POC: ringkasan waktu, daftar bahan, daftar alat, dan
 * panduan langkah-demi-langkah yang ditampilkan di route /panduan. */
export interface GuideSummary {
  preparationTime: string;
  fermentationDuration: string;
  yieldEstimate: string;
}

export interface GuideIngredient {
  name: string;
  amount: string;
  note?: string;
}

export interface GuideStep {
  number: number;
  title: string;
  anchor: string;
  objective: string;
  materials: string[];
  instructions: string[];
  successIndicator?: string;
  note?: string;
}

export interface GuideSection {
  id: string;
  heading: string;
  body: string[];
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export const guideSummary: GuideSummary = {
  preparationTime: "30-45 menit",
  fermentationDuration: "7-14 hari",
  yieldEstimate: "Sekitar 8-10 liter POC siap pakai dari takaran dasar",
};

export const guideIngredients: GuideIngredient[] = [
  { name: "Bahan organik segar", amount: "3 kg", note: "Buah, sayur, atau campuran两者." },
  { name: "Molase atau gula merah cair", amount: "200 ml" },
  { name: "EM4 (Effective Microorganisms)", amount: "100 ml" },
  { name: "Air bersih", amount: "10 liter", note: "Air sumur atau air matang suhu ruang." },
];

export const guideEquipment: string[] = [
  "Jerigen plastik 15-20 liter dengan tutup kedap udara",
  "Pisau dan talenan",
  "Timbangan dapur",
  "Corong dan saringan",
  "Botol penyimpanan",
];

export const guideSteps: GuideStep[] = [
  {
    number: 1,
    title: "Persiapan Bahan",
    anchor: "persiapan",
    objective: "Memastikan bahan organik dalam kondisi bersih dan ukuran seragam agar fermentasi merata.",
    materials: ["Limbah buah atau sayur segar", "Air bersih", "Pisau dan talenan"],
    instructions: [
      "Pilih bahan organik yang masih segar, tidak berlendir, dan tidak berbau busuk.",
      "Cuci bahan hingga bersih, lalu tiriskan.",
      "Cacah bahan menjadi potongan kecil sekitar 2-3 cm.",
    ],
    successIndicator: "Potongan bahan berukuran seragam dan bebas kotoran.",
    note: "Hindari bahan yang sudah terkontaminasi jamur liar atau cairan pembusukan.",
  },
  {
    number: 2,
    title: "Pencampuran",
    anchor: "pencampuran",
    objective: "Mendistribusikan mikroorganisme dan sumber energi secara merata pada bahan.",
    materials: ["Bahan organik", "Molase", "EM4", "Air", "Jerigen"],
    instructions: [
      "Larutkan molase ke dalam sebagian air hingga rata.",
      "Tambahkan EM4 dan aduk perlahan.",
      "Masukkan bahan organik ke jerigen, tuang larutan, aduk rata.",
      "Tutup jerigen rapat, sisakan rongga udara 10% di bagian atas.",
    ],
    successIndicator: "Semua bahan terendam larutan; tidak ada bagian mengembang di atas permukaan.",
    note: "Gunakan air suhu ruang. Air panas membunuh mikroorganisme pada EM4.",
  },
  {
    number: 3,
    title: "Fermentasi",
    anchor: "fermentasi",
    objective: "Mengubah bahan organik menjadi larutan nutrisi melalui aktivitas mikroorganisme.",
    materials: ["Jerigen tertutup", "Tempat gelap dan sejuk"],
    instructions: [
      "Simpan jerigen di tempat teduh, suhu stabil 25-32°C.",
      "Lepaskan gas fermentasi setiap 1-2 hari pada minggu pertama.",
      "Periksa aroma setiap pelepasan gas.",
    ],
    successIndicator: "Aroma segar-asam khas fermentasi; tidak ada bau amoniak atau busuk.",
    note: "Sinar matahari langsung dapat merusak kultur mikroorganisme.",
  },
  {
    number: 4,
    title: "Pemeriksaan Hasil",
    anchor: "pemeriksaan",
    objective: "Memastikan POC matang dan bebas tanda kontaminasi sebelum digunakan.",
    materials: ["Saringan", "Botol penyimpanan"],
    instructions: [
      "Cek aroma: harus segar-asam, bukan busuk.",
      "Cek warna: coklat kekuningan hingga coklat keruh.",
      "Saring larutan ke botol penyimpanan.",
    ],
    successIndicator: "Larutan bebas lapisan kapang berwarna; aroma menyegarkan.",
    note: "Buang larutan yang menunjukkan bau amoniak menyengat atau lapisan kapang berwarna cerah.",
  },
  {
    number: 5,
    title: "Pengenceran dan Aplikasi",
    anchor: "aplikasi",
    objective: "Menerapkan POC dengan dosis aman untuk tanaman.",
    materials: ["Gelas ukur", "Sprayer atau gembor", "Air bersih"],
    instructions: [
      "Semprot daun: encerkan 10-20 ml POC per 1 liter air.",
      "Siram tanah: encerkan 50-100 ml POC per 1 liter air.",
      "Aplikasi pagi atau sore, hindari siang terik.",
    ],
    successIndicator: "Tanaman tidak layu atau gosong setelah aplikasi.",
    note: "Takaran di atas adalah rentang umum; sesuaikan dengan jenis tanaman dan kondisi tanah.",
  },
];

export const guideSections: GuideSection[] = [
  {
    id: "indikator",
    heading: "Indikator yang Perlu Diamati Selama Fermentasi",
    body: [
      "Aroma: segar-asam menandakan fermentasi sehat. Bau amoniak atau busuk menandakan kontaminasi.",
      "Warna larutan: coklat kekuningan hingga coklat keruh adalah normal.",
      "Gas: produksi gas aktif pada hari 1-3 menandakan fermentasi berjalan.",
      "Lapisan permukaan: bila muncul lapisan kapang berwarna cerah (hijau, hitam, merah muda), kemungkinan terkontaminasi.",
    ],
  },
  {
    id: "troubleshooting",
    heading: "Troubleshooting",
    body: [
      "Jika jerigen mengembang kuat: buka tutup perlahan untuk melepas gas, perpendek jeda pelepasan.",
      "Jika aroma mulai menyengat: hentikan fermentasi, periksa kebersihan bahan dan wadah.",
      "Jika muncul lapisan kapang berwarna: buang larutan, jangan digunakan.",
      "Jika larutan keruh tetapi aroma segar: aman digunakan setelah disaring.",
    ],
  },
];

export const guideFaq: GuideFAQ[] = [
  {
    question: "Berapa lama POC perlu difermentasi sebelum digunakan?",
    answer:
      "Umumnya 7-14 hari bergantung pada bahan dan suhu. Tanda kematangan utama adalah aroma segar-asam, bukan busuk. Durasi yang lebih panjang belum tentu lebih baik jika kondisi tidak terkontrol.",
  },
  {
    question: "Bagaimana cara membedakan fermentasi sehat dan pembusukan?",
    answer:
      "Fermentasi sehat menghasilkan aroma segar-asam menyerupai tape atau cuka lemah. Pembusukan ditandai bau busuk, amoniak menyengat, lapisan kapang berwarna (hijau, hitam, merah muda). Bila muncul tanda-tanda pembusukan, larutan sebaiknya dibuang dan tidak digunakan.",
  },
  {
    question: "Apakah semua limbah dapur bisa dipakai untuk POC?",
    answer:
      "Tidak. Hindari limbah yang berminyak, berlemak, sudah membusuk, atau mengandung bahan kimia (mis. sisa sabun). Limbah buah dan sayur segar paling aman untuk pemula.",
  },
];