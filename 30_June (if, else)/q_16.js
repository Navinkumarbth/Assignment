// Take a number and check whether it is divisible by both 5 and 11.

var prompt = require('prompt-sync')();
let digit = prompt("Enter number ");
let num = parseInt(digit);

if(num % 5==0 && num%11==0)
{
    console.log("Divisible by 5 and 11");
}
else{
    console.log("Not divisible by 5 and 11");
}