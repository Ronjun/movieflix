import "./styles.scss";
import { useForm } from "react-hook-form";
import { ReactComponent as Arrow } from "./arrow.svg";
import { makeLogin } from "../../Api/request";
import { Link, useHistory } from "react-router-dom";
import { saveSessionData } from "../../Api/auth";
import { useState } from "react";
import { ReactComponent as EyeOpened } from "../../assets/eyeOpened.svg";
import { ReactComponent as EyeClosed } from "../../assets/eyeClosed.svg";

type FormState = {
  username: string;
  password: string;
};

export default function LoginCard() {
  const { register, handleSubmit, errors } = useForm<FormState>();
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  async function onSubmit(data: FormState) {
    await makeLogin(data)
      .then((response) => {
        setHasError(false);
        saveSessionData(response.data);
        history.push("/catalog");
      })

      .catch(() => {
        setHasError(true);
      });
  }

  function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    makeLogin({ username: "bob@gmail.com", password: "123456" })
      .then((response) => {
        setHasError(false);
        saveSessionData(response.data);
        history.push("/catalog");
      })
      .catch(() => {
        setHasError(true);
      });
  }

  return (
    <div className="login-card-container">
      <h1 className="login-card-title mb-5">Login</h1>
      {hasError && (
        <div className="alert alert-danger mt-5 mr-5 ml-5">
          Usuário ou senha inválidos!
        </div>
      )}
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            className={`form-control form-base ${
              errors.username ? "is-invalid" : ""
            }`}
            name="username"
            placeholder="Email"
            ref={register({
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
          />
          {errors.username && (
            <div className="invalid-feedback d-block">
              {errors.username.message}
            </div>
          )}
        </div>
        <div className="mt-5">
          <input
            type={hidePassword ? "password" : "text"}
            className={`form-control form-base ${
              errors.password ? "is-invalid" : ""
            }`}
            name="password"
            placeholder="Senha"
            ref={register({ required: "Campo obrigatório" })}
          />
          {hidePassword ? (
            <EyeClosed
              onClick={() => setHidePassword(!hidePassword)}
              className="eyes-icon"
            />
          ) : (
            <EyeOpened
              onClick={() => setHidePassword(!hidePassword)}
              className="eyes-icon"
            />
          )}
          {errors.password && (
            <div className="invalid-feedback d-block">
              {errors.password.message}
            </div>
          )}
        </div>
        <div className="button-container">
          <button className="button-text-container">
            <h5 className="button-text">Logar</h5>
          </button>
          <div className="arrow-container">
            <Arrow />
          </div>
        </div>
        <div className="ml-5 mt-3">
          <p className="helper-text">
            Não tem uma conta?<Link to="/register"> CADASTRE-SE </Link>
          </p>
          <p className="helper-text">
            Ou fazer login como {""}
            <b onClick={onClick}>VISITANTE</b>
          </p>
        </div>
      </form>
    </div>
  );
}
