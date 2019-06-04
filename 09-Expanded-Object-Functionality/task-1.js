// Object.prototype.extend = function(source) {

// }
// const data = {name: 'Pitter1'};
// const source = {name: 'Pitter', age: 21};

// Object.defineProperty(source, 'rate', {
//     writable: true,
//     configurable: false,
//     enumerable: false
// });

Object.defineProperty(Object.prototype, 'extend', {
    value() {
        for (prop in p) {
            {
            o[prop] = p[prop];
            }
        }
    }
});
const data = { name: 'Pitter1' };
const source = { name: 'Pitter', age: 21 };

// data.extend(source);

// const extend = (o, p) => {
//     for (prop in p) {
//         o[prop] = p[prop];
//     }

//     return o;
// };

// const source = {name: 'Pitter', age: 21};

// const obj = extend(source, {age: 18});

// console.log(obj);
// console.log(source)