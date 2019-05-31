
var arr = ['abcd', 'abcde', 'ab', 'abc'];

// START
var arrLength = arr.map(function (n) {
    return n.length;
});
// FINISH

console.log(arrLength); // 4,5,2,3
