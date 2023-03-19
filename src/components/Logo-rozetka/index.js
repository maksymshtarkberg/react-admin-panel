import logo from "../../assets/logo.svg";
import "./styles.css";

const RozetkaLogo = () => {
  return (
    <div className="login__preview-pos">
      <img src={logo} className="login__logo"></img>
      <span className="login__preview-text">ROZETKA</span>
    </div>
  );
};

export default RozetkaLogo;
