import {
  addMovie,
  rateMovie,
  getAverageRating,
  getTopRatedMovies,
  getMoviesByGenre,
  getMoviesByDirector,
  searchMoviesBasedOnKeyword,
  getMovie,
  removeMovie,
} from "./movies";

// Add Movies
const movie1 = addMovie("The Matrix", "Wachowski", 1999, "Action");
const movie2 = addMovie("Inception", "Christopher Nolan", 2010, "Action");
const movie3 = addMovie("The Dark Knight", "Christopher Nolan", 2008, "Action");
const movie4 = addMovie("Interstellar", "Christopher Nolan", 2014, "Sci-Fi");
const movie5 = addMovie("The Dark Knight2", "Christopher Nolan", 2012, "Action");

console.log("\n=== Movies Added Successfully ===\n");

// Rate Movies
rateMovie(movie1, 5);
rateMovie(movie1, 4);
rateMovie(movie2, 5);
rateMovie(movie3, 4);
rateMovie(movie3, 4);
rateMovie(movie3, 4.5);
rateMovie(movie3, 3.8);
rateMovie(movie4, 5);
rateMovie(movie5, 4.5)
rateMovie(movie5, 4)
rateMovie(movie5, 4.3)
rateMovie(movie5, 4.1)
rateMovie(movie5, 3.8)


console.log("\n=== Ratings Added Successfully ===\n");

// Get Average Rating
console.log(`Average rating of "The Matrix": ${getAverageRating(movie5)}`);

// Get Top Rated Movies
console.log("\n=== Top Rated Movies ===");
getTopRatedMovies().forEach((movie) => {
  console.log(`${movie.title} - Average Rating: ${getAverageRating(movie.id)}`);
});

// Get Movies by Genre
console.log("\n=== Action Movies ===");
getMoviesByGenre("Action").forEach((movie) => console.log(movie.title));

// Get Movies by Director
console.log("\n=== Movies by Christopher Nolan ===");
getMoviesByDirector("Christopher Nolan").forEach((movie) =>
  console.log(movie.title)
);

// Search Movies
console.log("\n=== Search Results for 'Dark' ===");
searchMoviesBasedOnKeyword("Dark").forEach((movie) => console.log(movie.title));

// Get Movie Details
const movieDetails = getMovie(movie2);
if (movieDetails) {
  console.log(
    `\nMovie details: ${movieDetails.title} directed by ${movieDetails.director}`
  );
}



// Remove Movie
console.log("\n=== Removing Interstellar ===");
getMovie(movie4);
removeMovie(movie4);
console.log(
  getMovie(movie4) ? "Movie still exists!" : "Movie successfully removed."
);


const movieDet = getMovie(movie4);
if (movieDet) {
  console.log(
    `\nMovie details: ${movieDet.title} directed by ${movieDet.director}`
  );
}