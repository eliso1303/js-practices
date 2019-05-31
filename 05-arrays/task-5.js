const array = [1, 2, 3];
const acc = 0;

function reduce(arr, fun, start) {
    if (arr.length && Array.isArray(arr) && fun && typeof fun === "function" && typeof start === 'string' || typeof start === 'number') {
        for (let i = 0; i < arr.length; i++) {
            console.log(fun(start, arr[i], i, arr));
        }
    } else {
        throw new Error("Please enter correct arguments");
    }
}

reduce(array, function (acc, item, i, arr) {
    return acc + item;
}, 0);
