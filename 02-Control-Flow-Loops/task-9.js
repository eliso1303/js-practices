for (var i = 2; i <= 10; i++) {
    var primeNum = true;
    for (var j = 2; j < i; j++) {
        if (i % j === 0) {
            primeNum = false;
        }
    }
    if (primeNum === true) {
        console.log(i);
    }
}