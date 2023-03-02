// Accept a char input from the user and display it on the console.

var read = require('readline-sync');

var character = read.question('type a char  ');

if (character.length == 1) {
  console.log(character+ " its a character")
} else {
  console.log('not a character')
}