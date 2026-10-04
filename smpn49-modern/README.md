# SMPN 49 Makassar — Retro Next.js

Website profil SMPN 49 Makassar dengan tema retro editorial / school archive.

## Yang diperbarui
- Tiap bagian dibuat terpisah dengan latar visual sendiri.
- Galeri tidak lagi memakai foto sekolah luar negeri atau foto generik.
- 8 frame galeri menggunakan dokumentasi publik yang berkaitan dengan SMPN 49 Makassar, lengkap dengan konteks/sumber pada caption.
- Foto/avatar Adrian Fajar dihapus sepenuhnya.
- Animasi reveal, hover, lightbox, menu mobile, dan transisi tetap dipertahankan.
- Tidak ada foto AI/generatif pada galeri.

## Jalankan
```bash
npm install
npm run dev
```

## Build static
```bash
npm run build
```
Output static berada di `out/` karena `next.config.mjs` memakai `output: 'export'`.

## EdgeOne Pages
- Build command: `npm run build`
- Output directory: `out`
- Node.js: 20+

## Catatan gambar
Galeri menggunakan URL gambar publik dari dokumentasi sekolah/pemberitaan yang membahas SMPN 49 Makassar, termasuk Data Pendidikan Kemendikdasmen, MediaSulsel, BN Nasional, dan Reportase Pendidikan. Website tidak mengklaim foto generik sebagai dokumentasi sekolah.
