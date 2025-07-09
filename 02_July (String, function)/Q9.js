// 4. *Sum of Even Numbers*  
//    Write a function sumEven(arr) that returns the sum of all even numbers in the array.  
//    Example: [1, 2, 3, 4, 5, 6] → 12

function sumEven(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));