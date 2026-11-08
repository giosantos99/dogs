import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./css/login-form.module.css";
import stylesBtn from "../forms/css/button.module.css";

import { UserContext } from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";

import Input from "../forms/Input";
import Button from "../forms/Button";

import Error from "../../helper/Error";
import Head from "../../helper/Head";

const LoginForm = () => {
  const { userLogin, error, loading } = useContext(UserContext);

  const username = useForm();
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate())
      userLogin(username.value, password.value);
  };

  return (
    <section className="animeLeft">
      <Head title="Login" />

      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}

        <Error error={error} />
      </form>

      <Link className={styles.esqueceu} to="/login/esqueceu">
        Esqueceu a Senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
