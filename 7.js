// Write a program to print the multiplication table of given numbers.

var read = require('readline-sync')
var input = parseInt(read.question('enter a number'))

for(i=1; i<=10; i++) {
    console.log(i+" * "+input+" = "+i*input)
}