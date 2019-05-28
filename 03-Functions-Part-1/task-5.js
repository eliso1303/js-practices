let arr = [1, 2, -4, 3, -9, -1, 7], arr2 = [];

function isPositive(number){
    if (typeof number === 'number') {
        if(number >= 0){
            return true;
        } else {
            return false;
        }
    } else {
        throw new Error('all parameters type should be a Number');
    }
}

for(var i=0; i<arr.length;i++){
    if(isPositive(arr[i])){
        arr2.push(arr[i]);
    }
}

console.log(arr2);