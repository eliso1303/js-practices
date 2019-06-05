Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(source) {
        for (item in Object.getOwnPropertyNames(source)) {
            if (typeof item === 'object') {
                item.toString();
                data[item].mergeDeepRight(item); 
            } else {
                data[item] = item;
            }
            // if(!data.hasOwnProperty(source[item])){

            // }
        }
    }
});

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};
data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});

console.log(data);