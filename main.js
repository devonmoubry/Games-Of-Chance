function renderHTML() {
    $('body').append('<div class="deckOfCardsContainer"></div><div class="diceContainer"></div><div ="probabilitesContainer"></div>');
}

/******************************************************************************/
function Card(suit, value) {

    'use strict';
    this.suit = suit;
    this.value = value;

}

function Deck() {
  console.log('make me a card');
    'use strict'
    this.deck = [];
    var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    //this.shuffle = shuffle;
    //this.draw = draw;
    for (var s = 0; s < 4; s++) {
        for (var v = 0; v < 13; v++) {
          this.deck.push(values[v] + ' of ' + suits[s]);
        }
    }
    return this.deck;
}

var card1 = new Card('Hearts', 'Queen');
console.log(card1);
var newDeck = Deck();
console.log(newDeck);

/******************************************************************************/
function Dice(sides) {
    'use strict';

    this.sides = sides;

    this.roll = function() {
        this.value = Math.ceil(Math.random() * this.sides);
    };

    this.roll();
}

/******************************************************************************/
function getProbabilities() {
    var probabilities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < 1000; i++) {
        var die1 = new Dice(6);
        var die2 = new Dice(6);

        die1.roll();
        die2.roll();

        var sum = die1.value + die2.value;
        probabilities[sum-2]++;
    }

    return probabilities;
}

var results = getProbabilities();
console.log(results);
