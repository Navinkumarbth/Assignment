// . *Group by Type*  
//    Write a function groupByType(arr) that groups array elements by their type.  
//    Example: [1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }


function groupByType(arr) {
    return arr.reduce((result, item) => {
        const type = typeof item;
        if (!result[type]) {
            result[type] = [];
        }
        result[type].push(item);
        return result;
    }, {});
}


console.log(groupByType([1, 'a', true, 2, 'b']));


