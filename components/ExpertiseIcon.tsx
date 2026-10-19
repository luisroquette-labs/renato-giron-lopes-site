// Ícones de rede para a seção de especialidades (stroke = currentColor = --fiber).
// 0 IP/MPLS · 1 FTTH/GPON · 2 Backbone óptico · 3 Roteadores & switches
export default function ExpertiseIcon({ i, size = 40 }: { i: number; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (i) {
    case 0: // IP/MPLS — roteamento entre nós
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
          <circle cx="8" cy="12" r="3" />
          <circle cx="40" cy="12" r="3" />
          <circle cx="8" cy="36" r="3" />
          <circle cx="40" cy="36" r="3" />
          <path d="M11 13.5 20.5 21M37 13.5 27.5 21M11 34.5 20.5 27M37 34.5 27.5 27" opacity="0.7" />
        </svg>
      );
    case 1: // FTTH/GPON — fibra ramificando (split 1:N)
      return (
        <svg {...common}>
          <circle cx="8" cy="24" r="3.5" fill="currentColor" stroke="none" />
          <path d="M11 24 H22" />
          <path d="M22 24 C30 24 30 10 40 10M22 24 C30 24 30 24 40 24M22 24 C30 24 30 38 40 38" opacity="0.8" />
          <circle cx="41" cy="10" r="2.5" />
          <circle cx="41" cy="24" r="2.5" />
          <circle cx="41" cy="38" r="2.5" />
        </svg>
      );
    case 2: // Backbone óptico — onda/senoide com nós
      return (
        <svg {...common}>
          <path d="M5 24 C12 10 18 10 24 24 S36 38 43 24" />
          <circle cx="5" cy="24" r="2.6" fill="currentColor" stroke="none" />
          <circle cx="24" cy="24" r="2.6" fill="currentColor" stroke="none" />
          <circle cx="43" cy="24" r="2.6" fill="currentColor" stroke="none" />
        </svg>
      );
    default: // Roteadores & switches — equipamento com portas
      return (
        <svg {...common}>
          <rect x="7" y="16" width="34" height="16" rx="3" />
          <path d="M13 32 V38M20 32 V38M27 32 V38M34 32 V38" opacity="0.7" />
          <circle cx="14" cy="24" r="1.6" fill="currentColor" stroke="none" />
          <path d="M22 24 H35" opacity="0.6" />
        </svg>
      );
  }
}
