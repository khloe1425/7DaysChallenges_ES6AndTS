
const joinButton = document.querySelector(".join-button");

function goToSecondState() {
  var left = document.querySelector(".left");
  left.style.display = "none";

  const panel1 = document.querySelector(".panels-stage-1");
  panel1.style.display = "none";

  var width = document.querySelector(".right");
  width.style.width = "100%";

  const panel2 = document.querySelector(".panels-stage-2");
  panel2.style.display = "block";
}

joinButton.addEventListener("click", goToSecondState);
