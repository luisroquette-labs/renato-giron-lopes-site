import { BASE } from "../app/base";

// Logomarca. 3 variantes em public/brand/ — troque VARIANT para testar cada uma:
//   "a-monogram"  → monograma RGL + nó de fibra
//   "b-wordmark"  → wordmark "Renato Giron Lopes"
//   "c-signal"    → símbolo de sinal/enlace óptico
const VARIANT = "b-wordmark";

export default function Logo() {
  return (
    <a href={`${BASE}/`} className="logo" aria-label="Renato Giron Lopes — início">
      <img
        src={`${BASE}/brand/logo-${VARIANT}.svg`}
        alt="Renato Giron Lopes"
        style={{ height: 38, width: "auto", display: "block" }}
      />
    </a>
  );
}
