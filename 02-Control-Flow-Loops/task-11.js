let arr = [11, 15, 93, 10, 6, 20, 967], temp;

for (let i = 0; i < arr.length - 1; i++) {

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log(arr);
