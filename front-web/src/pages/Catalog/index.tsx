import { useEffect, useState } from "react";
import { makePrivateRequest } from "../../Api/request";
import Pagination from "../../components/Pagination";
import { MoviesResponse } from "../../types";
import MovieCard from "./MovieCard";
import "./styles.scss";

export default function Catalog() {
  const [movies, setMovies] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 12,
    };
    makePrivateRequest({ url: "/movies", params }).then((response) =>
      setMovies(response.data)
    );
  }, [activePage]);

  return (
    <div className="catalog-container">
      <div className="searchbar-container">
        <select className="select-container">
          <option>genero</option>
          <option>ação</option>
          <option>aventura</option>
          <option>corrida</option>
        </select>
      </div>
      <div className="catalog-grid">
        <div className="catalog-card-container d-grid">
          {movies?.content.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
      {movies && (
        <Pagination
          totalPages={movies.totalPages}
          activePage={activePage}
          onChange={(page) => setActivePage(page)}
        />
      )}
    </div>
  );
}
