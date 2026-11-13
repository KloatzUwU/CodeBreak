# Manual de Identidade Visual — CodeBreak: O Gabinete de Ada Lovelace

**Disciplina:** Informática e Sociedade (INFOSOC 2026/2) — Universidade de Brasília (UnB)
**Departamento:** Ciência da Computação (CIC) / Instituto de Ciências Exatas
**Docente:** Profª. Drª. Leticia Lopes Leite
**Autores:** Marcus Cavalcante & Kawan Borges
**Produto:** *CodeBreak: O Gabinete de Ada Lovelace* — escape room digital de sala única, com 6 pistas, 15 minutos e penalidade de 30 s por erro.

## Arquivos

```
IDENTIDADE_VISUAL/
├── Manual_Identidade_Visual_CodeBreak.pdf   <- PDF final (4 páginas A4)
├── manual_identidade_visual.html            <- Fonte do manual (HTML + CSS de impressão)
├── README.md
└── assets/
    ├── logo_symbol_isolated.svg             <- Símbolo (colchetes + furo de cartão perfurado)
    ├── logo_horizontal_dark.svg / _light.svg
    ├── logo_vertical_badge.svg
    ├── logo_monochrome_black.svg / _white.svg
    ├── icon_pista1_cartao.svg … icon_pista6_charada.svg   <- Ícones das 6 pistas
    ├── screenshots/                         <- Capturas reais do jogo atual
    └── unb_logo-1.png
```

## Síntese

1. **Conceito:** minimalismo com toque elegante. Fundo azul-marinho `#070B12`, superfícies `#0D131D`, ciano `#00A3E0` como único destaque; púrpura `#6C2B8A` e verde `#008A52` só como apoio.
2. **Tipografia:** *Cormorant Garamond* (títulos), *Inter* (texto) e *Fira Code* (enigmas, cronômetro, campos).
3. **Símbolo:** colchetes de código com um furo central, em referência aos cartões perfurados de Ada.
4. **Iconografia:** seis ícones de traço fino (1,5 px), um por pista.
5. **Web app:** mapeamento direto com `CodeBreak/style.css` e `CodeBreak/index.html`.

## Recompilar o PDF

```bash
cd IDENTIDADE_VISUAL
chromium --headless=new --no-sandbox --disable-gpu \
  --no-pdf-header-footer --enable-background-graphics \
  --print-to-pdf=Manual_Identidade_Visual_CodeBreak.pdf \
  manual_identidade_visual.html
```
