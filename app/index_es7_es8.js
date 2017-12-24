// ES7 Features

let a = 2**5; // insted of Math.pow(2,5)
// console.log(a); // 32

let b = 'wonderfull'.includes('wonder');
// console.log(b); // true

let c = [1, 2, 3, 4, 5, 6, 7].includes(8);
// console.log(c); // false

// ------------------------------------------------------------------------ //

// ES8 - Features

let obj = {
    a: 'one',
    b: 'two',
    c: 'three'
};

let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);

// console.log(keys); // ["a", "b", "c"]
// console.log(values); // ["one", "two", "three"]
// console.log(entries); // [ ["a", "one"], ["b", "two"], ["c", "three"] ]

// Async functions
async function async_one() {
    return 'one';
}

// async_one().then(response => console.log(response)); // one

async function async_error() {
    throw new Error('Issue with async');
}

// async_error().catch(error => console.log(error)); // Error: Issue with async

async function async_two() {
    return 'two';
}

async function async_three() {
    const one = await async_one();
    console.log(one);

    const two = async_two(); // Promise {<resolved>: "two"}
    console.log(two);
}

// async_three(); // one, two if using await for two function calls

async function async_four() {
    const [ res_one, res_two ] = await Promise.all(
        [async_one(), async_two() ]
    )

    console.log(res_one, res_two);
}

// async_four(); // one two