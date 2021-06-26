import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <div className={style.buttonWraper}>
      <button className={style.button} type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
