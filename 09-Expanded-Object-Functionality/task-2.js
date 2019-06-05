Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(source) {
        for (item in source) {
            if()
            data[item] = source[item];
            console.log();
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