import { useContext, useEffect, useRef, useState } from "react";

import { UserContext } from "../../contexts/UserContext";

import styles from "./css/photo-comments.module.css";

import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = ({ id, comments, single }) => {
  const [listComments, setListComments] = useState(() => comments);
  const commentsSection = useRef();
  const { login } = useContext(UserContext);

  useEffect(() => {
    setListComments(comments);
  }, [comments]);

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [listComments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ""}`}
      >
        {listComments.map(({ comment_ID, comment_author, comment_content }) => (
          <li key={comment_ID}>
            <b>{comment_author}: </b>
            <span>{comment_content}</span>
          </li>
        ))}
      </ul>

      {login && (
        <PhotoCommentsForm
          single={single}
          setListComments={setListComments}
          id={id}
        />
      )}
    </>
  );
};

export default PhotoComments;
