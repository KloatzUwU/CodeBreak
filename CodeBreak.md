Reescrevi o CodeBreak como uma sala única com tema Ada Lovelace. Não abri o jogo no navegador, então ainda não testei.

Como funciona

A sala é o "Gabinete de Ada Lovelace" (Londres, 1843), com 6 pistas visíveis ao mesmo tempo. Dá para resolver em qualquer ordem.
Para sair, é preciso acertar as 6 pistas dentro de 15 minutos. Cada resposta errada tira 30 segundos.
Os enigmas são:
Cartões perfurados do tear de Jacquard, com padrão binário (resposta 1000).
Cifra de César com o sobrenome de Babbage (resposta BABBAGE).
Sequência numérica de Fibonacci (resposta 13).
Linha do tempo, 1843 − 1815 (resposta 28).
Execução de um algoritmo passo a passo (resposta 2).
Charada final (resposta CARTÃO).
Cada pista tem um botão de dica. As respostas aceitam letras maiúsculas ou minúsculas, com ou sem acento.
O Guia do professor, com o gabarito, continua na tela inicial. As telas de vitória e de tempo esgotado também foram mantidas.

Visual

Mantive as cores e fontes da identidade visual: azul-marinho #070B12, ciano #00A3E0, púrpura e verde, mais Inter e Fira Code.
Para o toque elegante, acrescentei títulos em serifa (Cormorant Garamond).
O restante ficou mais discreto: bordas finas, sem brilhos nem efeitos neon, e só o ciano como cor de destaque.

Os arquivos alterados estão em CodeBreak: index.html, style.css e script.js.

Não alterei o documento do TCC nem o manual de identidade visual. Eles ainda descrevem 6 salas, então talvez precisem de ajuste.

Mude tudo que estava em torno do visual e das telas que já estavam feitas e foram alteradas, por exemplo o manual identidade visual codebreak, e todos os outros arquivos que tinham referencia com o site antigo

Terminei o manual, os assets, os READMEs e o documento do TCC. A apresentação ainda está sendo atualizada por outro agente, então esta etapa não está concluída.

Já atualizado

Manual de identidade visual:
Reescrevi o manual_identidade_visual.html para a sala única de Ada Lovelace, com 4 páginas: proposta, logo, tipografia, paleta, telas, as 6 pistas e o guia do professor.
Gerei o PDF de novo em IDENTIDADE_VISUAL/. Copiei o mesmo PDF por cima de "Manual de Identidade Visual - CodeBreak.pdf" na raiz.
Conferi só uma prévia reduzida das 4 páginas, não o PDF em tamanho real.
Assets:
Refiz os 6 SVGs de logo no estilo minimalista: colchetes de código com um furo central, que lembra o cartão perfurado, e nome em serifa.
Troquei os 6 ícones de sala por 6 ícones de pista (icon_pista1_cartao.svg a icon_pista6_charada.svg).
Substituí os screenshots antigos por capturas do jogo novo.
READMEs: o da raiz e o de IDENTIDADE_VISUAL/ agora descrevem o jogo novo.
Documento do TCC: um subagente reescreveu os .tex em DOCUMENTO_TCC e em Monografia-master e recompilou os dois PDFs. Ele conferiu o texto dos PDFs com pdftotext: "Gabinete" aparece nos dois e "Labirinto" não aparece.

Ainda em andamento

Outro subagente está atualizando APRESENTACAO/ (slides em LaTeX, versão web, roteiro e resumo em markdown). Quando ele terminar, rodo uma última busca por menções ao jogo antigo.

Para você saber

Fonte dos títulos: o título serifado (Cormorant Garamond) vem do Google Fonts. Na minha máquina, sem internet, o navegador usou uma serifa padrão. No seu computador, com internet, a fonte correta carrega e o PDF do manual deve ficar mais elegante.
Pasta vazia: a pasta src/ na raiz está vazia e não mexi nela.

Atualizei tudo o que fazia referência ao site antigo. Uma busca final não achou mais "Labirinto", "Apollo", "seis salas" nem os ícones antigos de sala. Só abri o jogo no navegador para tirar as capturas; os outros arquivos não foram abertos no navegador.

Manual de identidade visual: reescrevi o HTML, gerei de novo o PDF e copiei o mesmo PDF para a raiz. As novas logos, os 6 ícones de pista e os screenshots do jogo atual estão em IDENTIDADE_VISUAL/assets/.

READMEs: o da raiz e o de IDENTIDADE_VISUAL agora descrevem a sala única de Ada Lovelace.

Documento do TCC: os .tex de DOCUMENTO_TCC e Monografia-master foram reescritos e os PDFs recompilados.

Apresentação: os slides em LaTeX, a versão web, o roteiro e o resumo em markdown foram refeitos, com 14 slides e 10 minutos de duração. O PDF foi recompilado e tem 14 páginas.

Compilação da apresentação: ela agora usa XeLaTeX. Para recompilar, rode latexmk -xelatex apresentacao.tex dentro de APRESENTACAO.

Fonte dos títulos: o título serifado (Cormorant Garamond) só aparece se a fonte estiver instalada. Neste computador ela não estava, então o PDF dos slides usou a Linux Libertine O. No manual e no jogo a fonte vem do Google Fonts, então precisa de internet para carregar.

Os documentos ainda citam o ENIAC, mas só como contexto histórico das pioneiras, não como sala.
