import { useState } from "react";
import "./styles.css";
import EyePass from "../EyePass";

function LoginForm({ onSubmit, error }) {
  const [valueLogin, setValueLogin] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleChangeLogin = (event) => {
    setValueLogin(event.target.value);
  };

  const handleChangePass = (event) => {
    setValuePass(event.target.value);
  };

  const handleClickPass = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (event) => {
    onSubmit(valueLogin, valuePass);
    event.preventDefault();
  };

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <input
        className="login__input"
        placeholder="User Name"
        type="text"
        value={valueLogin}
        onChange={handleChangeLogin}
      />
      <input
        className="login__input"
        placeholder="Password"
        type={toggle ? "text" : "password"}
        value={valuePass}
        onChange={handleChangePass}
      />
      {error && <div className="login__error">{error}</div>}
      <div onClick={handleClickPass}>
        <EyePass />
      </div>
      <input className="login__btn" type="submit" value="Login" />
    </form>
  );
}

export default LoginForm;
