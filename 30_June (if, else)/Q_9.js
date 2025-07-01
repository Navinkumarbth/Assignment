
// Input age and check if the person is eligible for voting (≥18).

var prompt = require('prompt-sync')();
let age =prompt("Enter age ");
let num1=parseInt(age);

if(age>=18)
{
    console.log("Person is eligible for voting");
}
else{
    console.log("Person is not eligible for voting");
}
