
// Input someone's name and age, and check if they can get a driving license (age ≥ 18).

var prompt = require('prompt-sync')();
let name = prompt("Enter name ")
let age1 = prompt("Enter age ")
let age=parseInt(age1);

if(age >=18)
{
    console.log("They can get a driving license");
}
else
{
    console.log("They can not get a driving license");
}
