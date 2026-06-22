let animal = "dog";
let city = "Manchester";
let country = "England";

function checkAnswer() {
  let answer = document.getElementById("answer").value.toLowerCase();
  if (answer === animal || answer === city || answer === country) {
    alert("Correct!");
  } else {
    alert("Wrong! Try again.");
  }
}
