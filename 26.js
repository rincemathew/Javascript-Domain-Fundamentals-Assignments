// Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console.

var read=require('readline-sync')
let my_string=read.question("Enter a string: ")
// let my_string=Number(read.question("Enter a string: "))
 try{
    let string_rev=my_string.split('').reverse().join('');
    console.log(`\nReversed String is: ${string_rev}`);
 }catch(err){
    console.log(`\nErr: ${err.message}`);
 }finally{
    console.log(`\nType of entered string is ${typeof my_string}`);
 }