// Write a program to find the number of even numbers in an array

var read = require('readline-sync')

var count = read.question('enter count ')

array = []

for(i= 0; i< count; i++){
    array[i] = read.question('array position '+i+" is ")
}

array = array.filter((value,index)=>{return value%2==0})



console.log(array.length)