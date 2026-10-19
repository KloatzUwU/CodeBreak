// Seleção de elementos do DOM
const topBar = document.getElementById('top-bar');
const timerDisplay = document.getElementById('timer-display');

const startScreen = document.getElementById('start-screen');
const room1Screen = document.getElementById('room1-screen');
const victoryScreen = document.getElementById('victory-screen');

const btnStart = document.getElementById('btn-start');
const btnSubmit = document.getElementById('btn-submit');
const btnRestart = document.getElementById('btn-restart');

const codeInput = document.getElementById('code-input');
const inputWrapper = document.getElementById('input-wrapper');
const errorMsg = document.getElementById('error-msg');
const finalTimeSpan = document.getElementById('final-time');

// Estado do Cronômetro (15 minutos = 900 segundos)
let timeRemaining = 15 * 60;
let timerInterval = null;

// Formata segundos para MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Inicia a contagem regressiva da sala
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

// Para o cronômetro ao vencer
function stopTimer() {
    clearInterval(timerInterval);
}

// Transição: Tela Inicial -> Sala 01
function startGame() {
    startScreen.classList.add('hidden');
    victoryScreen.classList.add('hidden');

    topBar.classList.remove('hidden');
    room1Screen.classList.remove('hidden');

    codeInput.value = '';
    errorMsg.classList.add('hidden');
    startTimer();

    setTimeout(() => codeInput.focus(), 100);
}

// Validação do Enigma da Sala 01
function checkCode() {
    // Remove espaços caso o jogador digite "1 0 0 0"
    const rawValue = codeInput.value.replace(/\s+/g, '').trim();

    // Resposta correta do deslocamento de bit (bit shift): 1000
    if (rawValue === '1000') {
        stopTimer();
        errorMsg.classList.add('hidden');

        // Salva o tempo restante para exibir na tela de vitória
        finalTimeSpan.textContent = formatTime(timeRemaining);

        // Esconde a Sala 01 e a barra de topo, e mostra a Tela de Vitória
        room1Screen.classList.add('hidden');
        topBar.classList.add('hidden');
        victoryScreen.classList.remove('hidden');
    } else {
        // Exibe mensagem de erro e aplica animação de tremor
        errorMsg.classList.remove('hidden');
        inputWrapper.classList.add('shake-error');

        setTimeout(() => {
            inputWrapper.classList.remove('shake-error');
        }, 350);

        codeInput.select();
    }
}

// Eventos de Clique
btnStart.addEventListener('click', startGame);
btnSubmit.addEventListener('click', checkCode);
btnRestart.addEventListener('click', startGame);

// Permite submeter apertando "Enter" no campo de código
codeInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkCode();
    }
});