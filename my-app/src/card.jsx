import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="misterious">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : `https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png`
          }
        ></img>
      </div>
      <div className="movie-card-specs">
        <p>Title: {movie.original_title}</p>
        <p>Release date: {movie.release_date}</p>
        <p>Ranking: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
