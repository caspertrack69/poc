/**
 * Buku alamat gambar default sementara. Gambar diambil dari Unsplash.
 *
 * Catatan: gambar di bawah adalah placeholder sampai pemilik proyek
 * menggantinya dengan foto sendiri di public/images/.
 *
 * Catatan teknis: gambar dimuat langsung dari images.unsplash.com.
 * Sesuai brief §13, pada produksi sebaiknya gambar diganti dengan file
 * lokal di public/images/ agar tidak ada ketergantungan CDN eksternal.
 */

export const defaultImages = {
  /** Default photo for hero / featured recipe (orang membawa tanah). */
  hero: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1470&auto=format&fit=crop",
  /** Photo used on recipe cards when no override is set. */
  recipe:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop",
  /** Alt text for the default image. */
  alt: "Petani membawa tanah di kebun",
} as const;

/** Memoised slug → URL override. For now all recipes fall back to the
 *  default photo to avoid broken images. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getRecipeImage(_slug: string): string {
  return defaultImages.recipe;
}