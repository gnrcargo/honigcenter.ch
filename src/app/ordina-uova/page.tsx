"use client";

import { useState } from "react";

const GREEN = "#2D4A1E";
const CREAM = "#F5F0E8";
const IVORY = "#FFFDF7";
const GOLD = "#C8922A";
const GREEN_MID = "#4a6535";
const GREEN_LIGHT = "#6a8a5a";

export default function OrdinaUova() {
  const [qty, setQty] = useState<number>(12);
  const [note, setNote] = useState<string>("");

  const quantities = [6, 12, 18, 24];

  const buildWhatsAppUrl = () => {
    const noteText = note.trim() ? note.trim() : "nessuna";
    const msg = `Ciao! Vorrei ordinare ${qty} uova fresche. Note: ${noteText}`;
    return `https://wa.me/41791234567?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main style={{ background: IVORY, minHeight: "100vh", paddingTop: "80px", fontFamily: "system-ui, -apple-system, sans-serif", color: GREEN }}>

      {/* HERO */}
      <section style={{ background: `linear-gradient(180deg, ${CREAM} 0%, ${IVORY} 100%)`, padding: "60px 24px 48px", textAlign: "center" }}>

        {/* SVG uovo minimale */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
          <svg width="72" height="92" viewBox="0 0 72 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <ellipse cx="36" cy="52" rx="30" ry="36" fill={IVORY} stroke={GOLD} strokeWidth="2.5" />
            <ellipse cx="36" cy="52" rx="18" ry="22" fill={`rgba(200,146,42,0.10)`} />
            <ellipse cx="28" cy="40" rx="5" ry="7" fill="white" opacity="0.6" transform="rotate(-20 28 40)" />
          </svg>
        </div>

        {/* Badge disponibilità */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: GREEN, color: CREAM, padding: "6px 20px", borderRadius: "50px", fontSize: "0.82rem", fontWeight: "700", marginBottom: "24px", letterSpacing: "0.8px", textTransform: "uppercase" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6BCB77", display: "inline-block", boxShadow: "0 0 8px #6BCB77", flexShrink: 0 }} />
          Disponibili ora
        </div>

        <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(1.9rem, 6vw, 2.8rem)", color: GREEN, marginBottom: "18px", lineHeight: "1.25", fontWeight: "normal" }}>
          Le nostre uova fresche,<br />
          <span style={{ color: GOLD }}>dal Ticino a casa tua</span>
        </h1>
        <p style={{ fontSize: "1.05rem", color: GREEN_MID, maxWidth: "460px", margin: "0 auto", lineHeight: "1.75" }}>
          Alleviamo le nostre galline in piena libertà, tra i prati ticinesi. Ogni uovo racconta la nostra cura per la terra e per chi lo mangia.
        </p>
      </section>

      {/* SEZIONE ORDINE */}
      <section style={{ padding: "40px 24px 20px", maxWidth: "520px", margin: "0 auto" }}>
        <div style={{ background: CREAM, borderRadius: "24px", padding: "clamp(24px, 5vw, 36px)", boxShadow: `0 8px 40px rgba(45,74,30,0.12)` }}>

          {/* Selezione quantità */}
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem", color: GREEN, marginBottom: "14px", fontWeight: "normal" }}>
            Quante uova vuoi ordinare?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "28px" }}>
            {quantities.map(q => (
              <button
                key={q}
                onClick={() => setQty(q)}
                style={{
                  padding: "16px 6px",
                  borderRadius: "14px",
                  border: `2px solid ${qty === q ? GOLD : "transparent"}`,
                  background: qty === q ? GREEN : IVORY,
                  color: qty === q ? CREAM : GREEN,
                  fontFamily: "Georgia, serif",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  boxShadow: qty === q ? `0 4px 18px rgba(45,74,30,0.28)` : `0 2px 8px rgba(45,74,30,0.07)`,
                  lineHeight: "1.1"
                }}
                aria-pressed={qty === q}
                aria-label={`${q} uova`}
              >
                {q}
                <br />
                <span style={{ fontSize: "0.68rem", fontFamily: "system-ui, sans-serif", fontWeight: "400", opacity: 0.75 }}>
                  pezzi
                </span>
              </button>
            ))}
          </div>

          {/* Note opzionale */}
          <label htmlFor="note-input" style={{ display: "block", fontFamily: "Georgia, serif", fontSize: "1.05rem", color: GREEN, marginBottom: "10px", fontWeight: "normal" }}>
            Note <span style={{ fontSize: "0.82rem", color: GREEN_LIGHT, fontFamily: "system-ui, sans-serif" }}>(facoltativo)</span>
          </label>
          <textarea
            id="note-input"
            placeholder="Es. preferisco uova grandi, consegna entro venerdì…"
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={3}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: "14px",
              border: `1.5px solid rgba(45,74,30,0.18)`,
              background: IVORY,
              color: GREEN,
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "0.95rem",
              resize: "vertical",
              outline: "none",
              marginBottom: "28px",
              boxSizing: "border-box",
              lineHeight: "1.6",
              transition: "border-color 0.18s ease"
            }}
            onFocus={e => { e.currentTarget.style.borderColor = GOLD; }}
            onBlur={e => { e.currentTarget.style.borderColor = "rgba(45,74,30,0.18)"; }}
          />

          {/* Bottone WhatsApp */}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              width: "100%",
              padding: "18px 20px",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              color: "#fff",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: "700",
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(37,211,102,0.38)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxSizing: "border-box"
            }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(37,211,102,0.48)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.38)"; }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Ordina via WhatsApp — {qty} uova
          </a>

          <p style={{ textAlign: "center", marginTop: "12px", fontSize: "0.82rem", color: GREEN_LIGHT, fontStyle: "italic" }}>
            Ti risponderemo entro pochi minuti
          </p>
        </div>
      </section>

      {/* DIFFERENZIANTI */}
      <section style={{ padding: "40px 24px 80px", maxWidth: "520px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.5rem", color: GREEN, textAlign: "center", marginBottom: "28px", fontWeight: "normal" }}>
          Perché le nostre uova
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            {
              emoji: "🐓",
              title: "Allevamento in piena libertà",
              desc: "Le nostre galline razzolano libere su terreni incontaminati. Niente gabbie, niente stress — solo vita vera."
            },
            {
              emoji: "🌿",
              title: "Alimentazione 100% naturale",
              desc: "Cereali e erbe del territorio senza additivi chimici. Quello che mangiano le nostre galline si sente nel sapore."
            },
            {
              emoji: "🏔️",
              title: "Dal cuore del Ticino",
              desc: "Produciamo qui, in Ticino. Ogni uovo percorre pochi chilometri e arriva da te freschissimo, con tutto il suo valore."
            }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                background: CREAM,
                padding: "20px",
                borderRadius: "18px",
                boxShadow: `0 2px 12px rgba(45,74,30,0.07)`,
                border: `1px solid rgba(45,74,30,0.07)`
              }}
            >
              <span style={{ fontSize: "1.8rem", flexShrink: 0, lineHeight: "1.2" }}>{item.emoji}</span>
              <div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: GREEN, marginBottom: "6px", fontWeight: "bold" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: GREEN_MID, lineHeight: "1.65", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA secondaria */}
        <div style={{ textAlign: "center", marginTop: "40px", padding: "28px", background: `linear-gradient(135deg, ${GREEN} 0%, #1a2e10 100%)`, borderRadius: "20px", color: CREAM }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", marginBottom: "6px", color: "#fff" }}>
            Hai domande sull'allevamento?
          </p>
          <p style={{ fontSize: "0.88rem", color: "rgba(245,240,232,0.75)", marginBottom: "18px" }}>
            Scriveteci — siamo felici di raccontarvi il nostro lavoro
          </p>
          <a
            href="https://wa.me/41791234567"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              borderRadius: "50px",
              background: GOLD,
              color: "#fff",
              fontWeight: "700",
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "opacity 0.18s ease"
            }}
            onMouseOver={e => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseOut={e => { e.currentTarget.style.opacity = "1"; }}
          >
            Scrivici su WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
