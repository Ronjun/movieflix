import "./styles.scss";
import RegisterCard from './RegisterCard';
import { ReactComponent as RegisterImage } from '../../assets/loginImage.svg';

export default function Register() {
  return (
    <div className="register-background-container">
      <div className="register-container">
        <h1 className="register-title">Venha para a melhor <br/>comunidade de filmes!</h1>
        <p className="register-text">Diga o que você achou do seu filme favorito</p>
        <RegisterImage className="register-image"/>
      </div>
      <RegisterCard />
    </div>
  )
}
