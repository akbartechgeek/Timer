let duration;
let timerId;
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let alertSound = document.getElementById("alertSound");

function startTimer() {
  duration = parseInt(hoursInput.value) * 3600
    + parseInt(minutesInput.value) * 60
    + parseInt(secondsInput.value);
  
  if (duration <= 0 || isNaN(duration)) {
    alert("Please enter a valid time.");
    return;
  }
  
  startButton.disabled = true;
  hoursInput.disabled = true;
  minutesInput.disabled = true;
  secondsInput.disabled = true;
  
  timerId = setTimeout(function() {
    alertSound.play();
    alert("Time's up!");

    startButton.disabled = false;
    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
  }, duration * 1000);
}

function stopTimer() {
  clearTimeout(timerId);
  alertSound.pause();
  alertSound.currentTime = 0;
  startButton.disabled = false;
  hoursInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
