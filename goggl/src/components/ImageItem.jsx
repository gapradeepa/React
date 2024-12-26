import styles from "./imageitem.module.css";

const ImageItem = ({ item }) => {
  return (
    <div className={`${styles.cardStyle} card`}>
      <a href={item.imageUrl} target="_blank">
        <img
          src={item.thumbnailUrl}
          className="card-img-top"
          alt={item.title}
        ></img>
      </a>
      <div className="card-body">
        <a href={item.link} target="_blank">
          <p className="card-text">{item.title}</p>
        </a>
      </div>
    </div>
  );
};
export default ImageItem;
