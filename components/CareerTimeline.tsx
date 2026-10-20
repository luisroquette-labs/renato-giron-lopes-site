"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type Entry = { company: string; title: string; period: string };

// Timeline de carreira em régua horizontal (estilo hyperiux/timeline, reimplementado
// sem GSAP): linha fina que "preenche" da esquerda p/ a direita, marcos em zigzag
// (acima/abaixo da linha) com conector + dot fiber, revelados em cascata ao entrar
// na viewport. Cronológico 1994 → 2025. Cabe em uma tela (regra da fábrica — sem
// scroll horizontal pinado); no mobile vira coluna vertical.
export default function CareerTimeline({ items }: { items: Entry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const data = [...items].reverse(); // array vem do mais recente; exibe passado → presente

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`career-tl ${inView ? "is-in" : ""}`}>
      <div className="career-tl-line" aria-hidden="true" />
      <ol className="career-tl-track">
        {data.map((it, i) => {
          const year = it.period.match(/\d{4}/)?.[0] ?? "";
          const style = { "--i": i } as CSSProperties;
          return (
            <li
              key={it.company}
              className={`career-tl-node ${i % 2 === 0 ? "up" : "down"}`}
              style={style}
            >
              <span className="career-tl-connector" aria-hidden="true" />
              <span className="career-tl-dot" aria-hidden="true" />
              <div className="career-tl-card">
                <span className="career-tl-year">{year}</span>
                <span className="career-tl-period">{it.period}</span>
                <span className="career-tl-company">{it.company}</span>
                <span className="career-tl-role">{it.title}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
