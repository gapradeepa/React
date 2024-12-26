import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
const ResultContext = createContext();
const baseURL = "https://google-search-master.p.rapidapi.com/";
const endURL = "?gl=us&hl=en&autocorrect=true&num=10&page=1&q=";

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [path, setPath] = useState("");
  const location = useLocation();

  const getResults = async (type) => {
    if (type != "") {
      setIsLoading(true);

      let url = `${baseURL}search?q=${type}`;
      switch (location.pathname) {
        case "/images":
          url = `${baseURL}images${endURL}${type}`;
          break;
        case "/videos":
          url = `${baseURL}videos${endURL}${type}`;
          break;
        case "/news":
          url = `${baseURL}news${endURL}${type}`;
          break;
        case "/shopping":
          url = `${baseURL}shopping${endURL}${type}`;
          break;
        default:
          url = `${baseURL}search${endURL}${type}`;
          break;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "edb3794938msh52736cd61778221p122b42jsndfeb4c26b7d8",
          "x-rapidapi-host": "google-search-master-mega.p.rapidapi.com",
        },
      });
      const data = await response.json();

      setResults(data);
      setIsLoading(false);
    }
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
        path,
        setPath,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContextProvider, ResultContext };
