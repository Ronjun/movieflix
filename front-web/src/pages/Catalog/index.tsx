import { useEffect, useState } from "react";
import { makePrivateRequest } from "../../Api/request";
import { MoviesResponse } from "../../types";
import MovieCard from "./MovieCard";
import "./styles.scss";

export default function Catalog() {
  const [movies, setMovies] = useState<MoviesResponse>();

  useEffect(()=>{
    makePrivateRequest({url: '/movies'}).then(response => setMovies(response.data));
  },[])

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
      <div className='catalog-grid'>
        <div className="catalog-card-container d-grid">
          {
            movies?.content.map(movie =>(
              <MovieCard movie={movie} />
            ))
          }
        </div>
      </div>
      <div className="catalog-navigation-container">
        <div className='catalog-navigation-number'>1</div>
        <div className='catalog-navigation-number'>2</div>
        <div className='catalog-navigation-number'>3</div>
        <div className='catalog-navigation-number'>4</div>
      </div>
    </div>
  );
}
