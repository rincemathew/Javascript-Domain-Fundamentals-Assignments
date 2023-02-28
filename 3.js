// Write a program to find the simple interest.


// Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

var read = require('readline-sync')


var principleAmount = parseInt(read.question('enter principle amount   ')) 
var interstRate = parseFloat(read.question('enter intrest rate   ')) 
var numberOfYears = parseFloat(read.question('enter number of years   ')) 
var simpleIntrest = (principleAmount * interstRate * numberOfYears)/100
console.log(simpleIntrest)

