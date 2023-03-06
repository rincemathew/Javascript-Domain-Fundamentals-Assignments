// Write a program to accept an array and display it on the console using functions

var read=require('readline-sync')

main()
function main(){
    var a=[]
    var n=read.question("Enter the size : ")
    getarray(a,n)
    displayarray(a)
}
function getarray(a,n){
    for(i=0;i<n;i++){
        a[i]=parseInt(read.question(' '))
    }
}
function displayarray(a){
    console.log(a)

}