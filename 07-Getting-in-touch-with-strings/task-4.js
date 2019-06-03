function extractCurrencyValue(source) {
    if (typeof source === 'string') {
        let newStr = source.slice(1);
        console.log(typeof +newStr);
    } else {
        throw new Error('Not a string');
    }
}

extractCurrencyValue('$120'); // 120