// Take two numbers and print the greater one.

var prompt = require('prompt-sync')();
let a = prompt('Enter first number');
let num1=parseInt(a);
let b = prompt("Enter a second num");
let num2 = parseInt(b);

if(num1>num2){
    console.log(num1,"is greater");
}
else if(num1<num2){
     console.log(num1,"is less");
}
else{
    console.log("Both number are equal");
}


