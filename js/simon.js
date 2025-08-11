const colors = ["green", "red", "yellow", "blue"];
const gameSequence = [];
let playerSequence = [];
let level = 0;
let acceptingInput = false;

const buttons = colors.reduce((acc, color) => {
  acc[color] = document.getElementById(color);
  return acc;
}, {});

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");

// Audio context et sons (inchangé)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playTone(freq, duration = 300) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = freq;

  gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration / 1000);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration / 1000);
}

const frequencies = {
  green: 329.63,
  red: 261.63,
  yellow: 220.00,
  blue: 164.81
};

function playColorSound(color) {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  playTone(frequencies[color]);
}

function playErrorSound() {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  playTone(100, 400);
}

function playWinSound() {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  playTone(523.25, 150);
  setTimeout(() => playTone(659.25, 150), 200);
  setTimeout(() => playTone(783.99, 300), 400);
}

// --- NOUVEAU : sauvegarder le meilleur score local ---
function saveHighScore(score) {
  const key = 'score_simon'; // clé unique pour Simon
  const highScore = localStorage.getItem(key) || 0;
  if (score > highScore) {
    localStorage.setItem(key, score);
    console.log(`Nouveau record Simon : ${score}`);
  }
}

startBtn.addEventListener("click", () => {
  resetGame();
  nextRound();
  startBtn.classList.add("hidden");
  restartBtn.classList.add("hidden");
  messageEl.textContent = "Regarde la séquence...";
});

restartBtn.addEventListener("click", () => {
  resetGame();
  nextRound();
  restartBtn.classList.add("hidden");
  startBtn.classList.add("hidden");
  messageEl.textContent = "Regarde la séquence...";
});

function resetGame() {
  gameSequence.length = 0;
  playerSequence = [];
  level = 0;
  scoreEl.textContent = "0";
  acceptingInput = false;
  messageEl.textContent = "";
}

function nextRound() {
  level++;
  scoreEl.textContent = level;
  playerSequence = [];
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  gameSequence.push(nextColor);
  playSequence();
}

function playSequence() {
  acceptingInput = false;
  let i = 0;

  const interval = setInterval(() => {
    if (i > 0) {
      buttons[gameSequence[i - 1]].classList.remove("active");
    }
    if (i === gameSequence.length) {
      clearInterval(interval);
      acceptingInput = true;
      messageEl.textContent = "À toi de jouer !";
      return;
    }
    const color = gameSequence[i];
    buttons[color].classList.add("active");
    playColorSound(color);
    i++;
  }, 800);
}

Object.values(buttons).forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!acceptingInput) return;

    const color = btn.id;
    playerSequence.push(color);
    playColorSound(color);
    animatePress(btn);

    const currentIndex = playerSequence.length - 1;
    if (playerSequence[currentIndex] !== gameSequence[currentIndex]) {
      playErrorSound();
      showGameOver();
      return;
    }

    if (playerSequence.length === gameSequence.length) {
      messageEl.textContent = "✅ Bien joué ! Prépare-toi pour la suite...";
      acceptingInput = false;
      playWinSound();
      saveHighScore(level);  // <- Sauvegarde du meilleur score ici
      setTimeout(() => {
        nextRound();
      }, 1200);
    }
  });
});

function animatePress(btn) {
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 300);
}

function showGameOver() {
  messageEl.textContent = "❌ Perdu ! Clique sur Rejouer pour recommencer.";
  restartBtn.classList.remove("hidden");
  startBtn.classList.add("hidden");
  acceptingInput = false;
}