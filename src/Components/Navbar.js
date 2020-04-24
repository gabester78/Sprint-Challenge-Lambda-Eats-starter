import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pizza from "./Pizza";

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <h1>Lambda Eats</h1>
        <nav>
          <Link exact to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/Pizza">
            <h3>Order Now!</h3>
          </Link>
        </nav>
        <Switch>
          <Route path="/Pizza">
            <Pizza />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
