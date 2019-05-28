var f = function() {
    let result = 0;
    for(argument in arguments) {
        if (typeof arguments[argument] === 'number') {
            result = (arguments[0]-arguments[1])/arguments[2];
        } else {
            throw new Error('all parameters type should be a Number');
        }
    }
    console.log(result);
};

f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number