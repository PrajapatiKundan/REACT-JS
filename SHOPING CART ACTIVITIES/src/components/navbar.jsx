import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light" style={{ width: "100%" }}>
        <span class="navbar-brand mb-0 h1">
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
