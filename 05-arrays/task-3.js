const array = [1,2,3];


function every(arr, fun) {
    if (arr && Array.isArray(arr) && fun && typeof fun === "function") {
        for (var i = 0; i < arr.length; i++) {
            if(fun(arr[i], i, arr)) {
                console.log(true);
                return true;
            } else {
                console.log(false);
                return false;
            }
        }
    } else {
        throw new Error("Please enter arguments");
    }
}

every(array, function(item, i, arr) {
    item > 1;
});

// var arr = [1, -1, 2, -2, 3];

// var status = arr.every(function(n){
//   return n > 0;
// });

// console.log(status);