import React, { Component } from "react";
import Button from "./Button";
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "top",
    };
  }
  changePosition = (event) => {
    this.setState({ position: event.target.value });
    console.log(this.state.position);
  };
  render() {
    return (
      <div className="box">
        <h2>TOOLTIP!!</h2>
        <select onChange={this.changePosition}>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        <Button position={this.state.position} />
      </div>
    );
  }
}
export default Dropdown;
