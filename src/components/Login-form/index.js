import { Component } from "react";
import "./styles.css";
import EyePass from "../EyePass";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueLogin: "",
      valuePass: "",
      Toggle: true,
    };

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleClickPass = this.handleClickPass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLogin(event) {
    this.setState({
      valueLogin: event.target.value,
    });
  }

  handleChangePass(event) {
    this.setState({
      valuePass: event.target.value,
    });
  }

  handleClickPass() {
    this.setState((prevState) => ({
      Toggle: !prevState.Toggle,
    }));
  }

  handleSubmit = (event) => {
    const { valueLogin, valuePass } = this.state;
    alert(`Login: ${valueLogin} Pass: ${valuePass}`);
    event.preventDefault();
  };

  render() {
    return (
      <form className="login__form" onSubmit={this.handleSubmit}>
        <input
          className="login__input"
          placeholder="User Name"
          type="text"
          value={this.state.valueLogin}
          onChange={this.handleChangeLogin}
        />
        <input
          className="login__input"
          placeholder="Password"
          type={this.state.Toggle ? "text" : "password"}
          value={this.state.valuePass}
          onChange={this.handleChangePass}
        />
        <div onClick={this.handleClickPass}>
          <EyePass />
        </div>
        <input className="login__btn" type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
