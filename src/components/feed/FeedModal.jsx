import { useEffect } from "react";
import styles from "./css/feed-modal.module.css";

import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../api";

import Error from "../../helper/Error";
import Loading from "../../helper/Loading";
import PhotoContent from "../photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);

    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = ({ target, currentTarget }) => {
    target === currentTarget && setModalPhoto(null);
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}

      {loading && <Loading />}

      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
