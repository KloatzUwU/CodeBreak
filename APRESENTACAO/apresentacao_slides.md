---
marp: true
theme: uncover
class: invert
paginate: true
header: 'Universidade de Brasília • Informática e Sociedade (INFOSOC)'
footer: 'CodeBreak: O Gabinete de Ada Lovelace • Marco 16/10'
style: |
  section {
    background-color: #070B12;
    color: #E6EDF5;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    font-weight: 300;
    text-align: left;
    padding: 40px 60px;
  }
  h1, h2, h3 {
    color: #E6EDF5;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 500;
  }
  h1 { font-size: 2.6rem; margin-bottom: 0.2rem; }
  h2 { font-size: 1.8rem; margin-bottom: 1rem; border-bottom: 1px solid #00A3E0; padding-bottom: 8px; }
  h3 { font-style: italic; color: #00A3E0; }
  ul, ol { font-size: 1.05rem; line-height: 1.6; }
  strong { font-weight: 600; color: #E6EDF5; }
  code { font-family: 'Fira Code', monospace; color: #00A3E0; background: transparent; }
  table { font-size: 0.85rem; }
  th { color: #00A3E0; font-family: 'Fira Code', monospace; font-weight: 400; }
  .highlight { color: #00A3E0; }
  .time-badge {
    display: inline-block;
    border: 1px solid #233044;
    color: #8A97A8;
    padding: 3px 10px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 0.75rem;
    margin-bottom: 10px;
  }
  .script-box {
    background: #0C121C;
    border: 1px solid #233044;
    border-left: 2px solid #00A3E0;
    padding: 12px 16px;
    border-radius: 3px;
    margin-top: 15px;
    font-size: 0.85rem;
    color: #8A97A8;
    font-style: italic;
  }
---

<!-- SLIDE 1 -->
<div class="time-badge">00:00 - 00:30</div>

# CodeBreak
### O Gabinete de Ada Lovelace

Escape room educativo digital sobre gênero e computação, para o Ensino Médio. Londres, 1843: uma sala, seis pistas, quinze minutos.

* **Disciplina:** Informática e Sociedade (INFOSOC 2026/2)
* **Departamento:** Ciência da Computação (CIC) — Universidade de Brasília (UnB)
* **Equipe:** Marcus Cavalcante e Kawan Borges
* **Marco de entrega:** 16 de outubro de 2026

<div class="script-box">
<strong>Roteiro de fala (Marcus):</strong><br>
"Bom dia/boa tarde a todos e à professora. Hoje apresentamos o projeto do nosso trabalho final de Informática e Sociedade. O tema é Gênero e Computação, o produto é um escape room educativo e o público-alvo são estudantes do Ensino Médio. Nossa proposta é o 'CodeBreak: O Gabinete de Ada Lovelace', que une gamificação, pensamento computacional e reflexão crítica sobre a história das mulheres na computação."
</div>

---

<!-- SLIDE 2 -->
<div class="time-badge">00:30 - 01:00</div>

## 1. Roteiro da apresentação

* **Bloco I, ideia e problema:** contexto, objeto e público, justificativa, objetivos;
* **Bloco II, produto e planejamento:** a sala, as seis pistas, arquitetura técnica, referencial teórico, cronograma e identidade visual.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"Dividimos a apresentação em dois blocos. No primeiro, o problema e a justificativa. No segundo, o produto: a sala de Ada Lovelace e suas seis pistas, a arquitetura, o referencial teórico e o cronograma."
</div>

---

<!-- SLIDE 3 -->
<div class="time-badge">01:00 - 02:00</div>

## 2. Contexto e motivação

* **Pioneirismo apagado:** Ada Lovelace escreveu o primeiro algoritmo (1843) e mulheres programaram o ENIAC;
* **Virada dos anos 80:** microcomputadores vendidos como brinquedo de meninos;
* **Hoje:** menos de 20% das matrículas em computação no Brasil são de mulheres (INEP/SBC);
* **Momento crítico:** no Ensino Médio, falta de modelos e síndrome da impostora afastam alunas de Exatas.

### Como transformar dados frios de exclusão em uma experiência que gere empatia?

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"A computação começou com mulheres, de Ada Lovelace às programadoras do ENIAC. A partir dos anos 80, com os microcomputadores vendidos como brinquedo de menino, abriu-se um abismo cultural. Hoje, menos de 20% das matrículas em computação são femininas. O Ensino Médio é o ponto crítico, e nossa pergunta é: como fazer esses jovens sentirem isso, e não apenas lerem a estatística?"
</div>

---

<!-- SLIDE 4 -->
<div class="time-badge">02:00 - 02:45</div>

## 3. Objeto do trabalho e público-alvo

* **Produto:** escape room digital com **uma única sala temática**, o gabinete de Ada Lovelace, em Londres, 1843;
* **Mecânica:** seis pistas independentes, resolvidas em qualquer ordem, em equipe; a porta só abre quando todas são resolvidas;
* **Público:** estudantes de 14 a 18 anos, sem exigir código prévio;
* **Mediação:** guia do professor com gabarito; versão desplugada possível, com papel e caneta.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"Em vez de uma palestra, colocamos a turma trancada no gabinete de Ada Lovelace. Há seis pistas independentes e a porta só abre quando todas são resolvidas. Não é preciso saber programar: os enigmas trabalham pensamento computacional. O professor conta com um guia com gabarito."
</div>

---

<!-- SLIDE 5 -->
<div class="time-badge">02:45 - 03:30</div>

## 4. Justificativa e diferencial

* **Efeito tesoura (*leaky pipeline*):** maior evasão feminina e poucas mulheres na liderança;
* **Vivência empática:** o aluno é protagonista, não plateia; alinhado à BNCC Computação (Cultura Digital);
* **Além da visão binária:** a maioria dos projetos trata gênero como homem × mulher cis; o guia de debate amplia a conversa para identidades não binárias, pessoas trans e interseccionalidades.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"O escape room gera vivência empática: o aluno sente a pressão do tempo e depois discute por que a contribuição de Ada foi apagada. Percebemos também que a literatura costuma tratar gênero de forma binária. Nosso guia de debate amplia a conversa para pessoas trans, não binárias e interseccionalidades."
</div>

---

<!-- SLIDE 6 -->
<div class="time-badge">03:30 - 04:15</div>

## 5. Objetivos do trabalho

**Objetivo geral:** desenvolver, documentar e validar o jogo **CodeBreak**, fomentando a reflexão sobre equidade de gênero e o pensamento computacional no Ensino Médio.

* **Pedagógicos:** desmistificar a computação como habilidade masculina; apresentar Ada Lovelace como referência; discutir apagamento histórico e representatividade;
* **Técnicos:** aplicação web responsiva (HTML, CSS, JS); guia do professor com gabarito e debate; validação de usabilidade e tempo de fuga.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"Nosso objetivo geral é desenvolver e validar o CodeBreak. Pedagogicamente, queremos desmistificar a ideia de que computação é coisa de menino e apresentar Ada como referência. Tecnicamente, entregamos uma aplicação web leve e o guia do professor."
</div>

---

<!-- SLIDE 7 -->
<div class="time-badge">04:15 - 05:30</div>

## 6. A sala: O Gabinete de Ada Lovelace

**Narrativa:** Londres, 1843. Os jogadores estão trancados no gabinete de Ada Lovelace, que ao traduzir um artigo sobre a Máquina Analítica de Babbage acrescentou notas com o primeiro algoritmo da história.

* **Tempo total:** 15 minutos;
* **Penalidade:** −30 s por resposta errada;
* **Vitória:** acertar todas as 6 pistas;
* **Dicas:** uma por pista;
* **Fecho:** tela de vitória com fatos históricos e debate guiado.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"A sala é única: o gabinete de Ada, em 1843. Há 15 minutos no relógio, cada erro custa 30 segundos e é preciso acertar as seis pistas. Cada pista tem uma dica. Ao final, uma tela de vitória traz fatos históricos que alimentam o debate."
</div>

---

<!-- SLIDE 8 -->
<div class="time-badge">05:30 - 06:45</div>

## 7. As seis pistas

| # | Pista | Enigma | Conceito |
| :-: | :-- | :-- | :-- |
| 1 | Os cartões do tear | Cartões perfurados binários: completar a 4ª linha | Representação binária |
| 2 | O nome da máquina | Cifra de César (−1) revela `BABBAGE` | Criptografia, padrões |
| 3 | A sequência de Ada | `1, 1, 2, 3, 5, 8, ?` (Fibonacci) | Padrões e recorrência |
| 4 | Linha do tempo | Anos entre 1815 e 1843 | Cálculo, contexto histórico |
| 5 | Execute o algoritmo | Seguir passos na ordem | Algoritmo |
| 6 | Charada final | Objeto de furos que dá ordens às máquinas: `CARTÃO` | Síntese e dedução |

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"Aqui estão as seis pistas. Cartões perfurados binários, inspirados no tear de Jacquard; uma cifra de César que revela o sobrenome Babbage; a sequência de Fibonacci; uma linha do tempo de 1815 a 1843; a execução de um algoritmo passo a passo; e uma charada final cuja resposta é cartão, que fecha o ciclo com a primeira pista. Todas usam pensamento computacional sem exigir código, e as respostas ficam no guia do professor."
</div>

---

<!-- SLIDE 9 -->
<div class="time-badge">06:45 - 07:30</div>

## 8. Arquitetura do produto

* **Software web:** roda em navegador, no PC da escola ou no celular, sem instalação, com custo zero de distribuição;
* **Gamificação:** cronômetro regressivo, penalidade, dicas e sons opcionais;
* **Código:** `index.html` (telas), `script.js` (pistas, validação e cronômetro), `style.css` (identidade visual); sem frameworks nem backend.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"Optamos por software web: roda em qualquer navegador, não exige instalação e não custa nada para replicar, o que permite que qualquer escola pública adote. O código é simples, em HTML, CSS e JavaScript puro, sem frameworks."
</div>

---

<!-- SLIDE 10 -->
<div class="time-badge">07:30 - 08:15</div>

## 9. Referencial teórico

* **Lima (2013):** cultura androcêntrica, efeito tesoura e isolamento;
* **Veldkamp et al. (2020):** aprendizagem ativa por escape rooms educativos;
* **Alves & Fonseca (2025):** computação desplugada, base das pistas 1 a 5;
* **GEG Brasil (2025):** BNCC Computação, eixo Cultura Digital;
* **Ribeiro & Queluci (2022); Alves et al. (2019):** elaboração de materiais educativos e roda de conversa pós-jogo.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"Nos apoiamos em Lima (2013) para entender a exclusão feminina na computação, em Veldkamp para o uso pedagógico de escape rooms, na computação desplugada do IFB para desenhar enigmas sem código, na BNCC Computação e nas metodologias de elaboração de materiais educativos."
</div>

---

<!-- SLIDE 11 -->
<div class="time-badge">08:15 - 09:00</div>

## 10. Cronograma de desenvolvimento

| Data | Etapa | Status |
| :-- | :-- | :-- |
| **03/10** | Definição de tema, produto e público | Concluído |
| **16/10** | **Projeto: objetivos, teoria e cronograma** | Entrega hoje |
| **23/10** | Identidade visual | Próximo marco |
| **06/11** | Status e compatibilização do cronograma | Previsto |
| **27/11** | **Entrega final do produto** e apresentação (grupo 1) | Marco final |
| **04/12** | Apresentação do trabalho final (grupo 2) | Fechamento |

* **Marcus:** coordenação, game design e programação web. **Kawan:** pesquisa histórica, roteiro, guia do professor e identidade visual.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"Seguimos as datas do guia da disciplina. Hoje entregamos o projeto, em 23/10 vem a identidade visual e em 27/11 a entrega final. Marcus cuida da coordenação, do game design e da programação; Kawan, da pesquisa histórica, do roteiro, do guia do professor e do visual."
</div>

---

<!-- SLIDE 12 -->
<div class="time-badge">09:00 - 09:30</div>

## 11. Identidade visual: minimalismo e elegância

* Fundo azul-marinho `#070B12` e **ciano** `#00A3E0` como único destaque;
* Títulos serifados (Cormorant Garamond, itálico nos subtítulos); texto em Inter e código em Fira Code;
* Bordas finas, sem neon nem brilho: a estética de gabinete antigo encontra a interface contemporânea.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"O visual é minimalista: fundo azul-marinho, ciano como único destaque, títulos serifados que remetem ao século XIX, texto em Inter e bordas finas, sem efeitos chamativos. Pouca informação por vez e contraste alto para laboratórios escolares."
</div>

---

<!-- SLIDE 13 -->
<div class="time-badge">09:30 - 09:45</div>

## 12. Referências bibliográficas

* ALVES, L. S.; FONSECA, M. G. *Computação Desplugada*. Brasília: IFB / PROFEPT, 2025.
* ALVES, R. J. M.; GUTJAHR, A. L. N.; PONTES, A. N. Processo metodológico de elaboração de uma cartilha educativa socioambiental. *RevBEA*, v. 14, n. 2, p. 69-85, 2019.
* GEG BRASIL. *BNCC Computação na Prática*. São Paulo: GEG Brasil, 2025.
* LIMA, M. P. As mulheres na Ciência da Computação. *Revista Estudos Feministas*, v. 21, n. 3, p. 793-816, 2013.
* RAMOS, G. N. *UnB-CIC: Uma classe em LaTeX*. Brasília: UnB, 2014.
* RIBEIRO, L. A.; QUELUCI, G. C. *Passo a passo para elaboração de cartilhas*. Niterói: eduCAPES / UFF, 2022.
* VELDKAMP, A. et al. Escape boxes: Bringing escape room experience into the classroom. *BJET*, v. 51, n. 4, p. 1220-1239, 2020.

<div class="script-box">
<strong>Roteiro de fala:</strong><br>
"Estas são as referências em ABNT dos materiais que fundamentam o projeto."
</div>

---

<!-- SLIDE 14 -->
<div class="time-badge">09:45 - 10:00</div>

# CodeBreak
### O Gabinete de Ada Lovelace

Aberto a perguntas, sugestões e ao parecer de aprovação da proposta.

<div class="script-box">
<strong>Roteiro de fala (Marcus):</strong><br>
"Concluímos reafirmando nosso entusiasmo com o CodeBreak, que une história, diversidade e ciência da computação. Agradecemos a atenção da professora e da turma e ficamos à disposição para perguntas e para o parecer de aprovação."
</div>
