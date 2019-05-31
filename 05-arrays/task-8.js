const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

function f(arr) {
    if (Array.isArray(arr) && arr.length !== 0) {
        let sum = 0;
        let newArr = arr.flat(Infinity);
        for (let i = 0; i < newArr.length; i++) {
            if (typeof newArr[i] === 'number') {
                sum += newArr[i];
            } else {
                throw new Error('not a number');
            }
        }
        console.log(sum);
        return sum;
    } else {
        console.log(0);
        return 0;
    }
}

f(arr); // 12 