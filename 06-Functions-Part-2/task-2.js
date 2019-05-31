function mix(prev, ...functions) {
    for (let i = 0; i < functions.length; i++) {
        if (typeof functions[i] === "function") {
            const result = functions[i]();
            prev(result);
        } else {
            throw new Error('Not a Function');
        }
    }
}

let a=mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) // 2

console.log(a);