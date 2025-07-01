// Print the reverse of a number using a loop (e.g., 123 → 321).

let j='';
let i=123;
for(i; i>0; )
{
    j+=i%10;
    i=Math.floor(i/10);
}
console.log(j);