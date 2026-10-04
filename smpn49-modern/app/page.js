'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Code2, MapPin, Menu, X, Sparkles, ExternalLink, Mail, Github, Layers3, MonitorSmartphone, Zap, ChevronRight } from 'lucide-react';

const schoolImage = 'https://file.data.kemendikdasmen.go.id/sekolahkita/20/2010/20109183-2.jpg';
const gallery = [
  { src: schoolImage, title: 'Papan nama sekolah', label: 'Dokumentasi sekolah · Data Pemerintah' },
  { src: 'https://mediasulsel.id/wp-content/uploads/2026/08/SMPN-49-Makassar-Semarakkan-HUT-ke-81-RI-dengan-Upacara-dan-Lomba.webp', title: 'Keluarga besar sekolah', label: 'HUT RI 2026 · MediaSulsel' },
  { src: 'https://mediasulsel.id/wp-content/uploads/2026/08/Screenshot2026-08-1905462.jpeg', title: 'Upacara bendera', label: 'HUT RI 2026 · MediaSulsel' },
  { src: 'https://bidiknasional.id/wp-content/uploads/2025/09/IMG-20250920-WA0032.jpg', title: 'World Cleanup Day', label: 'Kegiatan lingkungan · BN Nasional' },
  { src: 'https://bidiknasional.id/wp-content/uploads/2024/05/Screenshot_20240517_053843_Chrome.jpg', title: 'Kerja bakti sekolah', label: 'Kegiatan lingkungan · BN Nasional' },
  { src: 'https://i2.wp.com/reportasependidikan.com/wp-content/uploads/2023/06/hari-lahir-pancasila.jpg?resize=768%2C576', title: 'Hari Lahir Pancasila', label: 'Upacara sekolah · Reportase Pendidikan' },
  { src: 'https://i1.wp.com/reportasependidikan.com/wp-content/uploads/2023/11/400023429_1828942200872299_2515833232895385504_n.jpg?resize=1000%2C750', title: 'Hari Jadi Kota Makassar', label: 'Kegiatan budaya · Reportase Pendidikan' },
  { src: 'https://i2.wp.com/reportasependidikan.com/wp-content/uploads/2022/05/IMG-20220514-WA0005.jpg?resize=1000%2C750', title: 'Kerja bakti persiapan akreditasi', label: 'Dokumentasi 2022 · Reportase Pendidikan' }
];

const products = [
  { name: 'Open Source Code', desc: 'Source code project yang bisa dipelajari, dikembangkan, dan disesuaikan.', tag: 'CODE', icon: Code2 },
  { name: 'Canva Premium', desc: 'Produk digital premium. Detail paket dan ketersediaan bisa ditanyakan langsung.', tag: 'DIGITAL', icon: Layers3 },
  { name: 'Alight Motion Premium', desc: 'Akses produk premium dengan detail paket sesuai stok yang tersedia.', tag: 'CREATIVE', icon: Sparkles },
  { name: 'Netflix Premium', desc: 'Produk digital premium. Tanyakan paket dan ketersediaan terbaru.', tag: 'ENTERTAINMENT', icon: MonitorSmartphone }
];

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')), { threshold: .12 });
    els.forEach(el => io.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  const nav = useMemo(() => [
    ['Tentang', '#tentang'], ['Sekolah', '#sekolah'], ['Galeri', '#galeri'], ['Produk', '#produk'], ['Pembuat', '#pembuat']
  ], []);

  const scrollTo = (id) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };

  return (
    <main>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <button className="brand" onClick={() => scrollTo('#top')} aria-label="Kembali ke atas">
          <span className="brand-mark">49</span><span>SMPN 49 <em>MAKASSAR</em></span>
        </button>
        <nav className={open ? 'nav-links mobile-open' : 'nav-links'}>
          {nav.map(([label, href]) => <button key={href} onClick={() => scrollTo(href)}>{label}</button>)}
          <button className="nav-cta" onClick={() => scrollTo('#pembuat')}>Lihat pembuat <ArrowUpRight size={16}/></button>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid" />
        <div className="hero-orb orb-a"/><div className="hero-orb orb-b"/>
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><span className="live-dot"/> Profil sekolah & developer</div></Reveal>
          <Reveal><p className="hero-kicker">SULAWESI SELATAN · MAKASSAR</p></Reveal>
          <Reveal><h1>Tempat belajar.<br/><span>Tempat bertumbuh.</span></h1></Reveal>
          <Reveal><p className="hero-lead">Mengenal <strong>UPT SPF SMP Negeri 49 Makassar</strong> lewat informasi sekolah, cerita pengembangan diri, dan karya digital yang dibangun dari rasa ingin tahu.</p></Reveal>
          <Reveal><div className="hero-actions"><button className="primary" onClick={() => scrollTo('#sekolah')}>Jelajahi sekolah <ArrowUpRight size={18}/></button><button className="text-btn" onClick={() => scrollTo('#pembuat')}>Tentang pembuat <ChevronRight size={17}/></button></div></Reveal>
        </div>
        <div className="hero-visual">
          <Reveal className="hero-photo-wrap"><div className="hero-photo"><img src={schoolImage} alt="Papan nama SMP Negeri 49"/><div className="photo-shade"/><div className="photo-caption"><span>01 / 08</span><b>SMP NEGERI 49</b><small>Makassar, Sulawesi Selatan</small></div></div></Reveal>
          <div className="floating-note"><span>2019</span><p>mulai beroperasi sebagai SMP Negeri 49</p></div>
        </div>
        <div className="scroll-cue"><span>scroll</span><i/></div>
      </section>

      <section id="tentang" className="intro section">
        <Reveal><div className="section-label">01 — Tentang</div></Reveal>
        <div className="intro-layout"><Reveal><h2>Sekolah negeri yang<br/><span>terus bergerak.</span></h2></Reveal><Reveal><div className="intro-copy"><p>UPT SPF SMP Negeri 49 Makassar tercatat sebagai satuan pendidikan SMP negeri di Kota Makassar. Data pemerintah mencatat NPSN <b>69988073</b>, berlokasi di Jalan Syech Yusuf Katangka, Kelurahan Gunung Sari, Kecamatan Rappocini.</p><p>Website ini dibuat sebagai ruang digital personal yang menggabungkan informasi sekolah dengan perjalanan seorang siswa yang sedang belajar membangun produk web.</p></div></Reveal></div>
        <div className="facts"><div><span>Status</span><b>NEGERI</b></div><div><span>Jenjang</span><b>SMP</b></div><div><span>Akreditasi</span><b>B</b></div><div><span>NPSN</span><b>69988073</b></div></div>
      </section>

      <section id="sekolah" className="school section dark-section">
        <Reveal><div className="section-label light">02 — Sekolah</div></Reveal>
        <div className="school-head"><Reveal><h2>Ruang untuk<br/><span>belajar lebih jauh.</span></h2></Reveal><Reveal><p>Berbasis di Rappocini, Makassar. Informasi faktual pada halaman ini dirangkum dari data satuan pendidikan pemerintah dan sumber publik yang relevan.</p></Reveal></div>
        <div className="school-grid"><Reveal className="big-card"><div className="big-image"><img src={schoolImage} alt="SMP Negeri 49 Makassar"/></div><div className="card-foot"><div><small>LOKASI</small><b>Jl. Syech Yusuf Katangka</b></div><MapPin size={22}/></div></Reveal><Reveal className="info-stack"><div className="info-panel"><span>01</span><div><small>Wilayah</small><b>Gunung Sari · Rappocini</b></div></div><div className="info-panel"><span>02</span><div><small>Kota / Provinsi</small><b>Makassar · Sulawesi Selatan</b></div></div><div className="info-panel"><span>03</span><div><small>Kontak publik</small><b>smpn49makassar@gmail.com</b></div></div><a className="source-link" href="https://referensi.data.kemendikdasmen.go.id/tabs.php?npsn=69988073" target="_blank" rel="noreferrer">Lihat data pendidikan <ExternalLink size={16}/></a></Reveal></div>
      </section>

      <section id="galeri" className="gallery section">
        <Reveal><div className="section-label">03 — Galeri</div></Reveal>
        <div className="gallery-head"><Reveal><h2>Delapan frame.<br/><span>Satu cerita.</span></h2></Reveal><Reveal><p>Seluruh frame di bawah dipilih dari dokumentasi publik yang berkaitan dengan SMPN 49 Makassar. Tiap foto diberi sumber dan konteks kegiatannya supaya tidak tercampur dengan foto sekolah lain.</p></Reveal></div>
        <div className="gallery-grid">{gallery.map((item, i) => <Reveal key={item.src} className={`gallery-item item-${i+1}`}><button onClick={() => setActiveImage(item)} aria-label={`Buka ${item.title}`}><img src={item.src} alt={item.title}/><span className="gallery-overlay"><small>{String(i+1).padStart(2,'0')} · {item.label}</small><b>{item.title}</b></span></button></Reveal>)}</div>
      </section>

      <section id="pembuat" className="creator section">
        <div className="creator-glow"/>
        <Reveal><div className="section-label light">04 — Pembuat</div></Reveal>
        <div className="creator-layout"><Reveal><div className="creator-id"><div><small>BUILT BY</small><h2>Adrian Fajar</h2><p>IX.4 · 15 tahun</p></div></div></Reveal><Reveal><div className="creator-story"><div className="status-line"><span className="live-dot"/> BERITA CITA-CITA MENJADI WEB DEVELOPER FULLSTACK</div><h3>Belajar dari rasa penasaran,<br/><span>membangun dari nol.</span></h3><p>Profil ini menampilkan perjalanan belajar pemrograman Next.js dan pengembangan web. Bukan sekadar halaman profil, tapi tempat untuk mendokumentasikan proses, eksperimen, dan karya yang terus berkembang.</p><div className="stack"><span>Next.js</span><span>React</span><span>JavaScript</span><span>Web UI</span></div></div></Reveal></div>
      </section>

      <section id="produk" className="products section">
        <Reveal><div className="section-label">05 — Produk</div></Reveal>
        <div className="products-head"><Reveal><h2>Yang sedang<br/><span>dibangun & ditawarkan.</span></h2></Reveal><Reveal><p>Untuk produk lain di luar daftar, langsung tanyakan. Ketersediaan dan detail dapat berubah.</p></Reveal></div>
        <div className="product-grid">{products.map((p) => { const Icon = p.icon; return <Reveal key={p.name}><article className="product"><div className="product-top"><span>{p.tag}</span><Icon size={20}/></div><h3>{p.name}</h3><p>{p.desc}</p><button onClick={() => window.open('https://t.me/yanzyyneww','_blank')}>Tanya produk <ArrowUpRight size={16}/></button></article></Reveal> })}</div>
        <Reveal><div className="ask-bar"><div><small>PRODUK LAIN?</small><b>Tanya langsung, siapa tahu tersedia.</b></div><a href="https://t.me/yanzyyneww" target="_blank" rel="noreferrer">@yanzyyneww <ArrowUpRight size={17}/></a></div></Reveal>
      </section>

      <footer><div className="footer-brand"><span className="brand-mark">49</span><div><b>SMPN 49 MAKASSAR</b><small>School & developer profile</small></div></div><div className="footer-links"><a href="mailto:smpn49makassar@gmail.com"><Mail size={15}/> Email sekolah</a><a href="https://t.me/yanzyyneww" target="_blank" rel="noreferrer"><ExternalLink size={15}/> Telegram pembuat</a></div><small>© 2026 · Built with Next.js</small></footer>

      {activeImage && <div className="lightbox" onClick={() => setActiveImage(null)}><button className="lightbox-close" onClick={() => setActiveImage(null)}><X/></button><img src={activeImage.src} alt={activeImage.title}/><div className="lightbox-caption"><span>{activeImage.label}</span><b>{activeImage.title}</b></div></div>}
    </main>
  );
}
