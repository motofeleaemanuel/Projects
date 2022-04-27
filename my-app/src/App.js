import { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "./card";

const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=bf4cca2f3964bedeb53acd076e52965c&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} + ${title}`);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <>
      <div className="title">
        <h1>MovieSearch</h1>
      </div>
      <div className="search-bar">
        <input
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button onClick={() => searchMovies(searchTerm)}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>
      <div className="cards">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
