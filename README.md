# Panduan Membuat POC (Pupuk Organik Cair)

Website statis berisi panduan langkah demi langkah membuat **POC (Pupuk Organik Cair)** untuk tugas kuliah. Dibangun dengan Next.js (App Router, static export), TypeScript, Tailwind CSS, dan seluruh teks dipisah dari kode agar mudah diedit orang awam.

Tampilan sepenuhnya mengikuti `design-system.json` (sumber kebenaran desain). Token dipetakan otomatis ke `src/styles/tokens.css` lewat `scripts/build-tokens.mjs`.

---

## Bagian A — Untuk Pemilik (non-teknis)

Anda **tidak perlu mengerti kode**. Yang perlu Anda edit hanyalah:

1. **Teks konten** di folder [`src/content/`](src/content/) — file `.json` biasa.
2. **Foto** di folder [`public/images/`](public/images/) — ganti file `placeholder.svg` dengan foto Anda.

### Cara mengedit teks lewat editor web GitHub

1. Buka repo Anda di github.com.
2. Masuk ke folder `src/content/`, lalu klik file yang ingin diubah (mis. `site.json`).
3. Klik ikon pensil (✏️) di kanan atas.
4. Ubah teks di antara tanda kutip. **Jangan hapus tanda kutip, koma, atau kurung kurawal.**
5. Klik **Commit changes** di kanan atas, isi pesan singkat, lalu **Commit**.
6. Bila website dipasang di Vercel/Cloudflare, situs otomatis diperbarui beberapa menit kemudian.

### Daftar file konten dan isinya

| File               | Isi                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `site.json`        | Nama website, deskripsi, URL, nama penulis, kampus, prodi, mata kuliah, kontak, menu navigasi   |
| `apa-itu-poc.json` | Judul, definisi POC, daftar manfaat                                                             |
| `bahan-alat.json`  | Daftar bahan (nama, jumlah, satuan, catatan) dan alat, plus `basisVolumeLiter` untuk kalkulator |
| `langkah.json`     | Daftar langkah pembuatan: nomor, judul, deskripsi, durasi, foto, tips                           |
| `cara-pakai.json`  | Pengenceran, waktu aplikasi, cara aplikasi                                                      |
| `faq.json`         | Pertanyaan dan jawaban umum                                                                     |
| `keselamatan.json` | Keselamatan, penyimpanan, troubleshooting                                                       |
| `referensi.json`   | Daftar pustaka                                                                                  |

### Cara mengganti foto

1. Letakkan file foto (mis. `langkah-1.jpg`) di folder `public/images/`.
2. Buka `src/content/langkah.json`, ubah `"src": "/images/placeholder.svg"` menjadi `"src": "/images/langkah-1.jpg"`.
3. Tulis `alt` yang menjelaskan foto (untuk pembaca layar & SEO), mis. `"alt": "Foto pencacahan sayur di talenan."`.

> Ukuran foto idealnya **≤ 200 KB** dan tidak lebih besar dari yang ditampilkan. Compres dulu bila perlu.

### Memahami pesan error validasi

Setiap kali website dibangun, semua konten divalidasi. Bila ada kesalahan, pesan muncul dalam Bahasa Indonesia, contoh:

```
langkah.json -> langkah nomor 3, kolom "judul": judul langkah masih kosong
```

Artinya: pada file `langkah.json`, di langkah ke-3, kolom `judul` masih kosong. Cara memperbaiki: isi `judul` langkah ke-3 dengan teks.

Pesan lain yang mungkin muncul:

- `kolom "jumlah" harus lebih besar dari 0` → angka takaran tidak boleh 0 atau negatif.
- `kolom "satuan" masih kosong` → isi satuan (mis. `kg`, `liter`, `ml`).
- `formatnya tidak sah (harus url)` → kolom `url` di `site.json` harus berupa alamat web lengkap (mis. `https://...`).
- `gambar ... tidak ditemukan di folder public/` → path foto salah atau file belum diunggah.

### Menghapus flag `perluVerifikasi` setelah angka dicek

Beberapa item konten ditandai `"perluVerifikasi": true` karena angkanya masih contoh umum dan perlu dicocokkan dengan modul kuliah, jurnal, atau dosen. Daftar lengkapnya muncul sebagai peringatan saat build dan di `docs/laporan-akhir.md`.

Setelah Anda **memverifikasi** sebuah angka:

1. Buka file konten yang sesuai.
2. Hapus baris `"perluVerifikasi": true` (serta koma sebelumnya bila ada).
3. Commit. Peringatan akan hilang.

---

## Bagian B — Untuk Pembantu Teknis

### Menjalankan secara lokal

Prasyarat: **Node.js 22+** (lihat `.nvmrc`). Pakai `npm`.

```bash
npm install        # pasang dependensi (sekali)
npm run dev        # server pengembangan di http://localhost:3000
```

`npm run dev` otomatis menjalankan `predev`: membangun ulang `tokens.css` dan memvalidasi konten.

### Daftar script npm

| Script             | Fungsi                                                                        |
| ------------------ | ----------------------------------------------------------------------------- |
| `dev`              | Server pengembangan (`predev`: token + validasi konten)                       |
| `build`            | Build static export ke `out/` (`prebuild`: token + validasi konten)           |
| `lint`             | ESLint                                                                        |
| `typecheck`        | `tsc --noEmit`                                                                |
| `format`           | Prettier (tulis ulang)                                                        |
| `format:check`     | Prettier (periksa saja)                                                       |
| `validate:content` | Validasi skema konten + daftar peringatan `perluVerifikasi` + cek file gambar |
| `check:tokens`     | Cek tidak ada nilai gaya mentah di komponen + tokens.css tidak kedaluwarsa    |
| `build:tokens`     | Bangun ulang `src/styles/tokens.css` dari `design-system.json`                |

### Arsitektur token

```
design-system.json  (sumber kebenaran)
        │
        ▼  scripts/build-tokens.mjs (predev/prebuild)
src/styles/tokens.css (generated, JANGAN EDIT MANUAL)
        │
        ▼  diimpor oleh src/app/globals.css
   Tailwind v4 (@theme inline)  →  utilitas bg-surface, text-primary, rounded-xl, dst.
        + kelas .type-* (skala tipografi), .chip-*, .icon-container, .glow-card
```

Aturan ketat: **komponen tidak boleh memuat nilai gaya mentah** (hex, px/rem, font-family). Semua lewat token. `npm run check:tokens` memverifikasi ini. Pemetaan lengkap ada di [`docs/design-tokens.md`](docs/design-tokens.md).

### Cara menambah halaman baru

1. Buat `src/app/<route>/page.tsx` (Server Component, satu `h1` per halaman).
2. Tambahkan `export const metadata = { title, description }`.
3. Bila perlu konten baru, tambahkan file JSON di `src/content/` + skema zod di `src/content/schema.ts` + getter di `src/lib/content.ts`.
4. Tambahkan entri di `src/content/site.json` bagian `menu`.
5. Tambahkan path di `src/app/sitemap.ts` (`ROUTES`).
6. Jalankan `npm run lint && npm run typecheck && npm run validate:content && npm run check:tokens && npm run build`.

### Daftar dependensi dan alasannya

| Paket                                   | Alasan                                      |
| --------------------------------------- | ------------------------------------------- |
| `next`                                  | Framework (permintaan brief)                |
| `react`, `react-dom`                    | Penopang Next.js                            |
| `zod`                                   | Validasi skema konten (permintaan brief §4) |
| `tailwindcss`, `@tailwindcss/turbopack` | Styling berbasis token (brief §4)           |
| `typescript`, `@types/*`                | TypeScript strict (brief §4)                |
| `eslint`, `eslint-config-next`          | Kualitas kode (brief §4)                    |
| `prettier`                              | Pemformatan kode (brief §4)                 |

Font Inter dan Instrument Serif dimuat via `next/font/google` (di-download dan di-host sendiri saat build — **tidak ada request CDN saat runtime**). Ikon outline dibuat inline (SVG, tanpa dependensi tambahan).

### Catatan teknis

- **Static export**: `output: 'export'`, `images.unoptimized: true`, `trailingSlash: true`.
- `sitemap.ts` dan `robots.ts` ditandai `export const dynamic = "force-static"` agar lolos `output: 'export'`.
- `tsconfig` mengaktifkan `allowImportingTsExtensions` (karena `noEmit: true`) agar `scripts/validate-content.ts` dapat mengimpor `src/content/schema.ts` dengan ekstensi `.ts` (dijalankan oleh Node 22 dengan type-stripping).

---

## Bagian C — Deploy Gratis (Rp0)

Pilih salah satu platform. Semua memerlukan repo di GitHub.

### 1. Vercel (paling mudah, rekomendasi)

1. Buat akun di [vercel.com](https://vercel.com) dengan login GitHub.
2. Klik **Add New → Project**, pilih repo Anda.
3. Framework Preset: **Next.js** (terdeteksi otomatis). Biarkan pengaturan lain default.
4. Klik **Deploy**. Setiap push ke branch utama akan otomatis deploy ulang.
5. Situs aktif di `https://<nama-repo>.vercel.app`.

### 2. Cloudflare Pages

1. Buat akun di [pages.cloudflare.com](https://pages.cloudflare.com).
2. **Create a project → Connect to Git**, pilih repo.
3. Build command: `npm run build`. Output directory: `out`.
4. Save and Deploy. Situs aktif di `https://<nama>.pages.dev`.

### 3. GitHub Pages

Karena output Next berada di folder `out/` dan bukan root repo, gunakan **GitHub Actions**:

1. Settings → Pages → Source: **GitHub Actions**.
2. Buat workflow `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

3. Bila repo BUKAN `username.github.io` (mis. `username.github.io/poc-web`), tambahkan `basePath` di `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/poc-web" : "", // ganti nama repo
};
```

Situs aktif di `https://<username>.github.io/<nama-repo>/`.

### Memasang domain sendiri (opsional)

- **Vercel**: Settings → Domains → tambah domain, lalu ikuti petunjuk DNS.
- **Cloudflare Pages**: Custom domains → Set up a domain.
- **GitHub Pages**: Settings → Pages → Custom domain.

Domain `.web.id` (sekitar Rp10–80 ribu/tahun) atau `.com` (Rp120–210 ribu/tahun) opsional. Tanpa domain pun, biaya hosting tetap **Rp0**.

---

## Lisensi & catatan

- Konten resep adalah contoh umum yang ditandai `perluVerifikasi: true` — wajib dicocokkan dengan modul kuliah/jurnal/dosen sebelum digunakan sebagai tugas.
- Daftar pustaka berisi placeholder `[ISI REFERENSI]` — jangan menambahkan sitasi palsu.
- Pertanyaan teknis lebih lanjut ada di [`docs/design-tokens.md`](docs/design-tokens.md) (pemetaan token & gap) dan [`docs/laporan-akhir.md`](docs/laporan-akhir.md) (laporan pengerjaan & quality gates).
