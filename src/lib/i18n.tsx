import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "id" | "en";

type Dict = typeof translations.id;

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      services: "Layanan",
      contact: "Kontak",
      menu: "Menu",
    },
    hero: {
      pills: ["Laravel", "WordPress", "UI/UX Design"],
      greeting: "Halo, saya",
      name: "Jacly Permana.",
      tagline:
        "Fullstack Developer, System Analyst, & UI/UX Designer — spesialis pengembangan web dengan Laravel dan WordPress.",
      cta: "Hubungi saya",
      learnMore: "Pelajari lebih lanjut",
      scroll: "Geser ke bawah",
    },
    about: {
      paragraph:
        "Lulusan S-1 Sistem Informasi Universitas Tanjungpura dengan minat karir sebagai Fullstack Developer, System Analyst, dan UI/UX Designer. Berpengalaman membangun fitur autentikasi Google OAuth dengan Laravel Socialite untuk lebih dari 300 pengguna SIMTA FMIPA UNTAN, merancang website program studi berbasis WordPress, dan membangun aplikasi inventori berbasis Laravel & MySQL untuk lebih dari 1.000 data barang dengan metode Safety Stock.",
      stats: [
        { label: "Tahun pengalaman", value: "1.5+" },
        { label: "Teknologi yang dikuasai", value: "10+" },
        { label: "Proyek diselesaikan", value: "5+" },
      ],
      educationTitle: "Pendidikan",
      university: "Universitas Tanjungpura",
      degree: "S-1 Sistem Informasi",
      period: "Mei 2021 – Juni 2025 | IPK: 3.75/4.00",
      additionalLabel: "Program Tambahan:",
      additionalItems: [
        "Pertukaran Mahasiswa Merdeka ke Universitas Airlangga (2022, 1 semester)",
        "Pengabdian Kepada Masyarakat (PKM) di Desa Taman Sari, Banyuwangi (2022)",
      ],
      thesisLabel: "Skripsi:",
      thesis:
        "Rancang Bangun Aplikasi Inventori Berbasis Website dengan Metode Safety Stock (Studi Kasus: PT Gemilang Arcia Wellindo).",
      experienceTitle: "Pengalaman",
      experiences: [
        {
          role: "Freelance Web Developer",
          org: "Remote",
          period: "April 2026 – Sekarang",
        },
        {
          role: "Web Developer — ICT Team",
          org: "FMIPA Universitas Tanjungpura",
          period: "Januari 2025 – Desember 2025",
        },
        {
          role: "Web Developer (Research Intern)",
          org: "PT Gemilang Arcia Wellindo",
          period: "September 2024 – Juni 2025",
        },
      ],
      achievementsTitle: "Prestasi & Sertifikasi",
      achievements: [
        {
          title: "Juara 1 — Sistem Informasi Startup Day 7.0",
          sub: "Kompetisi Sistem Informasi, Universitas Tanjungpura (2023)",
        },
        {
          title: "Peserta — Lomba PKM-K",
          sub: "Universitas Tanjungpura (2023)",
        },
        {
          title: "Prestasi Akademik",
          sub: "IPK 3.75/4.00 — S-1 Sistem Informasi",
        },
        {
          title: "TOEFL ITP",
          sub: "UPT Bahasa Universitas Tanjungpura (2025)",
        },
        {
          title: "Praktikum Pemrograman Web Lanjut",
          sub: "Sistem Informasi Universitas Tanjungpura (2024)",
        },
        {
          title: "Rekayasa Perangkat Lunak",
          sub: "Sistem Informasi Universitas Tanjungpura (2023)",
        },
      ],
    },
    skills: {
      eyebrow: "💼 Keahlian & Kompetensi",
      title: "Kemampuan teknis.",
      groups: [
        {
          category: "Bahasa",
          items: ["Bahasa Indonesia (Lanjutan)", "Bahasa Inggris (Menengah — TOEFL ITP)"],
        },
        {
          category: "Teknikal",
          items: [
            "Laravel (PHP)",
            "WordPress",
            "MySQL",
            "JavaScript",
            "HTML & CSS",
            "Tailwind CSS",
            "RESTful API",
            "Database Design & ERD",
          ],
        },
        {
          category: "Tools",
          items: [
            "VS Code",
            "Figma",
            "Draw.io",
            "Power Designer",
            "GitHub",
            "Canva",
            "Microsoft Office",
          ],
        },
        {
          category: "Soft Skills",
          items: [
            "Problem Solving",
            "Communication",
            "Critical Thinking",
            "Teamwork",
            "Adaptif",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "✨ Proyek",
      title: "Karya & riset unggulan.",
      subtitle:
        "Dari pengembangan web hingga analisis sistem — berikut beberapa proyek yang menunjukkan keahlian dan pengalaman saya.",
      visit: "Kunjungi situs",
      private: "Privat",
      techLabel: "Teknologi yang digunakan:",
      items: [
        {
          title: "Perpustakaan Digital Akademi Farmasi (On Going)",
          fullDescription:
            "Mengembangkan sistem perpustakaan digital berbasis SLiMS untuk Akademi Farmasi dengan fitur repository online (submission & approval workflow untuk publikasi akademik), fitur Lacak Buku dengan tracking ketersediaan real-time yang dapat diakses publik, autentikasi Google OAuth (Laravel Socialite), serta RBAC dengan 5 level user. Dilengkapi SweetAlert untuk seluruh aksi CRUD dan security best practices (SQL injection prevention, XSS protection, CSRF token, password hashing, audit logging).",
          period: "April 2026 – Sekarang",
        },
        {
          title: "Akunaja.id — Marketplace Akun Premium Digital",
          fullDescription:
            "Membangun Akunaja.id dari awal sebagai platform e-commerce produk digital untuk menjual berbagai akun premium seperti Netflix, Spotify, Disney+, YouTube Premium, dan layanan streaming lainnya. Mengembangkan seluruh sistem mulai dari perancangan database, arsitektur backend dengan Laravel, UI responsif menggunakan Tailwind CSS, alur checkout, manajemen katalog produk, hingga integrasi payment gateway.",
          period: "April 2026 – Mei 2026",
        },
        {
          title: "SIMTA Web — Autentikasi Google OAuth",
          fullDescription:
            "Mengembangkan dan mengimplementasikan fitur autentikasi SIMTA berbasis Laravel Socialite (Google OAuth 2.0) untuk lebih dari 300 pengguna aktif FMIPA UNTAN. Meningkatkan efisiensi login sebesar 45% dan menurunkan error login secara signifikan dalam waktu 3 bulan pengembangan.",
          period: "Januari 2025 – Desember 2025",
        },
        {
          title: "Website Program Studi Biologi",
          fullDescription:
            "Menganalisis kebutuhan sistem dan merancang website profil Program Studi Biologi FMIPA UNTAN menggunakan WordPress dan Figma. Mengelola koordinasi dengan 6 stakeholder akademik, meningkatkan kejelasan navigasi informasi hingga 40% dan mengurangi revisi hingga 30%.",
          period: "Mei 2025 – Juli 2025",
        },
        {
          title: "SIAI — Sistem Informasi Arcia Inventori",
          fullDescription:
            "Membangun aplikasi inventori berbasis web untuk PT Gemilang Arcia Wellindo mengelola lebih dari 1.000 data barang menggunakan Laravel & MySQL. Mengimplementasikan metode Safety Stock yang menurunkan risiko stockout hingga 50%, mendesain ulang UI/UX dengan Figma sehingga input data lebih cepat 25%, dan menghasilkan laporan otomatis yang menghemat waktu pelaporan hingga 60%.",
          period: "September 2024 – Juni 2025",
        },
        {
          title: "Website Cheve — Booking Klinik Kecantikan",
          fullDescription:
            "Membangun website booking dan reservasi untuk klinik kecantikan Cheve. Merancang database menggunakan Entity Relationship Diagram, membuat desain UI/UX yang intuitif menggunakan Figma, serta mengembangkan sistem pemesanan layanan kecantikan, manajemen jadwal terapis, dan autentikasi pengguna menggunakan Laravel & MySQL.",
          period: "Maret 2023 – Juni 2023",
        },
      ],
    },
    services: {
      title: "Apa yang saya tawarkan?",
      titleAccent: "Saya siap membantu.",
      subtitle:
        "Berikut beberapa layanan yang saya tawarkan. Jika ada pertanyaan, jangan ragu untuk menghubungi.",
      items: [
        {
          service: "Fullstack Web Development",
          description:
            "Membangun aplikasi web end-to-end menggunakan Laravel & WordPress dengan arsitektur MVC dan praktik modern.",
        },
        {
          service: "System Analysis",
          description:
            "Menganalisis kebutuhan bisnis dan menerjemahkannya menjadi solusi teknis melalui SDLC dan use case modeling.",
        },
        {
          service: "UI/UX Design",
          description:
            "Merancang antarmuka intuitif berbasis design thinking, user flow mapping, wireframing, dan prototyping menggunakan Figma.",
        },
        {
          service: "Database & Data Management",
          description:
            "Merancang database dan mengelola data untuk mendukung pengambilan keputusan berbasis data dengan MySQL.",
        },
        {
          service: "System Integration & Automation",
          description:
            "Integrasi autentikasi pihak ketiga, otomatisasi laporan, dan workflow automation untuk efisiensi proses bisnis.",
        },
        {
          service: "Responsive Web Design",
          description:
            "Mengembangkan website yang berjalan mulus di seluruh perangkat dan ukuran layar.",
        },
      ],
    },
    contact: {
      title: "Mari berkolaborasi",
      titleAccent: "bersama.",
      subtitle:
        "Saat ini saya terbuka untuk proyek freelance, kolaborasi, dan kesempatan kerja baru.",
      email: "Kirim Email",
      whatsapp: "WhatsApp",
      location: "📍 Slipi, Jakarta Barat",
    },
    footer: {
      time: "Waktu lokal:",
    },
    language: {
      switchTo: "Bahasa Inggris",
      label: "ID",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      pills: ["Laravel", "WordPress", "UI/UX Design"],
      greeting: "Hello, I'm",
      name: "Jacly Permana.",
      tagline:
        "Fullstack Developer, System Analyst, & UI/UX Designer — specialized in web development with Laravel and WordPress.",
      cta: "Get in touch",
      learnMore: "Learn more",
      scroll: "Scroll to discover",
    },
    about: {
      paragraph:
        "Bachelor of Information Systems graduate from Tanjungpura University with career interests as a Fullstack Developer, System Analyst, and UI/UX Designer. Experienced in building Google OAuth authentication with Laravel Socialite for 300+ users of FMIPA UNTAN's SIMTA system, designing WordPress-based study program websites, and developing Laravel & MySQL inventory applications managing 1,000+ items using the Safety Stock method.",
      stats: [
        { label: "Years of experience", value: "1.5+" },
        { label: "Technologies mastered", value: "10+" },
        { label: "Projects completed", value: "5+" },
      ],
      educationTitle: "Education",
      university: "Tanjungpura University",
      degree: "Bachelor of Information Systems",
      period: "May 2021 – June 2025 | GPA: 3.75/4.00",
      additionalLabel: "Additional Programs:",
      additionalItems: [
        "Merdeka Student Exchange to Universitas Airlangga (2022, 1 semester)",
        "Community Service (PKM) in Taman Sari Village, Banyuwangi (2022)",
      ],
      thesisLabel: "Thesis:",
      thesis:
        "Designing a Web-Based Inventory Application using the Safety Stock Method (Case Study: PT Gemilang Arcia Wellindo).",
      experienceTitle: "Experience",
      experiences: [
        {
          role: "Freelance Web Developer",
          org: "Remote",
          period: "April 2026 – Present",
        },
        {
          role: "Web Developer — ICT Team",
          org: "FMIPA Tanjungpura University",
          period: "January 2025 – December 2025",
        },
        {
          role: "Web Developer (Research Intern)",
          org: "PT Gemilang Arcia Wellindo",
          period: "September 2024 – June 2025",
        },
      ],
      achievementsTitle: "Achievements & Certifications",
      achievements: [
        {
          title: "1st Place — Information Systems Startup Day 7.0",
          sub: "Information Systems Competition, Tanjungpura University (2023)",
        },
        {
          title: "Participant — PKM-K Competition",
          sub: "Tanjungpura University (2023)",
        },
        {
          title: "Academic Excellence",
          sub: "GPA 3.75/4.00 — Bachelor of Information Systems",
        },
        {
          title: "TOEFL ITP",
          sub: "UPT Bahasa Tanjungpura University (2025)",
        },
        {
          title: "Advanced Web Programming Practicum",
          sub: "Information Systems, Tanjungpura University (2024)",
        },
        {
          title: "Software Engineering",
          sub: "Information Systems, Tanjungpura University (2023)",
        },
      ],
    },
    skills: {
      eyebrow: "💼 Skills & Expertise",
      title: "Technical proficiency.",
      groups: [
        {
          category: "Languages",
          items: ["Indonesian (Advanced)", "English (Intermediate — TOEFL ITP)"],
        },
        {
          category: "Technical",
          items: [
            "Laravel (PHP)",
            "WordPress",
            "MySQL",
            "JavaScript",
            "HTML & CSS",
            "Tailwind CSS",
            "RESTful API",
            "Database Design & ERD",
          ],
        },
        {
          category: "Tools",
          items: [
            "VS Code",
            "Figma",
            "Draw.io",
            "Power Designer",
            "GitHub",
            "Canva",
            "Microsoft Office",
          ],
        },
        {
          category: "Soft Skills",
          items: [
            "Problem Solving",
            "Communication",
            "Critical Thinking",
            "Teamwork",
            "Adaptive",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "✨ Projects",
      title: "Featured work & research.",
      subtitle:
        "From web development to system analysis, here are some projects that showcase my skills and experience.",
      visit: "Visit site",
      private: "Private",
      techLabel: "Technologies Used:",
      items: [
        {
          title: "Pharmacy Academy Digital Library (Ongoing)",
          fullDescription:
            "Developing a SLiMS-based digital library system for a Pharmacy Academy with an online repository feature (submission & approval workflow for academic publications), public real-time Book Tracking for availability checks, Google OAuth authentication (Laravel Socialite), and 5-level RBAC. Includes SweetAlert across all CRUD actions plus security best practices (SQL injection prevention, XSS protection, CSRF tokens, password hashing, audit logging).",
          period: "April 2026 – Present",
        },
        {
          title: "Akunaja.id — Premium Digital Account Marketplace",
          fullDescription:
            "Built Akunaja.id from scratch as a digital products e-commerce platform selling premium accounts such as Netflix, Spotify, Disney+, YouTube Premium, and other streaming services. Developed the entire system end-to-end — from database design, Laravel backend architecture, responsive UI with Tailwind CSS, checkout flow, product catalog management, to payment gateway integration.",
          period: "April 2026 – May 2026",
        },
        {
          title: "SIMTA Web — Google OAuth Authentication",
          fullDescription:
            "Developed and implemented SIMTA authentication using Laravel Socialite (Google OAuth 2.0) for 300+ active users at FMIPA UNTAN. Improved login efficiency by 45% and significantly reduced login errors within a 3-month development cycle.",
          period: "January 2025 – December 2025",
        },
        {
          title: "Biology Study Program Website",
          fullDescription:
            "Analyzed requirements and designed the Biology Study Program profile website at FMIPA UNTAN using WordPress and Figma. Coordinated with 6 academic stakeholders, improving navigation clarity by 40% and reducing revisions by 30%.",
          period: "May 2025 – July 2025",
        },
        {
          title: "SIAI — Arcia Inventory Information System",
          fullDescription:
            "Built a web-based inventory application for PT Gemilang Arcia Wellindo managing 1,000+ items using Laravel & MySQL. Implemented the Safety Stock method that reduced stockout risk by 50%, redesigned the UI/UX with Figma making data entry 25% faster, and generated automated reports saving 60% of reporting time.",
          period: "September 2024 – June 2025",
        },
        {
          title: "Cheve Website — Beauty Clinic Booking",
          fullDescription:
            "Built a booking and reservation website for Cheve beauty clinic. Designed the database using Entity Relationship Diagrams, created an intuitive UI/UX design with Figma, and developed a complete service booking system, therapist schedule management, and user authentication using Laravel & MySQL.",
          period: "March 2023 – June 2023",
        },
      ],
    },
    services: {
      title: "What I offer?",
      titleAccent: "Let me help you.",
      subtitle:
        "Here are some of the services I offer. If you have any questions, feel free to reach out.",
      items: [
        {
          service: "Fullstack Web Development",
          description:
            "End-to-end web application development using Laravel & WordPress with MVC architecture and modern best practices.",
        },
        {
          service: "System Analysis",
          description:
            "Translating business needs into effective technical solutions through SDLC, requirement analysis, and use case modeling.",
        },
        {
          service: "UI/UX Design",
          description:
            "Designing intuitive interfaces with design thinking, user flow mapping, wireframing, and prototyping in Figma.",
        },
        {
          service: "Database & Data Management",
          description:
            "Designing databases and managing data to support data-driven decision making with MySQL.",
        },
        {
          service: "System Integration & Automation",
          description:
            "Third-party authentication integration, automated reporting, and workflow automation for operational efficiency.",
        },
        {
          service: "Responsive Web Design",
          description:
            "Developing websites that work seamlessly across all devices and screen sizes.",
        },
      ],
    },
    contact: {
      title: "Let's work",
      titleAccent: "together.",
      subtitle:
        "I'm currently available for freelance work, collaboration, and new opportunities.",
      email: "Email Me",
      whatsapp: "WhatsApp",
      location: "📍 Slipi, West Jakarta",
    },
    footer: {
      time: "Local time:",
    },
    language: {
      switchTo: "Indonesian",
      label: "EN",
    },
  },
} as const;

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Dict;
};

const LanguageContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "jacly-portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to Indonesian; hydrate from localStorage after mount
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "id" || saved === "en") {
        setLangState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  // Keep <html lang="..."> in sync with current language
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  };

  const toggleLang = () => setLang(lang === "id" ? "en" : "id");

  const value: LangContextValue = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang] as Dict,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
