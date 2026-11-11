import { useEffect } from "react";

import styles from "./css/feed-photo.module.css";

import useFetch from "../../hooks/useFetch";

import { PHOTOS_GET } from "../../api";

import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../../helper/Error";
import Loading from "../../helper/Loading";

const FeedPhotos = ({ user, page, setInfinite, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;

      const { url, options } = PHOTOS_GET({ page, total, user });

      const { response, json } = await request(url, options);

      if (response && response.ok && json?.length < total) {
        setInfinite(false);
      }
    };

    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            photo={photo}
            key={photo.id}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
