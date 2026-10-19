import { z } from "zod";

/** Zod schema for one ingredient entry on a POC recipe. */
export const ingredientSchema = z.object({
  name: z.string().min(1),
  amount: z.number().positive(),
  unit: z.string().min(1),
  note: z.string().optional(),
});

/** Zod schema for one step in a recipe. */
export const recipeStepSchema = z.object({
  number: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  instructions: z.array(z.string().min(1)).min(1),
  note: z.string().optional(),
  successIndicator: z.string().optional(),
  perluVerifikasi: z.boolean().optional(),
});

/** Zod schema for one POC recipe. */
export const recipeSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
  mainIngredients: z.array(z.string().min(1)).min(1),
  ingredients: z.array(ingredientSchema).min(1),
  equipment: z.array(z.string().min(1)).min(1),
  preparationTime: z.string().min(1),
  fermentationDuration: z.string().min(1),
  steps: z.array(recipeStepSchema).min(1),
  resultCheck: z.array(z.string().min(1)).min(1),
  dilution: z.array(z.string().min(1)).min(1),
  application: z.array(z.string().min(1)).min(1),
  targetPlants: z.array(z.string().min(1)).optional(),
  safetyNotes: z.array(z.string().min(1)).min(1),
  commonMistakes: z.array(z.string().min(1)).optional(),
  relatedRecipes: z.array(z.string().min(1)).optional(),
  sources: z.array(z.string().min(1)).optional(),
  perluVerifikasi: z.boolean().optional(),
});

export type Recipe = z.infer<typeof recipeSchema>;
export type RecipeStep = z.infer<typeof recipeStepSchema>;
export type Ingredient = z.infer<typeof ingredientSchema>;

/**
 * POC recipe collection. Content is intentionally general-purpose; items
 * flagged `perluVerifikasi` carry amounts/durations that should be confirmed
 * against a course module, journal, or local practitioner before publishing.
 */
export const recipes: Recipe[] = [
  {
    slug: "poc-limbah-buah",
    title: "POC dari Limbah Buah",
    summary: "Pupuk organik cair dari sisa buah segar yang difermentasi dengan EM4 dan molase.",
    category: "Limbah Dapur",
    description:
      "Resep dasar POC yang memanfaatkan sisa buah segar seperti kulit semangka, pangkal nanas, dan lapuk pisang. Menghasilkan larutan coklat kekuningan dengan aroma segar-asam khas fermentasi buah.",
    mainIngredients: ["Limbah buah segar", "Molase / gula merah", "EM4", "Air bersih"],
    ingredients: [
      { name: "Limbah buah segar", amount: 3, unit: "kg", note: "Kulit semangka, pangkal nanas, atau pisang; cuci dan tiriskan." },
      { name: "Molase atau gula merah cair", amount: 200, unit: "ml", note: "Sumber energi untuk mikroorganisme." },
      { name: "EM4 (Effective Microorganisms)", amount: 100, unit: "ml" },
      { name: "Air bersih (air sumur atau air matang suhu ruang)", amount: 10, unit: "liter" },
    ],
    equipment: [
      "Jerigen plastik bervolume 15-20 liter dengan tutup kedap udara",
      "Pisau dan talenan",
      "Timbangan dapur",
      "Corong dan saringan",
      "Botol kaca atau plastik untuk penyimpanan hasil",
    ],
    preparationTime: "45 menit",
    fermentationDuration: "7-14 hari",
    steps: [
      {
        number: 1,
        title: "Persiapan Bahan",
        description: "Cuci dan cacah limbah buah menjadi potongan kecil agar fermentasi merata.",
        instructions: [
          "Cuci limbah buah hingga bersih dari kotoran dan sisa tanah.",
          "Tiriskan, lalu cacah menjadi potongan berukuran 2-3 cm.",
          "Timbang molase, EM4, dan air sesuai takaran.",
        ],
        note: "Hindari buah yang sudah berlendir atau berbau busuk karena berisiko memicu kontaminasi.",
      },
      {
        number: 2,
        title: "Pencampuran",
        description: "Larutkan molase dan EM4 ke dalam air, lalu campur dengan potongan buah.",
        instructions: [
          "Di wadah terpisah, larutkan molase ke dalam sebagian air sambil diaduk rata.",
          "Tambahkan EM4 ke larutan molase dan aduk perlahan.",
          "Masukkan potongan buah ke dalam jerigen, lalu tuang larutan mikroorganisme.",
          "Tutup jerigen rapat tanpa rongga udara berlebih.",
        ],
        successIndicator: "Semua potongan buah terendam sempurna oleh larutan.",
        note: "Sisakan rongga sekitar 10% di bagian atas jerigen untuk ruang gas fermentasi.",
      },
      {
        number: 3,
        title: "Fermentasi",
        description: "Simpan jerigen di tempat gelap dengan suhu ruang selama 7-14 hari.",
        instructions: [
          "Letakkan jerigen di tempat teduh yang tidak terkena sinar matahari langsung.",
          "Buka tutup sebentar setiap 1-2 hari untuk melepas gas fermentasi (lebih sering di hari 1-3).",
          "Perhatikan aroma setiap kali tutup dibuka.",
        ],
        successIndicator: "Aroma menyegar mirip asam buah atau tape; tidak ada bau menyengat busuk.",
        note:       "Suhu ideal fermentasi berkisar 25-32°C; suhu terlalu rendah memperlambat proses.",
      },
      {
        number: 4,
        title: "Pemeriksaan Hasil",
        description: "Setelah 7-14 hari, periksa tanda-tanda POC matang sebelum disaring.",
        instructions: [
          "Periksa aroma: harus segar-asam, bukan busuk.",
          "Periksa warna: coklat kekuningan hingga coklat terang.",
          "Saring larutan ke botol penyimpanan, pisahkan dari ampas.",
        ],
        note: "Ampas sisa saringan masih bisa dijadikan pupuk padat dengan dikomposkan.",
      },
      {
        number: 5,
        title: "Pengenceran dan Aplikasi",
        description: "Encerkan POC sebelum disemprotkan ke tanaman.",
        instructions: [
          "Untuk semprot daun: encerkan 10-20 ml POC per 1 liter air.",
          "Untuk siram tanah: encerkan 50-100 ml POC per 1 liter air.",
          "Aplikasikan pagi atau sore saat matahari tidak terik.",
        ],
        perluVerifikasi: true,
        note: "Takaran di atas adalah rentang umum; sesuaikan dengan kondisi tanaman dan tanah.",
      },
    ],
    resultCheck: [
      "Aroma segar-asam khas fermentasi buah.",
      "Warna coklat kekuningan, jernih setelah disaring.",
      "pH larutan sekitar 4-5 (perlu alat ukur pH untuk memastikan).",
    ],
    dilution: [
      "Semprot daun: 10-20 ml POC per 1 liter air.",
      "Siram tanah: 50-100 ml POC per 1 liter air.",
    ],
    application: [
      "Semprot pada daun pagi atau sore hari.",
      "Siram di sekitar perakaran tanaman, jangan langsung pada batang.",
      "Frekuensi umum: 1-2 kali per minggu.",
    ],
    targetPlants: ["Sayur daun", "Cabai", "Tomat", "Tanaman hias"],
    safetyNotes: [
      "Gunakan wadah kedap udara untuk mencegah kontaminasi jamur liar.",
      "Jangan mencicipi POC. Simpan terpisah dari bahan pangan.",
      "Hentikan penggunaan bila tanaman menunjukkan layu atau gosong pada daun.",
      "Saat membuka jerigen, jangan menghadapkan wajah langsung ke tutup karena gas fermentasi dapat menyembur.",
    ],
    commonMistakes: [
      "Mengisi jerigen penuh tanpa rongga gas sehingga tutup susah dibuka atau wadah mengembang.",
      "Lupa melepas gas secara berkala pada hari pertama.",
      "Mengencerkan terlalu pekat hingga daun terbakar.",
    ],
    relatedRecipes: ["poc-limbah-sayur", "poc-kulit-pisang"],
    sources: ["[ISI REFERENSI] Belum ditambahkan oleh pemilik proyek."],
    perluVerifikasi: true,
  },
  {
    slug: "poc-limbah-sayur",
    title: "POC dari Limbah Sayur",
    summary: "Pupuk organik cair dari sisa sayuran dapur yang difermentasi secara anaerob.",
    category: "Limbah Dapur",
    description:
      "Resep alternatif untuk memanfaatkan sisa sayuran seperti pucuk wortel, kulit bawang, dan tangkai bayam. Hasil fermentasi bertekstur lebih keruh dan aroma cenderung lebih tajam dibanding POC buah.",
    mainIngredients: ["Limbah sayuran segar", "Molase / gula merah", "EM4", "Air bersih"],
    ingredients: [
      { name: "Limbah sayuran segar", amount: 3, unit: "kg", note: "Tangkai bayam, pucuk wortel, kulit bawang — hindari sayuran layu." },
      { name: "Molase atau gula merah cair", amount: 200, unit: "ml" },
      { name: "EM4", amount: 100, unit: "ml" },
      { name: "Air bersih", amount: 10, unit: "liter" },
    ],
    equipment: [
      "Jerigen plastik bervolume 15-20 liter",
      "Pisau dan talenan",
      "Timbangan dapur",
      "Corong dan saringan",
      "Botol penyimpanan",
    ],
    preparationTime: "45 menit",
    fermentationDuration: "10-14 hari",
    steps: [
      {
        number: 1,
        title: "Persiapan Bahan",
        description: "Sortir dan cuci limbah sayuran sebelum dicacah.",
        instructions: [
          "Buang bagian yang membusuk atau berlendir.",
          "Cuci hingga bersih dan tiriskan.",
          "Cacah halus agar proses dekomposisi cepat.",
        ],
        note: "Sayuran berair seperti tomat perlu ditiriskan lebih lama.",
      },
      {
        number: 2,
        title: "Pencampuran",
        description: "Campur sayuran dengan larutan gula-EM4 dalam jerigen.",
        instructions: [
          "Larutkan molase ke dalam sebagian air hingga merata.",
          "Tambahkan EM4 dan aduk perlahan.",
          "Masukkan sayuran ke jerigen, tuang larutan, aduk rata.",
          "Tutup rapat, sisakan rongga 10% di atas.",
        ],
      },
      {
        number: 3,
        title: "Fermentasi",
        description: "Fermentasi anaerob 10-14 hari di tempat gelap.",
        instructions: [
          "Letakkan jerigen di tempat teduh dengan suhu stabil.",
          "Lepaskan gas setiap 1-2 hari pada minggu pertama.",
          "Pantau aroma setiap pelepasan gas.",
        ],
        successIndicator: "Aroma asam segar; tidak ada bau amoniak atau busuk.",
      },
      {
        number: 4,
        title: "Pemeriksaan Hasil",
        description: "Periksa tanda kematangan sebelum disaring.",
        instructions: [
          "Aroma harus asam segar, tidak menyengat.",
          "Warna keruh kecoklatan.",
          "Saring larutan dan simpan di botol tertutup.",
        ],
        perluVerifikasi: true,
        note: "Jika muncul lapisan kapang berwarna cerah (hijau, merah muda, hitam), buang larutan — itu tanda kontaminasi.",
      },
      {
        number: 5,
        title: "Pengenceran dan Aplikasi",
        description: "Encerkan sebelum aplikasi.",
        instructions: [
          "Semprot daun: 10-20 ml POC per 1 liter air.",
          "Siram tanah: 50-100 ml POC per 1 liter air.",
          "Aplikasi pagi atau sore.",
        ],
        perluVerifikasi: true,
      },
    ],
    resultCheck: [
      "Aroma asam segar khas fermentasi sayur.",
      "Warna coklat keruh.",
      "Tidak ada lapisan kapang berwarna.",
    ],
    dilution: [
      "Semprot daun: 10-20 ml POC per 1 liter air.",
      "Siram tanah: 50-100 ml POC per 1 liter air.",
    ],
    application: [
      "Semprot pada daun atau siram di area perakaran.",
      "Frekuensi 1-2 kali per minggu.",
      "Hentikan bila muncul reaksi negatif pada tanaman.",
    ],
    targetPlants: ["Sayuran daun", "Bawang", "Cabai"],
    safetyNotes: [
      "Buang larutan yang menunjukkan tanda kontaminasi (bau busuk, kapang berwarna).",
      "Simpan di tempat sejuk setelah difermentasi, jauh dari jangkauan anak.",
      "Tutup wadah penyimpanan rapat untuk mencegah oksidasi.",
    ],
    relatedRecipes: ["poc-limbah-buah", "poc-kulit-pisang"],
    sources: ["[ISI REFERENSI] Belum ditambahkan oleh pemilik proyek."],
    perluVerifikasi: true,
  },
  {
    slug: "poc-kulit-pisang",
    title: "POC dari Kulit Pisang",
    summary: "Pupuk organik cair kaya kalium dari kulit pisang yang difermentasi.",
    category: "Berbasis Buah Tertentu",
    description:
      "Kulit pisang dikenal kaya kalium dan fosfor, cocok untuk meningkatkan pembungaan dan kualitas buah tanaman. Resep ini menggunakan kulit pisang segar yang difermentasi dengan molase dan EM4.",
    mainIngredients: ["Kulit pisang segar", "Molase / gula merah", "EM4", "Air bersih"],
    ingredients: [
      { name: "Kulit pisang segar", amount: 2, unit: "kg", note: "Disarankan kulit pisang yang masih segar, bukan yang sudah mengering." },
      { name: "Molase atau gula merah cair", amount: 200, unit: "ml" },
      { name: "EM4", amount: 100, unit: "ml" },
      { name: "Air bersih", amount: 10, unit: "liter" },
    ],
    equipment: [
      "Blender atau pisau",
      "Jerigen 15-20 liter",
      "Timbangan dapur",
      "Saringan dan botol penyimpanan",
    ],
    preparationTime: "30 menit",
    fermentationDuration: "10-14 hari",
    steps: [
      {
        number: 1,
        title: "Persiapan Kulit Pisang",
        description: "Cuci dan haluskan kulit pisang.",
        instructions: [
          "Cuci kulit pisang hingga bersih.",
          "Potong kecil-kecil atau blender dengan sedikit air.",
          "Timbang sesuai takaran.",
        ],
      },
      {
        number: 2,
        title: "Pencampuran",
        description: "Campur kulit pisang halus dengan larutan EM4-molase.",
        instructions: [
          "Larutkan molase ke dalam air.",
          "Tambahkan EM4, aduk rata.",
          "Masukkan kulit pisang ke jerigen, tuang larutan.",
          "Tutup rapat dengan rongga udara 10%.",
        ],
      },
      {
        number: 3,
        title: "Fermentasi",
        description: "Fermentasi anaerob 10-14 hari.",
        instructions: [
          "Simpan di tempat gelap dan sejuk.",
          "Lepaskan gas berkala pada minggu pertama.",
          "Pantau aroma.",
        ],
      },
      {
        number: 4,
        title: "Pemeriksaan dan Penyaringan",
        description: "Periksa hasil sebelum digunakan.",
        instructions: [
          "Aroma segar-asam, tidak busuk.",
          "Warna coklat kemerahan keruh.",
          "Saring dan simpan botol tertutup.",
        ],
      },
      {
        number: 5,
        title: "Pengenceran dan Aplikasi",
        description: "Encerkan dengan air.",
        instructions: [
          "Semprot daun: 10-15 ml POC per 1 liter air.",
          "Siram tanah: 30-50 ml POC per 1 liter air.",
        ],
      },
    ],
    resultCheck: [
      "Aroma asam segar.",
      "Warna coklat kemerahan.",
      "Larutan sudah tidak menghasilkan banyak gas.",
    ],
    dilution: [
      "Semprot daun: 10-15 ml per 1 liter air.",
      "Siram tanah: 30-50 ml per 1 liter air.",
    ],
    application: [
      "Cocok untuk fase pembungaan dan pembuahan tanaman.",
      "Aplikasi 1 kali per minggu.",
    ],
    targetPlants: ["Cabai", "Tomat", "Tanaman berbuah", "Bunga hias"],
    safetyNotes: [
      "Aplikasi pada malam hari tidak disarankan karena daun basah berisiko jamur.",
      "Buang larutan yang berbau busuk atau berkapang berwarna.",
    ],
    relatedRecipes: ["poc-limbah-buah", "poc-limbah-sayur"],
    sources: ["[ISI REFERENSI] Belum ditambahkan oleh pemilik proyek."],
    perluVerifikasi: true,
  },
];

/** Validate every recipe through the zod schema at module load. */
for (const r of recipes) {
  const result = recipeSchema.safeParse(r);
  if (!result.success) {
    throw new Error(
      `Invalid recipe "${r.slug ?? "<unknown>"}": ${JSON.stringify(result.error.issues, null, 2)}`,
    );
  }
}