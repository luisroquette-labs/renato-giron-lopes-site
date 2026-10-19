import { BASE } from "../app/base";

// Logomarca (só a imagem — quem usa envolve em <Link> quando quer clicável).
// 3 variantes em public/brand/ — troque VARIANT para testar:
//   "a-monogram" · "b-wordmark" · "c-signal"
const VARIANT = "b-wordmark";

export default function Logo() {
  return (
    <img
      src={`${BASE}/brand/logo-${VARIANT}.svg`}
      alt="Renato Giron Lopes"
      className="logo"
      style={{ height: 38, width: "auto", display: "block" }}
    />
  );
}
