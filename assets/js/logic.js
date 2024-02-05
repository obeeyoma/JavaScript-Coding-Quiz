// Reference elements
const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const feedback = document.getElementById("feedback");
const choicesEl = document.getElementById("choices");
const questionScreen = document.getElementById("question-screen");
const questionTitle = document.getElementById("question-title");
const finalScore = document.getElementById("final-score");
const startQuizButton = document.getElementById("start");
const submitButton = document.getElementById("submit");
const timerEl = document.getElementById("timer");
let time = document.getElementById("time");

//Listen for click events on buttons
startQuizButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveHighScore);

// Audio elements
const correctAudio = new Audio("./assets/sfx/correct.wav");
const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");

// Variable to track time
let timeCount = 50;
// Variable to track question count
let questionNumber = 0;
// Variable for timer
let updateTimer;

// Timer function
function countDown() {
  // setinterval
  updateTimer = setInterval(function () {
    timeCount--;
    time.textContent = timeCount;

    if (timeCount == 0 || questionNumber === questions.length) {
      clearInterval(updateTimer);
      endQuiz();
    }
  }, 1000);
}

// Function to populate question screen
function getQuestion() {
  // Set question content
  questionTitle.textContent = questions[questionNumber].title;

  choicesEl.innerHTML = "";
  // Create buttons for choices
  let questionChoices = questions[questionNumber].choices;

  for (let j = 0; j < questionChoices.length; j++) {
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("textContent", "");
    choiceButton.textContent = questions[questionNumber].choices[j];

    choiceButton.addEventListener("click", function (e) {
      checkAnswer(e.target.textContent);
    });

    choicesEl.appendChild(choiceButton);
  }
}
// Function to check answer
function checkAnswer(choice) {
  const currentQuestion = questions[questionNumber];

  if (choice == currentQuestion.answer) {
    feedback.textContent = "Correct!";
    correctAudio.play();
  } else {
    feedback.textContent = "Wrong!";
    incorrectAudio.play();
    if (timeCount > 10) {
      timeCount -= 10;
    }
  }
  showFeedback();

  setTimeout(function () {
    hideFeedback();
    questionNumber++;
    if (questionNumber < questions.length) {
      getQuestion();
    } else {
      endQuiz();
    }
  }, 200);
}

// Function to hide `startScreen`
function hideStartScreen() {
  startScreen.classList.add("hide");
}
// Function to hide `questionScreen`
function hideQuestionScreen() {
  questionScreen.classList.add("hide");
}
// Function to hide `endScreen`
function hideEndScreen() {
  endScreen.classList.add("hide");
}
// Function to hide `feedback`
function hideFeedback() {
  feedback.classList.add("hide");
}
// Function to show `startScreen`
function showStartScreen() {
  startScreen.classList.remove("hide");
}
// Function to show `questionScreen`
function showQuestionScreen() {
  questionScreen.classList.remove("hide");
}
// Function to show `endScreen`
function showEndScreen() {
  endScreen.classList.remove("hide");
}
// Function to show `feedback`
function showFeedback() {
  feedback.classList.remove("hide");
}
