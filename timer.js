const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
const FULL_DASH_ARRAY = 283;

const COLOR_CODES = {
  info: {
    color: "blue",
  },
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

const prova = document.getElementById("app");
const prova2 = document.querySelector("header");
prova2.appendChild(prova);

/*document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
    <span class = 'reman'>REMAINING</span>
    <span class="text">SECONDS</span>
  </svg>
  <span id="base-timer-label" class="base-timer__label"> ${formatTime(
    timeLeft
  )}</span>
</div>
`; */

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
    if (timeLeft === 0) {
      onTimesUp(); //FERMA IL TIMER QUANDO ARRIVA A 0
      // resetTimer();
      currentQuestionIndex++;
      indiceQuestion();
      incorrectAnswers++;
      showQuestion(questions[currentQuestionIndex]); //VA AVANTI ALLA PROSSIMA DOMANDA SE IL TIMER SCADE DA RIGA 153 A RIGA 156
      resetTimer();
    }
  }, 1000);
}

//RESET TIMER
function resetTimer() {
  timeLeft = TIME_LIMIT;
  timePassed = 0;
  onTimesUp();
  startTimer();
}

function formatTime(time) {
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `${seconds}`;
  }

  return ` ${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { info } = COLOR_CODES;
  document
    .getElementById("base-timer-path-remaining")
    .classList.add(info.color);
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

// FUNZIONE PER LE DOMANDE

const questionContainer = document.getElementById("containerTitles");
const answerButtons = document.getElementById("colum");
const questionNum = document.getElementById("question-num");

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const startQuiz = function () {
  showQuestion(questions[currentQuestionIndex]);
};

const showQuestion = function (currentQuestion) {
  questionContainer.innerText = currentQuestion.question;
  answerButtons.innerHTML = "";
  if (currentQuestion.type === "multiple") {
    currentQuestion.incorrect_answers.push(currentQuestion.correct_answer);
    currentQuestion.incorrect_answers.sort(() => Math.random() - 0.5);
    currentQuestion.incorrect_answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.classList.add("button");
      button.addEventListener("click", () =>
        selectAnswer(currentQuestion.correct_answer === answer, button)
      );
      answerButtons.appendChild(button);
    });
  } else if (currentQuestion.type === "boolean") {
    const trueButton = document.createElement("button");
    trueButton.innerText = "True";
    trueButton.classList.add("button");
    trueButton.addEventListener("click", () =>
      selectAnswer(currentQuestion.correct_answer === "True", trueButton)
    );
    answerButtons.appendChild(trueButton);

    const falseButton = document.createElement("button");
    falseButton.innerText = "False";
    falseButton.classList.add("button");
    falseButton.addEventListener("click", () =>
      selectAnswer(currentQuestion.correct_answer === "False", falseButton)
    );
    answerButtons.appendChild(falseButton);
  }
};

const selectAnswer = function (correct, button) {
  if (correct) {
    button.classList.add("correct");
    correctAnswers++;
  } else {
    button.classList.add("incorrect");
    incorrectAnswers++;
  }

  disableButtons();

  resetTimer(); //RICHIAMO FUNZIONE RESET TIMER

  setTimeout(() => {
    currentQuestionIndex++;
    indiceQuestion();
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
    }
  }, 1000);

  //PASSA ALLA PAGINA DEI RISULTATI
  if (currentQuestionIndex === questions.length - 1) {
    onTimesUp(); //prova
    window.location.href = "Result.html";
    generateResults();
  }
};

const disableButtons = function () {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

startQuiz();

//FUNZIONE INDICE QUESTION
const indiceQuestion = function () {
  const question = document.querySelector(".indexDomanda");
  question.innerText = currentQuestionIndex + 1 + "/" + questions.length;
};
indiceQuestion();

//RESULTS ZONE

//GENERALE
const generateResults = function () {
  const circle = document.getElementById("base-chart__path-elapsed");
  const pathRemaining = document.getElementById("base-chart-path-remaining");
  //REINDIRIZZO ALLA PROSSIMA PAGINA AL CLICK DEL BOTTONE
  const rateButton = document.getElementById("rate-us-button");
  rateButton.onclick = () => {
    window.location.href = "Feedback.html";
  };

  //COLORE DELLE RISPOSTE CORRETTE DEL GRAFICO, HO FATTO UN OGGETTO PERCHè ALL'INIZIO PENSAVO SERVISSERO PIù COLORI
  const colorCodes = {
    info: {
      correctColor: "#00FFFF",
    },
  };

  const d = 200; //

  //IMPORTANTE! MOSTRA PROGRESSO DEL GRAFICO
  pathRemaining.style.strokeDasharray = `${d} 283`;
  pathRemaining.style.stroke = colorCodes.info.correctColor;

  //2.83 EQUIVALE ALL'1% DI 283

  //CODICE QUANTE DOMANDE SONO STATE RISPOSTE GIUSTE E QUANTE SBAGLIATE (es.4/6 giuste)

  //CODICE PER CALCOLARE LA PERCENTUALE DI RISPOSTE GIUSTE E DI RISPOSTE GIUSTE E SBAGLIATE
  //calcolare la percentuale in base a quante domande ci sono nell'array
};
