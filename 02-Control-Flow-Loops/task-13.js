let arr= [-2, 5, 3, -15, 0, 4], sum=0;

for(let i=0; i<arr.length; i++){
    if(arr[i]>0) {
        sum += arr[i];
    }
}
console.log(sum);