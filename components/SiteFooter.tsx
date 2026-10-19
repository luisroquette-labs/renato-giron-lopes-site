import Link from "next/link";
import Logo from "./Logo";
import { person, whatsappHref, nav } from "../app/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-col">
            <Link href="/" aria-label="Renato Giron Lopes — início"><Logo /></Link>
            <p>{person.role}. Mais de 20 anos operando redes de missão crítica — da planta analógica ao backbone óptico nacional.</p>
          </div>
          <div className="footer-col">
            <h4>Navegação</h4>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp {person.whatsappLabel}
            </a>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {person.year} {person.brand}. Todos os direitos reservados.</span>
          <span>Telecomunicações · Infraestrutura de Redes · Consultoria</span>
        </div>
      </div>
    </footer>
  );
}
