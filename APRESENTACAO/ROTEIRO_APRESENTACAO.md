# Roteiro de Apresentação — Marco de 16/10
**Disciplina:** Informática e Sociedade (INFOSOC) — Universidade de Brasília (UnB)  
**Projeto:** CodeBreak: O Gabinete de Ada Lovelace (Escape Room Educativo)  
**Tema:** Gênero e Computação  
**Público-alvo:** Ensino Médio (14 a 18 anos)  
**Componentes:** Marcus Cavalcante e Kawan Borges  
**Duração:** 10 minutos (14 slides)

---

## Arquivos

- `apresentacao.pdf` / `apresentacao.tex`: Beamer 16:9 (compilar com `latexmk -xelatex apresentacao.tex`);
- `apresentacao_interativa.html`: versão web navegável com `◀ ▶` ou `Espaço`; tecla `F` para tela cheia;
- `apresentacao_slides.md`: versão Marp com falas;
- Jogo: pasta `../CodeBreak/` (`index.html`, `script.js`, `style.css`).

---

## O conceito do produto

O **CodeBreak** é uma experiência gamificada de **uma única sala temática**: *O Gabinete de Ada Lovelace* (Londres, 1843).

1. **Tema:** a contribuição histórica de Ada Lovelace e as barreiras de gênero na computação;
2. **Público-alvo:** estudantes do Ensino Médio;
3. **Mecânica:** seis pistas independentes, resolvidas em qualquer ordem. Tempo total de 15 minutos, −30 s por resposta errada, é preciso acertar todas as pistas. Cada pista tem uma dica;
4. **As seis pistas:**
   - **1. Os cartões do tear:** cartões perfurados binários (1 = furo), completar a 4ª linha (`1000`);
   - **2. O nome da máquina:** cifra de César (−1) revela `BABBAGE`;
   - **3. A sequência de Ada:** `1, 1, 2, 3, 5, 8, ?` → `13` (Fibonacci);
   - **4. Linha do tempo:** 1843 − 1815 = `28` anos;
   - **5. Execute o algoritmo:** início 3; ×4; −2; ÷5 → `2`;
   - **6. Charada final:** `CARTÃO`;
5. **Fecho:** tela de vitória com fatos históricos e **guia do professor** (gabarito e roteiro de debate);
6. **Implementação:** aplicação web responsiva (HTML, CSS e JavaScript puro), sem instalação.

**Visual:** minimalista, fundo azul-marinho `#070B12`, ciano `#00A3E0` como único destaque, títulos serifados (Cormorant Garamond), Inter e Fira Code, bordas finas, sem neon.

---

## Guia de fala slide a slide (10 minutos)

### Slide 1: Capa (0:00 – 0:30)
- *"Bom dia/boa tarde, professora e colegas. Hoje apresentamos a proposta do trabalho final de Informática e Sociedade. Nosso tema é Gênero e Computação, nosso público são estudantes do Ensino Médio e o produto é o 'CodeBreak: O Gabinete de Ada Lovelace', um escape room educativo digital. Eu sou o Marcus e apresento em nome da equipe."*

### Slide 2: Roteiro (0:30 – 1:00)
- *"Dividimos a apresentação em dois blocos: no primeiro, o problema e a justificativa; no segundo, o produto, com a sala de Ada e suas seis pistas, a arquitetura, o referencial e o cronograma."*

### Slide 3: Contexto e motivação (1:00 – 2:00)
- *"A computação começou com mulheres, de Ada Lovelace às programadoras do ENIAC. Nos anos 80, com os microcomputadores vendidos como brinquedo de menino, criou-se um abismo cultural. Hoje, menos de 20% das matrículas em computação são femininas. O Ensino Médio é o ponto crítico: falta de modelos e síndrome da impostora afastam talentos. Nossa pergunta é como transformar esses dados em uma experiência que gere empatia."*

### Slide 4: Objeto e público-alvo (2:00 – 2:45)
- *"Em vez de uma palestra, colocamos a turma trancada no gabinete de Ada Lovelace, em 1843. São seis pistas independentes, e a porta só abre quando todas são resolvidas. Não é preciso saber programar. O professor recebe um guia com gabarito, e há possibilidade de versão desplugada."*

### Slide 5: Justificativa e diferencial (2:45 – 3:30)
- *"O escape room gera vivência empática: o aluno é protagonista. Percebemos ainda que a literatura costuma tratar gênero de forma binária; nosso guia de debate amplia a conversa para pessoas trans, não binárias e interseccionalidades. O jogo também se alinha à BNCC Computação."*

### Slide 6: Objetivos (3:30 – 4:15)
- *"O objetivo geral é desenvolver e validar o CodeBreak. Pedagogicamente: desmistificar a computação como habilidade masculina, apresentar Ada Lovelace e discutir apagamento histórico e representatividade. Tecnicamente: aplicação web responsiva e guia do professor."*

### Slide 7: A sala (4:15 – 5:30) — *slide-chave*
- *"A sala é única: o gabinete de Ada Lovelace, filha de Lord Byron, que ao traduzir um artigo sobre a Máquina Analítica de Babbage acrescentou o primeiro algoritmo da história. São 15 minutos, cada erro custa 30 segundos, é preciso acertar as seis pistas e cada pista tem uma dica. No final, a tela de vitória traz fatos históricos para o debate."*

### Slide 8: As seis pistas (5:30 – 6:45) — *slide-chave*
- *"Cartões perfurados binários, inspirados no tear de Jacquard; cifra de César que revela Babbage; sequência de Fibonacci; linha do tempo de 1815 a 1843; execução de um algoritmo passo a passo; e uma charada final cuja resposta é cartão, fechando o ciclo com a primeira pista. Todas trabalham pensamento computacional sem exigir código; as respostas estão no guia do professor."*

### Slide 9: Arquitetura (6:45 – 7:30)
- *"Optamos por software web: roda em qualquer navegador, sem instalação e com custo zero de replicação. O código é HTML, CSS e JavaScript puros, sem frameworks: telas, pistas, validação e cronômetro."*

### Slide 10: Referencial teórico (7:30 – 8:15)
- *"Lima (2013) fundamenta a exclusão feminina na computação; Veldkamp et al. (2020), o uso de escape rooms; Alves e Fonseca (2025), a computação desplugada; o GEG Brasil (2025), a BNCC Computação; e Ribeiro e Queluci (2022) e Alves et al. (2019), a elaboração de materiais educativos e a roda de conversa."*

### Slide 11: Cronograma e equipe (8:15 – 9:00)
- *"Seguimos as datas do guia da disciplina: 03/10 tema (concluído); hoje, 16/10, o projeto; 23/10, identidade visual; 06/11, status; 27/11 e 04/12, entrega final e apresentações. Marcus cuida da coordenação, game design e programação; Kawan, da pesquisa histórica, roteiro, guia do professor e visual."*

### Slide 12: Identidade visual (9:00 – 9:30)
- *"O visual é minimalista: fundo azul-marinho, ciano como único destaque, títulos serifados, Inter no texto e bordas finas, sem efeitos chamativos."*

### Slides 13 e 14: Referências e encerramento (9:30 – 10:00)
- *"Apresentamos as referências em ABNT e abrimos espaço para perguntas, sugestões e o parecer de aprovação da professora."*

---

## Dicas de defesa para a sabatina

1. **"Por que um escape room e não uma cartilha tradicional?"**
   - *"Alunos do Ensino Médio raramente leem cartilhas. O escape room usa aprendizagem baseada em jogos: trabalho em equipe, curiosidade investigativa e memória emocional."*

2. **"Como garantem que os alunos aprendem sobre gênero e não só jogam?"**
   - *"As pistas giram em torno da vida e da obra de Ada (tear, Babbage, Notas de 1843), a tela de vitória traz fatos históricos e o guia do professor prevê um debate sobre o apagamento de Ada e a representatividade na escolha de carreira."*

3. **"Por que uma única sala, e não várias fases?"**
   - *"Uma sala com seis pistas independentes cabe em uma aula, é fácil de mediar e permite trabalhar em equipe, em qualquer ordem. Aprofundamos uma narrativa em vez de espalhar o conteúdo."*

4. **"Dá tempo de programar a Web App até 27/11?"**
   - *"Sim. O protótipo já funciona: HTML, CSS e JavaScript puros, com troca de telas, cronômetro, penalidade e validação de respostas. Falta validar usabilidade, previsto para o marco de 06/11."*
