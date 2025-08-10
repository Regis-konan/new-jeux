const quizData = {
  logique: {
    facile: [
      {
        question: "Complétez la suite logique : 1, 3, 5, 7, ?",
        answers: ["8", "9", "10", "11"],
        correct: 1,
      },
      {
        question: "Quel mot est l’intrus ? Chien, Chat, Voiture, Oiseau",
        answers: ["Chien", "Chat", "Voiture", "Oiseau"],
        correct: 2,
      }
    ],
    moyen: [
      {
        question: "Si tous les Zogs sont des Blips, et que certains Blips sont des Trups, alors...",
        answers: [
          "Tous les Zogs sont des Trups",
          "Certains Zogs sont des Trups",
          "Impossible de savoir",
          "Tous les Trups sont des Zogs"
        ],
        correct: 2,
      }
    ],
    difficile: [
      {
        question: "Trouvez l’élément manquant : 4, 9, 16, 25, ?",
        answers: ["36", "30", "40", "48"],
        correct: 0,
      }
    ]
  },

  calcul: {
    facile: [
      {
        question: "Combien font 8 + 5 ?",
        answers: ["11", "12", "13", "14"],
        correct: 2,
      },
      {
        question: "Combien font 6 x 2 ?",
        answers: ["10", "12", "14", "16"],
        correct: 1,
      }
    ],
    moyen: [
      {
        question: "Quel est le résultat de (5 + 3) x 2 ?",
        answers: ["16", "12", "10", "14"],
        correct: 0,
      }
    ],
    difficile: [
      {
        question: "Quel est le résultat de : (18 ÷ 3) + (2² x 3) ?",
        answers: ["14", "16", "18", "20"],
        correct: 2,
      }
    ]
  },

 culture: {
  facile: [
    {
      question: "Quelle est la capitale de la France ?",
      answers: ["Lyon", "Marseille", "Paris", "Toulouse"],
      correct: 2,
    },
    {
      question: "Quel animal est symbole de sagesse ?",
      answers: ["Le lion", "La chouette", "Le renard", "Le dauphin"],
      correct: 1,
    },
    {
      question: "Quel est le plus grand océan du monde ?",
      answers: ["Atlantique", "Indien", "Arctique", "Pacifique"],
      correct: 3,
    }
  ],
  moyen: [
    {
      question: "Qui a peint la Joconde ?",
      answers: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Donatello"],
      correct: 1,
    },
    {
      question: "Quelle est la langue officielle du Brésil ?",
      answers: ["Espagnol", "Français", "Portugais", "Anglais"],
      correct: 2,
    },
    {
      question: "Quelle ville est surnommée 'La Ville Éternelle' ?",
      answers: ["Rome", "Athènes", "Istanbul", "Paris"],
      correct: 0,
    }
  ],
  difficile: [
    {
      question: "Quel est le plus long fleuve du monde ?",
      answers: ["Nil", "Amazon", "Yangzi", "Mississippi"],
      correct: 1,
    },
    {
      question: "En quelle année a eu lieu la chute du mur de Berlin ?",
      answers: ["1987", "1989", "1991", "1993"],
      correct: 1,
    },
    {
      question: "Qui a écrit 'À la recherche du temps perdu' ?",
      answers: [
        "Marcel Proust",
        "Victor Hugo",
        "Albert Camus",
        "Émile Zola"
      ],
      correct: 0,
    }
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

// Sons
const soundCorrect = new Audio('son/match.mp3');
const soundIncorrect = new Audio('son/error.mp3');
const soundWin = new Audio('son/win.mp3');

let currentQuestion = 0;
let score = 0;
let currentQuestions = [];

startBtn.addEventListener('click', () => {
  const category = document.getElementById('category').value;
  const level = document.getElementById('level').value;
  currentQuestions = quizData[category][level] || [];
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

function loadQuestion() {
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
}

function selectAnswer(selectedIndex) {
  const current = currentQuestions[currentQuestion];
  const buttons = answersEl.querySelectorAll('button');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === current.correct) {
      btn.classList.add('correct');
    }
    if (i === selectedIndex && selectedIndex !== current.correct) {
      btn.classList.add('incorrect');
    }
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
    }
  }, 1500);
}

function showScore() {
  quizContainer.classList.add('hidden');
  scoreContainer.classList.remove('hidden');
  scoreEl.textContent = score;
  totalEl.textContent = currentQuestions.length;
}

restartBtn.addEventListener('click', () => {
  selectionContainer.classList.remove('hidden');
  scoreContainer.classList.add('hidden');
});