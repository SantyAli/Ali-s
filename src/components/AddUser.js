import { useState } from "react";
import Button from "./Button";
export const AddUser = ({ onAdd }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please Enter the Entries");
      return;
    }
    console.log("body", { email, password });
    onAdd({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ width: "100%" }}>
        <Button type="submit" color="darkblue" text="Log In" />
      </div>
    </form>
  );
};

export default AddUser;
