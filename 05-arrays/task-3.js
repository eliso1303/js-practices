const array = [1,2,3];

function every(arr, fun) {
    if (arr.length && Array.isArray(arr) && fun && typeof fun === "function") {
        let value = true;
        for (let i = 0; i < arr.length; i++) {
            if(!fun(arr[i], i, arr)){
                value = false;
            }
        }
        console.log(value);
        return value;
    } else {
        throw new Error("Please enter correct arguments");
    }
}

every(array, function(item, i, arr) {
    return item > 0;
});
