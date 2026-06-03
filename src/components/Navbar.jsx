import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <h2>NewsNow</h2>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/india"
          className={location.pathname === "/india" ? "active" : ""}
        >
          India
        </Link>

        <Link
          to="/world"
          className={location.pathname === "/world" ? "active" : ""}
        >
          World
        </Link>

        <Link
          to="/upsc"
          className={location.pathname === "/upsc" ? "active" : ""}
        >
          UPSC
        </Link>

        <Link
          to="/nta"
          className={location.pathname === "/nta" ? "active" : ""}
        >
          NTA
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;