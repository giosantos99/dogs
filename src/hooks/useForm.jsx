import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: "Preencha um e-mail válido.",
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
    message:
      "A senha precisa ser 1 caracter maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas.",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setErro] = useState(null);

  const onChange = ({ target: { value } }) => {
    setValue(value);
    error && validate(value);
  };

  const validate = (valueAtual = value) => {
    if (type === false && !valueAtual.trim()) {
      setErro(null);
      return true;
    }

    if (!valueAtual.trim()) {
      setErro("Preencha um valor");
      return false;
    }

    if (type && types[type] && !types[type].regex.test(valueAtual)) {
      setErro(types[type].message);
      return false;
    }

    setErro(null);
    return true;
  };

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
