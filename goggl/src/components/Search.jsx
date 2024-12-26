import { useContext } from "react";
import styles from "./search.module.css";
import { ResultContext } from "../contexts/ResultContextProvider";
import SearchNavigation from "./SearchNavigation";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Search = () => {
  const { getResults, searchTerm, setSearchTerm } = useContext(ResultContext);
  const location = useLocation();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    console.log("in handle submit");
    e.preventDefault();
    setSearchTerm(text);
  };

  return (
    <>
      <div className={styles.container}>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            onClick={(e) => handleSubmit(e)}
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <SearchNavigation></SearchNavigation>
      </div>
    </>
  );
};
export default Search;
