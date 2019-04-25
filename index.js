var randomNumber1 = Math.random()*6 + 1;          // 1-6
var randomNumber2 = Math.random()*6 + 1;          // 1-6

// Round the number
randomNumber1 = Math.floor(randomNumber1);
randomNumber2 = Math.floor(randomNumber2);

// define img source
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Change dice images randomly

// document.querySelector(".dice .img1").src = randomImageSource1;
// document.querySelector(".dice .img2").src = randomImageSource2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Decide who won
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "Draw! 🍻";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
