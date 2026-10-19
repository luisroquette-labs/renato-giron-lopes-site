import Reveal from "./Reveal";

type CareerEntry = {
  company: string;
  title: string;
  period: string;
  companyNote?: string;
  highlights: string[];
};

// Timeline rica de carreira — um bloco por empregador, com o nome em destaque,
// o período, o cargo, a nota sobre a empresa e os highlights reais do cargo.
// Usada em /sobre; a home usa só company/title/period do mesmo array (trajetoria.items).
export default function Timeline({ items }: { items: CareerEntry[] }) {
  return (
    <ol className="ledger">
      {items.map((it) => (
        <Reveal as="li" key={it.company} className="ledger-item">
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
        </Reveal>
      ))}
    </ol>
  );
}
