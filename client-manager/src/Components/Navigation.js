import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import SearchClient from './SearchClient';
import Home from './Home';
import AddClient from './AddClient';
import Statistics from './Statistics';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg" fixed="top">

                        <Navbar.Brand >My Client Manager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/searchClient"}>Search Client</Nav.Link>
                                <Nav.Link as={Link} to={"/addClient"}>Add Client</Nav.Link>
                                <Nav.Link as={Link} to={"/statistics"}>Statistics</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                </div>

                <div>
                    <Switch>
                        <Route path="/searchClient">
                            <SearchClient />
                        </Route>
                        <Route path="/addClient">
                            <AddClient />
                        </Route>
                        <Route path="/statistics">
                            <Statistics />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}