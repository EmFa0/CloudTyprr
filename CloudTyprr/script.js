let questions = [
  "První otázka: Co je 1+1?",
  "Druhá otázka: Jaké je hlavní město České republiky?",
  "Třetí otázka: Kolik je 2*3?"
];

let answers = [
  "2",
  "Praha",
  "6"
];

let images = [
  "./images/1.png",
  "druhy.png",
  "treti.png"
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  document.getElementById("question").innerHTML = questions[currentQuestion];
  document.getElementById("image").src = images[currentQuestion];
}



function checkAnswer() {
  let userAnswer = document.getElementById("answerInput").value.toLowerCase();
  let resultText = document.getElementById("result");
  let submitBtn = document.getElementById("submitBtn");
  let nextButton = document.getElementById("nextButton");

  if (userAnswer === answers[currentQuestion].toLowerCase()) {
    resultText.innerHTML = "Correct!";
    score++;
    nextButton.style.display = "block";
    submitBtn.disabled = true;
  } else {
    resultText.innerHTML = "That's not correct! Správná odpověď je: " + answers[currentQuestion];
    nextButton.style.display = "block";
    submitBtn.disabled = true;
  }
}

function nextQuestion() {
  let submitBtn = document.getElementById("submitBtn");
  let nextButton = document.getElementById("nextButton");

  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById("answerInput").value = "";
    document.getElementById("result").innerHTML = "";
    nextButton.style.display = "none";
    submitBtn.disabled = false; // Znovu aktivovat tlačítko "Odeslat"
    displayQuestion();
  } else {
    document.getElementById("question").innerHTML = "Konec kvízu. Skóre: " + score + "/" + questions.length;
    document.getElementById("answerInput").style.display = "none";
    document.getElementById("result").style.display = "none";
    nextButton.style.display = "none";
    submitBtn.style.display = "none";
  }
}


displayQuestion();





let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});
