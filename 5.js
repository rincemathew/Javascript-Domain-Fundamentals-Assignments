// Write a program to check whether a student has passed or failed in a subject after he or she enters their mark (pass mark for a subject is 50 out of 100).

let read = require('readline-sync')

let mark = parseFloat(read.question('enter mark'))

if(mark<50) {
    console.log('You are failed')
} else if(mark<60) {
    console.log('Your grade is E')
}
 else if(mark<70) {
    console.log('Your grade is D')
}
 else if(mark<80) {
    console.log('Your grade is C')
}
 else if(mark<90) {
    console.log('Your grade is B')
}
else if(mark<100) {
    console.log('Your grade is A')
}
 else {
    console.log('Your are entered wrong mark')
}