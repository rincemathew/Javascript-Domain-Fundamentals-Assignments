// Write a program to add to two dimensional arrays

var read=require('readline-sync')
var a=[]
var b=[]
var c=[]
var row=" "
let r=read.question('Enter the row : ')
let col=read.question('Enter the Colcumn : ')
console.log("Enter the numbers : ")
for(var i=0;i<r;i++){
    a[i]=[]
    for(var j=0;j<col;j++){
        a[i][j]=parseInt(read.question(''))
        
    }
}
console.log("Enter the next numbers : ")
for(var i=0;i<r;i++){
    b[i]=[]
    for(var j=0;j<col;j++){
        b[i][j]=parseInt(read.question(''))
        
    }
}
for(i=0;i<r;i++){
    c[i]=[]
    for(j=0;j<col;j++){
        c[i][j]=a[i][j]+b[i][j]
    }
}
for(i=0;i<r;i++){
    row=" "
    for(j=0;j<col;j++){
        row=row+c[i][j]+" "
    }console.log(row)
}

