import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SonarGrid from "../components/SonarGrid";
import Marquee from "../components/Marquee";
import StatCounter from "../components/StatCounter";
import ExpertiseIcon from "../components/ExpertiseIcon";
import Reveal from "../components/Reveal";
import {
  hero, stats, diferenciais, stack, trajetoria, oferta, contact, whatsappHref, person,
} from "./content";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO — Sonar Grid como fundo interativo (assinatura visual do site) */}
      <SonarGrid className="hero" id="inicio" interactive color="var(--fiber)">
        <div className="wrap hero-inner">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="display">
            {hero.titleLead} <span className="accent">{hero.titleAccent}</span>
          </h1>
          <p className="lead">{hero.lead}</p>
          <div className="hero-ctas">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {hero.ctaPrimary} →
            </a>
            <Link href="#trajetoria" className="btn btn-ghost">{hero.ctaSecondary}</Link>
          </div>
        </div>
      </SonarGrid>

      {/* PROVA — faixa com os empregadores */}
      <div className="wrap" style={{ marginTop: 44 }}>
        <Marquee items={trajetoria.marquee} />
      </div>

      {/* STATS */}
      <div className="wrap">
        <div className="stats-head">
          <span className="stat-led" aria-hidden="true" />
          <span>Carreira em operação contínua</span>
          <span className="stats-head-sep">·</span>
          <span className="muted">1994 — 2025</span>
        </div>
        <div className="stats-row">
          {stats.map((s) => (
            <StatCounter key={s.label} n={s.n} prefix={s.prefix} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>

      {/* ESPECIALIDADES TÉCNICAS */}
      <section className="section" id="expertise">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{diferenciais.eyebrow}</span>
            <h2>{diferenciais.title}</h2>
            <p className="lead">{diferenciais.lead}</p>
          </Reveal>
          <div className="bento-grid">
            {diferenciais.items.map((it, i) => (
              <Reveal key={it.k} className={`bento-card bento-${i}`}>
                <div className="bento-ic"><ExpertiseIcon i={i} /></div>
                <div className="bento-body">
                  <div className="bento-k">{it.k}</div>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STACK TÉCNICO — expertise completa por categoria */}
      <section className="section" id="stack">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow cyan">{stack.eyebrow}</span>
            <h2>{stack.title}</h2>
            <p className="lead">{stack.lead}</p>
          </Reveal>
          <div className="techstack-grid">
            {stack.groups.map((g) => (
              <Reveal key={g.label} className="stack-cat">
                <h3 className="stack-cat-label">{g.label}</h3>
                <div className="stack-chips">
                  {g.items.map((it) => (
                    <span key={it} className="chip">{it}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA — os 8 empregadores, resumo */}
      <section className="section" id="trajetoria">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">{trajetoria.eyebrow}</span>
            <h2>{trajetoria.title}</h2>
            <p className="lead">{trajetoria.lead}</p>
          </Reveal>
          <ol className="trajectory-list">
            {trajetoria.items.map((t) => (
              <Reveal as="li" key={t.company} className="trajectory-item">
                <span className="trajectory-period">{t.period}</span>
                <span className="trajectory-role">
                  <b>{t.company}</b> — {t.title}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* OFERTA — posição sênior ou consultoria */}
      <section className="section" id="oferta">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow cyan">{oferta.eyebrow}</span>
            <h2>{oferta.title}</h2>
            <p className="lead">{oferta.lead}</p>
          </Reveal>
          <div className="pillars">
            {oferta.pillars.map((p) => (
              <Reveal key={p.tag} className="pillar">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="chips">
                  {p.chips.map((c) => <span key={c} className="chip">{c}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-cyan">
              {oferta.cta} →
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="section" id="contato">
        <div className="wrap">
          <Reveal className="contact-band">
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2>{contact.title}</h2>
            <p className="lead">{contact.lead}</p>
            <div className="contact-meta">
              {contact.meta.map((m) => (
                <div key={m.t} className="item">
                  <span className="t">{m.t}</span>
                  <span className="v">{m.v}</span>
                </div>
              ))}
            </div>
            <div className="contact-actions">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Falar no WhatsApp →
              </a>
              <a href={`mailto:${person.email}`} className="btn btn-ghost">
                Enviar e-mail
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
