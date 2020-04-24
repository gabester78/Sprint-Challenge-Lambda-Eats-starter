import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <div>
        <Link to="/">
          <h1>Lambda Pizza</h1>
        </Link>

        <Link to="/Pizza">Order Now!</Link>
      </div>
    </div>
  );
};

export default App;
