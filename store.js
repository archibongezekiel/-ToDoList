"use strict";

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
let SecretNumber = Number(document.querySelector("#input").value);

let scoreCount = 20;

let displayMessage = function (message) {
  document.querySelector(".guess").innerText = message;
};

document.querySelector(".button").addEventListener("click", () => {
  let SecretNumber = Number(document.querySelector("#input").value);
  //when prayer doesn't enter number
  if (!SecretNumber) {
    displayMessage("❗️ No Number");
  }
  //when prayer win
  else if (SecretNumber === randomNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").innerText = SecretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(166, 241, 53)";
    document.querySelector(".highscore").innerText = scoreCount;
  }
  // when guess number is too high
  else if (SecretNumber !== randomNumber) {
    if (scoreCount > 0) {
      SecretNumber > randomNumber
        ? displayMessage("📈 Too High!")
        : displayMessage("📉 Too Low");
    }

    scoreCount--;
    document.querySelector(".score").innerText = scoreCount;
  } else {
    displayMessage("Game Over");
  }
});
document.querySelector(".again").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = " white";
  document.querySelector("#input").value = "";
  document.querySelector(".number").innerText = "?";
  document.querySelector(".guess").innerText = "Start Guessing....";
  document.querySelector(".highscore").innerText = 0;
  document.querySelector(".score").innerText = 0;
});
