// ES6 Generators

function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';
}

let letterGen = letterMaker();

// console.log(letterGen.next().value); // a
// console.log(letterGen.next().value); // b
// console.log(letterGen.next().value); // c
// console.log(letterGen.next().value); // undefined


function* countMaker() {
    let count = 0;
    while (count < 4) {
        yield count += 1;
    }
}

let countGen = countMaker();

// console.log(countGen.next()); // {value: 1, done: false}
// console.log(countGen.next()); // {value: 2, done: false}
// console.log(countGen.next()); // {value: 3, done: false}
// console.log(countGen.next()); // {value: 4, done: false}
// console.log(countGen.next()); // {value: undefined, done: true}


function* evens() {
    let count = 0;
    while (true) {
        count += 2
        let reset = yield count;
        if(reset) {
            count = 0;
        }
    }
}

let sequence = evens();

// console.log(sequence.next().value); // 2
// console.log(sequence.next().value); // 4
// console.log(sequence.next().value); // 6
// console.log(sequence.next(true).value); // 2
// console.log(sequence.next().value) // 4


// Iterators

const arrayIterators = (array) => {
    let index = 0;
    return {
        next: () => {
            if(index < array.length) {
                let next = array[index];
                index += 1;
                return next;
            }
        }
    }
}

let it = arrayIterators([1,2,3]);

// console.log(it.next()); // 1
// console.log(it.next()); // 2
// console.log(it.next()); // 3
// console.log(it.next()); // undefined

function* arrayIterator() {

    // yield arguments; // returns arguments in array

    // for(let arg of arguments) {
    //     yield arg;
    // }

    // istead of for loop
    yield* arguments;
}

let its = arrayIterator(1, 2, 3, 4);

console.log(its.next().value); // 1
console.log(its.next().value); // 2
console.log(its.next().value); // 3