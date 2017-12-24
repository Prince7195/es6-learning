// ES6 - Basics
console.log('ES6 - Basics');

// using const
const emails = ['a@a.com'];
emails.push('b@b.com');
// console.log(emails); // ["a@a.com", "b@b.com"]
// const values are changed but cannot be reassigned.



// Block scoping
let b = 10;
{
    let b = 100;
   // console.log(b); // 100
}
// console.log(b); // 10



// Template Literals
let c = 'Template';
let d = `${c} Literals`;
// console.log(d); // Template Literals



// Spread operator
let arr1 = [2,3];
let arr2 = [1, ...arr1, 4, 5];
// console.log(arr2); // (5) [1, 2, 3, 4, 5]

function test(...test) {
    // console.log(test);
}
test(1, 2, 3, 4, 5); // (5) [1, 2, 3, 4, 5]



// Destructing assignment
let z = [1,2,3];
let [one, two] = z;
// console.log(one, two);  // 1 2

let king = {
    name: 'king',
    place: 'india'
}
let { name, place } = king;
// console.log(name, place); // king india

let king2 = {
    name2: 'king2',
    place2: 'india2'
}
let name2, place2;
({ name2, place2 } = king2);
// console.log(name2, place2); // king2 india2



// Arrow functions
let cheer = () => {
    // console.log('oh what an arrow!'); // oh what an arrow!
}
cheer();



// Helper method
// map
let array = [1,2,3,4,5];
let doubled = array.map(n => n * 2);
// console.log(doubled); // (5) [2, 4, 6, 8, 10]

// filter
let points = [40,49,58,77,26];
let highScores = points.filter(n =>  n > 50);
// console.log(highScores); // (2) [58, 77]



// String Helper Methods
// .repeat(number)
let h = `Woo${"oo".repeat(10)}`;
// console.log(h); // Woooooooooooooooooooooo

// .startsWith(string)
// console.log('IamAlright'.startsWith('Iam')); // true
// console.log('IamAlright'.startsWith('iam')); // false

// .endsWith(string)
// console.log('IamAlright'.endsWith('ht')); // true

// .includes(string)
// console.log('IamAlright'.includes('A')); // true
// console.log('IamAlright'.includes('as')); // false



// Checking Numbers
const addToCart = (item, number) => {
    return Number.isFinite(number);
}
// console.log(addToCart('phant', 5)); // true
// console.log(addToCart('phant', 'a')); // false
// console.log(addToCart('phant', Math.pow(2, 54))); // true

const addToCart2 = (item, number) => {
    return Number.isSafeInteger(number);
}
// console.log(addToCart2('phant', Math.pow(2, 54))); // false // 2 pow 54 is beyond the js limit
