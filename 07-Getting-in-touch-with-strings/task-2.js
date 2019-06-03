function checkSpam(source, example) {
    if (typeof source === 'string' && typeof example === 'string') {
        let lowerSource = source.toLowerCase(), lowerExample = example.toLowerCase();
        let sub = lowerSource.indexOf(lowerExample);
        if (sub !== -1) {
            return true;
        } else {
            return false;
        }
    } else {
        throw new Error('Not a string');
    }
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'kl')); // true