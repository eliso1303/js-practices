function getDivisors(number) {
    let divisors = [];

    if (typeof number === 'number') {
        if(number === 0){
            throw new Error("parameter can't be a 0");
        } else {
            for(let i=0; i<=number; i++){
                if(number%i === 0){
                    divisors.push(i);
                }
            }
        }
    } else {
        throw new Error('parameter type is not a Number');
    }

    return divisors;
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0