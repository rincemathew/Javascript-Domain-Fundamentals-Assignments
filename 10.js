// Write a program to interchange the values of two arrays.

var read = require('readline-sync')

var count = read.question('enter count ')
var firstArray = []
var secondArray = []

for(i= 0; i< count; i++){
    firstArray[i] = read.question('first array position '+i+" is ")
}
for(i= 0; i< count; i++){
    secondArray[i] = read.question('second array position '+i+" is ")
}

swap = firstArray
firstArray = secondArray
secondArray = swap

console.log(firstArray+ " " + secondArray)