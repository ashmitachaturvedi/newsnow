import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div className="profile-card">

          <div className="profile-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <h1>My Profile</h1>

          <p className="profile-email">
            {user?.email}
          </p>

          <div className="profile-info">
            <h3>Account Information</h3>

            <p>
              <strong>Name:</strong>{" "}
              {user?.name}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {user?.email}
            </p>
          </div>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>
      </div>
    </>
  );
}

export default Profile;