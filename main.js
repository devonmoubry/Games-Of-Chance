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
    'use strict';

    this.cards = [];
    var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

    for (var s = 0; s < 4; s++) {
        for (var v = 0; v < 13; v++) {
          var card = new Card(suits[s], values[v]);
          this.cards.push(card);
        }
    }

    this.shuffle = function() {
      // http://stackoverflow.com/a/2450976
        var currentIndex = this.cards.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = this.cards[currentIndex];
          this.cards[currentIndex] = this.cards[randomIndex];
          this.cards[randomIndex] = temporaryValue;
        }
    };

    this.draw = function() {
        return this.cards[Math.floor(Math.random()*this.cards.length)];
    }
}

var newDeck = new Deck();
newDeck.shuffle();
console.log(newDeck.draw());

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
