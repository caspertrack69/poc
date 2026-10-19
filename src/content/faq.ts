/** Daftar pertanyaan umum yang ditampilkan pada route /faq. */
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Berapa lama POC perlu difermentasi?",
    answer:
      "Umumnya 7-14 hari, bergantung bahan, suhu, dan ketidakrapatan wadah. Aroma segar-asam adalah indikator utama. Memperpanjang fermentasi tanpa kontrol berisiko kontaminasi.",
  },
  {
    question: "Bagaimana mengenali perubahan selama fermentasi?",
    answer:
      "Selama 1-3 hari pertama akan muncul banyak gas dan aroma mulai berubah. Pada hari 4-7 aroma semakin segar-asam, gas berkurang. Setelah 7 hari larutan menjadi lebih jernih dengan warna coklat khas.",
  },
  {
    question: "Apakah semua limbah dapur bisa digunakan?",
    answer:
      "Tidak. Limbah berminyak, berlemak, atau mengandung bahan kimia (sabun, garam berlebih) tidak boleh dipakai. Hindari juga bahan yang sudah busuk. Limbah buah dan sayur segar paling aman untuk pemula.",
  },
  {
    question: "Bagaimana menyimpan POC?",
    answer:
      "Setelah disaring, simpan di botol tertutup rapat di tempat sejuk dan gelap. Hindari penyimpanan di tempat panas atau terkena sinar matahari langsung. POC bertahan hingga beberapa bulan jika disimpan dengan baik.",
  },
  {
    question: "Apakah POC perlu diencerkan sebelum dipakai?",
    answer:
      "Ya. POC pekat dapat membakar daun. Untuk semprot daun encerkan 10-20 ml per 1 liter air; untuk siram tanah 50-100 ml per 1 liter air. Mulai dengan dosis rendah saat pertama mencoba.",
  },
  {
    question: "Seberapa sering POC bisa diaplikasikan?",
    answer:
      "Umumnya 1-2 kali per minggu. Frekuensi tergantung kondisi tanaman dan tanah. Hentikan sementara bila tanaman menunjukkan tanda stres.",
  },
  {
    question: "Apa yang harus dilakukan jika fermentasi menunjukkan tanda pembusukan atau kontaminasi?",
    answer:
      "Buang larutan — jangan diaplikasikan ke tanaman. Periksa kembali kebersihan bahan awal dan wadah sebelum membuat batch baru. Pastikan wadah benar-benar kedap udara.",
  },
];