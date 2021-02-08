import { useEffect, useState } from "react";
import { makePrivateRequest } from "../../Api/request";
import Pagination from "../../components/Pagination";
import { MoviesResponse } from "../../types";
import MovieCard from "./MovieCard";
import "./styles.scss";
import { useForm } from "react-hook-form";

export default function Catalog() {
  const [movies, setMovies] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);
  const { register, handleSubmit } = useForm();
  const [id, setId] = useState(0);

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
    setId(data.genreId);
    setActivePage(0);
  }

  return (
    <div className="catalog-container">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="searchbar-container"
          name="genre"
        >
          <select className="select-container" name="genreId" ref={register} >
            <option value="0">Todos os Gêneros</option>
            <option value="1">Ação</option>
            <option value="2">Drama</option>
            <option value="3">Aventura</option>
            <option value="4">Fantasia</option>
          </select>
          <button className="select-container">Filtrar</button>
        </form>
      </div>
      <div className="catalog-grid">
        <div className="catalog-card-container d-grid">
          {movies?.content.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
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
