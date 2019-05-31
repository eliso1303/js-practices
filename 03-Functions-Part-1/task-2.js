var f = function () {
    let sum = 0;
    for (argument in arguments) {
        if (typeof arguments[argument] === 'number') {
            sum += arguments[argument];
        } else {
            throw new Error('all parameters type should be a Number');
        }
    }
    return sum;
};

f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters type should be a Number