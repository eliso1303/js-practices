const array = [-1,2,-3];

function some(arr, fun) {
    if (arr.length && Array.isArray(arr) && fun && typeof fun === "function") {
        let value = false;
        for (var i = 0; i < arr.length; i++) {
            if(fun(arr[i], i, arr)){
                value = true;
            }
        }
        console.log(value);
        return value;
    } else {
        throw new Error("Please enter correct arguments");
    }
}

some(array, function(item, i, arr) {
    return item > 0;
});