<div align="center">

# Jacly Permana — Personal Portfolio

**Fullstack Developer · System Analyst · UI/UX Designer**

Portfolio website pribadi yang modern, responsif, dan interaktif — dibangun dengan Next.js, Tailwind CSS, dan animasi smooth menggunakan Framer Motion & Locomotive Scroll.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-ff0080?logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

</div>

---

## Tentang Proyek

Website portfolio personal yang menampilkan profil, pengalaman, keahlian, dan karya saya sebagai Fullstack Developer. Dirancang dengan estetika minimalis modern, dukungan dwibahasa (Indonesia & Inggris), serta animasi halus untuk memberikan pengalaman pengguna terbaik.

**Live Site:** [https://jacly-permana.vercel.app](https://jacly-permana.vercel.app)

---

## Fitur Utama

- **Dwibahasa (i18n)** — Toggle bahasa Indonesia & Inggris secara instan, preferensi tersimpan di localStorage.
- **Fully Responsive** — Tampil optimal di semua perangkat (mobile, tablet, desktop).
- **Smooth Scrolling** — Pengalaman scroll halus dengan Locomotive Scroll.
- **Modern Animations** — Animasi entrance, hover, dan parallax menggunakan Framer Motion.
- **Interactive Cards** — Efek 3D tilt pada kartu proyek dengan Vanilla Tilt.
- **Portfolio Clickable** — Setiap kartu proyek bisa diklik dan langsung mengarah ke situs live (terbuka di tab baru).
- **PWA Ready** — Mendukung Progressive Web App, dapat di-install di perangkat.
- **Dark Mode by Default** — Estetika dark theme dengan aksen gradient yang elegan.
- **SEO Optimized** — Metadata lengkap untuk performa SEO yang baik.

---

## Tech Stack

| Kategori | Teknologi |
| --- | --- |
| **Framework** | Next.js 14 (Pages Router) |
| **Bahasa** | TypeScript |
| **Styling** | Tailwind CSS, CSS Modules |
| **Animasi** | Framer Motion, Locomotive Scroll, Vanilla Tilt |
| **UI Components** | shadcn/ui, Radix UI, Lucide Icons |
| **PWA** | next-pwa |
| **Validation** | Zod |
| **Package Manager** | pnpm |

---

## Showcase Proyek

Beberapa proyek yang ditampilkan di portfolio ini:

1. **Perpustakaan Digital Akademi Farmasi YARSI** — Sistem perpustakaan digital berbasis SLiMS + Laravel dengan Google OAuth.
2. **[Akunaja.id](https://akunaja.id/)** — Marketplace akun premium digital (Netflix, Spotify, Disney+, dll).
3. **[SIMTA FMIPA UNTAN](https://sisfota.fmipa-untan.id/login)** — Sistem autentikasi Google OAuth untuk 300+ pengguna.
4. **[Website Biologi FMIPA UNTAN](https://biology.fmipa.untan.ac.id/)** — Profil program studi berbasis WordPress.
5. **SIAI — Arcia Inventory** — Aplikasi inventori Laravel & MySQL dengan metode Safety Stock.
6. **Cheve — Beauty Clinic Booking** — Sistem booking klinik kecantikan berbasis Laravel.

---

## Memulai Proyek

### Prasyarat

Pastikan sistem Anda sudah terinstall:

- **Node.js** versi 18 atau lebih baru
- **pnpm** (direkomendasikan) atau npm
- **Git**

### Instalasi

```bash
# 1. Clone repository
git clone https://github.com/Jacly1/web-portofolio.git

# 2. Masuk ke folder project
cd web-portofolio

# 3. Install dependencies
pnpm install
# atau jika menggunakan npm
npm install

# 4. Jalankan development server
pnpm dev
# atau
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat portfolio.

### Build untuk Production

```bash
pnpm build
pnpm start
```

---

## Struktur Folder

```
web-portofolio/
├── public/
│   └── assets/              # Gambar, video, dan icon
├── src/
│   ├── components/
│   │   ├── ui/              # Komponen UI reusable (Button, Card, dll)
│   │   ├── Container.tsx    # Layout & navigation
│   │   ├── Footer.tsx
│   │   └── Preloader.tsx
│   ├── lib/
│   │   ├── i18n.tsx         # Sistem multibahasa (ID/EN)
│   │   └── utils.ts
│   ├── pages/
│   │   ├── _app.tsx
│   │   └── index.tsx        # Halaman utama portfolio
│   └── styles/              # CSS modules & globals
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Kustomisasi

Untuk menyesuaikan konten portfolio dengan profil Anda sendiri:

- **Data Konten** — Edit `src/lib/i18n.tsx` untuk mengubah teks, deskripsi proyek, pengalaman, dan pendidikan (mendukung ID & EN).
- **Aset Visual** — Ganti gambar pada `public/assets/` (foto profil, screenshot proyek, dll).
- **Link Proyek** — Update array `projectAssets` di `src/pages/index.tsx`.
- **Tema & Warna** — Sesuaikan di `tailwind.config.ts` dan `src/styles/globals.css`.

---

## Deployment

Project ini dapat di-deploy ke berbagai platform:

- **[Vercel](https://vercel.com/)** (Recommended) — Push ke GitHub, import project, selesai.
- **[Netlify](https://www.netlify.com/)** — Drag & drop folder `.next` atau connect GitHub.
- **Docker** — Tersedia konfigurasi build production.

---

## Kontak

Saya terbuka untuk peluang freelance, kolaborasi, dan kesempatan kerja baru.

- **Email** — [permanajacly@gmail.com](mailto:permanajacly@gmail.com)
- **LinkedIn** — [linkedin.com/in/jacly-permana](https://www.linkedin.com/in/jacly-permana/)
- **GitHub** — [github.com/Jacly1](https://github.com/Jacly1)
- **Instagram** — [@jacly_p](https://instagram.com/jacly_p)
- **WhatsApp** — [+62 858 2832 5550](https://wa.me/6285828325550)
- **Lokasi** — Slipi, Jakarta Barat

---

## Lisensi

Project ini dilisensikan di bawah lisensi **MIT** — lihat file [LICENSE.md](LICENSE.md) untuk detail lebih lanjut.

---

## Acknowledgements

Bootstrapped from [create-t3-app](https://create.t3.gg/) dan terinspirasi dari berbagai portfolio modern di komunitas open source. Special thanks untuk seluruh maintainer library yang digunakan.

---

<div align="center">

**Made with ❤️ by [Jacly Permana](https://github.com/Jacly1)**

Jika project ini bermanfaat, jangan ragu untuk memberikan ⭐ di GitHub.

</div>
