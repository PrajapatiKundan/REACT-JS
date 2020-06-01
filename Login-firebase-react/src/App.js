import React, { Component } from "react";
import fire from "./config";
import firebase from "firebase/app";
import "firebase/database";
import Login from "./components/login";
import Home from "./components/home";

class App extends Component {
  constructor(props) {
    super(props);

    this.database = firebase.database().ref().child("notes");
    this.state = {
      user: {},
    };
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  componentWillMount = () => {
    this.authListener();
  };

  render() {
    return (
      <div>
        {this.state.user ? <Home uid={this.state.user.uid} /> : <Login />}
      </div>
    );
  }
}
export default App;
