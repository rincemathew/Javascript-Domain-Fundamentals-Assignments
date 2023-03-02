// Write a program to print the following pattern (hint: use nested loop)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var text ="";

for(i=1;i<=5;i++) {
    for(j=1;j<=i;j++) {
        text+=j+" "
    }
    text+="\n"
}
console.log(text)