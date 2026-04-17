import type { Metadata } from "next";
import "./globals.css";

// Metadati ottimizzati per SEO e GEO (Generative Engine Optimization)
export const metadata: Metadata = {
  title: "Honigcenter | Miele Artigianale Premium Svizzero",
  description: "Scopri il miglior miele e i prodotti dell'alveare di altissima qualità. Autentico oro liquido per il tuo benessere, curato con passione artigianale.",
  keywords: ["miele svizzero", "miele premium", "vendita miele online", "honigcenter", "prodotti dell'alveare", "miele naturale biologico"],
  openGraph: {
    title: "Honigcenter | Miele Artigianale Premium",
    description: "Autentico oro liquido. Scopri il miglior miele per la tua salute.",
    url: "https://honigcenter.ch",
    siteName: "Honigcenter",
    locale: "it_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <header className="navbar glass-panel">
          <div className="container nav-content">
            <div className="logo text-gradient">
               Honigcenter
            </div>
            <nav className="nav-links">
              <a href="#">Home</a>
              <a href="#prodotti">I Nostri Mieli</a>
              <a href="#qualita">La Qualità</a>
            </nav>
            <button className="btn btn-primary btn-sm">Carrello (0)</button>
          </div>
        </header>
        
        {children}

        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <h3>Honigcenter</h3>
              <p>L'autentico sapore dell'oro liquido, direttamente dalla natura alla tua tavola.</p>
            </div>
            <div className="footer-links">
              <h4>Acquista</h4>
              <a href="#">Catalogo</a>
              <a href="#">Offerte</a>
            </div>
            <div className="footer-links">
              <h4>Supporto</h4>
              <a href="#">Spedizioni</a>
              <a href="#">Contatti</a>
            </div>
          </div>
          <div className="footer-bottom container">
            <p>&copy; {new Date().getFullYear()} Honigcenter. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
