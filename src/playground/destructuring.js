// const person = {
//     name: 'Daniel',
//     age: 29,
//     location: {
//         city: 'San Antonio',
//         temperature: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person

// const { city, temperature: temp } = person.location
// if (city && temp){
//     console.log(`It's ${temp} degrees in ${city}`)
// }

// console.log(`${firstName} is ${age} years old.`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

// array destructuring

const address = ['1299 S juniper street', 'San Antonio', 'Texas', '78249']
const [, city, state = 'New York'] = address
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75']
const [bev, , medium] = item
console.log(`A medium ${bev} costs ${medium}`)