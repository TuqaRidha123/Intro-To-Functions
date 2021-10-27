const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(element) {
    console.log(element);
}

/*
// print(numbers[0]);
// print(numbers[1]);
numbers.forEach(print); // prints every element 
*/

numbers.forEach(function(el) {
    console.log(el);
})

// same as...

for (let el of numbers) {
    console.log(el);
}

// print only evens
numbers.forEach(function(el) {
    if (el % 2 === 0) {
        console.log(el);
    }
})

// slightly more complicated example...
const movies = [
    {
        title: "Amadeus", 
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite", 
        score: 95
    },
    {
        title: "Alien", 
        score: 90
    }
]

movies.forEach(function(movie) {
    console.log(movie) /* {title: "Amadeus", score: 99} {title: "Stand By Me", score: 85} {title: "Parasite", score: 95} {title: "Alien", score: 90} */
})

// let's try it this way...
movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`); //Parasite - 95/100 and so on...
})

// now let's try it with map
const titles = movies.map(function(movie){
    return movie.title.toUpperCase(); //returns title in a new array
})

// MAP

const doubles = numbers.map(function(num) {
    return num * 2;
}) // creates a new array [2, 4, 6, etc]

// returns first names only 
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
let firstNames = fullNames.map(function(name) {
    return name.first;
})