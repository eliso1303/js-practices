const f = function (a, b, c) {
    let result = 0;
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        result = (a - b) / c;
    } else {
        throw new Error('all parameters type should be a Number');
    }
    console.log(result);
    return result;
};

f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number