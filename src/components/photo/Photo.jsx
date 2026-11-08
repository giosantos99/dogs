import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

import { PHOTO_GET } from "../../api";

import Error from "../../helper/Error";
import Loading from "../../helper/Loading";
import Head from "../../helper/Head";

import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);

    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />

        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;
