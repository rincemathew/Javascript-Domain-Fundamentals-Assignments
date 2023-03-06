// Given a variable named userHeight, you must throw errors under the following

var read=require('readline-sync')
var userHeight=read.question('User height :')

try {
    if(isNaN(userHeight)){
        throw new Error("notANumberError")
    }
    
    if(userHeight>200){
        throw new Error("HugeHeightError")
    }
    
    if(userHeight<40){
        throw new Error("TinyHeightError")
    }
    console.log("Valid");
} catch (err) {
    console.log(err.message);
}