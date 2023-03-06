// Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)

class calculator {
    
    constructor(num1, num2) {
        this.a = num1
        this.b = num2
    }
    Addition() {
        return this.a + this.b
    }
    substraction() {
        return this.a - this.b 
    }
    mul() {
        return this.a * this.b
    }
    div() {
        return this.a / this.b
    }
}
var read = require('readline-sync')
var n = parseInt(read.question("Enter the number1 :  "))
var n1 = parseInt(read.question("Enter the number 2 :  "))
const calc = new calculator(n,n1)
var result
console.log("Choose methord")
console.log("1 - ADD , 2-SUB , 3-MUL , 4-DIV ")
var select=parseInt(read.question(''))
if(select==1){
    result=calc.Addition()
}
else if(select==2){
    result=calc.substraction()
}
else if(select==3){
    result=calc.mul()
}
else if(select==4){
    result=calc.div()
}
else{
    result="Not valid"
}
console.log(result)
