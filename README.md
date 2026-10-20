# Renato Giron Lopes — Site pessoal

Site pessoal profissional de **Renato Giron Lopes**, Especialista em Telecomunicações & Infraestrutura de Redes (20+ anos — V.tal, Oi S.A, Nokia Siemens Networks).

**No ar:** https://luisroquette-labs.github.io/renato-giron-lopes-site/

## Stack

- **Next.js** (App Router) com `output: "export"` — site 100% estático
- Hero **Sonar Grid** (canvas, zero dependências) + smooth scroll (Lenis)
- Sistema visual "fiber / NOC": near-black + verde-fibra + cyan de sinal
- Deploy automático via **GitHub Pages** (GitHub Actions, build no runner)

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build estático

```bash
npm run build   # gera ./out  (export estático)
```

O deploy para GitHub Pages é automático a cada push na `main` (ver `.github/workflows/deploy.yml`).

## Clonar / recriar — **use o código, não redesenhe**

Este repositório **é** o site. Quem for recriá-lo (inclusive com IA) deve **usar
os arquivos como estão** — os componentes visuais são feitos à mão e **não devem
ser regenerados a partir de screenshots**. O passo a passo e o prompt pronto estão
em [`MIGRATION-PROMPT.md`](./MIGRATION-PROMPT.md).

---

Feito com carinho. 🛰️
