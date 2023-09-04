let clockText = document.querySelector(".clock h1");

setInterval(() => {
  let now = new Date();
  let hoursToMidnight = 24 - now.getHours();
  let minutes = 59 - now.getMinutes();
  let seconds = 59 - now.getSeconds();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  clockText.textContent = `${hoursToMidnight}:${minutes}:${seconds}`;
}, 1000);
