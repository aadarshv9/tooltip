import React, { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  handleMouseIn() {
    this.setState({ hover: true });
  }
  handleMouseOut() {
    this.setState({ hover: false });
  }
  render() {
    const tooltipStyle = {
      display: this.state.hover ? "block" : "none",
    };
    const { position } = this.props;
    console.log(this.props);
    return (
      <div className="hoverButton">
        <button
          onMouseOver={this.handleMouseIn.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
        >
          Hover me
          <div className={"tooltip " + position} style={tooltipStyle}>
            Tooltip text!
          </div>
        </button>
      </div>
    );
  }
}
export default Button;
