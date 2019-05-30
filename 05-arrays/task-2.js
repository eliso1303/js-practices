const array = [1,2,3];


function filter(arr, fun) {
    if (arr && Array.isArray(arr) && fun && typeof fun === "function") {
        let newArray = [];
        for (var i = 0; i < arr.length; i++) {
            if(fun(arr[i], i, arr)) {
                newArray.push(arr[i]);
            }
        }
        console.log(newArray);
    } else {
        throw new Error("Please enter arguments");
    }
}

filter(array, function(item, i, arr) {
    return item > 0;
});
