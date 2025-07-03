// . *Capitalize First Letter of Each Word*  
//    Write a function capitalizeWords(str) that capitalizes the first letter of every word in a sentence.  
//    Example: "hello world" → "Hello World"
function capitalizeWords(str){
    return str
     .split(' ')
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join(' ');
}
console.log(capitalizeWords("hello word"));