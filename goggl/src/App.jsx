import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routers from "./components/Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import Result from "./components/Result";
import SearchNavigation from "./components/SearchNavigation";

const App = () => {
  return (
    <>
      <div>
        <div>
          <ResultContextProvider>
            <Navbar />
            <Routers />
          </ResultContextProvider>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
