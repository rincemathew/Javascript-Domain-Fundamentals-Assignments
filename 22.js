// Write a program to add the values of two 2D arrays

var read = require('readline-sync')
var a = []
var b=[]
var c=[]
var row
var n = parseInt(read.question('Enter the limit : '))
function Main() {
    getarray(a,n)
    getarray(b,n)
    addarray(a,b,c,n)
    displayarray(c,row)
}
function getarray(a,n) {
    console.log('Enter the numbers : ')
    for (var i = 0; i < n; i++) {
        a[i] = []
        for (var j = 0; j < n; j++) {
            a[i][j] = parseInt(read.question(" "))
        }
    } console.log(a)
}
function addarray(a,b,c,n){
    for(var i=0;i<n;i++){
        c[i]=[]
        for(var j=0;j<n;j++){
            c[i][j]=a[i][j]+b[i][j]
        }
    }
}

function displayarray(c,row){
    for(var i=0;i<n;i++){
        row=" "
        for(var j=0;j<n;j++){
            row+=c[i][j]+"  "
        }
        console.log(row)
    }
}
Main()
