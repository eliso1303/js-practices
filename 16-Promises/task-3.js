const send = (url) => {
    return new Promise((resolve, reject) => {
        
    });
};

const get = require('fetch');
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });