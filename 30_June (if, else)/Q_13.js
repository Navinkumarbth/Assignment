// Input a character and check if it's uppercase, lowercase, digit, or special character.

var prompt = require('prompt-sync')();
let char=prompt("Enter alphabate ");

if(char>='A' && char<='Z')
{
    console.log("Uppercase");
}
else if(char>='a' && char<='z')
{
    console.log("Lowercase");
}
else if(char>=0 && char<=9)
{
    console.log("Digit");
}
else{
    console.log("Special character");
}