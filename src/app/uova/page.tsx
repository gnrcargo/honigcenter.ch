"use client";

import { useState } from "react";
import type { Metadata } from "next";
import styles from "./uova.module.css";

/* ─── WhatsApp number ─────────────────────────── */
const WA_NUMBER = "41786571066"; // ← Cambia qui se serve

const QTY_OPTIONS = [
  { qty: 6,  label: "mezza dozzina",       dots: 6  },
  { qty: 12, label: "una dozzina",          dots: 12 },
  { qty: 18, label: "dozzina e mezza",      dots: 9  },
  { qty: 24, label: "due dozzine",          dots: 6  },
];

const FEATURES = [
  {
    title: "Allevamento libero",
    desc:  "Le nostre galline razzolano all'aperto tutto il giorno, su prato naturale tra le colline ticinesi.",
    icon:  (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <circle cx="26" cy="26" r="24" fill="#e8f0e2" stroke="#2D4A1E" strokeWidth="1.2" opacity="0.5"/>
        <path d="M18 38 Q18 28 23 25 Q23 33 20 38" fill="#3d6329" opacity="0.7"/>
        <path d="M25 38 Q24 26 27 21 Q28 30 26 38" fill="#2D4A1E"/>
        <path d="M32 38 Q32 28 37 25 Q37 33 35 38" fill="#3d6329" opacity="0.7"/>
        <circle cx="26" cy="14" r="5" fill="#C8922A" opacity="0.85"/>
        <line x1="26" y1="7"  x2="26" y2="5"  stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="32" y1="9"  x2="34" y2="7"  stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="20" y1="9"  x2="18" y2="7"  stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: "Alimentazione naturale",
    desc:  "Cereali locali, erbe spontanee e tutto ciò che trovano nel pollaio. Niente mangimi industriali.",
    icon:  (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <circle cx="26" cy="26" r="24" fill="#e8f0e2" stroke="#2D4A1E" strokeWidth="1.2" opacity="0.5"/>
        <line x1="26" y1="40" x2="26" y2="16" stroke="#C8922A" strokeWidth="2.2" strokeLinecap="round"/>
        <ellipse cx="22" cy="25" rx="4" ry="7" fill="#C8922A" opacity="0.7" transform="rotate(-20 22 25)"/>
        <ellipse cx="30" cy="25" rx="4" ry="7" fill="#C8922A" opacity="0.7" transform="rotate(20 30 25)"/>
        <ellipse cx="26" cy="16" rx="3.5" ry="6" fill="#dba94a"/>
      </svg>
    ),
  },
  {
    title: "Prodotto in Ticino",
    desc:  "Siamo a pochi km da te. Raccogliamo ogni mattina e consegniamo freschi, senza intermediari.",
    icon:  (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <circle cx="26" cy="26" r="24" fill="#e8f0e2" stroke="#2D4A1E" strokeWidth="1.2" opacity="0.5"/>
        <path d="M10 40 L24 20 L34 32 L40 22 L46 40 Z" fill="#2D4A1E" opacity="0.15"/>
        <path d="M16 40 L26 20 L36 40 Z" fill="#2D4A1E" opacity="0.55"/>
        <path d="M26 20 L22 27 L30 27 Z" fill="white" opacity="0.85"/>
      </svg>
    ),
  },
];

export default function UovaPage() {
  const [selectedQty, setSelectedQty] = useState<number | null>(null);
  const [note, setNote]               = useState("");
  const [shaking, setShaking]         = useState(false);

  function handleQtyClick(qty: number) {
    setSelectedQty(prev => (prev === qty ? null : qty));
  }

  function handleOrder() {
    if (!selectedQty) {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      return;
    }
    const qtyLabel = QTY_OPTIONS.find(o => o.qty === selectedQty)?.label ?? `${selectedQty} uova`;
    let msg = `Ciao! Vorrei ordinare ${selectedQty} uova fresche (${qtyLabel}).`;
    if (note.trim()) msg += ` Note: ${note.trim()}`;
    msg += " Grazie!";
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className={styles.main}>

      {/* ── Hero ──────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-title">

        {/* Availability badge */}
        <div className={styles.availBadge} role="status">
          <span className={styles.dot} aria-hidden="true"/>
          Uova disponibili — raccolte questa mattina
        </div>

        {/* SVG Egg */}
        <svg
          className={styles.heroEgg}
          width="110" height="140" viewBox="0 0 110 140"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="eggG" cx="40%" cy="35%" r="65%">
              <stop offset="0%"   stopColor="#FFFDF7"/>
              <stop offset="60%"  stopColor="#F5F0E8"/>
              <stop offset="100%" stopColor="#e8dfc8"/>
            </radialGradient>
            <filter id="eggSh" x="-20%" y="-10%" width="140%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1a2e10" floodOpacity="0.25"/>
            </filter>
          </defs>
          <path
            d="M55 8 C80 8, 101 38, 101 72 C101 104, 82 132, 55 132 C28 132, 9 104, 9 72 C9 38, 30 8, 55 8 Z"
            fill="url(#eggG)" filter="url(#eggSh)"
          />
          <path d="M36 22 C44 16, 64 18, 70 27 C62 20, 42 20, 36 22 Z" fill="white" opacity="0.7"/>
          <path d="M30 55 Q55 48 80 55" stroke="#d4c9a8" strokeWidth="1" fill="none" opacity="0.35"/>
          <path d="M24 75 Q55 66 86 75" stroke="#d4c9a8" strokeWidth="0.8" fill="none" opacity="0.25"/>
        </svg>

        <h1 id="hero-title" className={styles.heroTitle}>Le nostre uova fresche</h1>
        <p className={styles.heroSub}>
          Galline allevate a terra, in Ticino. Raccogliamo ogni mattina.
        </p>

        <svg className={styles.wave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#FFFDF7"/>
        </svg>
      </section>

      {/* ── Order card ────────────────────────────── */}
      <section className={styles.orderWrap}>
        <div className={styles.orderCard} aria-labelledby="order-title">
          <h2 id="order-title" className={styles.cardHeading}>Configura il tuo ordine</h2>

          {/* Quantity grid */}
          <p className={styles.cardLabel}>Quante uova vuoi?</p>
          <div
            className={`${styles.qtyGrid} ${shaking ? styles.shake : ""}`}
            role="group"
            aria-label="Seleziona quantità"
          >
            {QTY_OPTIONS.map(({ qty, label, dots }) => (
              <button
                key={qty}
                id={`qty-${qty}`}
                className={`${styles.qtyBtn} ${selectedQty === qty ? styles.qtySelected : ""}`}
                onClick={() => handleQtyClick(qty)}
                aria-pressed={selectedQty === qty}
                aria-label={`${qty} uova — ${label}`}
              >
                <span className={styles.qtyBadge}>Scelto</span>
                <span className={styles.qtyDots} aria-hidden="true">
                  {Array.from({ length: dots }).map((_, i) => (
                    <span key={i} className={styles.dot2}/>
                  ))}
                </span>
                <span className={styles.qtyNumber}>{qty}</span>
                <span className={styles.qtyLabel}>{label}</span>
              </button>
            ))}
          </div>

          {/* Note field */}
          <label className={styles.noteLabel} htmlFor="note">
            Note per l'ordine{" "}
            <span className={styles.noteOptional}>(facoltativo)</span>
          </label>
          <p className={styles.noteHint}>
            Es. "consegna giovedì", "ritiro in loco", "uova grandi se possibile"
          </p>
          <textarea
            id="note"
            className={styles.textarea}
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Scrivi qui qualsiasi preferenza…"
            maxLength={300}
            rows={3}
            aria-describedby="note-count"
          />
          <div id="note-count" className={styles.charCount}>
            <span>{note.length}</span>/300
          </div>

          <div className={styles.divider} aria-hidden="true"/>

          {/* Summary */}
          <div className={styles.summaryRow} aria-live="polite">
            <span className={styles.summaryLeft}>Il tuo ordine</span>
            {selectedQty ? (
              <span className={styles.summaryQty}>
                {selectedQty} uova ({QTY_OPTIONS.find(o => o.qty === selectedQty)?.label})
              </span>
            ) : (
              <span className={styles.summaryEmpty}>Seleziona una quantità</span>
            )}
          </div>

          {/* CTA */}
          <button
            className={`${styles.btnWa} ${!selectedQty ? styles.btnWaDisabled : ""}`}
            onClick={handleOrder}
            aria-label="Invia ordine via WhatsApp"
            aria-disabled={!selectedQty}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M11 1C5.477 1 1 5.477 1 11c0 1.9.53 3.674 1.453 5.188L1 21l4.945-1.429A9.953 9.953 0 0011 21c5.523 0 10-4.477 10-10S16.523 1 11 1z" fill="white" opacity="0.2"/>
              <path d="M8.53 7.5c-.2-.44-.41-.45-.6-.46-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.69.33-.23.27-.9.88-.9 2.14 0 1.27.92 2.49 1.05 2.66.13.18 1.8 2.88 4.42 3.92 2.19.87 2.64.7 3.12.65.47-.04 1.53-.63 1.74-1.23.22-.6.22-1.12.16-1.23-.06-.1-.24-.17-.5-.3-.27-.13-1.58-.78-1.83-.87-.24-.09-.42-.13-.6.13-.17.27-.68.87-.83 1.04-.15.18-.3.2-.56.07-.27-.13-1.13-.42-2.15-1.33-.8-.71-1.34-1.58-1.5-1.85-.15-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.33-.01-.47-.06-.14-.57-1.38-.79-1.88z" fill="white"/>
              <path d="M11 2.5C6.306 2.5 2.5 6.306 2.5 11c0 1.756.504 3.394 1.38 4.78L2.5 19.5l3.83-1.35A8.48 8.48 0 0011 19.5c4.694 0 8.5-3.806 8.5-8.5S15.694 2.5 11 2.5z" stroke="white" strokeWidth="0.5" fill="none" opacity="0.4"/>
            </svg>
            Ordina via WhatsApp
          </button>
          <p className={styles.btnNote}>
            Ti risponderemo entro poche ore — nessun pagamento anticipato richiesto.
          </p>
        </div>
      </section>

      {/* ── Features ──────────────────────────────── */}
      <section className={styles.featuresSection} aria-labelledby="features-title">
        <div className={styles.featuresHeader}>
          <h2 id="features-title">Le nostre uova</h2>
          <p>Niente di complicato — galline felici, mangime sano, raccolta mattutina.</p>
        </div>
        <div className={styles.featuresGrid}>
          {FEATURES.map(f => (
            <article key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Story strip ───────────────────────────── */}
      <section className={styles.story} aria-label="Chi siamo">
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <h2>Dall'alveare al pollaio</h2>
            <p>
              Siamo apicoltori da generazioni. Le galline sono arrivate dopo — e ci hanno
              insegnato che la cura delle cose piccole fa la differenza. Ogni uovo che mangi
              è stato raccolto a mano, quella stessa mattina.
            </p>
          </div>
          <div className={styles.storyStat} aria-label="Oltre 10 anni di attività">
            <span className={styles.storyNum}>10+</span>
            <span className={styles.storyUnit}>anni<br/>in Ticino</span>
          </div>
        </div>
      </section>

    </main>
  );
}
