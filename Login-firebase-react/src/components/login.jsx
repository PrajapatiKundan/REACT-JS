import React, { Component } from "react";
import fire from "../config";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then()
      .catch((err) => console.log("Login Fail!"));
  };

  signup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => console.log("signup"))
      .catch((err) => console.log("err"));
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form action="">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary m-2"
            onClick={this.login}
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-primary m-2"
            onClick={this.signup}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
