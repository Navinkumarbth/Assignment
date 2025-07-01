// Input a number and check if it’s a multiple of 7 or not.

var prompt = require('prompt-sync')();
let num = prompt('Enter number ');
let num1=parseInt(num);

if(num % 7 === 0)
{
    console.log("Number is divisual of 7");
}
else
{
    console.log("Number is not divisual of 7");
}