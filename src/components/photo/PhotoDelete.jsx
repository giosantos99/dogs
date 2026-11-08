import sytles from "./css/photo-delete.module.css";

import { PHOTO_DELETE } from "../../api";

import useFetch from "../../hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Tem certeze que deseja deletar?");

    if (!confirm) return;

    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_DELETE(token, id);

    const { response } = await request(url, options);

    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={sytles.delete}>
          Carregando...
        </button>
      ) : (
        <button onClick={handleClick} className={sytles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
