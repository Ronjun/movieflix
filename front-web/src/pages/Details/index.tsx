import "./styles.scss";
import { useForm } from "react-hook-form";
import Review from "./Review";
import { useEffect, useState } from "react";
import { Movie } from "../../types";
import { useParams } from "react-router-dom";
import { makePrivateRequest } from "../../Api/request";
import { getAccessTokenDecoded, isAllowedByRole } from "../../Api/auth";
import { toast } from 'react-toastify';

type ParamsType = {
  movieId: string;
};

type ReviewType = {
  movieId: number;
  text: string;
}

export default function Details() {
  const { movieId } = useParams<ParamsType>();
  const { register, handleSubmit, reset } = useForm<ReviewType>();
  const [movie, setMovie] = useState<Movie>();
  const [currentUser, setCurrentUser] = useState('');
  const [newReview, setNewReview] = useState(false);

  useEffect(() => {
    makePrivateRequest({ url: `/movies/${movieId}` }).then((response) =>
      setMovie(response.data)
    );
    const currentUserData = getAccessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
  }, [movieId, newReview]);

  async function onSubmit(value: ReviewType) {
    const data = {
      movieId: movie?.id,
      text: value.text,
    }
    await makePrivateRequest({method: 'POST', url:'/reviews', data})
    setNewReview(!newReview);
    reset();
    toast.warn('Review salvo com sucesso!')
  }
  return (
    <div className="details-container">
      <div className="movie-details">
        <img src={movie?.imgUrl} alt={movie?.title} className="movie-image" />
        <div className="movie-details-container">
          <h1 className="movie-title">{movie?.title}</h1>
          <h2 className="movie-year">{movie?.year}</h2>
          <h5 className="movie-subtitle">{movie?.subtitle}</h5>
          <div className="movie-description-container">
            <p className="movie-description">{movie?.synopsis}</p>
          </div>
        </div>
      </div>
      {currentUser &&
        isAllowedByRole(['ROLE_MEMBER']) &&
        (<div className="review-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="input-container"
              ref={register}
              name="text"
              placeholder="Deixe sua avaliação aqui"
            />
            <button className="save-button">SALVAR AVALIAÇÃO</button>
          </form>
        </div>)
      }
      <div className="review-list-container">
        {movie?.reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}
