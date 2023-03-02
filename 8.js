// Write a program to find the sum of all the odd numbers for a given limit

var read = require('readline-sync')
var limit = parseInt(read.question('enter a number'))
let sum = 0

for(i=1; i<=limit; i++) {
    if(i%2==0){

    } else {
      sum= sum+i
    }
}
console.log(sum)