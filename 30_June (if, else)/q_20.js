// Input a number and print whether it is even, odd, and also whether it's positive or negative.

var prompt = require('prompt-sync')();
let a = prompt("Enter a number");
let b=parseInt(a);

if(b>0){
    console.log("Number is positive");
    if(b%2==0)
{
    console.log("Number is even");
}
else if(b%2!==0)
{
    console.log("Number is odd");
}
}
else{
    console.log("Number is negative");
}

