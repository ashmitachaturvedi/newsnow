import { useState } from "react";
import loginImage from "../assets/news.png";
import { useNavigate,Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://newsnow-68z3.onrender.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/");

    } else {
      alert(data.message);
    }
  };

return (
  <div className="auth-container">
    <div className="auth-card">

      <h2 className="brand">
        NewsNow
      </h2>

      <h1>Login</h1>

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>
      </form>

      <p className="auth-link">
        New user? <Link to="/signup">Sign Up</Link>
      </p>

    </div>
  </div>
);
} 
export default Login;