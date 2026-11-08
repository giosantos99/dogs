import { useState } from "react";

import styles from "./css/photo-comments-form.module.css";

import useFetch from "../../hooks/useFetch";
import { COMMENT_POST } from "../../api";

import Enviar from "../../assets/enviar.svg?react";
import Error from "../../helper/Error";

const PhotoCommentsForm = ({ id, setListComments, single }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(token, id, { comment });

    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setListComments((comments) => [...comments, json]);
    }
  };

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target: { value } }) => setComment(value)}
      />
      <button className={styles.button} type="submit">
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
