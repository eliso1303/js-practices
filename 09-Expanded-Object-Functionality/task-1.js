Object.defineProperty(Object.prototype, 'extend', {
    value(source) {
        for (item of Object.getOwnPropertyNames(source)) {
            if(!data.hasOwnProperty(item)){
                Object.defineProperty(data, item,  Object.getOwnPropertyDescriptor(source, item));
            }
        }
    },
    enumerable: false
});


const data = { a: 'a' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false