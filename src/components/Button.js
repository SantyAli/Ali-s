import PropTypes from "prop-types";

export const Button = ({ color, text, onClick }) => {


  return (
    <button style={{ background: color }} className="btn" onClick={onClick}>
        {/* { <img
            src={"/images/signup-logo.png"}
            alt="It is the button logo"
            width="20"
            height="auto"
            
          /> } */}
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "green",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
