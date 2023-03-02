// Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.

var read = require('readline-sync')
var input = parseInt(read.question("enter a number  "))

switch(input){
    case 1:
        result='Sunday';
        break;
    case 2:
        result='Monday';
        break;
    case 3:
        result='Tuesday'
        break;
    case 4:
        result='Wednesday'
        break;
    case 5:
        result='Tursday'
        break;
    case 6:
        result='Friday'
        break;
    case 7:
        result='Saturday'
        break;
    default:
        result='Invalid Entry'
}

console.log(result)