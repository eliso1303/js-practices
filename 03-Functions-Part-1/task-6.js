function isEven (number){
    if (typeof number === 'number') {
        if(number%2 === 0){
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    } else {
        throw new Error('parameter type is not a Number');
    }
}

isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number