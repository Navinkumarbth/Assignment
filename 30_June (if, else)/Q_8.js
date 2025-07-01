// Input a number and check if it is a 3-digit number.
var prompt = require('prompt-sync')();
let num=prompt("Enter number ");
let num1=parseInt(num);

if(num >100 && num <999)
{
    console.log("Number is a 3-digit number");
}
else{
    console.log("Number is a not 3-digit number");
}