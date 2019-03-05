// Randomly Generated Nunmber between 1 and 6
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomImage1 = './images/dice' + randomNumber1 + '.png';
var randomImage2 = './images/dice' + randomNumber2 + '.png';

if (randomNumber1 === randomNumber2) {
  var winningPlayer = 'Draw';
} else if (randomNumber1 > randomNumber2) {
  winningPlayer = '🚩 Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
  winningPlayer = 'Player 2 Wins! 🚩';
} else {
  winningPlayer = 'No winners here!';
}
