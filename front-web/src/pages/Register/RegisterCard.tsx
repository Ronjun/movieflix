import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { makeRequest } from "../../Api/request";
import "./styles.scss";

type FormState = {
  name: string;
  email: string;
  password: string;
  retype: string;
  roles: [
    {
      id: number;
    }
  ];
};

export default function RegisterCard() {
  const { register, handleSubmit, errors, watch } = useForm<FormState>();
  const history = useHistory();

  function onSubmit(value: FormState) {
    const data = {
      name: value.name,
      email: value.email,
      password: value.password,
      roles: [
        {
          id: 2
        }
      ]
    }
    makeRequest({method: "POST", url: '/users', data })
    history.replace("/login");
  }

  return (
    <div className="register-card-container">
      <h1 className="register-card-title">Cadastrar</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              className="form-base form-control"
              ref={register({ required: "Campo obrigatório" })}
              placeholder="Nome"
              name="name"
            />
            {errors.name && (
              <div className="invalid-feedback d-block">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="mb-5">
            <input
              className="form-base form-control"
              ref={register({
                required: "Campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              placeholder="Email"
              name="email"
            />
            {errors.email && (
              <div className="invalid-feedback d-block">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="form-base form-control"
              ref={register({
                required: "Campo obrigatório",
                minLength: {
                  value: 8,
                  message: "A senha deve conter ao menos 8 caracteres",
                },
              })}
              placeholder="Senha"
              name="password"
            />
            {errors.password && (
              <div className="invalid-feedback d-block">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="form-base form-control"
              ref={register({
                required: "Campo obrigatório",
                validate: (value) => value === watch("password"),
              })}
              placeholder="Confirme a senha"
              name="retype"
            />
            {errors.retype && (
              <div className="invalid-feedback d-block">
                Os campos devem ser iguais
              </div>
            )}
          </div>
          <button className="register-button">Registrar</button>
        </form>
      </div>
    </div>
  );
}
