var girls = [
  { picture: "https://assets.codepen.io/6060109/tinder-girl-1.png" },
  { picture: "https://assets.codepen.io/6060109/tinder-girl-2.png" },
  { picture: "https://assets.codepen.io/6060109/tinder-girl-3.png" },
];

// [1] Select .feed
var feed = document.querySelector(".feed");

// [2] write a "for of" loop
for (const girl of girls) {
  // [3] add each img to innerHTNL of .feed
  const newGirl = `<img src=${girl.picture}>`;
  feed.innerHTML += newGirl;
}
