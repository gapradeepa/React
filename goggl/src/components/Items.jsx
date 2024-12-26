import { ResultContext } from "../contexts/ResultContextProvider";
import { useContext } from "react";
import styles from "./items.module.css";
import ImageItem from "./ImageItem";
import { useLocation } from "react-router-dom";
import VideoItem from "./VideoItem";
import News from "./News";
import Shopping from "./Shopping";

const Items = ({ path }) => {
  const { results, isLoading } = useContext(ResultContext);

  let res = "";
  console.log("path", path);
  switch (path) {
    case "/images":
      res = (
        <div className={styles.cards}>
          {console.log(results.images)}
          {results.images.map((item) => (
            <ImageItem key={item.title} item={item}></ImageItem>
          ))}
        </div>
      );
      break;
    case "/videos":
      res = (
        <div className={styles.videos}>
          {results.videos.map((item) => (
            <VideoItem key={item.title} item={item}></VideoItem>
          ))}
        </div>
      );
      break;
    case "/shopping":
      res = (
        <div className={styles.videos}>
          {results.shopping.map((item) => (
            <Shopping key={item.title} item={item}></Shopping>
          ))}
        </div>
      );
      break;
    case "/news":
      res = (
        <div className={styles.videos}>
          {results.news.map((item) => (
            <News key={item.title} item={item}></News>
          ))}
        </div>
      );
      break;
    case "/search":
    default:
      res = (
        <div className={styles.videos}>
          {results.organic.map((item) => (
            <News key={item.title} item={item}></News>
          ))}
        </div>
      );
      break;
  }

  return <div> {res} </div>;
};
export default Items;
