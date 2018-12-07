// object destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'philly',
//         temp: 92
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`it's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Some book',
//     author: 'Ryan something',
//     publisher: {
//         name: 'penguin'
//     }
// };

// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);


// array destructuring

const address = ['12 some st', 'philly', 'onytario', '12345'];
const [, city, state = 'somthing'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['coffee', '$1.00', '$2.00', '$3.00'];

const [product, , price] = item;
console.log(`A medium ${product} costs ${price}`);