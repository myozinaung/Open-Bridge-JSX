import React, { Component } from "react";
import "openbridge-web-components";
import AzimuthDemo from "./AzimuthDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <AzimuthDemo />
        </div>
      </div>
    );
  }
}

export default App;
