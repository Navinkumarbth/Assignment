// Input three numbers and find the greatest among them.
var prompt = require('prompt-sync')();
let num1 = prompt("Enter first number ");
let a=parseInt(num1);
let num2 = prompt("Enter Second number ");
let b=parseInt(num2);
let num3 = prompt("Enter Third number ");
let c=parseInt(num3);

if(a>=b && a>=c){
    console.log("Number one is greatest");
}
else if(b>=a && b>=c){
    console.log("Number two is greatest");
}
else
{
    console.log("Number third is greatest");
}
