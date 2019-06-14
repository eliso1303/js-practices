class Customers {
    constructor(object) {
        this.object = object;
    }

    add(object) {
        if (object && typeof object === "object") {
            if (object.name) {
                if (object.verified) {
                    return true;
                }
            }
            else {
                throw new Error("Name is required");
            }
        } else {
            throw new Error("not an object");
        }
    }

    [Symbol.iterator]() {
        let i = 0;

        return {
            next() {
                console.log(this);
                if (this.add(this.object)) {
                    const done = i >= items.length;
                    const value = !done ? items[i++] : undefined;
                    return {
                        value,
                        done
                    }
                }
            }
        }
    }
}

const customers = new Customers();
customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });

for (const customer of customers) {
    console.log(customer);
}