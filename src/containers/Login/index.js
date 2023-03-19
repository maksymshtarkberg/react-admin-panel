import React, { useState } from "react";
import "./styles.css";
import LoginForm from "../../components/Login-form";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        if (token) {
          navigate("/admin");
        } else {
          navigate("/login");
        }
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again later");
    }
  };

  return (
    <div className="login__container">
      <div className="login__block">
        <div className="login__sing-pos">
          <img src={logo} className="login__logo"></img>
          <span className="login__text">ROZETKA</span>
        </div>
        <LoginForm onSubmit={handleLoginFormSubmit} error={error} />
      </div>
    </div>
  );
}

export default LoginPage;
