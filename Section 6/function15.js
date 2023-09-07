const joinButton = document.querySelector(".join-button");
joinButton.addEventListener("click", goToSecondState);

// [1] Add code to "Pay Now" Button that goes to the THIRD state
const confirmButton = document.querySelector(".confirm-button");
confirmButton.addEventListener("click", goToThirdState);

// [2] Add code to "Cancel" Button that goes to FIRST state

const cancelButton = document.querySelector(".cancel-button");
confirmButton.addEventListener("click", goToFirstState);

// Code below here, read-only
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const panelsOne = document.querySelector(".panels-stage-1");
const panelsTwo = document.querySelector(".panels-stage-2");
const panelsThree = document.querySelector(".panels-stage-3");

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
