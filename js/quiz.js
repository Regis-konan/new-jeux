const quizData = {
  logique: {
    facile: [
      { question: "Complétez la suite : 2, 4, 6, 8, ?", answers: ["9", "10", "11", "12"], correct: 1 },
      { question: "Quel mot est l’intrus ? Lundi, Mardi, Soleil, Mercredi", answers: ["Lundi", "Mardi", "Soleil", "Mercredi"], correct: 2 },
      { question: "Si un chat a 4 pattes, combien de pattes ont 3 chats ?", answers: ["8", "10", "12", "14"], correct: 2 },
      { question: "Trouvez l'intrus : Carré, Triangle, Cercle, Cube", answers: ["Carré", "Triangle", "Cercle", "Cube"], correct: 3 },
      { question: "Complétez : 5, 10, 15, ?", answers: ["18", "19", "20", "21"], correct: 2 },
      { question: "Quel mot est l’intrus ? Rouge, Bleu, Carré, Vert", answers: ["Rouge", "Bleu", "Carré", "Vert"], correct: 2 },
      { question: "Si Pierre a 3 pommes et en donne 1, il lui en reste...", answers: ["1", "2", "3", "4"], correct: 1 },
      { question: "Complétez : 1, 2, 4, 8, ?", answers: ["12", "14", "16", "18"], correct: 2 },
      { question: "Quel mot est l’intrus ? Neige, Pluie, Vent, Feu", answers: ["Neige", "Pluie", "Vent", "Feu"], correct: 3 },
      { question: "Si deux vélos ont 4 roues chacun, combien de roues ont 5 vélos ?", answers: ["8", "10", "15", "20"], correct: 3 }
    ],
    moyen: [
      { question: "Dans la série : 3, 6, 12, 24, ?, le prochain nombre est...", answers: ["36", "40", "48", "50"], correct: 2 },
      { question: "Si tous les Krons sont des Pils, et aucun Pil n’est un Mip, alors...", answers: ["Aucun Kron n’est un Mip", "Tous les Mips sont des Krons", "Impossible à savoir", "Certains Mips sont des Krons"], correct: 0 },
      { question: "Complétez : 1, 4, 9, 16, ?, 36", answers: ["20", "24", "25", "30"], correct: 2 },
      { question: "Quel mot est l’intrus ? Lait, Jus, Eau, Pain", answers: ["Lait", "Jus", "Eau", "Pain"], correct: 3 },
      { question: "Suite : 10, 20, 30, 50, 80, ?", answers: ["100", "120", "130", "140"], correct: 2 },
      { question: "Si un rectangle a 4 côtés, combien de côtés ont 3 rectangles ?", answers: ["8", "10", "12", "14"], correct: 2 },
      { question: "Si 2 = 6, 3 = 12, 4 = 20, alors 5 = ?", answers: ["28", "30", "32", "34"], correct: 1 },
      { question: "Quel mot est l’intrus ? Avion, Bateau, Train, Maison", answers: ["Avion", "Bateau", "Train", "Maison"], correct: 3 },
      { question: "Suite : 100, 90, 80, ?", answers: ["60", "65", "70", "75"], correct: 2 },
      { question: "Complétez : A, C, E, G, ?", answers: ["H", "I", "J", "K"], correct: 1 }
    ],
    difficile: [
      { question: "Suite : 1, 1, 2, 3, 5, 8, ?", answers: ["11", "12", "13", "15"], correct: 2 },
      { question: "Si P > Q et Q > R, alors...", answers: ["P > R", "R > P", "Q > P", "Impossible à savoir"], correct: 0 },
      { question: "Suite : 2, 6, 12, 20, 30, ?", answers: ["40", "42", "44", "46"], correct: 1 },
      { question: "Suite : 1, 4, 13, 40, ?", answers: ["81", "121", "122", "123"], correct: 2 },
      { question: "Si tous les A sont B et tous les B sont C, alors...", answers: ["Tous les A sont C", "Tous les C sont A", "Impossible à savoir", "Aucun A n'est C"], correct: 0 },
      { question: "Suite : 5, 10, 20, 40, ?", answers: ["60", "70", "80", "90"], correct: 2 },
      { question: "Si 3x = 18, alors x = ?", answers: ["4", "5", "6", "7"], correct: 2 },
      { question: "Suite : 2, 5, 10, 17, 26, ?", answers: ["35", "36", "37", "38"], correct: 0 },
      { question: "Si A = 2, B = 3, C = A + B, alors C = ?", answers: ["4", "5", "6", "7"], correct: 2 },
      { question: "Suite : 11, 13, 17, 19, ?", answers: ["21", "23", "25", "27"], correct: 1 }
    ]
  },

  calcul: {
    facile: [
      { question: "8 + 5 = ?", answers: ["11", "12", "13", "14"], correct: 2 },
      { question: "6 x 2 = ?", answers: ["10", "12", "14", "16"], correct: 1 },
      { question: "La moitié de 20 est ?", answers: ["5", "10", "15", "20"], correct: 1 },
      { question: "10 - 4 = ?", answers: ["5", "6", "7", "8"], correct: 2 },
      { question: "3 + 7 = ?", answers: ["9", "10", "11", "12"], correct: 1 },
      { question: "9 - 3 = ?", answers: ["5", "6", "7", "8"], correct: 1 },
      { question: "4 x 3 = ?", answers: ["10", "11", "12", "13"], correct: 2 },
      { question: "15 ÷ 3 = ?", answers: ["4", "5", "6", "7"], correct: 1 },
      { question: "20 ÷ 5 = ?", answers: ["2", "3", "4", "5"], correct: 3 },
      { question: "2 + 2 = ?", answers: ["3", "4", "5", "6"], correct: 1 }
    ],
    moyen: [
      { question: "(5 + 3) x 2 = ?", answers: ["16", "12", "10", "14"], correct: 0 },
      { question: "15 ÷ 3 + 4 x 2 = ?", answers: ["13", "11", "10", "14"], correct: 0 },
      { question: "12 x 12 = ?", answers: ["124", "140", "144", "150"], correct: 2 },
      { question: "(8 - 3) x 4 = ?", answers: ["15", "18", "20", "24"], correct: 2 },
      { question: "5² = ?", answers: ["10", "20", "25", "30"], correct: 2 },
      { question: "100 ÷ 4 = ?", answers: ["20", "25", "30", "40"], correct: 1 },
      { question: "7 x 8 = ?", answers: ["54", "55", "56", "57"], correct: 2 },
      { question: "(10 + 6) ÷ 2 = ?", answers: ["7", "8", "9", "10"], correct: 1 },
      { question: "45 ÷ 9 = ?", answers: ["4", "5", "6", "7"], correct: 1 },
      { question: "9² = ?", answers: ["81", "82", "83", "84"], correct: 0 }
    ],
    difficile: [
      { question: "(18 ÷ 3) + (2² x 3) = ?", answers: ["14", "16", "18", "20"], correct: 2 },
      { question: "Résoudre : 5x - 3 = 2x + 9", answers: ["x = 4", "x = 2", "x = 6", "x = 8"], correct: 0 },
      { question: "Résoudre : 3x + 7 = 16", answers: ["x = 2", "x = 3", "x = 4", "x = 5"], correct: 1 },
      { question: "50% de 200 = ?", answers: ["50", "100", "150", "200"], correct: 1 },
      { question: "√81 = ?", answers: ["7", "8", "9", "10"], correct: 2 },
      { question: "Résoudre : 8x = 64", answers: ["x = 6", "x = 7", "x = 8", "x = 9"], correct: 2 },
      { question: "(5³) = ?", answers: ["125", "150", "200", "225"], correct: 0 },
      { question: "(12 ÷ 4) + (6 x 2) = ?", answers: ["14", "15", "16", "17"], correct: 0 },
      { question: "Résoudre : 9x - 4 = 23", answers: ["x = 2", "x = 3", "x = 4", "x = 5"], correct: 2 },
      { question: "Résoudre : 2x² = 50", answers: ["x = 4", "x = 5", "x = 6", "x = 7"], correct: 1 }
    ]
  },

  culture: {
    facile: [
      { question: "Capitale de la France ?", answers: ["Lyon", "Marseille", "Paris", "Toulouse"], correct: 2 },
      { question: "Animal symbole de sagesse ?", answers: ["Lion", "Chouette", "Renard", "Dauphin"], correct: 1 },
      { question: "Plus grand océan du monde ?", answers: ["Atlantique", "Indien", "Arctique", "Pacifique"], correct: 3 },
      { question: "Capitale de l'Espagne ?", answers: ["Madrid", "Barcelone", "Séville", "Valence"], correct: 0 },
      { question: "Combien de jours en février (non bissextile) ?", answers: ["28", "29", "30", "31"], correct: 0 },
      { question: "Couleur du sang ?", answers: ["Rouge", "Bleu", "Vert", "Noir"], correct: 0 },
      { question: "Capitale de l'Allemagne ?", answers: ["Berlin", "Munich", "Francfort", "Hambourg"], correct: 0 },
      { question: "Quel fruit donne le pommier ?", answers: ["Poire", "Pomme", "Pêche", "Prune"], correct: 1 },
      { question: "Quel animal miaule ?", answers: ["Chien", "Chat", "Vache", "Cheval"], correct: 1 },
      { question: "Quel métal attire l’aimant ?", answers: ["Or", "Fer", "Cuivre", "Argent"], correct: 1 }
    ],
    moyen: [
      { question: "Qui a peint la Joconde ?", answers: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Donatello"], correct: 1 },
      { question: "Langue officielle du Brésil ?", answers: ["Espagnol", "Français", "Portugais", "Anglais"], correct: 2 },
      { question: "Ville surnommée 'La Ville Éternelle' ?", answers: ["Rome", "Athènes", "Istanbul", "Paris"], correct: 0 },
      { question: "Combien y a-t-il d'heures dans une journée ?", answers: ["12", "24", "48", "60"], correct: 1 },
      { question: "Quel pays a pour drapeau rouge avec une feuille d'érable ?", answers: ["États-Unis", "Canada", "Mexique", "Australie"], correct: 1 },
      { question: "Qui a inventé l’ampoule électrique ?", answers: ["Tesla", "Edison", "Newton", "Einstein"], correct: 1 },
      { question: "Où se trouve la tour Eiffel ?", answers: ["Paris", "Londres", "Rome", "Berlin"], correct: 0 },
      { question: "Combien de côtés a un hexagone ?", answers: ["5", "6", "7", "8"], correct: 1 },
      { question: "Quel est le plus grand désert du monde ?", answers: ["Sahara", "Gobi", "Kalahari", "Arctique"], correct: 0 },
      { question: "En quelle année a commencé la Première Guerre mondiale ?", answers: ["1912", "1914", "1916", "1918"], correct: 1 }
    ],
    difficile: [
      { question: "Plus long fleuve du monde ?", answers: ["Nil", "Amazone", "Yangzi", "Mississippi"], correct: 1 },
      { question: "Chute du mur de Berlin ?", answers: ["1987", "1989", "1991", "1993"], correct: 1 },
      { question: "Auteur de 'À la recherche du temps perdu' ?", answers: ["Marcel Proust", "Victor Hugo", "Albert Camus", "Émile Zola"], correct: 0 },
      { question: "Capitale de l'Australie ?", answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
      { question: "Qui a proposé la théorie de la relativité ?", answers: ["Einstein", "Newton", "Galilée", "Curie"], correct: 0 },
      { question: "En quelle année a eu lieu la révolution française ?", answers: ["1789", "1790", "1791", "1792"], correct: 0 },
      { question: "Combien de joueurs dans une équipe de football ?", answers: ["9", "10", "11", "12"], correct: 2 },
      { question: "Quel est l’élément chimique de symbole 'O' ?", answers: ["Or", "Oxygène", "Osmium", "Oxalium"], correct: 1 },
      { question: "Quelle planète est surnommée la planète rouge ?", answers: ["Vénus", "Mars", "Jupiter", "Saturne"], correct: 1 },
      { question: "Capitale de l’Islande ?", answers: ["Oslo", "Reykjavik", "Helsinki", "Copenhague"], correct: 1 }
    ]
  }
};


const selectionContainer = document.getElementById('selection-container');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const scoreContainer = document.getElementById('score-container');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');
const restartBtn = document.getElementById('restart-btn');

// ** NOUVEAU ELEMENT TIMER **
const timerEl = document.getElementById('timer');

const soundCorrect = new Audio('son/match.mp3');
const soundIncorrect = new Audio('son/error.mp3');
const soundWin = new Audio('son/win.mp3');

let currentQuestion = 0;
let score = 0;
let currentQuestions = [];
let currentLevel = 'facile';

let timerInterval = null;
let timeLeft = 0;

// Durée selon la difficulté
const levelTimes = {
  facile: 20,
  moyen: 15,
  difficile: 10,
};

startBtn.addEventListener('click', () => {
  const category = document.getElementById('category').value;
  currentLevel = document.getElementById('level').value;
  currentQuestions = quizData[category][currentLevel] || [];
  if (currentQuestions.length === 0) {
    alert("Pas de questions disponibles pour cette sélection.");
    return;
  }
  score = 0;
  currentQuestion = 0;
  selectionContainer.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  scoreContainer.classList.add('hidden');
  loadQuestion();
});

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = levelTimes[currentLevel];
  timerEl.textContent = `Temps restant : ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Temps restant : ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function handleTimeout() {
  // Désactive les boutons et montre la bonne réponse
  const current = currentQuestions[currentQuestion];
  const buttons = answersEl.querySelectorAll('button');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === current.correct) btn.classList.add('correct');
  });
  soundIncorrect.play();

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) {
      loadQuestion();
    } else {
      showScore();
      soundWin.play();
      saveHighScore(score);
    }
  }, 1500);
}

function loadQuestion() {
  clearInterval(timerInterval);
  const current = currentQuestions[currentQuestion];
  questionEl.textContent = current.question;
  answersEl.innerHTML = '';

  current.answers.forEach((answer, i) => {
    const btn = document.createElement('button');
    btn.classList.add('answer-btn');
    btn.textContent = answer;
    btn.addEventListener('click', () => selectAnswer(i));
    answersEl.appendChild(btn);
  });
  startTimer();
}

function selectAnswer(selectedIndex) {
  clearInterval(timerInterval);
  const current = currentQuestions[currentQuestion];
  const buttons = answersEl.querySelectorAll('button');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === current.correct) btn.classList.add('correct');
    if (i === selectedIndex && selectedIndex !== current.correct) btn.classList.add('incorrect');
  });

  if (selectedIndex === current.correct) {
    score++;
    soundCorrect.play();
  } else {
    soundIncorrect.play();
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) {
      loadQuestion();
    } else {
      showScore();
      soundWin.play();
      saveHighScore(score);
    }
  }, 1500);
}

function showScore() {
  clearInterval(timerInterval);
  quizContainer.classList.add('hidden');
  scoreContainer.classList.remove('hidden');
  scoreEl.textContent = score;
  totalEl.textContent = currentQuestions.length;
}

restartBtn.addEventListener('click', () => {
  selectionContainer.classList.remove('hidden');
  scoreContainer.classList.add('hidden');
  clearInterval(timerInterval);
});

// Sauvegarde du meilleur score dans localStorage
function saveHighScore(score) {
  const key = 'score_quiz';
  const highScore = localStorage.getItem(key) || 0;
  if (score > highScore) {
    localStorage.setItem(key, score);
    alert("Nouveau record au Quiz !");
  }
}