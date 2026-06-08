import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !password) {
    alert("All fields are required");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  try {
    const response = await fetch(
      "https://newsnow-68z3.onrender.com/api/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if(response.ok){
      alert(data.message);

      navigate("/login");
    }else{
      alert(data.message);
    }
  } catch(error){
    console.log(error);
  }
};

return (
  <div className="auth-container">
    <div className="auth-card">

      <h2 className="brand">NewsNow</h2>

      <h1>Sign Up</h1>

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="name"
          onChange={handleChange}
        />

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
          autoComplete="new-password"
          onChange={handleChange}
        />

        <button type="submit">
          Sign Up
        </button>
      </form>

      <p className="auth-link">
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>

    </div>
  </div>
);
}

export default Signup;