let timerInterval;
let timerValue = 0;
let isRunning = false;

function updateDisplay() {
  let hours = Math.floor(timerValue / 3600);
  let minutes = Math.floor((timerValue % 3600) / 60);
  let seconds = timerValue % 60; 
  document.getElementById("display").innerHTML = `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      timerValue++;
      updateDisplay();
    }, 1000);
  }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
      }
  updateDisplay();
}

function resetTimer() {
    timerValue = 0;
    isRunning = false;
    clearInterval(timerInterval);
    updateDisplay();
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);

updateDisplay();
