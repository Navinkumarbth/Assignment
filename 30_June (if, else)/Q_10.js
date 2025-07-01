// Input a temperature and print if it's Hot (>30), Moderate (15–30), or Cold (<15).

var prompt = require('prompt-sync')();
let temp=prompt("Enter temperature ");
let num1=parseInt(temp);

if(num1 >30)
{
    console.log("Temperature Hot");
}
else if(num1 < 30 && num1 > 15)
{
    console.log("Temperature Moderate");
}
else{
    console.log("Temperature Cold");
}