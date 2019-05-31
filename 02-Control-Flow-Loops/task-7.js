let arr = [1,2,3,4], i, sum = 0;

for(i of arr){
    if (i%2 == 0){
        sum += i;
    }
}

console.log(sum);