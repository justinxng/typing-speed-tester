const quotes = [
  "the quick brown fox jumps over the lazy dog.",
  "typing tests are fun when you’re winning.",
  "hello world.",
  "Alex Ge is a bum lol",
  "media arts is the best class ever..",
];

let startTime, endTime;
let quote = document.getElementById("quote");
let input = document.getElementById("input");
let results = document.getElementById("results");

function loadQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = random;
}

function startTyping() {
  if (!startTime) startTime = new Date();
  
  const typed = input.value;
  if (typed === quote.textContent) {
    endTime = new Date();
    let totalTime = (endTime - startTime) / 1000; // seconds
    let words = typed.trim().split(" ").length;
    let wpm = Math.round((words / totalTime) * 60);

    let accuracy = getAccuracy(typed, quote.textContent);
    results.innerHTML = `✅ WPM: <strong>${wpm}</strong><br>🎯 Accuracy: <strong>${accuracy}%</strong>`;
    input.disabled = true;
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
