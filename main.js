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

    'use strict'
    this.deck = new Array();

    this.makeDeck = makeDeck;

}

function makeDeck() {

    var suits = new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace");
    var values = new Array("Hearts", "Spades", "Clubs", "Diamonds");
    var deck = new Array(52);

}

/******************************************************************************/
function Dice(value) {

    'use strict';
    this.value = value;
    this.roll = function() {

        return Math.ceil(Math.random() * this.value);

    };

}

var die = new Dice(6);

/******************************************************************************/
function getProbabilities() {
    var countSum2 = 0;
    var countSum3 = 0;
    var countSum4 = 0;
    var countSum5 = 0;
    var countSum6 = 0;
    var countSum7 = 0;
    var countSum8 = 0;
    var countSum9 = 0;
    var countSum10 = 0;
    var countSum11 = 0;
    var countSum12 = 0;

    for (var i = 0; i < 1000; i++) {
        var die1 = die.roll(6);
        var die2 = die.roll(6);
        var sum = die1 + die2;
        if (sum === 2) {
            countSum2++;
        } else if (sum === 3) {
            countSum3++;
        } else if (sum === 4) {
            countSum4++;
        } else if (sum === 5) {
            countSum5++;
        } else if (sum === 6) {
            countSum6++;
        } else if (sum === 7) {
            countSum7++;
        } else if (sum === 8) {
            countSum8++;
        } else if (sum === 9) {
            countSum9++;
        } else if (sum === 10) {
            countSum10++;
        } else if (sum === 11) {
            countSum11++;
        } else if (sum === 12) {
            countSum12++;
        }
    }
    var probArray = [countSum2, countSum3, countSum4, countSum5, countSum6, countSum7, countSum8, countSum9, countSum10, countSum11, countSum12];
    return probArray;
}

var results = getProbabilities();
console.log(results);
