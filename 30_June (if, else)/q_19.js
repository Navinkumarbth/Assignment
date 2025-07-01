
// Take two numbers and check if they are equal, or print which one is greater.
var prompt = require('prompt-sync')();
let firstNum=prompt("Enter first number ");
let num1=parseInt(firstNum);
let secondNum=prompt("Enter second number ");
let num2=parseInt(secondNum);

if(num1==num2)
{
    console.log("Number are equal");
}
else if(num1 > num2)
{
    console.log(num1,"Number is greater");
}
else{
    console.log(num2,"Number is greater");
}