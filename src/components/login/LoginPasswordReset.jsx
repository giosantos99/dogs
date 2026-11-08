import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Input from "../forms/Input";
import Button from "../forms/Button";

import Error from "../../helper/Error";
import Head from "../../helper/Head";

import { PASSWORD_RESET } from "../../api";

import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm("password");
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const key = params.get("key");
    const login = params.get("login");

    key && setKey(key);
    login && setLogin(login);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password.validate()) return;

    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });

    const { response } = await request(url, options);

    response.ok && navigate("/login");
  };

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />

      <h1 className="title">Resete a Senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button type="submit">Resetar</Button>
        )}
      </form>

      {error && <Error error={error} />}
    </section>
  );
};

export default LoginPasswordReset;
