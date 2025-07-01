// Input a number and check if it's divisible by 3 or not.

var prompt = require('prompt-sync')();
let a = prompt('Enter number');
let num1=parseInt(a);

if(a % 3 == 0)
{
    console.log("Number is devide by 3");
}
else
{
    console.log("Number is not devide by 3");
}