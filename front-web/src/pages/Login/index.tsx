import { ReactComponent as LoginImage } from "../../assets/loginImage.svg";
import LoginCard from "./LoginCard";
import "./styles.scss";

export default function Login() {
  return (
    <div className="login-background-container">
      <div className="login-container">
        <h1 className="login-title">Avalie filmes</h1>
        <p className="login-text">
          Diga o que você achou do seu filme favorito
        </p>
        <LoginImage className="login-image" />
      </div>
      <LoginCard />
    </div>
  );
}
