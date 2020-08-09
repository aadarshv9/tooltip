import React, { Component } from "react";
import Dropdown from "./Dropdown";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="dropdownPosition">
          <Dropdown />
        </div>
      </div>
    );
  }
}
export default App;
