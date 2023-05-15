import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function MovieDetail() {
  const [movie, setMovie] = React.useState([]);
  const [video, setVideo] = React.useState([]);
  const params = useParams();
  const fetchMovie = async () => {
    const options = {
      method: "GET",
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=0ed74f2e544f17627489f1535f2ab609`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  };
  const fetchvideo = async () => {
    const options = {
      method: "GET",
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=0ed74f2e544f17627489f1535f2ab609`,
      options
    )
      .then((response) => response.json())
      .then((response) => setVideo(response.results))
      .catch((err) => console.error(err));
  };
  React.useEffect(() => {
    fetchMovie();
    fetchvideo();
  }, []);
  console.log(`https://www.youtube.com/watch?v=${video[0]?.key}`);
  return (
    <div className="movie-container">
      <div
        className="background"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`,
        }}
      ></div>
      <div className="movie-img-card">
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`poster photo of ${movie.title}`}
        />
        {!movie.adult && (
          <img
            className="adult-img"
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/signs-symbols/adult-sign-icon.svg"
          />
        )}
        <div className="movie-vote">
          {Math.floor(movie.vote_average)}/10
          <img
            className="icon-img"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="movie-title">{movie.title}</div>
      <div className="movie-infos">
        <div className="movie-desc">
          <img className="icon-img" src="../img/timing.png" alt="" />
          <div className="movie-key">Duration</div>
          <div className="movie-value">{movie.runtime} min</div>
        </div>
        <div className="movie-desc">
          <img className="icon-img" src="../img/Budget.png" alt="" />
          <div className="movie-key">Budget</div>
          <div className="movie-value">
            {String(movie.budget).slice(0, 3)}m $
          </div>
        </div>
        <div className="movie-desc">
          <img className="icon-img" src="../img/year.png" alt="" />
          <div className="movie-key">Year</div>
          <div className="movie-value">
            {String(movie.release_date).slice(0, 4)}
          </div>
        </div>
      </div>
      <div className="movie-overview">{movie.overview}</div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video[0]?.key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
