for (let i = 2; i <= 10; i++) {
    let primeNum = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primeNum = false;
        }
    }
    if (primeNum === true) {
        console.log(i);
    }
}