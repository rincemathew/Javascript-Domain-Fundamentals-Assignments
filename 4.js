// Write a program to check whether a student has passed or failed in a subject after he or she enters their mark (pass mark for a subject is 50 out of 100).

let read = require('readline-sync')

let mark = parseFloat(read.question('enter mark'))

if(mark<50) {
    console.log('You are failed')
} else {
    console.log('You are passed')
}

