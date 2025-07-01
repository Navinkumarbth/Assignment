// Input a number and check if it is between 10 and 50.

var prompt = require('prompt-sync')();
let num=prompt("Enter number ");
let num1=parseInt(num);
if(num>=10 && num<=50)
{
    console.log("Number is between 10 and 50");
}
else
{
    console.log("Number is not between 10 and 50");
}