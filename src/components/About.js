import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div style ={{ textAlign: "center" }} >
      <h2>Hello from the About Page</h2>
      <p>You can go back to the main page from the 'Go Back' option</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
