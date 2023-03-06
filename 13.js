// Write a program to identify whether a string is a palindrome or not

var read=require('readline-sync')
var string1=read.question('Enter a string: ')
var n=string1.length
flag=0;
for(var i=0;i<=n/2;i++){
    if(string1[i]!=string1[n-i-1]){
        flag=1;
        break;
    }
}
    
if(flag==1){
    console.log("Not a Palindrome")
}
else{
    console.log(" Palindrome")
}