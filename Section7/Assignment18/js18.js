var girls = [
    {picture: "https://assets.codepen.io/6060109/tinder-girl-1.png"},
    {picture: "https://assets.codepen.io/6060109/tinder-girl-2.png"},
    {picture: "https://assets.codepen.io/6060109/tinder-girl-3.png"},
  ];
  
  var feed = document.querySelector('.feed');
  
  for (let girl of girls) {
    feed.innerHTML += `
      <img src=${girl.picture}>
    `
  }
  
  // [1] querySelect green heart button
  var greenButton = document.querySelector('.green-heart')
  // [2] addEventListener to click
  // [3] write a function for your listener, that will set display flex on the ".got-match" div
  greenButton.addEventListener('click', function(){
    var match = document.querySelector('.got-match');
    match.style.display = 'flex';
  })

  // [4] Do [1 - 3] again for the ".keep-swiping" button , to set display none on ".got-match"
  var swipeButton = document.querySelector('.keep-swiping');
  swipeButton.addEventListener('click', swipe);
  
  function swipe(){
    var swipe = document.querySelector('.got-match');
    swipe.style.display = 'none';
  }