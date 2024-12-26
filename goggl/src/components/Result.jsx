import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";
import styles from "./result.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Items from "./Items";

const Result = () => {
  const location = useLocation();

  const { getResults, results, searchTerm, isLoading, path, setPath } =
    useContext(ResultContext);

  if (location.pathname != path) {
    setPath(location.pathname);
  }

  useEffect(() => {
    console.log("in use effect");
    getResults(searchTerm);
  }, [searchTerm, path]);

  let display = "";
  if (isLoading) {
    display = <div className="text-start">Loading....</div>;
  } else if (
    results.length == 0 ||
    !(
      results.hasOwnProperty("images") ||
      results.hasOwnProperty("videos") ||
      results.hasOwnProperty("news") ||
      results.hasOwnProperty("shopping") ||
      results.hasOwnProperty("organic")
    )
  ) {
    display = (
      <div className="text-start">
        No result found or some error. Please retry with new search.
      </div>
    );
  } else {
    display = <Items path={path}></Items>;
  }

  return <div className={`${styles.container} container`}>{display}</div>;
};
export default Result;
