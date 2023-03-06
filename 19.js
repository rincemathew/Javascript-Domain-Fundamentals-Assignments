// Income tax is calculated

var read=require('readline-sync')
var ai=parseInt(read.question('Enter the annual income : '))
var tax
if(ai<=250000){
    console.log('No Tax')
}
else if(ai>250000&&ai<=500000){
    tax=(ai*5)/100
    console.log(tax)
}
else if(ai>500000&&ai<=1000000){
    tax=(ai*20)/100
    console.log(tax)
}
else if(ai>1000000&&ai<=5000000){
    tax=(ai*30)/100
    console.log(tax)
}