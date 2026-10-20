"use client";

import { useRef, useState } from "react";
import { BASE } from "../app/base";

// Apresentação em vídeo — preenche a tela (no frame), autoplay direto sem controles,
// muted; botão grande de som no centro para ativar o áudio. 16:9 desktop / 9:16 mobile.
export default function VideoShowcase() {
  const hRef = useRef<HTMLVideoElement>(null);
  const vRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    [hRef.current, vRef.current].forEach((v) => {
      if (!v) return;
      v.muted = next;
      if (!next) v.play().catch(() => {});
    });
  };

  return (
    <section className="section screen video-full" id="apresentacao" data-snap>
      <div className="video-frame">
        <video ref={hRef} className="video-h" autoPlay muted loop playsInline preload="auto" poster={`${BASE}/video/poster-16x9.jpg`}>
          <source src={`${BASE}/video/apresentacao-16x9.mp4`} type="video/mp4" />
        </video>
        <video ref={vRef} className="video-v" autoPlay muted loop playsInline preload="auto" poster={`${BASE}/video/poster-9x16.jpg`}>
          <source src={`${BASE}/video/apresentacao-9x16.mp4`} type="video/mp4" />
        </video>

        <span className="video-tag">Em 20 segundos · a rede em movimento</span>

        <button
          className={`video-sound ${muted ? "is-muted" : ""}`}
          onClick={toggleSound}
          aria-label={muted ? "Ativar som" : "Desativar som"}
        >
          <span className="vs-ring" aria-hidden="true" />
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9v6h4l5 5V4L7 9H3z" fill="currentColor" stroke="none" />
            {muted ? (
              <path d="M17 9l6 6M23 9l-6 6" />
            ) : (
              <>
                <path d="M16 8.5a5 5 0 0 1 0 7" />
                <path d="M19 6a9 9 0 0 1 0 12" />
              </>
            )}
          </svg>
          <span className="vs-label">{muted ? "Ativar som" : "Som ligado"}</span>
        </button>
      </div>
    </section>
  );
}
