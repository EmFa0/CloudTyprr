document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("scorediv").style.display = "none";

});



let questions = [
  "Question 1 / 30",
  "Question 2 / 30",
  "Question 3 / 30",
  "Question 4 / 30",
  "Question 5 / 30",
  "Question 6 / 30",
  "Question 7 / 30",
  "Question 8 / 30",
  "Question 9 / 30",
  "Question 10 / 30",
  "Question 11 / 30",
  "Question 12 / 30",
  "Question 13 / 30",
  "Question 14 / 30",
  "Question 14 / 30",
  "Question 15 / 30",
  "Question 16 / 30",
  "Question 16 / 30",
  "Question 17 / 30",
  "Question 18 / 30",
  "Question 19 / 30",
  "Question 20 / 30",
  "Question 21 / 30",
  "Question 22 / 30",
  "Question 23 / 30",
  "Question 24 / 30",
  "Question 25 / 30",
  "Question 26 / 30",
  "Question 27 / 30",
  "Question 28 / 30",
  "Question 29 / 30",
  "Question 30 / 30",
];

let correctAnswers = [
  1, 
  2, 
  3, 
  4, 
  5, 
  6, 
  7, 
  8, 
  9, 
  10, 
  11, 
  12, 
  13, 
  14, 
  15, 
  16, 
  17, 
  18, 
  19, 
  20, 
  21, 
  22, 
  23, 
  24, 
  25, 
  26, 
  27, 
  28,  
  29, 
  30, 
];

let images = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png",
  "./images/7.png",
  "./images/8.png",
  "./images/9.png",
  "./images/10.png",
  "./images/11.png",
  "./images/12.png",
  "./images/13.png",
  "./images/14.png",
  "./images/15.png",
  "./images/16.png",
  "./images/17.png",
  "./images/18.png",
  "./images/19.png",
  "./images/20.png",
  "./images/21.png",
  "./images/22.png",
  "./images/23.png",
  "./images/24.png",
  "./images/25.png",
  "./images/26.png",
  "./images/27.png",
  "./images/28.png",
  "./images/29.png",
  "./images/30.png",
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  document.getElementById("question").innerHTML = questions[currentQuestion];
  document.getElementById("image").src = images[currentQuestion];

  // Skryjeme tlačítko "Check" při zobrazení nové otázky
  document.getElementById("submitBtn").style.display = "block";
  document.getElementById("nextButton").style.display = "none";

  // Vyprázdníme zprávu o výsledku
  document.getElementById("result").innerHTML = "";
}

function checkAndProceed() {
  let selectedAnswer = document.getElementById("answerInput").value;
  let resultText = document.getElementById("result");
  let submitBtn = document.getElementById("submitBtn");
  let nextButton = document.getElementById("nextButton");

  if (selectedAnswer !== "") {
    let selectedValue = parseInt(selectedAnswer);
    if (selectedValue === correctAnswers[currentQuestion]) {
      resultText.innerHTML = "Correct!";
      score++;
    } else {
      resultText.innerHTML = `That's not correct! Correct answer is: ${document.getElementById("answerInput").options[correctAnswers[currentQuestion]].text}`;
    }
    nextButton.style.display = "block";
    submitBtn.style.display = "none"; // Skryje tlačítko "Check"
    document.getElementById("resultContainer").appendChild(resultText); // Přesun textu pod tlačítko "Next"
  } else {
    resultText.innerHTML = "Please select an answer.";
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    document.getElementById("question").innerHTML = `${score}/${questions.length}`;
    document.getElementById("answerInput").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";

    document.getElementById("image").style.display = "none"; // Skryje obrázek
    document.getElementById("question").style.display = "none";
    document.getElementById("whatcloud").style.display = "none";
    document.getElementById("scorediv").style.display = "block";
    document.getElementById("score").innerHTML = `${score}/${questions.length}`;




  }
}



displayQuestion();