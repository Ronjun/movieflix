import "./styles.scss";
import { ReactComponent as Temp } from "./temp.svg";
import { useForm } from "react-hook-form";
import Review from "./Review";

export default function Details() {
  const { register, handleSubmit } = useForm();

  function onSubmit(){
    console.log("enviado");
  }
  return (
    <div className="details-container">
      <div className="movie-details">
        <Temp className="movie-image" />
        <div className="movie-details-container">
          <h1 className="movie-title">O Retorno do Rei</h1>
          <h2 className="movie-year">2013</h2>
          <h5 className="movie-subtitle">O olho do inimigo está se movendo</h5>
          <div className="movie-description-container">
            <p className="movie-description">
              O confronto final entre as forças do bem e do mal que lutam pelo
              controle do futuro da Terra Média se aproxima. Sauron planeja um
              grande ataque a Minas Tirith, capital de Gondor, o que faz com que
              Gandalf e Pippin partam para o local na intenção de ajudar a
              resistência. Um exército é reunido por Theoden em Rohan, em mais
              uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo,
              Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para
              destruir o anel.
            </p>
          </div>
        </div>
      </div>
      <div className="review-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea className="input-container" ref={register} name="review" placeholder="Deixe sua avaliação aqui"/>
          <button className="save-button">SALVAR AVALIAÇÃO</button>
        </form>
      </div>
      <div className="review-list-container">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}
