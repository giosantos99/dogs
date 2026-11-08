import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import styles from "./css/user-header-nav.module.css";

import { UserContext } from "../../contexts/UserContext";
import useMedia from "../../hooks/useMedia";

import MinhasFotos from "../../assets/feed.svg?react";
import Estatisticas from "../../assets/estatisticas.svg?react";
import Adicionar from "../../assets/adicionar.svg?react";
import Sair from "../../assets/sair.svg?react";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const { pathname } = useLocation();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const nav = [
    { to: "/conta", label: "Minhas Fotos", component: <MinhasFotos /> },
    {
      to: "/conta/estatisticas",
      label: "Estatísticas",
      component: <Estatisticas />,
    },
    { to: "/conta/postar", label: "Adicionar Foto", component: <Adicionar /> },
  ];

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${!mobile ? styles.nav : styles.navMobile} ${mobileMenu && styles.navMobileActive}`}
      >
        {nav.map(({ to, label, component }) => (
          <NavLink key={to} to={to} end={to === "/conta"}>
            {component}
            {mobile && label}
          </NavLink>
        ))}

        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
