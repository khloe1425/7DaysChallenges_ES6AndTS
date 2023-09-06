// var joinButton = document.querySelector(".join-button");
// joinButton.addEventListener("click", goToSecondState);

// function goToSecondState() {
//   /*
//     When button is clicked...
//       1. Hide .left & .panels-stage-1 (display "none")
//       2. for .right set width to 100%
//       3. for .panels-stage-2 set display to block
//     */

//   // Hint: Follow this pattern!
//   var left = document.querySelector(".left");
//   left.style.display = "none";

//   var panelsOne = document.querySelector(".panels-stage-1");
//   left.style.display = "none";

//   var right = document.querySelector(".right");
//   right.style.width = "100%";

//   var panelsTwo = document.querySelector(".panels-stage-2");
//   panelsTwo.style.display = "block";
// }
const joinButton = document.querySelector(".join-button");

function goToSecondState() {
  const left = document.querySelector(".left");
  left.style.display = "none";

  const panelsOne = document.querySelector(".panels-stage-1");
  panelsOne.style.display = "none";

  const right = document.querySelector(".right");
  right.style.width = "100%";

  const panelsTwo = document.querySelector(".panels-stage-2");
  panelsTwo.style.display = "block";
}

joinButton.addEventListener("click", goToSecondState);
