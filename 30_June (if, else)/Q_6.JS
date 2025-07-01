
// Input a character and check whether it's a vowel or consonant (assume lowercase).
var prompt = require('prompt-sync')();
let char = prompt('Enter alphabet ').toLowerCase();
let num1=parseInt(char);

if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
{
    console.log("character is vowel");
}
else
{
    console.log("character is consonent");
}