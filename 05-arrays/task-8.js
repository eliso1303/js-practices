const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

function f(arr) {
    if (!(arr === undefined || arr.length == 0)) {
        let sum = 0;
        let newArr = arr.flat(20);
        for (let i = 0; i < newArr.length; i++) {
            sum += newArr[i];
        }
        console.log(sum);
        return sum;
    } else {
        console.log(0);
        return 0;
    }
}

f(arr); // 12  