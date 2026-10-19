// Faixa infinita de termos da pesquisa — matriz de palavras-chave em loop.
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
