const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

class Countries {
    constructor(link) {
        (typeof link == 'string') ? (this.link = link) : () => { throw new Error("link must be a string!") };
    }

    send(size) {
        if (typeof size === "number") {
            return new Promise((resolve, reject) => {
                const url = `${this.link}?size=${size}`;
                get(url, (error, meta, body) => {
                    const { data } = JSON.parse(body);
                    (meta.status == 200) ? resolve(data) : reject('We have error, status code: ' + meta.status);
                });
            });
        } else {
            throw new Error("size must be a number");
        }
    }
}

const countries = new Countries(url);

(async () => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();