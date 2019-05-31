const arr = [3, 2, 1];

function reverse(arr) {
    if (arr.length && Array.isArray(arr)) {
        let reversedArr = [];
        if (arr.length) {
            for (let i = arr.length - 1; i >= 0; i--) {
                reversedArr.push(arr[i]);
            }
            arr = reversedArr;
            console.log(arr);
            return arr;
        } else {
            throw new Error("Empty Array");
        }
    } else {
        throw new Error("It is not Array");
    }
}

reverse(arr); // [1,2,3]
