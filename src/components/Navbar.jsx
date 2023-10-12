import { useContext } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";

function Navbar() {
  const { color } = useThemeContext();
  return (
    <nav style={{ backgroundColor: color }}>
      <div className="align-elements flex justify-between items-center py-3">
        <Link className="text-3xl" to="/">
          Recipies
        </Link> 
        <Link className="btn btn-primary" to="/create">
          Create
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
