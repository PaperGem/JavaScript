//תרגיל 22


const movie = {
id: 41,
title: "Orbit",
genre: "Sci-Fi",
rating: 8.4
};

const {title, genre, rating} = movie;
console.log(`${movie.rating} | ${movie.genre} | ${movie.title}`);


const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);

//ידפיס : orbit  ocean

//תרגיל 23
const user = {
id: 7,
name: "Dana Levi",
email: "dana@example.com",
isActive: true
};

const formatUser = (email, name3) => { (`${user.name3}`)}