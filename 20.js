// Write a program to print the following pattern using for loop

var n=4
var k=0
for(var i=1;i<=n;i++){
    var row=" "
    for(var j=1;j<=i;j++){
        k++
        row+=k+" "
       
    } console.log(row)
}