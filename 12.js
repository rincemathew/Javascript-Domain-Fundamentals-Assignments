// Write a program to sort an array in descending order
var read = require('readline-sync')

var count = read.question('enter count ')

array = []

for(i= 0; i< count; i++){
    array[i] = read.question('array position '+i+" is ")
}

var array=array.sort((a,b) =>
{  
  return a-b;  
});  

console.log(array)