
// Input a number and check if it is a prime number (basic logic).

var prompt = require('prompt-sync')();
let prime=prompt("Enter a number ");
let num =  parseInt(prime);

if(num==0 || num==1 || num==2 || num==3 || num==4 || num==5 || num==6 || num==7 || num==8 || num==9)
{
    console.log("Prime number");
}
else
{
    console.log("Not prime number");
}