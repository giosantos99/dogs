import Input from "../forms/Input";
import Button from "../forms/Button";

import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";

import { PASSWORD_LOST } from "../../api";

import Error from "../../helper/Error";
import Head from "../../helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!login.validate()) return;

    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: window.location.href.replace("esqueceu", "resetar"),
    });

    await request(url, options);
  };

  return (
    <section className="animeLeft">
      <Head title="Esqueceu a senha" />

      <h1 className="title">Esqueceu a senha?</h1>
      {!data ? (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button type="submit">Enviar Email</Button>
          )}
        </form>
      ) : (
        <p style={{ color: "#4c1" }}>{data}</p>
      )}
      {error && <Error error={error} />}
    </section>
  );
};

export default LoginPasswordLost;
