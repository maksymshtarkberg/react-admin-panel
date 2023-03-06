import React from "react";
import "./styles.css";
import LoginForm from "../Login-form";
import logo from "../../assets/logo.svg";

function LogoForm() {
  return (
    <div className="login__block">
      <div className="login__sing-pos">
        <img src={logo} className="login__logo"></img>
        <span className="login__text">ROZETKA</span>
      </div>
      <LoginForm />
    </div>
  );
}

export default LogoForm;
