// Input marks of a student (out of 100) and print the grade:

var prompt = require('prompt-sync')();
let stu1 = prompt("Enter marks ");
let grade=parseInt(stu1);
if(grade>=90)
{
    console.log("Grade A");
}
else if(grade>=80 && grade<90)
{
    console.log("Grade B");
}
else if(grade>=70 && grade<80)
{
    console.log("Grade C");
}
else
{
    console.log("Grade D");
}