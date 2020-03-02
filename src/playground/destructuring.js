// const person = {
//     name: 'Mathew',
//     age: 33,
//     location : {
//         city: 'Mayer',
//         temp: 32
//     }
// }

// const {age , name} = person

// //This renames your variable from temp to temperature
// const {city, temp: temperature} = person.location
// //this renames variable and gives it a default value
// const {name: firstName = 'Anonymouse'}
// console.log(`${firstName} is from ${city}, and it is ${temperature} degrees out!`)

const book = {
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName)