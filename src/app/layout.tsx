import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Metadati ottimizzati per SEO e GEO (Generative Engine Optimization)
export const metadata: Metadata = {
  title: "Honigcenter | Premium Swiss Honey & Beehive Adoption",
  description: "Scopri il miglior miele svizzero artigianale e adotta il tuo alveare in Ticino. Oro liquido 100% puro curato con passione da Mehmet.",
  keywords: ["miele svizzero", "Schweizer Honig", "Swiss honey", "adotta un alveare", "Bienenpatenschaft", "miele premium", "vendita miele online", "honigcenter", "Mehmet miele", "Ticino honey"],
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
    title: "Honigcenter | Premium Swiss Honey",
    description: "Autentico oro liquido. Adotta il tuo alveare nelle Alpi.",
    url: "https://honigcenter.ch",
    siteName: "Honigcenter",
    locale: "it_CH",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Honigcenter Logo",
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
        <header className="navbar glass-panel">
          <div className="container nav-content">
            <div className="logo">
              <a href="/">
                <img src="/logo.png" alt="Honigcenter Logo" style={{ height: '50px', width: 'auto' }} />
              </a>
            </div>
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="#shop">Shop Online</a>
              <a href="#adotta">Adotta un Alveare</a>
            </nav>
            <a href="https://wa.me/41786571066" className="btn btn-primary btn-sm">Contattami</a>
          </div>
        </header>
        
        {children}

        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <h3 style={{ color: 'var(--honey-gold)', fontSize: '2rem' }}>Honigcenter</h3>
              <p>La vita alpina vera. Api, miele, Ticino. Esportiamo la purezza delle Alpi in tutta la Svizzera.</p>
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
            <p>&copy; {new Date().getFullYear()} Honigcenter. Tutti i diritti riservati. Prodotto con passione a Losone, Ticino.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

