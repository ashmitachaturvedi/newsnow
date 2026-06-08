import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

const user = JSON.parse(
  localStorage.getItem("user") || "null"
);

  const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};

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

{user && (
  <Link
    to="/saved"
    className={location.pathname === "/saved" ? "active" : ""}
  >
    Saved
  </Link>
)}

  {user ? (
    <>
       <Link to="/profile">Profile</Link>

      <button onClick={logout}>
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login">Login</Link>

      <Link to="/signup">Signup</Link>
    </>
  )}
</div>
    </nav>
  );
}

export default Navbar;