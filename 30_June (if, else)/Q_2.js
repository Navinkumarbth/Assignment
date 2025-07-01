//2. Write a program that takes a number as input and checks Positive, Negative, Zero//

var prompt = require('prompt-sync')();
let num = prompt('Enter number');
let number = parseInt(num);

if(number>0){
    console.log("Number is positive");
    }
else if(number < 0){
    console.log("Number is negative");
}
else
{
    console.log("Number is zero");
}