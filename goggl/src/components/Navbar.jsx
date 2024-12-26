import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            🔎AetherFind
          </Link>
          <ThemeToggle></ThemeToggle>
        </div>
      </nav>
      <Search></Search>
    </>
  );
};
export default Navbar;
