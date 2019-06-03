function upperCaseFirst(string) {
    if (typeof string === 'string') {
        let capitalized = string.charAt(0).toUpperCase();
        let subString = string.substring(1);
        return capitalized + subString;
    } else {
        throw new Error('Not a string');
    }
}

let a = upperCaseFirst('pitter'); // Pitter
let b = upperCaseFirst(''); // ''
console.log(a);