function arrayFill(value, length) {
    if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value) && typeof length === 'number') {
        let array = [];
        for (var i = 0; i < length; i++) {
            array.push(value);
        }
        return array;
    } else {
        throw new Error("Please enter correct arguments");
    }
}

console.log(arrayFill('x',5));