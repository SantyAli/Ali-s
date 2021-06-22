import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Signup from "./components/Signup";
import About from "./components/About";
function App() {
  const [showAddMember, setShowAddMember] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      const membersFromServer = await fetchMembers();
      setMembers(membersFromServer);
    };
    getMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await fetch("http://localhost:5000/members");
    const data = await res.json();
    return data;
  };

  const addMember = async (member) => {
    const res = await fetch("http://localhost:5000/members", {
      method: "POST",
      headers: {
        "Content-type": "application.json",
      },
      body: JSON.stringify(member),
    });
    const data = await res.json();

    setMembers([...members, data]);
  };

  return (
    <Router>
      <div className="container">
        <div className="boxleft box">
          <Header />
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <Body
                  members={members}
                  addMember={addMember}
                  onAddi={() => setShowAddMember(!showAddMember)}
                />
              </>
            )}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
        </div>

        <div className="boxrigth box">
          <div
            style={{
              color: "black",
              fontFamily: "cursive",
              marginTop: "50%",
              fontWeight: "bold",
            }}
          >
            <h1>Mastermind Better.</h1>
            <h1>Succeed Better.</h1>
            <div style={{ fontSize: "18px" }}>
              <p>Guys Lets hang out,</p>
              <p>with my very first login page.</p>
              <p>You'll surely enjoy!!</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
