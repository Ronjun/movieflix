import "./styles.scss";
import { useForm } from "react-hook-form";
import Review from "./Review";
import { useEffect, useState } from "react";
import { Movie } from "../../types";
import { useParams } from "react-router-dom";
import { makePrivateRequest } from "../../Api/request";

type ParamsType = {
  movieId: string;
};

export default function Details() {
  const { movieId } = useParams<ParamsType>();
  const { register, handleSubmit } = useForm();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    makePrivateRequest({url:`/movies/${movieId}`})
    .then((response) => setMovie(response.data));

  }, [movieId]);

  function onSubmit() {
    console.log("enviado");
  }
  return (
    <div className="details-container">
      <div className="movie-details">
        <img src={movie?.imgUrl} alt={movie?.title} className="movie-image"/>
        <div className="movie-details-container">
          <h1 className="movie-title">{movie?.title}</h1>
          <h2 className="movie-year">{movie?.id}</h2>
          <h5 className="movie-subtitle">{movie?.subtitle}</h5>
          <div className="movie-description-container">
            <p className="movie-description">{movie?.synopsis}</p>
          </div>
        </div>
      </div>
      <div className="review-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="input-container"
            ref={register}
            name="review"
            placeholder="Deixe sua avaliação aqui"
          />
          <button className="save-button">SALVAR AVALIAÇÃO</button>
        </form>
      </div>
      <div className="review-list-container">
        {movie?.reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}
