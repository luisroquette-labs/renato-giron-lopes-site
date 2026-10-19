import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import ProcessFan from "../../components/ProcessFan";
import Timeline from "../../components/Timeline";
import { sobre, diferenciais, processo, trajetoria, credentials, whatsappHref, person } from "../content";

export const metadata: Metadata = {
  title: "Sobre — Renato Giron Lopes",
  description: `${person.role}. ${person.thesis}`,
};

export default function SobrePage() {
  return (
    <>
      <SiteHeader />
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="wrap">
          {/* Bio — 20+ anos em telecom. */}
          <Reveal className="section-head">
            <span className="eyebrow">{sobre.eyebrow}</span>
            <h2>{sobre.title}</h2>
            <p className="lead" style={{ maxWidth: "70ch", marginTop: 18 }}>{sobre.bioLong}</p>
          </Reveal>

          {/* Pivô — deliberadamente separado da bio de telecom: é o capítulo seguinte, não parte dos 20+ anos. */}
          <Reveal className="section-head" style={{ marginTop: 48, borderTop: "1px solid var(--line)", paddingTop: 40 }}>
            <span className="eyebrow cyan">{sobre.pivotEyebrow}</span>
            <p className="lead" style={{ maxWidth: "70ch", marginTop: 18 }}>{sobre.bioPivot}</p>
            <div className="chips" style={{ marginTop: 20 }}>
              {sobre.pivotSkills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </Reveal>

          {/* Especialidades técnicas */}
          <Reveal className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">{diferenciais.eyebrow}</span>
            <h2 style={{ fontSize: "2rem" }}>{diferenciais.title}</h2>
            <p className="lead">{diferenciais.lead}</p>
          </Reveal>
          <div className="diff-grid">
            {diferenciais.items.map((it) => (
              <Reveal key={it.k} className="diff-card">
                <div className="k">{it.k}</div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </Reveal>
            ))}
          </div>

          {/* Trajetória — timeline rica, um bloco por empregador. */}
          <Reveal className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">{trajetoria.eyebrow}</span>
            <h2 style={{ fontSize: "2rem" }}>{trajetoria.title}</h2>
            <p className="lead">{trajetoria.lead}</p>
          </Reveal>
          <Timeline items={trajetoria.items} />

          {/* Como atuo */}
          <Reveal className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">{processo.eyebrow}</span>
            <h2 style={{ fontSize: "2rem" }}>{processo.title}</h2>
            <p className="lead">{processo.lead}</p>
          </Reveal>
          <ProcessFan steps={processo.steps} />

          {/* Credenciais — formação complementar que sustenta o pivô. */}
          <Reveal className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">{credentials.eyebrow}</span>
            <h2 style={{ fontSize: "2rem" }}>{credentials.title}</h2>
          </Reveal>
          <ul className="credential-list">
            {credentials.items.map((c) => (
              <Reveal as="li" key={c.name} className="credential-item">
                <span className="name">{c.name}</span>
                <span className="issuer">{c.issuer}</span>
              </Reveal>
            ))}
          </ul>

          <div style={{ marginTop: 48, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {sobre.cta} →
            </a>
          </div>
          <p style={{ marginTop: 30 }}>
            <Link href="/" className="back-link">← Voltar ao início</Link>
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
