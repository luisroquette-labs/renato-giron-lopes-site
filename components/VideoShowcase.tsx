import { BASE } from "../app/base";
import Reveal from "./Reveal";

// Apresentação em vídeo — 16:9 no desktop, 9:16 no mobile (CSS esconde o outro).
// autoplay muted loop dá vida; controls deixam o visitante ligar o som / pausar.
export default function VideoShowcase() {
  return (
    <section className="section" id="apresentacao">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow cyan">Em 20 segundos</span>
          <h2>A rede, em <span className="serif-italic" style={{ color: "var(--fiber)" }}>movimento.</span></h2>
          <p className="lead">Uma síntese da trajetória e da expertise do Renato — na identidade visual do próprio site.</p>
        </Reveal>
        <Reveal className="video-frame">
          <video
            className="video-h"
            autoPlay muted loop playsInline controls preload="metadata"
            poster={`${BASE}/video/poster-16x9.jpg`}
          >
            <source src={`${BASE}/video/apresentacao-16x9.mp4`} type="video/mp4" />
          </video>
          <video
            className="video-v"
            autoPlay muted loop playsInline controls preload="metadata"
            poster={`${BASE}/video/poster-9x16.jpg`}
          >
            <source src={`${BASE}/video/apresentacao-9x16.mp4`} type="video/mp4" />
          </video>
        </Reveal>
      </div>
    </section>
  );
}
