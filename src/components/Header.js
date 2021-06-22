import PropTypes from "prop-types";
export const Header = ({ title }) => {
  return (
    <div>
      <header>
        <div style={{ textAlign: "center" }}>
          <img
            src={"/images/login-logo.jpg"}
            alt="It is the Login Logo"
            width="60"
            height="auto"
          />
        </div>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            color: "darkblue",
          }}
        >
          {title}
        </h1>
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Santy's Page",
};

Header.propTypes = {
  title: PropTypes.string,
};

// const headingstyle = {
//   margin: 'auto',
//   margi
// }

export default Header;
