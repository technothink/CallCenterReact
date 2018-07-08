import Home from "./Containers/Home";
import "../src/css/style.css";
import React from "react";

import { Route } from "react-router-dom";
import LoginPage from "./Containers/Login";

class App extends React.Component {
  render() {
    return (
      <div className="body-wrapper">
        <Route path="" component={LoginPage} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
