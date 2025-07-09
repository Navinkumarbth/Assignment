//     ind Max and Min*  
//    Write a function findMaxMin(arr) that returns the maximum and minimum number in an array.  
//    Example: [4, 1, 9, -2] → { max: 9, min: -2 }

function findMaxMin(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

console.log(findMaxMin([4, 1, 9, -2]));