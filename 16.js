// Write a program to check whether a given number is prime or not

var read=require('readline-sync')
var num=read.question('Enter the number: ')
var flag=0
for(var i=2;i<=num/2;i++){
    if(num%i==0){
        flag=1
        break;
    }
}
if(flag==0){
    console.log("Its a Prime")
}
else{
    console.log("Its not a Prime")
}