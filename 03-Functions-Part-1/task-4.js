const f = function (number) {
    let days = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];
    if (typeof number === 'number') {
        if (number >= 1 && number <= 7){
            return days[number-1];
        } else {
            throw new Error('parameter should be in the range of 1 to 7');
        }
    } else {
        throw new Error('parameter type is not a Number');
    }
};

f(1); // Sunday
f(2); // Monday
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number