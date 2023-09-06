var joinButton = document.querySelector(".join-button");
joinButton.addEventListener("click", goToSecondState);

// [1] Add code to "Pay Now" Button that goes to the THIRD state
var confirmButton = document.querySelector(".confirm-button");
confirmButton.addEventListener("click", goToThirdState);

// [2] Add code to "Cancel" Button that goes to FIRST state

var cancelButton = document.querySelector(".cancel-button");
confirmButton.addEventListener("click", goToFirstState);

// Code below here, read-only
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var panelsOne = document.querySelector(".panels-stage-1");
var panelsTwo = document.querySelector(".panels-stage-2");
var panelsThree = document.querySelector(".panels-stage-3");

function goToFirstState() {
  left.style.display = "block";
  right.style.width = "50%";
  panelsOne.style.display = "block";
  panelsTwo.style.display = "none";
}

function goToSecondState() {
  left.style.display = "none";
  right.style.width = "100%";
  panelsOne.style.display = "none";
  panelsTwo.style.display = "block";
}

function goToThirdState() {
  panelsTwo.style.display = "none";
  panelsThree.style.display = "block";
}
