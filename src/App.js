import React, { Component } from "react";
import "openbridge-css/dist/css/openbridge.css";
import AzimuthDemo from "./AzimuthDemo";
import NavTopbar from "./components/Topbars/NavTopbar";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavTopbar />
        </div>
        <div>
          <AzimuthDemo />
        </div>
      </div>
    );
  }
}

export default App;
