// function renderHTML() {
//     $('body').append('<div class="deckOfCardsContainer"></div><div class="diceContainer"></div><div ="probabilitesContainer"></div>');
// }
//
// /******************************************************************************/
// function Card(suit, value) {
//
//     'use strict';
//     this.suit = suit;
//     this.value = value;
//
// }
//
// function Deck() {
//
//     'use strict'
//     this.deck = new Array();
//
//     this.makeDeck = makeDeck;
//
// }
//
// function makeDeck() {
//
//     var suits = new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace");
//     var values = new Array("Hearts", "Spades", "Clubs", "Diamonds");
//     var deck = new Array(52);
//
// }
//
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
  console.log('hell yes');
  // var die1 = die.roll(6);
  // var die2 = die.roll(6);
  // var sum = die1 + die2;
  // //var probArray = [];
  // return die1 + ',' + die2 + ',' + sum;
  // //var sumOf2Count = 0;
  // // var sumOf3;
  // // var sumOf4;
  // // var sumOf5;
  // // var sumOf6;
  // // var sumOf7;
  // // var sumOf8;
  // // var sumOf9;
  // // var sumOf10;
  // // var sumOf11;
  // // var sumOf12;
  // //
  // for (var i = 0; i < 1000; i++) {
  //   console.log(sum);
  // }
}

// var results = getProbabilities();
// console.log(results);
