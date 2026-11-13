// ===== Configuração =====
const TOTAL_TIME = 15 * 60;   // 15 minutos
const PENALTY = 30;           // segundos perdidos por erro

// ===== Pistas da sala de Ada Lovelace =====
const clues = [
    {
        title: 'Os cartões do tear',
        text: 'Ada se inspirou nos cartões perfurados do tear de Jacquard. Aqui, 1 é um furo e 0 é um espaço vazio. Qual é a 4ª linha?',
        puzzle: '1) 0 0 0 1<br>2) 0 0 1 0<br>3) 0 1 0 0<br>4) _ _ _ _',
        placeholder: '4 dígitos',
        answers: ['1000'],
        answerLabel: '1000',
        hint: 'O furo caminha uma posição para a esquerda a cada linha.'
    },
    {
        title: 'O nome da máquina',
        text: 'O parceiro de Ada projetou a Máquina Analítica. Desloque cada letra uma posição para trás no alfabeto para descobrir o sobrenome dele.',
        puzzle: 'C B C C B H F',
        placeholder: 'sobrenome',
        answers: ['BABBAGE'],
        answerLabel: 'BABBAGE',
        hint: 'C vira B, B vira A... É a cifra de César com deslocamento 1.'
    },
    {
        title: 'A sequência de Ada',
        text: 'Ada trabalhou com sequências numéricas na Nota G. Qual número vem a seguir?',
        puzzle: '1, 1, 2, 3, 5, 8, ?',
        placeholder: 'número',
        answers: ['13'],
        answerLabel: '13',
        hint: 'Cada número é a soma dos dois anteriores.'
    },
    {
        title: 'Linha do tempo',
        text: 'Ada nasceu em 1815 e suas Notas foram publicadas em 1843. Quantos anos separam os dois acontecimentos?',
        puzzle: '1843 − 1815 = ?',
        placeholder: 'anos',
        answers: ['28'],
        answerLabel: '28',
        hint: 'É uma subtração simples.'
    },
    {
        title: 'Execute o algoritmo',
        text: 'Um algoritmo é uma sequência de passos. Execute este, na ordem, e informe o resultado final.',
        puzzle: 'início: 3<br>1. multiplique por 4<br>2. subtraia 2<br>3. divida por 5',
        placeholder: 'resultado',
        answers: ['2'],
        answerLabel: '2',
        hint: '3 × 4 = 12; depois 12 − 2 = 10.'
    },
    {
        title: 'Charada final',
        text: 'Sou feito de furos e dou ordens a teares e a máquinas. Sem mim, a máquina de Ada não saberia o que fazer. O que sou?',
        puzzle: '_ _ _ _ _ _  ( 6 letras )',
        placeholder: 'resposta',
        answers: ['CARTAO'],
        answerLabel: 'CARTÃO',
        hint: 'Pense na primeira pista. Seria perfurado.'
    }
];

// ===== Elementos =====
const $ = (id) => document.getElementById(id);
const startScreen = $('start-screen'), roomScreen = $('room-screen');
const victoryScreen = $('victory-screen'), gameoverScreen = $('gameover-screen');
const topBar = $('top-bar'), timerDisplay = $('timer-display');
const cluesGrid = $('clues-grid'), feedback = $('feedback');
const progressText = $('progress-text'), progressFill = $('progress-fill');
const teacherModal = $('teacher-modal');

let timeRemaining = TOTAL_TIME;
let timerInterval = null;
let solved = new Set();
let soundOn = true;
let audioCtx = null;

// ===== Som =====
function beep(freq, dur, type = 'sine', vol = 0.05) {
    if (!soundOn) return;
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
        osc.type = type; osc.frequency.value = freq;
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(); osc.stop(audioCtx.currentTime + dur);
    } catch (e) { /* áudio indisponível */ }
}
const soundClick = () => beep(500, 0.06);
const soundOk = () => { beep(523, 0.12); setTimeout(() => beep(784, 0.2), 110); };
const soundError = () => beep(160, 0.25, 'triangle', 0.07);

$('btn-sound').addEventListener('click', () => {
    soundOn = !soundOn;
    $('btn-sound').textContent = soundOn ? 'som: on' : 'som: off';
});

// ===== Utilidades =====
const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

const normalize = (v) =>
    v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '').toUpperCase();

function updateTimerUI() {
    timerDisplay.textContent = formatTime(timeRemaining);
    timerDisplay.classList.toggle('low', timeRemaining <= 60);
}

// ===== Renderização =====
function renderClues() {
    cluesGrid.innerHTML = '';
    clues.forEach((c, i) => {
        const el = document.createElement('article');
        el.className = 'clue';
        el.id = `clue-${i}`;
        el.innerHTML = `
            <div class="clue-head">
                <span class="clue-num mono">PISTA ${String(i + 1).padStart(2, '0')}</span>
                <span class="clue-status mono">${solved.has(i) ? 'resolvida ✓' : ''}</span>
            </div>
            <h3 class="clue-title">${c.title}</h3>
            <p class="clue-text">${c.text}</p>
            <div class="clue-puzzle">${c.puzzle}</div>
            <button class="hint-toggle" type="button">ver dica</button>
            <p class="clue-hint hidden">${c.hint}</p>
            <form class="clue-form" autocomplete="off">
                <input type="text" placeholder="${c.placeholder}" aria-label="Resposta da pista ${i + 1}">
                <button type="submit">enviar</button>
            </form>`;

        el.querySelector('.hint-toggle').addEventListener('click', () => {
            soundClick();
            el.querySelector('.clue-hint').classList.toggle('hidden');
        });
        el.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            checkAnswer(i, el.querySelector('input').value);
        });
        cluesGrid.appendChild(el);
    });
}

function updateProgress() {
    progressText.textContent = `${solved.size} / ${clues.length}`;
    progressFill.style.width = `${(solved.size / clues.length) * 100}%`;
}

// ===== Lógica =====
function checkAnswer(i, value) {
    if (solved.has(i)) return;
    const el = $(`clue-${i}`);

    if (clues[i].answers.includes(normalize(value))) {
        solved.add(i);
        soundOk();
        el.classList.add('solved');
        el.querySelector('.clue-status').textContent = 'resolvida ✓';
        feedback.classList.add('hidden');
        updateProgress();
        if (solved.size === clues.length) setTimeout(victory, 700);
    } else {
        soundError();
        timeRemaining = Math.max(0, timeRemaining - PENALTY);
        updateTimerUI();
        timerDisplay.classList.add('flash');
        setTimeout(() => timerDisplay.classList.remove('flash'), 400);
        el.classList.add('wrong');
        setTimeout(() => el.classList.remove('wrong'), 400);
        feedback.textContent = `Resposta incorreta na pista ${i + 1}. −${PENALTY}s no cronômetro.`;
        feedback.classList.remove('hidden');
        if (timeRemaining === 0) gameOver();
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerUI();
        if (timeRemaining <= 0) gameOver();
    }, 1000);
}

function showOnly(screen) {
    [startScreen, roomScreen, victoryScreen, gameoverScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function gameOver() {
    clearInterval(timerInterval);
    timeRemaining = 0;
    updateTimerUI();
    soundError();
    topBar.classList.add('hidden');
    showOnly(gameoverScreen);
}

function victory() {
    clearInterval(timerInterval);
    $('final-time').textContent = formatTime(timeRemaining);
    topBar.classList.add('hidden');
    showOnly(victoryScreen);
}

function startGame() {
    soundClick();
    solved = new Set();
    timeRemaining = TOTAL_TIME;
    teacherModal.classList.add('hidden');
    feedback.classList.add('hidden');
    renderClues();
    updateProgress();
    updateTimerUI();
    topBar.classList.remove('hidden');
    showOnly(roomScreen);
    window.scrollTo(0, 0);
    startTimer();
}

// ===== Guia do professor =====
$('answers-body').innerHTML = clues.map((c, i) =>
    `<tr><td>${i + 1}</td><td>${c.title}</td><td>${c.answerLabel}</td></tr>`).join('');

$('btn-open-guide').addEventListener('click', () => { soundClick(); teacherModal.classList.remove('hidden'); });
$('btn-close-guide').addEventListener('click', () => teacherModal.classList.add('hidden'));
teacherModal.addEventListener('click', (e) => { if (e.target === teacherModal) teacherModal.classList.add('hidden'); });

// ===== Eventos =====
$('btn-start').addEventListener('click', startGame);
$('btn-restart').addEventListener('click', startGame);
$('btn-retry').addEventListener('click', startGame);
