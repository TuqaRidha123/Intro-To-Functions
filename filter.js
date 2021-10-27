const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

numbers.filter(n => {
    return n < 10;
})

/* prints the following

numbers.filter(n => {
    return n < 10
})

[1, 2, 3, 4, 5, 6, 7, 8, 9]

*/

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

const goodMovies = movies.filter(movie => {
    return movie.score > 80;
})

// OR

const goodMovies = movies.filter(m => m.score > 80);
// prints array of titles
const goodTitles = goodMovies.map(m > m.title); // see line 69
const badMovies = movies.filter(m => m.score < 70);

const recentMovies = movies.filter(m => m.year > 1990);


movies.filter(m => m.score > 80).map(m => m.title); // did line 63 send u here?




// Filter Exercise 
const validUserNames = (arr) => {
    const filterArr = arr.filter(names => {
	    return names.length < 10;
        });
        return filterArr;
}

// validUserNames(["mark", "stacesmom1978"])
// returns ["mark"]