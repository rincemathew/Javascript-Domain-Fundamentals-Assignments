// Write a myFilter function that takes 2 parameters: myArray and callback. Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as its parameter and returns a boolean true if the sum of the number is even or   false if the sum of the number  is odd.

function isEven(Array){
    let sum=0
    for(let i=0; i<Array.length; i++){
        sum+=Array[i]
    }
    return sum
}

function myFilter(myArray,callback){
    var result=callback(myArray)
    return result
}

let arr=[1,2,3,4,5]
console.log(myFilter(arr,isEven));