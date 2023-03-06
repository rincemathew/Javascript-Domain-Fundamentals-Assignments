// Write a program to multiply the adjacent values of an array and store it in an another array

var read=require('readline-sync')
var s=read.question('Enter the limit ?')
var a=[]
var c=[]
for(var i=0;i<s;i++){
    a[i]=parseInt(read.question('Enter the values : '))
}
console.log(a)
for(var i=0;i<s-1;i++){
    c[i]=a[i]*a[i+1]
}
console.log(c)