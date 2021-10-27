const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// figure out total 
let total = 0;
for (let price of prices) {
    total += price;
}
console.log(total) // 111.97

// use reduce 
const total = prices.reduce((total, price) => {
    return total + price;
}) // 111.97

// OR 
const total = prices.reduce((total, price) => total + price);

// find min price 
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } 
    return min; // in case the first price IS the min
}) // 1.5


// another example
const movies = [
    {
        title: "Garbage Movie #1", 
        score: 35,
        year: 1945
    },
    {
        title: "Garbage Movie #2", 
        score: 11,
        year: 1990
    },
    {
        title: "Garbage Movie #3",
        score: 23,
        year: 2000
    },
    {
        title: "Amadeus", 
        score: 99,
        year: 2014
    },
    {
        title: "Stand By Me",
        score: 85, 
        year: 2011
    },
    {
        title: "Parasite", 
        score: 95, 
        year: 2019
    },
    {
        title: "Alien", 
        score: 90,
        year: 1978
    }
]

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    } // otherwise...
    return bestMovies;
}) // returns Amadeus

// another example 
const evens = [2, 4, 5, 8]

evens.reduce((sum, num) => sum + num); // 20
evens.reduce((sum, num) => sum + num, 40); // 60
