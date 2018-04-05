import React, { Component } from "react";

import Home from "./components/Home";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <NavBar />
      </div>
    );
  }
}

export default App;
