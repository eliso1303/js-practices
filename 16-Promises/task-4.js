const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

class countries {
    constructor(url){
        if(typeof url !== 'string'){
            throw new Error("link must be a string");
        } 
    }

    send(size) {
        if(typeof size === "number"){
            return new Promise((resolve, reject) => {
                get(size, (error, meta, body) => {
                    const { data } = JSON.parse(body);
                    if (meta.status == 200) {
                        resolve(data);
                    }else{
                        reject('We have error, status code: '+ meta.status);
                    }
                });
            });
        }else{
            throw new Error ("size must be a number");
        }
    } 
}

const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();