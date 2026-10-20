# Como recriar este site a partir do repositório

Este repositório **é** o site. O visual já está pronto e feito à mão.
Qualquer agente de código (Lovable, Cursor, Windsurf, v0, Claude Code, Codex…)
deve **usar o código como está — nunca redesenhar a partir de screenshots**.

## Passos

1. Importe/clone o repo: `https://github.com/luisroquette-labs/renato-giron-lopes-site`
2. Leia este arquivo e o `README.md` — são o manual.
3. Cole o prompt abaixo no seu agente de código.

## Prompt pra colar

```
Use este repositório como fonte. Implemente o código EXATO que está nele —
NÃO recrie o visual a partir de screenshots, NÃO redesenhe. Copie os arquivos
como estão (app/, components/, public/, app/globals.css, next.config.mjs,
.github/workflows/).

Os componentes abaixo SÃO a identidade do site — não regenere nem "reinterprete":
- components/SonarGrid.tsx      → hero com grade de sonar (canvas, sem libs)
- components/CareerTimeline.tsx → trajetória em régua horizontal (marcos em zigzag)
- components/VideoShowcase.tsx  → vídeo de apresentação full-bleed + botão de som
- components/HalftoneFooter.tsx → rodapé "RGL · RGL · …" em pontos (canvas)
- a seção de stack (grade de inventário) em app/page.tsx + app/globals.css

Depois, conecte só as pontas soltas:
- basePath: em domínio raiz, deixe NEXT_PUBLIC_BASE_PATH vazio; em subpasta
  (GitHub Pages /nome-do-repo), defina NEXT_PUBLIC_BASE_PATH=/nome-do-repo.
- Links internos: sempre <Link> do next/link (nunca <a href="/rota"> cru) —
  senão quebra o basePath.
- WhatsApp / e-mail / textos / trajetória / stack: tudo em app/content.ts.
- Vídeo: components/VideoShowcase.tsx + os .mp4/posters em public/video/.
- NÃO quebre: o snap por seção (lenis/snap em components/SmoothScroll.tsx), as
  âncoras via Lenis, e o retry do build no .github/workflows/deploy.yml.

Rode `npm install` e `npm run dev`. Build e deploy conforme o README.md.
Não invente depoimento, número ou case — só o que for real.
```
