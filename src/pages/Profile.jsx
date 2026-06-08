import Navbar from "../components/Navbar";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div className="profile-card">

          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <h1>{user?.name}</h1>

          <p>{user?.email}</p>

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

        </div>
      </div>
    </>
  );
}

export default Profile;