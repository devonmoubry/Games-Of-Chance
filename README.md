WHAT IS IT?
-----------
This is an assignment for TIY Front End Spring 2017.

/**********Explorer Mode**********/

Create a constructor that builds objects representing generic playing cards. A playing card should keep track of its suit and value (Ace, 2, 3, ... Jack, Queen, King).

Create a constructor that builds objects representing six sided dice. A die should keep track of the current value (what side is up, a number between 1-6) and have a roll method that will simulate rolling the die. Rolling the die should change the current value of the die.

Create a function called getProbabilities (it does NOT live on the constructor) that will simulate rolling two dice 1000 times. The function should return an array that shows the number of times the sum of the two die added up to 2, 3, 4, ... 12. For example:

var result = getProbabilities();
console.log(result);
// Shows:
// [
//    30,
//    55,
//    80,
//    110,
//    140,
//    170,
//    140,
//    110,
//    80,
//    55,
//    30,
// ]
This above results show that the number two (least possible sum) was rolled 30 times, the number three was rolled 55 times, the number 4 was rolled 80 times, etc. Your exact results will vary, with each run of the function, but the general distribution should be the same.

WHAT TO SUBMIT
A link to a repository containing at least:
index.html
main.js
In the Notes section, include a link to your project live on the internet
As always, in the Notes section, include your confidence (1-5) and if you are anything below 5, briefly explain why.

/**********Adventurer Mode**********/

Create a new constructor that represents an entire deck of cards (not just one). A Deck should contain exactly one of each possible card in a standard 52 card deck, and should have a shuffle method that randomly re-arranges the order of the cards in the deck. It should also have a draw method that removes the card at the top of the deck and returns it.

/**********Epic Mode**********/

Create a visual display of the top card of your deck in your browser
Create a game of black jack using your deck. You may wish to create constructors for the Game, and a player's Hand.

/**********Power Level 9000**********/

Allow multiple players to play the game together from different computers by persisting the data to tiny-pizza-server.
Create a GUI for your black jack game that includes card animations.
