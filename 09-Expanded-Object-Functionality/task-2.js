Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(source){
        // if(!data.hasOwnProperty()){
            for(item in source){
                data[item] = source[item];
            }
        // }
       
        return data;
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
