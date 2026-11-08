import Image from "../../helper/Image";

import styles from "./css/feed-photo-item.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
