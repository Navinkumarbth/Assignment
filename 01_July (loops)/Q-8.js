var prompt = require('prompt-sync')();

// Find the product of numbers from 1 to 10.

let num=prompt("Enter number ");
let k=parseInt(num);
for(let i=1; i<=10; i++)
{
    console.log(k*i);   
}