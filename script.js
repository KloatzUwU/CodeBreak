// Base de Dados das 4 Salas (Adaptada para Ensino Médio e dicas sutis)
const roomsData = [
    {
        id: 1,
        badgeTitle: 'SALA_01:<strong class="highlight-cyan">INFÂNCIA</strong>',
        phaseTag: 'FASE 1: INFÂNCIA & BRINQUEDOS',
        targetTitle: 'Pioneira: Ada Lovelace[cite: 7]',
        loreHTML: `
            <p>Você já reparou que, desde criança, meninos costumam ganhar blocos de montar, robôs e videogames, enquanto meninas são afastadas de jogos de lógica?</p>
            <p>Nos anos 1980, as propagandas de TV decidiram vender os primeiros computadores pessoais apenas como <strong>"brinquedos para meninos"</strong>, criando uma barreira que dura até hoje.</p>
            <p>Mas a história real começou muito antes: no século XIX, <strong>Ada Lovelace</strong> percebeu que uma máquina de cálculos seguia padrões parecidos com os cartões furados de um tear. Foi assim que uma mulher escreveu o <span class="code-badge">primeiro algoritmo</span> do mundo[cite: 7]!</p>
        `,
        exeName: 'CARTAO_PERFURADO.exe',
        instructions: 'Na máquina de Ada, o número 1 representa um furo no cartão e o 0 representa um espaço vazio. Observe como a posição do furo se comporta de uma linha para a outra e descubra qual deve ser a 4ª linha:',
        matrixHTML: `
            <div>Linha 1: &nbsp;0 &nbsp;0 &nbsp;0 &nbsp;1</div>
            <div>Linha 2: &nbsp;0 &nbsp;0 &nbsp;1 &nbsp;0</div>
            <div>Linha 3: &nbsp;0 &nbsp;1 &nbsp;0 &nbsp;0</div>
            <div class="matrix-placeholder">Linha 4: &nbsp;_ &nbsp;_ &nbsp;_ &nbsp;_</div>
        `,
        terminalComment: '// Digite a sequência de 4 números da Linha 4 (apenas 0 e 1)',
        placeholder: '0 0 0 0',
        maxLength: 7,
        validAnswers: ['1000'],
        hintText: '<strong>[PISTA]:</strong> Compare a Linha 1 com a Linha 2, e depois com a Linha 3. Existe apenas um dígito diferente no meio dos zeros, e ele está "caminhando" sempre na mesma direção.'
    },
    {
        id: 2,
        badgeTitle: 'SALA_02:<strong class="highlight-cyan">ENSINO_MÉDIO</strong>',
        phaseTag: 'FASE 2: ENSINO MÉDIO (14 A 18 ANOS)',
        targetTitle: 'Pioneira: Grace Hopper[cite: 3, 6]',
        loreHTML: `
            <p>O Ensino Médio é a época de pensar no futuro e no ENEM. É justamente entre os 14 e 18 anos que muitas garotas desistem da tecnologia por acharem que "não levam jeito" (<em>Síndrome da Impostora</em>)[cite: 3] ou por não verem outras mulheres na área. Hoje, <strong>menos de 20% das matrículas</strong> em computação no Brasil são femininas[cite: 3, 6].</p>
            <p>Nos anos 1950, <strong>Grace Hopper</strong> mudou essa lógica: ela criou o primeiro <span class="code-badge">compilador</span> — um programa que traduzia zeros e uns para palavras normais. Ela também colou no caderno um inseto real que havia travado um computador, popularizando a gíria que usamos até hoje para "erro no sistema".</p>
        `,
        exeName: 'TRADUTOR_HOPPER.exe',
        instructions: 'Use o dicionário do tradutor de Grace Hopper abaixo para converter as três fileiras de números em letras e descobrir a famosa palavra de 3 letras:',
        matrixHTML: `
            <div class="align-left">
                <div><strong>DICIONÁRIO DE TRADUÇÃO:</strong></div>
                <div>[01000001 = A] &nbsp; [01000010 = B] &nbsp; [01000111 = G]</div>
                <div>[01010010 = R] &nbsp; [01010101 = U]</div>
                <hr class="divider" style="margin: 0.75rem 0;">
                <div>1ª LETRA: 01000010</div>
                <div>2ª LETRA: 01010101</div>
                <div>3ª LETRA: 01000111</div>
            </div>
            <div class="matrix-placeholder">PALAVRA TRADUZIDA: _ _ _</div>
        `,
        terminalComment: '// Digite a palavra de 3 letras formada pela tradução',
        placeholder: 'X X X',
        maxLength: 5,
        validAnswers: ['BUG'],
        hintText: '<strong>[PISTA]:</strong> Você não precisa fazer contas! Basta procurar qual letra do Dicionário tem exatamente a mesma sequência de zeros e uns de cada uma das 3 linhas.'
    },
    {
        id: 3,
        badgeTitle: 'SALA_03:<strong class="highlight-cyan">UNIVERSIDADE</strong>',
        phaseTag: 'FASE 3: FACULDADE & CARREIRA TI',
        targetTitle: 'Pioneira: Margaret Hamilton[cite: 5, 6]',
        loreHTML: `
            <p>Mesmo quando entram na faculdade, muitas jovens enfrentam um ambiente pouco acolhedor. Apenas <strong>15% a 20% concluem os cursos de TI</strong>[cite: 5, 6], e poucas chegam a cargos de chefia — um fenômeno chamado de <em>Efeito Tesoura</em>[cite: 5].</p>
            <p>Mas quando mulheres lideram, a história muda: em 1969, <strong>Margaret Hamilton</strong> chefiou a equipe que criou o software da nave Apollo 11. Segundos antes de tocar na Lua, o computador sobrecarregou. A missão só foi salva porque o código dela sabia descartar tarefas secundárias e focar apenas no que era essencial!</p>
        `,
        exeName: 'PAINEL_APOLLO.exe',
        instructions: 'O alarme da nave disparou! Analise a tabela de processos abaixo e descubra o código numérico (ID) do único processo que atende às duas exigências da Regra de Segurança:',
        matrixHTML: `
            <div class="align-left">
                <div>[ID: 04] Câmera Externa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Prioridade: 20 | Essencial: NÃO</div>
                <div>[ID: 11] Motor de Pouso &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Prioridade: 95 | Essencial: SIM</div>
                <div>[ID: 18] Alarme de Cabine &nbsp;&nbsp;&nbsp;| Prioridade: 60 | Essencial: SIM</div>
                <div>[ID: 20] Antena Secundária &nbsp;&nbsp;| Prioridade: 92 | Essencial: NÃO</div>
                <hr class="divider" style="margin: 0.75rem 0;">
                <div><strong>REGRA:</strong> Manter apenas o processo que seja <strong>Essencial: SIM</strong> e tenha <strong>Prioridade maior que 90</strong>.</div>
            </div>
            <div class="matrix-placeholder">DIGITE O ID ESCOLHIDO: _ _</div>
        `,
        terminalComment: '// Digite apenas os 2 números do ID que salvará o pouso lunar',
        placeholder: '0 0',
        maxLength: 4,
        validAnswers: ['11'],
        hintText: '<strong>[PISTA]:</strong> Cuidado com as pegadinhas: dois processos têm prioridade acima de 90 e dois são marcados como essenciais, mas apenas um cumpre as duas condições na mesma linha.'
    },
    {
        id: 4,
        badgeTitle: 'SALA_04:<strong class="highlight-cyan">SOCIEDADE_IA</strong>',
        phaseTag: 'FASE 4: FUTURO & INTELIGÊNCIA ARTIFICIAL',
        targetTitle: 'Desafio: Além da Visão Binária[cite: 5, 6]',
        loreHTML: `
            <p>Hoje, programas de Inteligência Artificial (IA) ajudam a selecionar currículos, aprovar bolsas e reconhecer rostos. Mas se as equipes que criam essas IAs não tiverem diversidade, os robôs aprendem preconceitos humanos (os chamados <em>vieses algorítmicos</em>)[cite: 6].</p>
            <p>Por muito tempo, até os projetos sobre igualdade olhavam para gênero apenas de forma binária (homem cis vs. mulher cis)[cite: 5]. Para que a tecnologia seja justa, ela precisa acolher <strong>pessoas não-binárias, homens e mulheres trans e todas as realidades sociais</strong>[cite: 5].</p>
            <p>Para abrir a última porta, lembre-se do princípio central deste projeto: a tecnologia deve ser <span class="code-badge">plural</span> para atender a toda a sociedade[cite: 5].</p>
        `,
        exeName: 'AUDITORIA_IA.exe',
        instructions: 'O sistema de IA do laboratório travou porque foi programado com uma regra antiga que exclui pessoas fora do padrão binário. Complete o comando abaixo com a palavra de 6 letras destacada no texto ao lado:',
        matrixHTML: `
            <div class="align-left">
                <div>CONFIGURAÇÃO ATUAL DA IA:</div>
                <div>&gt; modo_de_visao = "RESTRITO_BINARIO"</div>
                <div>&gt; resultado = [ERRO: EXCLUSÃO DETECTADA]</div>
                <hr class="divider" style="margin: 0.75rem 0;">
                <div>ATUALIZAÇÃO DE SEGURANÇA:</div>
                <div>"A tecnologia não deve ser excludente; ela deve ser <strong>_ _ _ _ _ _</strong> para acolher toda a diversidade."</div>
            </div>
            <div class="matrix-placeholder">NOVA CONFIGURAÇÃO (6 LETRAS): _ _ _ _ _ _</div>
        `,
        terminalComment: '// Digite a palavra de 6 letras que corrige a visão da IA',
        placeholder: 'P A L A V R A',
        maxLength: 10,
        validAnswers: ['PLURAL'],
        hintText: '<strong>[PISTA]:</strong> Leia o último parágrafo do quadro da esquerda. A palavra que falta está destacada em azul brilhante.'
    }
];

// Seleção de elementos do DOM
const topBar = document.getElementById('top-bar');
const roomTitleBadge = document.getElementById('room-title-badge');
const timerDisplay = document.getElementById('timer-display');
const btnSound = document.getElementById('btn-sound');

const startScreen = document.getElementById('start-screen');
const roomScreen = document.getElementById('room-screen');
const victoryScreen = document.getElementById('victory-screen');

const teacherModal = document.getElementById('teacher-modal');
const btnOpenGuide = document.getElementById('btn-open-guide');
const btnCloseGuide = document.getElementById('btn-close-guide');
const btnCloseGuideBottom = document.getElementById('btn-close-guide-bottom');

const roomPhaseTag = document.getElementById('room-phase-tag');
const roomTargetTitle = document.getElementById('room-target-title');
const roomLoreContent = document.getElementById('room-lore-content');
const puzzleExeName = document.getElementById('puzzle-exe-name');
const puzzleInstructions = document.getElementById('puzzle-instructions');
const matrixBox = document.getElementById('matrix-box');
const terminalLabel = document.getElementById('terminal-label');
const transitionMsg = document.getElementById('transition-msg');

const btnStart = document.getElementById('btn-start');
const btnSubmit = document.getElementById('btn-submit');
const btnRestart = document.getElementById('btn-restart');
const btnHint = document.getElementById('btn-hint');

const codeInput = document.getElementById('code-input');
const inputWrapper = document.getElementById('input-wrapper');
const errorMsg = document.getElementById('error-msg');
const hintBox = document.getElementById('hint-box');
const finalTimeSpan = document.getElementById('final-time');

// Estado do Jogo
let currentRoomIndex = 0;
let timeRemaining = 15 * 60; // 15 minutos para as 4 salas
let timerInterval = null;
let soundEnabled = true;
let isTransitioning = false;

// Sintetizador de Áudio Nativo (Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type, duration) {
    if (!soundEnabled) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function playSuccessSound() {
    playTone(523.25, 'sine', 0.12); // C5
    setTimeout(() => playTone(659.25, 'sine', 0.12), 110); // E5
    setTimeout(() => playTone(783.99, 'sine', 0.25), 220); // G5
}

function playErrorSound() {
    playTone(160, 'sawtooth', 0.25);
}

function playClickSound() {
    playTone(440, 'triangle', 0.08);
}

// Alternar Som ON/OFF
btnSound.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    btnSound.textContent = soundEnabled ? '[SOM: ON]' : '[SOM: OFF]';
});

// Controle do Modal do Guia do Professor
function openTeacherGuide() {
    playClickSound();
    teacherModal.classList.remove('hidden');
}

function closeTeacherGuide() {
    playClickSound();
    teacherModal.classList.add('hidden');
}

btnOpenGuide.addEventListener('click', openTeacherGuide);
btnCloseGuide.addEventListener('click', closeTeacherGuide);
btnCloseGuideBottom.addEventListener('click', closeTeacherGuide);

// Fecha o modal ao clicar fora do cartão ou apertar ESC
teacherModal.addEventListener('click', (event) => {
    if (event.target === teacherModal) {
        closeTeacherGuide();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !teacherModal.classList.contains('hidden')) {
        closeTeacherGuide();
    }
});

// Formata segundos para MM:SS
function formatTime(seconds) {
    if (seconds < 0) seconds = 0;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Inicia a contagem regressiva
function startTimer() {
    clearInterval(timerInterval);
    timeRemaining = 15 * 60;
    timerDisplay.textContent = formatTime(timeRemaining);

    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerDisplay.textContent = formatTime(timeRemaining);
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Atualiza os indicadores visuais de progresso (01 - 02 - 03 - 04)
function updateProgressPills(activeIndex) {
    for (let i = 0; i < 4; i++) {
        const pill = document.getElementById(`step-${i + 1}`);
        pill.classList.remove('active', 'completed');
        if (i < activeIndex) {
            pill.classList.add('completed');
        } else if (i === activeIndex) {
            pill.classList.add('active');
        }
    }
}

// Carrega os dados da sala atual na interface
function loadRoom(index) {
    const room = roomsData[index];
    isTransitioning = false;

    roomTitleBadge.innerHTML = room.badgeTitle;
    roomPhaseTag.textContent = room.phaseTag;
    roomTargetTitle.textContent = room.targetTitle;
    roomLoreContent.innerHTML = room.loreHTML;

    puzzleExeName.textContent = room.exeName;
    puzzleInstructions.textContent = room.instructions;
    matrixBox.innerHTML = room.matrixHTML;
    terminalLabel.textContent = room.terminalComment;

    codeInput.value = '';
    codeInput.placeholder = room.placeholder;
    codeInput.maxLength = room.maxLength;
    hintBox.innerHTML = room.hintText;

    errorMsg.classList.add('hidden');
    hintBox.classList.add('hidden');
    transitionMsg.classList.add('hidden');

    updateProgressPills(index);
    setTimeout(() => codeInput.focus(), 100);
}

// Inicia o Jogo a partir da Sala 01
function startGame() {
    playClickSound();
    currentRoomIndex = 0;

    startScreen.classList.add('hidden');
    victoryScreen.classList.add('hidden');
    teacherModal.classList.add('hidden');

    topBar.classList.remove('hidden');
    roomScreen.classList.remove('hidden');

    loadRoom(currentRoomIndex);
    startTimer();
}

// Mostrar/Ocultar Pista Dinâmica
btnHint.addEventListener('click', () => {
    playClickSound();
    hintBox.classList.toggle('hidden');
});

// Valida a senha da sala atual e avança para a próxima
function checkCode() {
    if (isTransitioning) return;

    const rawValue = codeInput.value.replace(/\s+/g, '').trim().toUpperCase();
    const currentRoom = roomsData[currentRoomIndex];

    if (currentRoom.validAnswers.includes(rawValue)) {
        playSuccessSound();
        errorMsg.classList.add('hidden');
        isTransitioning = true;

        // Se ainda houver salas seguintes, faz transição suave
        if (currentRoomIndex < roomsData.length - 1) {
            transitionMsg.classList.remove('hidden');
            setTimeout(() => {
                currentRoomIndex++;
                loadRoom(currentRoomIndex);
            }, 900);
        } else {
            // Concluiu a Sala 4 -> Tela de Vitória Final
            stopTimer();
            finalTimeSpan.textContent = formatTime(timeRemaining);
            roomScreen.classList.add('hidden');
            topBar.classList.add('hidden');
            victoryScreen.classList.remove('hidden');
        }
    } else {
        playErrorSound();
        
        // PENALIDADE DE TEMPO: Diminui 30 segundos a cada erro
        timeRemaining = Math.max(0, timeRemaining - 30);
        timerDisplay.textContent = formatTime(timeRemaining);
        
        // Efeito visual de alerta no cronômetro
        timerDisplay.classList.add('timer-flash');
        setTimeout(() => timerDisplay.classList.remove('timer-flash'), 400);

        errorMsg.classList.remove('hidden');
        inputWrapper.classList.add('shake-error');

        setTimeout(() => {
            inputWrapper.classList.remove('shake-error');
        }, 350);

        codeInput.select();
    }
}

// Eventos Principais
btnStart.addEventListener('click', startGame);
btnSubmit.addEventListener('click', checkCode);
btnRestart.addEventListener('click', startGame);

codeInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkCode();
    }
});