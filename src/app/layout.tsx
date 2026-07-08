import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Metadati ottimizzati per SEO e GEO (Generative Engine Optimization)
export const metadata: Metadata = {
  title: "Honigcenter | Luxury Artisanal Swiss Honey & Beehive Adoption",
  description: "Experience the pure essence of the Alps. Premium, cold-extracted honey produced by Master Beekeeper Mehmet in Ticino. Exclusive beehive adoption program for a truly conscious lifestyle.",
  keywords: ["Luxury Swiss Honey", "Artisanal Honey Ticino", "Pure Alpine Honey", "Beehive Adoption Switzerland", "Bienenpatenschaft Schweiz", "Premium Miele Ticinese", "Honigcenter Mehmet", "Organic Beekeeping Switzerland"],
  alternates: {
    canonical: "https://honigcenter.ch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Honigcenter | Luxury Artisanal Swiss Honey",
    description: "Cold-extracted, 100% pure honey from the heart of the Ticino Alps. Join our exclusive adoption program.",
    url: "https://honigcenter.ch",
    siteName: "Honigcenter Luxury",
    locale: "it_CH",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Honigcenter Luxury Honey",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global Organization Schema for GEO
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Honigcenter",
    "alternateName": "Honigcenter Suisse",
    "url": "https://honigcenter.ch",
    "logo": "https://honigcenter.ch/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41-78-657-1066",
      "contactType": "customer service",
      "areaServed": "CH",
      "availableLanguage": ["Italian", "German", "French", "English"]
    }
  };

  return (
    <html lang="it">
      <head>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <header className="navbar">
          <div className="container nav-content">
            <div className="logo">
              <a href="/">
                <img src="/images/logo_hd.jpg" alt="Honigcenter Logo" style={{ height: '55px', width: 'auto' }} />
              </a>
            </div>
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="#shop">Shop Miele</a>
              <a href="#adotta">Adotta un Alveare</a>
            </nav>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a href="/ordina-uova" className="btn btn-sm" style={{ background: '#2D4A1E', color: '#F5F0E8', fontWeight: '700', border: '2px solid #C8922A' }}>🥚 Uova Fresche</a>
              <a href="https://wa.me/41786571066" className="btn btn-primary btn-sm">Contattami</a>
            </div>
          </div>
        </header>
        
        {children}

        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <h3 style={{ color: 'var(--honey-gold)', fontSize: '2rem' }}>Honigcenter</h3>
              <p>La vita alpina vera. Api, miele, Ticino. Esportiamo la purezza delle Alpi in tutta la Svizzera.</p>
              <div style={{ display: 'flex', gap: '14px', marginTop: '18px' }}>
                <a href="https://instagram.com/honigcenter" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Seguici su Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(200,146,42,0.12)', border: '1px solid var(--honey-gold)', color: 'var(--honey-gold)', transition: 'all 0.25s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://tiktok.com/@honigcenter" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="Seguici su TikTok" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(200,146,42,0.12)', border: '1px solid var(--honey-gold)', color: 'var(--honey-gold)', transition: 'all 0.25s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.68a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.11z"></path>
                  </svg>
                </a>
                <a href="https://youtube.com/@honigcenter463" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="Guardaci su YouTube" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(200,146,42,0.12)', border: '1px solid var(--honey-gold)', color: 'var(--honey-gold)', transition: 'all 0.25s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.45 12 20.45 12 20.45s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Acquista</h4>
              <a href="#shop">Catalogo Mieli</a>
              <a href="#adotta">Adotta un Alveare</a>
            </div>
            <div className="footer-links">
              <h4>Info</h4>
              <a href="#qualita">Certificazioni</a>
              <a href="https://wa.me/41786571066">WhatsApp Support</a>
            </div>
          </div>
          <div className="footer-bottom container">
            <p>&copy; {new Date().getFullYear()} Honigcenter. Tutti i diritti riservati. Prodotto con passione a Canobbio, Ticino.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

