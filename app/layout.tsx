import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import { BASE } from "./base";

// JSON-LD: Person dentro de ProfilePage (vocabulário de PESSOA, nunca JobPosting).
const personLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Renato Giron Lopes",
    jobTitle: "Especialista em Telecomunicações & Infraestrutura de Redes",
    description:
      "Especialista sênior em Telecomunicações com mais de 20 anos operando redes de missão crítica — IP/MPLS, FTTH/GPON e backbone óptico.",
    image: `${BASE}/renato.jpg`,
    email: "mailto:renatogironlopes@yahoo.com.br",
    telephone: "+55-32-98875-1253",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Juiz de Fora",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    knowsAbout: [
      "IP/MPLS", "FTTH/GPON", "Backbone óptico SDH/DWDM/PDH", "TCP/IP", "MPLS",
      "VPN", "Roteadores Cisco/Huawei/Juniper/Datacom", "Redes de missão crítica",
      "Troubleshooting de redes", "Fibra óptica",
    ],
    alumniOf: [
      "V.tal", "Oi S.A", "Nokia Siemens Networks", "Procisa do Brasil",
      "Telemont", "Telebase", "Construtel", "Telemig",
    ],
    sameAs: ["https://www.linkedin.com/in/renatogironlopes/"],
  },
};

// Equivalentes livres mais próximos das fontes da referência (Hotmart):
// Newsreader ≈ "Hotmart Display" (serif transicional elegante)
// Inter ≈ "Hotmart Sans" (grotesca neutra) — usada no corpo e nos labels.
const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renato Giron Lopes — Especialista em Telecomunicações",
  description:
    "Mais de 20 anos em redes de missão crítica — IP/MPLS, FTTH/GPON, backbone óptico (SDH/DWDM/PDH). Aberto a posições de alto nível e consultoria em telecom e transformação digital.",
  openGraph: {
    title: "Renato Giron Lopes — Especialista em Telecomunicações & Infraestrutura de Redes",
    description:
      "20+ anos operando redes de missão crítica em empresas como V.tal, Oi e Nokia Siemens Networks. Consultoria em telecom → IA e transformação digital.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: `${BASE}/renato.jpg`, width: 295, height: 305, alt: "Renato Giron Lopes" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
