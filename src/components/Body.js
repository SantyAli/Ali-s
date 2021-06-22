import { Link } from "react-router-dom";
import Button from "./Button";
import AddUser from "./AddUser";
import Footer from "./Footer";
export const Body = ({ addMember, onAddi }) => {
  return (
    <div>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <Link to="/signup">
          <Button color="darkblue" text="Sign Up" onClick={onAddi} />
        </Link>
      </div>
      <div style={{ textAlign: "center" }}>
        <AddUser onAdd={addMember} />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
