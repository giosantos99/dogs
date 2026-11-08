import { useState } from "react";
import styles from "./css/image.module.css";

const Image = ({ alt, src, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = (event) => {
    setSkeleton(false);
    setError(false);
    event.currentTarget.style.opacity = 1;
  };

  const handleError = (event) => {
    console.error("Erro ao carregar imagem:", event.currentTarget.src);

    setSkeleton(false);
    setError(true);
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}

      {error && <div role="status">Não foi possível carregar a imagem.</div>}

      <img
        {...props}
        src={src}
        onLoad={handleLoad}
        onError={handleError}
        className={styles.img}
        alt={alt}
      />
    </div>
  );
};

export default Image;
