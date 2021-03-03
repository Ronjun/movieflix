import "./styles.scss";
import { Movie } from "../../types";

type Props = {
  movie: Movie;
}

export default function MovieCard({movie}: Props) {

  return (
    <div className="card-container" >
      <img src={movie.imgUrl} alt={movie.title} className='card-image'/>
      <div className='pl-3 pt-2 pr-3'>
        <h3 className="card-title">{movie.title}</h3>
        <h4 className="card-year">{movie.year}</h4>
        <p className="card-subtitle">{movie.subtitle}</p>
      </div>
    </div>
  );
}
