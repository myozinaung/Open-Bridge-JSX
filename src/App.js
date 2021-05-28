import React, { Component } from "react";
import AzimuthDemo from "./AzimuthDemo";
import NavbarComp from "./components/Navbars/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavbarComp />
          <AzimuthDemo />
        </div>
      </div>
    );
  }
}

export default App;
