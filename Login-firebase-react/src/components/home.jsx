import React, { Component } from "react";
import fire from "../config";

class Home extends Component {
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <button className="btn btn-sm btn-warning m-2" onClick={this.logout}>
          Log out
        </button>
        <h1>WELCOME!</h1>
      </div>
    );
  }
}

export default Home;
