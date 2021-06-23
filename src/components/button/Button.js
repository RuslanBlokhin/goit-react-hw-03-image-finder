import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <div className={style.buttonWraper}>
      <button className={style.button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
