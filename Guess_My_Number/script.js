"use strict";

//-->handling click events

let secNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess, typeof guess);

  //no input
  if (guess === null || guess === "") {
    document.querySelector(".message").textContent = "No number entered! 🚫";
  }

  //player wins
  else if (guess == secNum) {
    document.querySelector(".message").textContent = "Correct Number! 🎉";

    document.querySelector(".number").textContent = secNum;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //guess is too high
  else if (guess > secNum) {
    score > 1
      ? (document.querySelector(".message").textContent = "Too High! 📈",
        score--,
        document.querySelector(".score").textContent = score)
      : (document.querySelector(".message").textContent = "You lost the game! 💥",
        document.querySelector(".score").textContent = 0);
  }

  //guess is too low
  else if (guess < secNum) {
    score > 1
      ? (document.querySelector(".message").textContent = "Too Low! 📉",
        score--,
        document.querySelector(".score").textContent = score)
      : (document.querySelector(".message").textContent = "You lost the game! 💥",
        document.querySelector(".score").textContent = 0);
  }
});

//implementing the again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secNum = Math.floor(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});