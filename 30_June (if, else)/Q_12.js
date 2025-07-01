// Input a year and check if it is a leap year.

var prompt = require('prompt-sync')();
let leap = prompt("Enter year ");
let year = parseInt(leap);

if((year % 4 ==0 && year % 100!==0 )||( year%400==0))
{
    console.log("Year is leap year");
}
else{
    console.log("Year is not leap year");
}