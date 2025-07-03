
// 1. *Remove Duplicates*  
//    Write a function removeDuplicates(arr) that removes duplicate values from an array.  
//    Example: [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 