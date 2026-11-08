import { useNavigate } from "react-router-dom";
import { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);

    localStorage.removeItem("token");
    navigate("/login");
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });

      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Não foi possível realizar o login.");
      }

      const { token } = json;

      localStorage.setItem("token", token);

      await getUser(token);

      navigate("/conta");
    } catch (e) {
      setError(e.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLogin(false);
        return;
      }

      try {
        setError(null);
        setLoading(true);

        const { url, options } = TOKEN_VALIDATE_POST(token);

        const response = await fetch(url, options);

        if (!response.ok) throw new Error("Token inválido");

        await getUser(token);
      } catch (error) {
        userLogout();
      } finally {
        setLoading(false);
      }
    };
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ data, error, loading, login, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
