"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { initAudio } from "./sound";

// Smooth-scroll com inércia (estilo das landing pages premium / Hotmart Launchpad).
export default function SmoothScroll() {
  useEffect(() => {
    initAudio();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.5, // ~metade da distância por wheel -> rolagem ~2x mais lenta
      touchMultiplier: 0.9,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Lenis intercepta o scroll nativo → âncoras (#id) ficam inertes sem este handler.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const url = new URL(a.href, window.location.href);
      if (url.pathname !== window.location.pathname) return; // link p/ outra página: deixa navegar
      const el = url.hash ? document.getElementById(url.hash.slice(1)) : null;
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -72 });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    // hash na URL ao carregar (ex.: vindo de /sobre p/ /#stack): rola após o Lenis iniciar.
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) requestAnimationFrame(() => lenis.scrollTo(el, { offset: -72, immediate: true }));
    }

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
