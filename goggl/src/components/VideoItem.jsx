import ReactPlayer from "react-player";
import styles from "./videoitem.module.css";

const VideoItem = ({ item }) => {
  return (
    <div className={styles.cardStyle}>
      <a href={item.link} target="_blank">
        <p> {item.title} </p>
      </a>
      <p> {item.snippet}</p>
      <div className={styles.video}>
        <ReactPlayer url={item.link} controls width="355px" height="200px" />
      </div>
    </div>
  );
};
export default VideoItem;
