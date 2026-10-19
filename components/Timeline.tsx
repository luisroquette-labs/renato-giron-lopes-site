"use client";

import Reveal from "./Reveal";
import type { CSSProperties, MouseEvent } from "react";

type CareerEntry = {
  company: string;
  title: string;
  period: string;
  companyNote?: string;
  highlights: string[];
};

// Anos de permanência a partir de "2021–2025".
function tenureYears(period: string): number {
  const m = period.match(/(\d{4})\D+(\d{4})/);
  if (!m) return 2;
  return Math.max(1, parseInt(m[2], 10) - parseInt(m[1], 10));
}

// Timeline rica de carreira (efeito "pigment ledger", reimplementado sem deps):
// cada empregador é um wordmark cujo tamanho cresce com o tempo de casa; os cargos
// mais antigos ficam mais pálidos ("secam"); ao passar o ponteiro, um wash de fibra
// floresce atrás da linha, no ponto onde o cursor entra.
export default function Timeline({ items }: { items: CareerEntry[] }) {
  const maxT = Math.max(...items.map((i) => tenureYears(i.period)), 1);
  const n = items.length;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--wash-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--wash-y", `${e.clientY - r.top}px`);
  };

  return (
    <ol className="ledger">
      {items.map((it, idx) => {
        const scale = 0.78 + 0.32 * (tenureYears(it.period) / maxT);
        const fade = 1 - (idx / Math.max(1, n - 1)) * 0.4;
        const style = { "--tenure-scale": scale, "--age-fade": fade } as CSSProperties;
        return (
          <Reveal as="li" key={it.company} className="ledger-item" style={style}>
            <div className="ledger-inner" onMouseMove={onMove}>
              <div className="ledger-head">
                <span className="ledger-company">{it.company}</span>
                <span className="ledger-period">{it.period}</span>
              </div>
              <p className="ledger-title">{it.title}</p>
              {it.companyNote && <p className="ledger-note">{it.companyNote}</p>}
              <ul className="ledger-highlights">
                {it.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
