// Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.


var read=require('readline-sync')
var wr=parseInt(read.question('Enter the written mark : '))
var lab =parseInt(read.question('Enter the lab mark : '))
var ass=parseInt(read.question('Enter the assignment mark : '))
var per=(wr*70)/100+(lab*20)/100+(ass*10)/100
console.log(per)