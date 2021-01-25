import "./styles.scss";
import { useForm } from "react-hook-form";
import { ReactComponent as Arrow } from "./arrow.svg";
import { makeLogin } from "../../Api/request";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

type FormState = {
  username: string;
  password: string;
};

export default function LoginCard() {
  const { register, handleSubmit, errors } = useForm<FormState>();
  const history = useHistory();
  const [hasError, setHasError] = useState(false);

  function onSubmit(data: FormState) {
    makeLogin(data)
      .then((response) => {
        setHasError(false);
        history.push("/catalog");
      })

      .catch(() => {
        setHasError(true);
      });
  }

  function onClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    try {
      makeLogin({ username: "bob@gmail.com", password: "123456" }).then(
        (response) => {
          setHasError(false);
          history.push("/catalog");
        }
      );
    } catch (error) {
      setHasError(true);
    }
  }

  return (
    <div className="login-card-container">
      <h1 className="login-card-title">Login</h1>
      {hasError && (
        <div className="alert alert-danger mt-5">
          Usuário ou senha inválidos!
        </div>
      )}
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
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
            type="password"
            className={`form-control form-base ${
              errors.username ? "is-invalid" : ""
            }`}
            name="password"
            placeholder="Senha"
            ref={register({ required: "Campo obrigatório" })}
          />
          {errors.password && (
            <div className="invalid-feedback d-block">
              {errors.password.message}
            </div>
          )}
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
              Não tem uma conta?<a href="register"> CADASTRE-SE </a>
            </p>
            <p className="helper-text">
              Ou fazer login como{" "}
              <a href="catalog" onClick={onClick}>
                {" "}
                VISITANTE{" "}
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
