const array = [1, 2, 3];

function forEach(arr, fun) {
    if (arr && Array.isArray(arr) && fun && typeof fun === "function") {
        for (var i = 0; i < arr.length; i++) {
            fun(arr[i], i, arr);
        }
    } else {
        throw new Error("Please enter arguments");
    }
}

forEach(array, function (item, i, arr) {
    console.log(i + ': ' + arr[i] + ' (array: ' + arr + ')');
});
