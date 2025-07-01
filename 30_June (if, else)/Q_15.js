
// Input the day number (1–7) and print the corresponding weekday.

var prompt = require('prompt-sync')();
let day=prompt("Enter number ");
let num = parseInt(day);

if(num==1)
{
    console.log("Sunday");
}
else if(num==2)
{
    console.log("Monday");
}
else if(num==3)
{
    console.log("Tuesday");
}
else if(num==4)
{
    console.log("Wednesday");
}
else if(num==5)
{
    console.log("Thrusday");
}
else if(num==6)
{
    console.log("Friday");
}
else if(num==7)
{
    console.log("Saturday");
}
else{
    console.log("Invalid day");
}
