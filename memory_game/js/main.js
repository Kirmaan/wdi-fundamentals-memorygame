let cards = ["queen","queen","king","king"];
let cardsInPlay = [];
var cardOne
cardOne = cards[1];
cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardOne);
var cardTwo;
cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry,try again.");
  }
}
