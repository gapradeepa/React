import styles from "./searchNavigation.module.css";
import { Link } from "react-router-dom";

const SearchNavigation = () => {
  return (
    <div className={`${styles.aligncontainer} container text-center`}>
      <div className="row">
        <div className="col icon-link">
          <Link className="link-icon" to="/search">
            All
          </Link>
        </div>
        <div className="col">
          <Link className="link-icon" to="/images">
            Images
          </Link>
        </div>
        <div className="col">
          <Link className="link-icon" to="/videos">
            Videos
          </Link>
        </div>
        <div className="col">
          <Link className="link-icon" to="/news">
            News
          </Link>
        </div>
        <div className="col">
          <Link className="link-icon" to="/shopping">
            Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchNavigation;
