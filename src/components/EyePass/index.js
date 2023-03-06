import { Component } from "react";
import "./styles.css";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";

class EyePass extends Component {
  state = { isVisible: true };

  toggleVisibility = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    const { className } = this.props;

    return (
      <>
        {isVisible ? (
          <AiFillEyeInvisible
            onClick={this.toggleVisibility}
            className={`password-eye ${className}`}
          />
        ) : (
          <AiOutlineEye
            onClick={this.toggleVisibility}
            className={`password-eye ${className}`}
          />
        )}
      </>
    );
  }
}

export default EyePass;
