var f = function(number) {
    if (typeof number === 'number') {
        return number*number*number;
    } else {
        throw new Error('parameter type is not a number');
    }
};

f(2);
f('Content');