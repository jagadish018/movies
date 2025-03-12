type Movie = {
  id: string;
  title: string;
  director: string;
  releaseYear: number;
  genre: string;
  ratings: number[];
};

const mapMovies = new Map<string, Movie>();



function addMovie(title: string,director: string,releaseYear: number,genre: string): string {
  const id = Math.random().toString(36).substring(2, 11);
  const movie: Movie = { id, title, director, releaseYear, genre, ratings: [] };
  mapMovies.set(id, movie);
  console.log(`Movie with id ${id} has been successfully added`);
  return id;
}

function rateMovie(id: string, rating: number): void {
  const movie = mapMovies.get(id);
  if (!movie) {
    console.error(`Movie with id ${id} does not exist`);
    return;
  }
  if (rating < 0 || rating > 5) {
    console.error(`Rating ${rating} is invalid`);
    return;
  }
  movie.ratings!.push(rating);
  console.log(`Rating ${rating} has been successfully added to movie with id ${id}`);
}

function getAverageRating(id: string): number | undefined {
  const movie = mapMovies.get(id);
  if (!movie) {
    console.error(`Movie with id ${id} does not exist`);
    return undefined;
  }
  if (movie.ratings.length === 0) {
    console.warn(`Movie with id ${id} has no ratings`);
    return undefined;
  }
  return (
    movie.ratings.reduce((acc, rating) => acc + rating, 0) /
    movie.ratings.length
  );
}

function getTopRatedMovies(): Movie[] {
  const movies = Array.from(mapMovies.values()).map((movie) => ({...movie,avgRating: getAverageRating(movie.id) ?? 0, }));
  return movies.sort((a, b) => b.avgRating - a.avgRating);
}

function getMoviesByGenre(genre: string): Movie[] {
  return Array.from(mapMovies.values()).filter(
    (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
  );
}

function getMoviesByDirector(director: string): Movie[] {
  return Array.from(mapMovies.values()).filter(
    (movie) => movie.director.toLowerCase() === director.toLowerCase()
  );
}

function searchMoviesBasedOnKeyword(keyword: string): Movie[] {
  return Array.from(mapMovies.values()).filter((movie) =>
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

function getMovie(id: string): Movie | undefined {
  const mov = mapMovies.get(id);
  return mov;
}

function removeMovie(id: string): void {
  if (mapMovies.delete(id)) {
    console.log(`Movie with id ${id} has been successfully removed`);
  } else {
    console.error(`Movie with id ${id} does not exist`);
  }
}

export {
  addMovie,
  rateMovie,
  getAverageRating,
  getTopRatedMovies,
  getMoviesByGenre,
  getMoviesByDirector,
  searchMoviesBasedOnKeyword,
  getMovie,
  removeMovie,
};
