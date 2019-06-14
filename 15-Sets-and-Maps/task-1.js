class DB {
    constructor() {
        this.db = new Map();
    }

    create(object) {
        this.validateFields(object);
        let _id = new Date().getUTCMilliseconds().toString();
        this.db.set(_id, object);
        return _id;
    }

    validateFields(object) {
        if (typeof object !== 'object') {
            throw new Error('Must be an object');
        }

        const properties = ['name', 'age', 'country', 'salary'];

        for (let i = 0; i < properties.length; i++) {
            if (!object.hasOwnProperty(properties[i])) {
                throw new Error(property + ' is required');
            }
        }

        if (typeof object.name !== 'string' || typeof object.country !== 'string') {
            throw new Error('Property required to be string');
        }
        if (typeof object.age !== 'number' || typeof object.salary !== 'number') {
            if (typeof object.age === 'object' || typeof object.salary === 'object') {
                var arr = [object.age.min, object.age.max, object.salary.min, object.salary.max];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i]) {
                        if (typeof arr[i] !== 'number') {
                            throw new Error('Property required to be number');
                        } else if (arr[i] <= 1) {
                            throw new Error('Number must be larger then 0');
                        }
                    }
                }
            } else {
                throw new Error('Property required to be number');
            }
        }
    }

    read(userId) {
        if (userId || typeof userId === 'string') {
            if (this.db.has(userId)) {
                this.db.get(userId).id = userId;
                return this.db.get(userId);
            } else {
                return null;
            }
        } else {
            throw new Error('ID is not set or type is not string');
        }
    }

    readAll() {
        if (arguments.length === 0) {
            let arr = Array.from(this.db.values());
            return arr;
        } else {
            throw new Error('Please, don\'t set parameter');
        }
    }

    update(id, changes) {
        if (!id || typeof id !== 'string') {
            throw new Error('ID must be excisting string');
        }

        if (!changes || typeof changes !== 'object') {
            throw new Error('invalid entry');
        }

        if(changes.name && typeof changes.name !== 'string' || changes.country && typeof changes.country !== 'string') {
            throw new Error('Property required to be string');
        }

        if (changes.age && typeof changes.age !== 'number' || changes.salary && typeof changes.salary !== 'number') {
            throw new Error('Property required to be number');
        }

        if (this.db.has(id)) {
            let user = this.db.get(id);
            this.db.set(id, { ...user, ...changes });
            return id;
        } else {
            throw new Error('There is no such user');
        }
    }

    delete(userId) {
        if (userId || typeof userId === 'string') {
            if (this.db.has(userId)) {
                this.db.delete(userId);
                return true;
            } else {
                throw new Error('There is no such user');
            }
        } else {
            throw new Error('ID is not set or type is not string');
        }
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true