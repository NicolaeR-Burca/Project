import { useState, useEffect } from "react";
import Firebase from "./Firebase";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchClient2 from "./SearchClient2";
import Home from "./Home";
import AddClient from "./AddClient";
import Statistics from "./Statistics";

const Navigation = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const FetchClients = async () => {
      const db = Firebase.firestore();
      await db.collection("users").onSnapshot((snapshot) => {
        const newClients = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClients(newClients);
        setIsLoading(false);
      });
    };
    FetchClients();
  }, []);

  if (!isLoading) {
    console.log(clients);
  }

  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg" sticky="top">
          <Navbar.Brand>My Client Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/searchClient"}>
                Search Client
              </Nav.Link>
              <Nav.Link as={Link} to={"/addClient"}>
                Add Client
              </Nav.Link>
              <Nav.Link as={Link} to={"/statistics"}>
                Statistics
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        <Switch>
          <Route path="/searchClient">
            <SearchClient2 clients={clients} isLoading={isLoading} />
          </Route>
          <Route path="/addClient">
            <AddClient />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            <Home clients={clients} isLoading={isLoading} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Navigation;
