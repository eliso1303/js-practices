let arr = [1, 2, 3];

function f(array) {
    if (Array.isArray(array)) {
        if (array.length !== 0) {
            console.log(array[0]);
            array.splice(0, 1);
            if(array.length > 0){
                f(array);
            }
        } else {
            throw new Error("parameter can't be an empty");
        }
    } else {
        throw new Error('parameter type should be an array');
    }
}

f(arr);