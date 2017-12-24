// Asyncronous Programming
// promises

let promise = new Promise((resolve, reject) => {
    resolve('Promise request is resolved');
    reject('Promise request is rejected');
});

// promise.then(response => console.log(response))
//     .catch(error => console.log(error));
    // returns Promise request is resolved no rejected data

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Async Promise request is resolved'), 3000);
});

// promise.then(response => console.log(response));
// console.log('after promice request');
//  returns first after promice request next Promise request is resolved data after 3 secs

// HTTP Request - Fetch
const root = 'https://jsonplaceholder.typicode.com/posts/1';
const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'

fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json));