import Script from "next/script";

export default function Home() {
  // Configurazione JSON-LD per la Generative Engine Optimization (GEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Honigcenter",
    "image": "https://honigcenter.ch/logo.png",
    "@id": "https://honigcenter.ch",
    "url": "https://honigcenter.ch",
    "telephone": "+41786571066",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Cantonale",
      "addressLocality": "Losone",
      "postalCode": "6616",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.1667,
      "longitude": 8.7833
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    "founder": {
      "@type": "Person",
      "name": "Mehmet Guner",
      "jobTitle": "Master Beekeeper"
    },
    "description": "Premium Swiss Honey from Ticino. Artisanal production, cold-extracted, 100% pure. Discover the authentic taste of the Alps."
  };

  const products = [
    {
      id: "acacia",
      name: "Miele di Acacia Premium",
      nameDe: "Premium Akazienhonig",
      desc: "Cristallino, dolce e delicato. Perfetto per dolcificare senza alterare i sapori.",
      price: "24.00",
      img: "https://images.unsplash.com/photo-1587049352851-8d4e8e12ec68?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bosco",
      name: "Miele di Bosco (Melata)",
      nameDe: "Waldhonig",
      desc: "Gusto intenso, ambrato scuro e ricco di sali minerali. Forza e natura pura.",
      price: "28.00",
      img: "https://images.unsplash.com/photo-1614917997384-fd731eb18e24?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "castagno",
      name: "Miele di Castagno",
      nameDe: "Kastanienhonig",
      desc: "Deciso e leggermente amarognolo. L'anima delle selve castanili ticinesi.",
      price: "26.00",
      img: "https://images.unsplash.com/photo-1558614848-5fd57ebfe507?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "millefiori",
      name: "Millefiori delle Alpi",
      nameDe: "Alpenblütenhonig",
      desc: "Un bouquet di profumi alpini in ogni vasetto. Ricco e aromatico.",
      price: "22.00",
      img: "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <>
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        {/* HERO SECTION - THE LIFESTYLE HOOK */}
        <section className="hero" style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            paddingTop: '100px',
            background: 'radial-gradient(circle at 70% 30%, var(--honey-light) 0%, var(--bg-color) 100%)'
          }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
            <div className="hero-text animate-fade-in">
              <span className="pill" style={{ display: 'inline-block', marginBottom: '20px', padding: '8px 20px', borderRadius: '50px', background: 'var(--honey-glow)', color: 'var(--ruby-dark)', fontWeight: '800', fontSize: '0.9rem', letterSpacing: '1px' }}>
                TICINO · SCHWEIZ · SWITZERLAND
              </span>
              <h1 style={{ fontSize: '5rem', marginBottom: '25px', lineHeight: '1.1' }}>
                Più di un Miele.<br/><span className="text-gradient">Uno Stile di Vita.</span>
              </h1>
              <p style={{ fontSize: '1.3rem', marginBottom: '45px', color: 'var(--text-muted)', maxWidth: '600px' }}>
                Dalle api delle Alpi ticinesi direttamente alla tua tavola. Puro, artigianale, estrato a freddo da <strong>Mehmet</strong>.
              </p>
              <div style={{ display: 'flex', gap: '25px' }}>
                <a href="#shop" className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>Sfoglia il Catalogo</a>
                <a href="#adotta" className="btn glass-panel" style={{ padding: '18px 40px', fontSize: '1.1rem', color: 'var(--ruby-red)' }}>Adotta un Alveare</a>
              </div>
            </div>
            <div className="hero-image animate-fade-in delay-1">
              <div style={{ position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1587049352847-4d4b1ed7b258?auto=format&fit=crop&q=80&w=800" 
                  alt="Honigcenter Premium Swiss Honey" 
                  style={{ width: '100%', borderRadius: '30px', boxShadow: 'var(--shadow-soft)', transform: 'rotate(2deg)' }}
                />
                <div className="glass-panel" style={{ position: 'absolute', bottom: '-30px', left: '-30px', padding: '25px', width: '220px', transform: 'rotate(-5deg)' }}>
                  <p style={{ fontWeight: '800', color: 'var(--ruby-red)', fontSize: '1.5rem' }}>100%</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Naturale & Artigianale del Ticino</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SECTION - THE "MEHMET" STORY (BERNAYS PRINCIPLE) */}
        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <img src="https://images.unsplash.com/photo-1508500386229-cd9942d63200?auto=format&fit=crop&q=80&w=400" alt="Apiario" style={{ width: '100%', borderRadius: '15px' }} />
              <img src="https://images.unsplash.com/photo-1558614848-5fd57ebfe507?auto=format&fit=crop&q=80&w=400" alt="Miele" style={{ width: '100%', borderRadius: '15px', marginTop: '40px' }} />
            </div>
            <div className="story-content">
              <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>La Storia dietro <span className="text-gradient">ogni goccia</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                Mehmet non è solo un apicoltore. È un custode della biodiversità alpina. Di giorno guida il suo camion tra le valli ticinesi, ma appena il sole cala, torna tra le sue api a <strong>Losone</strong>.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'var(--text-muted)' }}>
                È questo contrasto tra modernità e tradizione che rende il miele Honigcenter unico. Non è un prodotto industriale, è il risultato di un dialogo quotidiano tra l'uomo e la natura incontaminata della Svizzera.
              </p>
              <div className="glass-panel" style={{ padding: '20px', borderLeft: '4px solid var(--ruby-red)' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--ruby-dark)' }}>
                  "Il miele è la memoria dei fiori che hanno colorato le nostre montagne. Lo tratto con lo stesso rispetto con cui tratto la mia terra." — <strong>Mehmet</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SHOP SECTION - THE CATALOG */}
        <section id="shop" className="section-padding" style={{ background: 'var(--honey-light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Il Nostro <span className="text-gradient">Shop Online</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Spedizione in 24/48h in tutta la Svizzera. Twint & Carte accettate.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
              {products.map((p) => (
                <div key={p.id} className="product-card glass-panel animate-fade-in" style={{ padding: '25px', textAlign: 'left', background: '#fff' }}>
                  <div style={{ height: '280px', marginBottom: '20px', borderRadius: '15px', overflow: 'hidden' }}>
                      <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="product-img" />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{p.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--honey-gold)', fontWeight: 'bold', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>{p.nameDe}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '25px', minHeight: '60px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--ruby-red)' }}>CHF {p.price}</span>
                    <a href={`https://wa.me/41786571066?text=Ciao%20Mehmet,%20vorrei%20ordinare%20il%20${p.name}`} className="btn btn-primary btn-sm">Ordina ora</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADOPT A BEEHIVE - THE BIG VOLUME OBJECTIVE */}
        <section id="adotta" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="container">
            <div className="glass-panel" style={{ padding: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', background: 'linear-gradient(135deg, var(--ruby-dark) 0%, #330000 100%)', color: '#fff' }}>
              <div>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '30px', color: 'var(--honey-gold)' }}>Adotta un <br/>Alveare Ticinese</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: '0.9' }}>
                  Il modo più esclusivo per sostenere la natura e assicurarti il miglior miele per la tua famiglia. 
                  Scegli il tuo alveare, dalle un nome e ricevi tutto il suo miele a fine stagione (circa 10-15kg).
                </p>
                <ul style={{ marginBottom: '40px', gap: '15px', display: 'flex', flexDirection: 'column', listStyle: 'none' }}>
                  <li>✅ 10-15kg di miele puro garantito</li>
                  <li>✅ Video aggiornamenti stagionali delle tue api</li>
                  <li>✅ Certificato ufficiale di adozione</li>
                  <li>✅ Visita guidata esclusiva all'apiario</li>
                </ul>
                <a href="https://wa.me/41786571066?text=Vorrei%20informazioni%20per%20adottare%20un%20alveare" className="btn btn-primary" style={{ padding: '20px 50px', fontSize: '1.2rem' }}>Richiedi Disponibilità</a>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
                   <p style={{ fontSize: '1rem', opacity: '0.8', marginBottom: '10px' }}>Prezzo per stagione</p>
                   <p style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--honey-gold)' }}>CHF 450</p>
                   <p style={{ fontSize: '0.9rem', marginTop: '20px', opacity: '0.7' }}>*Solo 20 alveari disponibili per il 2026*</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLOATING WHATSAPP BUTTON */}
        <a 
          href="https://wa.me/41786571066" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#25D366',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            zIndex: 1000,
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </main>
    </>
  );
}

