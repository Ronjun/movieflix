import { useEffect, useState } from "react";
import { makePrivateRequest } from "../../Api/request";
import Pagination from "../../components/Pagination";
import { MoviesResponse } from "../../types";
import MovieCard from "./MovieCard";
import "./styles.scss";
import { Link } from "react-router-dom";
import Select from "react-select";

export default function Catalog() {
  const [movies, setMovies] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);
  const [id, setId] = useState(0);

  const options = [
    { value: "0", label: "Todos os Gêneros" },
    { value: "1", label: "Ação" },
    { value: "2", label: "Drama" },
    { value: "3", label: "Aventura" },
    { value: "4", label: "Fantasia" },
  ];

  useEffect(() => {
    const params = {
      genreId: id,
      page: activePage,
      linesPerPage: 12,
    };
    makePrivateRequest({ url: "/movies", params }).then((response) =>
      setMovies(response.data)
    );
  }, [activePage, id]);

  function onSubmit(data: any) {
    setId(data.value);
    setActivePage(0);
  }

  return (
    <div className="catalog-container">
      <div className="searchbar-container">
        <Select
          placeholder="Todos os Gêneros"
          name="genre"
          className="select-container"
          classNamePrefix="select-options"
          options={options}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,

            colors: {
              ...theme.colors,
              primary25: "yellow",
              primary: "orange",
              neutral0: "#6c6c6c",
              neutral90: "#fff",
              neutral80: "#fff",
              neutral70: "#fff",
              neutral60: "#fff",
              neutral50: "#fff",
              neutral40: "#fff",
              neutral30: "#fff",
            },
          })}
          styles={{
            control: (base) => ({
              ...base,
              height: 48,
              width: 250,
            }),
          }}
          onChange={onSubmit}
        />
      </div>

      <div className="catalog-grid">
        <div className="catalog-card-container d-grid">
          {movies?.content.map((movie) => (
            <Link
              to={`/catalog/${movie.id}`}
              key={movie.id}
              className="text-decoration-none"
            >
              <MovieCard movie={movie} key={movie.id} />
            </Link>
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
