
import { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user = 0 }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    let timeoutId;

    const infiniteScroll = () => {
      if (!infinite || wait) return;

      const scroll = window.scrollY;
      const height =
        document.body.offsetHeight - window.innerHeight;

      if (scroll > height * 0.75) {
        wait = true;

        setPages((previousPages) => [
          ...previousPages,
          previousPages.length + 1,
        ]);

        timeoutId = setTimeout(() => {
          wait = false;
        }, 500);
      }
    };

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
      clearTimeout(timeoutId);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal
          setModalPhoto={setModalPhoto}
          photo={modalPhoto}
        />
      )}

      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
