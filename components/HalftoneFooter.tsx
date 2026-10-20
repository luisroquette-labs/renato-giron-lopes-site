"use client";

import { useEffect, useRef } from "react";
import { person, nav, whatsappHref } from "../app/content";

// Halftone wordmark footer (reimplementado do 21st @kedhareswer/halftone-wordmark-footer,
// sem deps, na paleta fiber): "RGL" gigante em pontos halftone que se afastam do ponteiro
// e esquentam de cor; clique envia um anel de choque. Colunas de contato + voltar ao topo.
export default function HalftoneFooter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Dot = { x: number; y: number; ox: number; oy: number };
    let dots: Dot[] = [];
    let W = 0, H = 0, dpr = 1;
    const mouse = { x: -9999, y: -9999 };
    const rings: { x: number; y: number; born: number }[] = [];
    const RADIUS = 150;
    const FIBER = [31, 224, 144], SIGNAL = [45, 212, 234], DIM = [40, 70, 58];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      W = Math.max(1, Math.round(rect.width));
      H = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // texto num offscreen, amostra a grade onde há tinta
      const off = document.createElement("canvas");
      off.width = W; off.height = H;
      const o = off.getContext("2d")!;
      o.fillStyle = "#fff";
      o.textAlign = "center";
      o.textBaseline = "middle";
      // limita pela ALTURA também (o footer é largo e baixo) e mede a largura real,
      // senão a base do "L" estoura as bordas e "RGL" vira "RGI". Inter é a fonte
      // que o site carrega — 'Space Grotesk' não existe aqui e caía no fallback.
      let size = Math.min(W * 0.4, H * 0.72);
      o.font = `800 ${size}px Inter, system-ui, sans-serif`;
      const wText = o.measureText("RGL").width;
      if (wText > W * 0.82) {
        size *= (W * 0.82) / wText;
        o.font = `800 ${size}px Inter, system-ui, sans-serif`;
      }
      o.fillText("RGL", W / 2, H * 0.56);
      const img = o.getImageData(0, 0, W, H).data;
      const step = Math.max(8, Math.round(W / 150));
      dots = [];
      for (let y = 0; y < H; y += step)
        for (let x = 0; x < W; x += step)
          if (img[(y * W + x) * 4 + 3] > 128) dots.push({ x, y, ox: x, oy: y });
    };

    let raf = 0;
    const now = () => performance.now();
    const lerp = (a: number[], b: number[], t: number) =>
      `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const t = now();
      for (let i = rings.length - 1; i >= 0; i--) if (t - rings[i].born > 900) rings.splice(i, 1);
      const r = Math.max(2, step() * 0.42);
      for (const d of dots) {
        let dx = d.ox - mouse.x, dy = d.oy - mouse.y;
        let dist = Math.hypot(dx, dy);
        let px = d.ox, py = d.oy, heat = 0;
        if (dist < RADIUS && !reduce) {
          const f = (1 - dist / RADIUS) ** 2;
          const a = Math.atan2(dy, dx);
          px += Math.cos(a) * f * 26;
          py += Math.sin(a) * f * 26;
          heat = f;
        }
        for (const ring of rings) {
          const age = (t - ring.born) / 900;
          const rr = age * (RADIUS * 2.4);
          const rd = Math.hypot(d.ox - ring.x, d.oy - ring.y);
          const band = Math.abs(rd - rr);
          if (band < 60) {
            const k = (1 - band / 60) * (1 - age);
            const a = Math.atan2(d.oy - ring.y, d.ox - ring.x);
            px += Math.cos(a) * k * 34;
            py += Math.sin(a) * k * 34;
            heat = Math.max(heat, k);
          }
        }
        ctx.beginPath();
        ctx.arc(px, py, r * (0.7 + heat * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = heat > 0.02 ? lerp(FIBER, SIGNAL, Math.min(1, heat)) : `rgb(${DIM[0]},${DIM[1]},${DIM[2]})`;
        ctx.globalAlpha = 0.5 + heat * 0.5;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    function step() { return Math.max(8, Math.round(W / 150)); }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      rings.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, born: now() });
    };

    build();
    draw();
    const ro = new ResizeObserver(build);
    ro.observe(canvas);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onDown);
    };
  }, []);

  const toTop = () => {
    const l = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
    if (l) l.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="halftone-footer">
      <div className="wrap hf-top">
        <div className="hf-studio">
          <p className="hf-tagline">Especialista em Telecomunicações &amp; Infraestrutura de Redes · 20+ anos em redes de missão crítica.</p>
          <button className="hf-totop" onClick={toTop} aria-label="Voltar ao topo">↑ voltar ao topo</button>
        </div>
        <div className="hf-cols">
          <div className="hf-col">
            <h4>Navegação</h4>
            {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </div>
          <div className="hf-col">
            <h4>Contato</h4>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp {person.whatsappLabel}</a>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="hf-mark" aria-hidden="true"><canvas ref={canvasRef} /></div>
      <div className="wrap hf-legal">
        <span>© {person.year} Renato Giron Lopes</span>
        <span>{person.location}</span>
      </div>
    </footer>
  );
}
