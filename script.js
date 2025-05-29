const quotes = [
  "the quick brown fox jumps over the lazy dog",
  "typing tests are fun when you’re winning",
  "hello world",
  "alex ge is a bum lol",
  "media arts is the best class ever",
  "stmc is so tuff",
  "mango mango mango mango", 
];

let startTime, endTime;
let quote = document.getElementById("quote");
let input = document.getElementById("input");
let results = document.getElementById("results");

function loadQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = random;
  input.focus();
}

function startTyping() {
  if (!startTime) startTime = new Date();
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent new line
    checkResult();
  }
});

function checkResult() {
  const typed = input.value.trim();
  const target = quote.textContent.trim();

  if (typed === target) {
    endTime = new Date();
    let totalTime = (endTime - startTime) / 1000;
    let words = typed.split(" ").length;
    let wpm = Math.round((words / totalTime) * 60);
    let accuracy = getAccuracy(typed, target);

    results.innerHTML = `✅ WPM: <strong>${wpm}</strong><br>🎯 Accuracy: <strong>${accuracy}%</strong>`;
    input.disabled = true;
  } else {
    results.innerHTML = `❌ the text dont match up, try again`;
  }
}

function getAccuracy(typed, original) {
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === original[i]) correct++;
  }
  return Math.round((correct / original.length) * 100);
}

function restart() {
  input.disabled = false;
  input.value = "";
  results.innerHTML = "";
  startTime = null;
  loadQuote();
}

loadQuote();
