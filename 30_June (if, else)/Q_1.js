var prompt = require('prompt-sync')();
let num = prompt('Enter number');
let number = parseInt(num);

//1. Write a program that takes a number as input and checks whether it is even or odd using if else//

if (number % 2==0) {
    console.log("Nuber is Even");
}
else {
    console.log("Number is Odd");
}

