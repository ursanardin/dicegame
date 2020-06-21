var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImage = ("images/dice" + randomNumber1 + ".png");
var randomImage2 = ("images/dice" + randomNumber2 + ".png");

document.querySelector(".img1").src = randomImage;
document.querySelector(".img2").src = randomImage2;

window.onload = function() {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    sessionStorage.removeItem("reloading");
    refresh();
  }
}

function reloadPage() {
  sessionStorage.setItem("reloading", "true");
  document.location.reload();
}

function refresh() {

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw"
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🎈Player 1 Wins!"
  } else {
    document.querySelector("h1").innerText = "Player 2 Wins! 🎈"
  }
}
