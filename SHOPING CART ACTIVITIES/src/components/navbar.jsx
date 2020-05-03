import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light" style={{ width: "100%" }}>
        <span className="navbar-brand mb-0 h1">
          Shoping Items
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totleCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default Navbar;
