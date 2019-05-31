const array = [1, 2, 3];
const acc = 0;

function reduce(arr, fun, start) {
    if (arr.length && Array.isArray(arr) && fun && typeof fun === "function" && typeof start === 'string' || typeof start === 'number') {
        let value = start; 

        for (let i = 0; i < arr.length; i++) {
            value = fun(value, arr[i], i, arr);
        }
        return value;
    } else {
        throw new Error("Please enter correct arguments");
    }
}

let result = reduce(array, function (acc, item, i, arr) {
    return acc + item;
}, acc);

console.log(result);