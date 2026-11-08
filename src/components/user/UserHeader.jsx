import { useEffect, useState } from "react";

import styles from "./css/user-header.module.css";

import UserHeaderNav from "./UserHeaderNav";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const pathStrategy = {
      "/conta": "Minha Conta",
      "/conta/estatisticas": "Estatísticas",
      "/conta/postar": "Poste Sua Foto",
    };

    setTitle(pathStrategy[pathname] || "");
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
