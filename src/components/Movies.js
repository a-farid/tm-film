import React from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = React.useState([]);
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ3NGYyZTU0NGYxNzYyNzQ4OWYxNTM1ZjJhYjYwOSIsInN1YiI6IjY0M2E3YzIzZThkMGI0MTA5OWNkODMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k4S4EpPsN8A1_07VBliun3S4guZoHil0JEIAU2FafDI",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  };
  const moviesItems = movies.map((movie) => {
    return (
      <div key={movie.id} className="movie-card">
        <Link to={`/movies/${movie.id}`}>
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={`poster of ${movie.title}`}
          />
          <div className="movie-title">{movie.title}</div>
        </Link>
      </div>
    );
  });
  React.useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="App">
      <div className="movies-list">{moviesItems}</div>
    </div>
  );
}
